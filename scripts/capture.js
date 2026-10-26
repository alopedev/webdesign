// Verificación visual de una página: capturas + comprobaciones automáticas.
// Uso:
//   node scripts/capture.js sitios/<nombre> [--rutas=/,/contacto] [--salida=carpeta]
//     Sitio Next.js: ejecuta `npm run build` (incluye la comprobación de tipos),
//     arranca `next start` en un puerto libre y captura el resultado de producción.
//   node scripts/capture.js http://localhost:3000 [--rutas=…] [--salida=…]
//     Un servidor ya en marcha (npm run dev o npm start).
//   node scripts/capture.js sitios/<nombre>/index.html
//     Página HTML suelta (webs anteriores al cambio de stack).
// Salida por defecto: <sitio>/capturas/. Sale con código 1 si hay avisos o si falla el build.
// Comprueba a 390, 768 y 1440px: scroll horizontal, líneas del h1 (máx. 2),
// contraste de cada texto contra su fondo (WCAG AA) y errores de consola.
// No sustituye a mirar las capturas: el contraste sobre imágenes o degradados
// no se puede medir y se lista aparte para revisarlo a ojo.
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const { execSync, spawn } = require('child_process');
const net = require('net');
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

const freePort = () => new Promise(resolve => {
  const srv = net.createServer().listen(0, () => { const { port } = srv.address(); srv.close(() => resolve(port)); });
});

// Espera a que el servidor responda (máx. 30 s).
async function waitFor(url) {
  for (let i = 0; i < 60; i++) {
    try { await fetch(url); return; } catch { await new Promise(r => setTimeout(r, 500)); }
  }
  throw new Error(`El servidor no responde en ${url}`);
}

// Prepara qué se captura: devuelve la URL base, la carpeta de salida y cómo cerrar.
async function target(arg, outArg) {
  if (/^https?:\/\//.test(arg)) {
    return { base: arg.replace(/\/$/, ''), out: path.resolve(outArg || 'capturas'), close: () => {} };
  }
  const abs = path.resolve(arg);
  if (fs.statSync(abs).isDirectory()) {
    if (!fs.existsSync(path.join(abs, 'package.json'))) throw new Error(`${arg} no tiene package.json: ¿es un sitio Next.js?`);
    if (!fs.existsSync(path.join(abs, 'node_modules'))) throw new Error(`Falta instalar dependencias: cd ${arg} && npm install`);
    console.log('npm run build…');
    try { execSync('npm run build', { cwd: abs, stdio: 'pipe' }); }
    catch (e) { throw new Error(`El build falla (errores de tipos o de Next.js):\n${e.stdout}${e.stderr}`); }
    const port = await freePort();
    const server = spawn(path.join(abs, 'node_modules', '.bin', 'next'), ['start', '-p', String(port)], { cwd: abs, stdio: 'ignore' });
    const base = `http://localhost:${port}`;
    await waitFor(base);
    return { base, out: path.resolve(outArg || path.join(abs, 'capturas')), close: () => server.kill() };
  }
  const server = await serve(path.dirname(abs));
  return {
    base: `http://localhost:${server.address().port}`, file: '/' + path.basename(abs),
    out: path.resolve(outArg || path.join(path.dirname(abs), 'capturas')), close: () => server.close(),
  };
}

(async () => {
  const args = process.argv.slice(2);
  const opt = name => (args.find(a => a.startsWith(`--${name}=`)) || '').split('=')[1];
  const [arg, legacyOut] = args.filter(a => !a.startsWith('--'));
  if (!arg) { console.error('Uso: node scripts/capture.js sitios/<nombre> [--rutas=/,/contacto] [--salida=carpeta]'); process.exit(1); }
  let t;
  try { t = await target(arg, opt('salida') || legacyOut); }
  catch (e) { console.error(e.message); process.exit(1); }
  const routes = t.file ? [t.file] : (opt('rutas') || '/').split(',');
  fs.mkdirSync(t.out, { recursive: true });

  const browser = await chromium.launch();
  const warnings = new Set(), unmeasured = new Set(), consoleErrors = [];

  for (const route of routes) {
    // Prefijo de ruta en los avisos solo si hay más de una
    const where = w => (routes.length > 1 ? `${route} ` : '') + `${w}px`;
    const slug = t.file || route === '/' ? '' : route.replace(/^\/|\/$/g, '').replace(/\//g, '-') + '-';
    for (const w of WIDTHS) {
      const page = await browser.newPage({ viewport: { width: w, height: 900 } });
      page.on('console', m => m.type() === 'error' && consoleErrors.push(`${where(w)}: ${m.text()}`));
      page.on('pageerror', e => consoleErrors.push(`${where(w)}: ${e.message}`));
      page.on('requestfailed', r => consoleErrors.push(`${where(w)}: no carga ${r.url()}`));
      const res = await page.goto(t.base + route, { waitUntil: 'networkidle' });
      if (!res || !res.ok()) warnings.add(`${where(w)}: la página responde ${res ? res.status() : 'sin respuesta'}`);
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(1200); // deja terminar la entrada orquestada

      const extra = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
      if (extra > 0) warnings.add(`${where(w)}: scroll horizontal de ${extra}px`);

      const h1 = await page.evaluate(() => {
        const h = document.querySelector('h1');
        if (!h) return null;
        const lh = parseFloat(getComputedStyle(h).lineHeight) || parseFloat(getComputedStyle(h).fontSize) * 1.2;
        return Math.round(h.getBoundingClientRect().height / lh);
      });
      if (h1 === null) warnings.add(`${where(w)}: la página no tiene h1`);
      else if (h1 > 2) warnings.add(`${where(w)}: el h1 ocupa ${h1} líneas (máx. 2)`);

      const c = await page.evaluate(auditContrast);
      c.fails.forEach(f => warnings.add(`Contraste: ${f}`));
      c.unmeasured.forEach(u => unmeasured.add(u));

      const shot = path.join(t.out, `cap-${slug}${w}.png`);
      await page.screenshot({ path: shot, fullPage: true });
      console.log(`${w}px → ${path.relative(process.cwd(), shot)}`);
      await page.close();
    }
  }
  await browser.close();
  t.close();

  consoleErrors.forEach(e => warnings.add(`Consola: ${e}`));
  console.log(warnings.size ? `\nAvisos (${warnings.size}):\n- ${[...warnings].join('\n- ')}` : '\nSin avisos.');
  if (unmeasured.size) console.log(`\nRevisar a ojo (fondo con imagen o degradado):\n- ${[...unmeasured].join('\n- ')}`);
  process.exit(warnings.size ? 1 : 0);
})();
