// Verificación visual de una página: capturas + comprobaciones automáticas.
// Uso: node scripts/capture.js sitios/<nombre>/index.html [carpeta-salida]
// Salida por defecto: sitios/<nombre>/capturas/. Sale con código 1 si hay avisos.
// Comprueba a 390, 768 y 1440px: scroll horizontal, líneas del h1 (máx. 2),
// contraste de cada texto contra su fondo (WCAG AA) y errores de consola.
// No sustituye a mirar las capturas: el contraste sobre imágenes o degradados
// no se puede medir y se lista aparte para revisarlo a ojo.
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const { serve } = require('./serve');

const WIDTHS = [390, 768, 1440];

// Se ejecuta dentro de la página. Devuelve textos con contraste insuficiente
// y textos cuyo fondo no se puede medir (imagen o degradado).
function auditContrast() {
  const ctx = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
  // El canvas convierte cualquier color CSS (oklch, color-mix…) a sRGB.
  const toRgba = css => {
    ctx.clearRect(0, 0, 1, 1);
    ctx.fillStyle = '#000'; ctx.fillStyle = css;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
    return [r, g, b, a / 255];
  };
  const over = (top, bottom) => top.slice(0, 3).map((c, i) => c * top[3] + bottom[i] * (1 - top[3]));
  const lum = rgb => {
    const [r, g, b] = rgb.map(c => { c /= 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };
  const label = el => el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + (el.classList.length ? '.' + [...el.classList].join('.') : '');

  // Fondo efectivo: se apilan los fondos de los ancestros hasta uno opaco.
  const background = el => {
    const layers = [];
    for (let n = el; n; n = n.parentElement) {
      const cs = getComputedStyle(n);
      if (cs.backgroundImage !== 'none') return null;
      const c = toRgba(cs.backgroundColor);
      if (c[3] > 0) layers.push(c);
      if (c[3] === 1) break;
    }
    let rgb = [255, 255, 255];
    for (const l of layers.reverse()) rgb = over(l, rgb);
    return rgb;
  };

  const fails = [], unmeasured = [];
  for (const el of document.querySelectorAll('body *')) {
    const hasText = [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());
    if (!hasText) continue;
    const cs = getComputedStyle(el);
    const box = el.getBoundingClientRect();
    if (cs.visibility === 'hidden' || box.width === 0 || box.height === 0) continue;
    if (cs.clip === 'rect(0px, 0px, 0px, 0px)' || cs.clipPath === 'inset(50%)') continue;
    const text = el.textContent.trim().replace(/\s+/g, ' ').slice(0, 40);
    const bg = background(el);
    if (!bg) { unmeasured.push(`${label(el)} «${text}»`); continue; }
    const fg = over(toRgba(cs.color), bg);
    const size = parseFloat(cs.fontSize), weight = parseInt(cs.fontWeight, 10);
    const large = size >= 24 || (size >= 18.66 && weight >= 700);
    const min = large ? 3 : 4.5;
    const r = ratio(fg, bg);
    if (r < min) fails.push(`${label(el)} «${text}»: ${r.toFixed(2)}:1 (mínimo ${min}:1)`);
  }
  return { fails, unmeasured };
}

(async () => {
  const [file, outArg] = process.argv.slice(2);
  if (!file) { console.error('Uso: node scripts/capture.js sitios/<nombre>/index.html [carpeta-salida]'); process.exit(1); }
  const abs = path.resolve(file);
  const out = path.resolve(outArg || path.join(path.dirname(abs), 'capturas'));
  fs.mkdirSync(out, { recursive: true });

  const server = await serve(path.dirname(abs));
  const url = `http://localhost:${server.address().port}/${path.basename(abs)}`;
  const browser = await chromium.launch();
  const warnings = new Set(), unmeasured = new Set(), consoleErrors = [];

  for (const w of WIDTHS) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    page.on('console', m => m.type() === 'error' && consoleErrors.push(`${w}px: ${m.text()}`));
    page.on('pageerror', e => consoleErrors.push(`${w}px: ${e.message}`));
    page.on('requestfailed', r => consoleErrors.push(`${w}px: no carga ${r.url()}`));
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(1200); // deja terminar la entrada orquestada

    const extra = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    if (extra > 0) warnings.add(`${w}px: scroll horizontal de ${extra}px`);

    const h1 = await page.evaluate(() => {
      const h = document.querySelector('h1');
      if (!h) return null;
      const lh = parseFloat(getComputedStyle(h).lineHeight) || parseFloat(getComputedStyle(h).fontSize) * 1.2;
      return Math.round(h.getBoundingClientRect().height / lh);
    });
    if (h1 === null) warnings.add('La página no tiene h1');
    else if (h1 > 2) warnings.add(`${w}px: el h1 ocupa ${h1} líneas (máx. 2)`);

    const c = await page.evaluate(auditContrast);
    c.fails.forEach(f => warnings.add(`Contraste: ${f}`));
    c.unmeasured.forEach(u => unmeasured.add(u));

    const shot = path.join(out, `cap-${w}.png`);
    await page.screenshot({ path: shot, fullPage: true });
    console.log(`${w}px → ${path.relative(process.cwd(), shot)}`);
    await page.close();
  }
  await browser.close();
  server.close();

  consoleErrors.forEach(e => warnings.add(`Consola: ${e}`));
  console.log(warnings.size ? `\nAvisos (${warnings.size}):\n- ${[...warnings].join('\n- ')}` : '\nSin avisos.');
  if (unmeasured.size) console.log(`\nRevisar a ojo (fondo con imagen o degradado):\n- ${[...unmeasured].join('\n- ')}`);
  process.exit(warnings.size ? 1 : 0);
})();
