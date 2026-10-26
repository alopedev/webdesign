// Descarga fuentes de Google Fonts para autoalojarlas (solo el subconjunto latin).
// Uso: node scripts/fonts.js sitios/<nombre> "Bodoni Moda:opsz,wght@6..96,500..800" "Atkinson Hyperlegible:wght@400;700"
// La especificación de cada familia es la misma que usa la URL de css2 de Google Fonts.
// En un sitio Next.js (tiene package.json) escribe los WOFF2 en <sitio>/src/app/fonts/
// y genera <sitio>/src/app/fuentes.ts con next/font/local: precarga y fuente de respaldo
// ajustada. Cada familia expone la variable CSS --font-<familia> para usarla en tokens.css.
// En una página HTML suelta, escribe en <sitio>/fonts/ y las reglas en <sitio>/fonts/fonts.css.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

(async () => {
  const [site, ...families] = process.argv.slice(2);
  if (!site || !families.length) {
    console.error('Uso: node scripts/fonts.js sitios/<nombre> "Familia:ejes@valores" […]');
    process.exit(1);
  }
  const next = fs.existsSync(path.join(site, 'package.json'));
  const outDir = next ? path.join(site, 'src', 'app', 'fonts') : path.join(site, 'fonts');
  fs.mkdirSync(outDir, { recursive: true });
  const query = families.map(f => 'family=' + encodeURIComponent(f).replace(/%20/g, '+')).join('&');
  const res = await fetch(`https://fonts.googleapis.com/css2?${query}&display=swap`, { headers: { 'user-agent': UA } });
  if (!res.ok) { console.error(`Google Fonts respondió ${res.status}. Revisa el nombre y los ejes de cada familia.`); process.exit(1); }
  const css = await res.text();

  // Cada bloque va precedido de un comentario con el subconjunto: /* latin */
  const blocks = css.split('/* ').filter(b => b.startsWith('latin */'));
  const files = new Map(); // url → nombre de archivo (las variables comparten archivo entre pesos)
  let out = '';
  const byFamily = new Map(); // familia → [{ path, weight, style }] para next/font/local
  for (const b of blocks) {
    const family = b.match(/font-family: '([^']+)'/)[1];
    const style = b.match(/font-style: (\w+)/)[1];
    const weight = b.match(/font-weight: ([^;]+)/)[1];
    const url = b.match(/url\((.+?)\)/)[1];
    if (!files.has(url)) {
      const hash = crypto.createHash('sha1').update(url).digest('hex').slice(0, 6);
      files.set(url, `${family.replace(/\s+/g, '')}-${style}-${hash}.woff2`);
    }
    const name = files.get(url);
    out += `@font-face{font-family:"${family}";font-style:${style};font-weight:${weight};font-display:swap;src:url(fonts/${name}) format("woff2")}\n`;
    if (!byFamily.has(family)) byFamily.set(family, []);
    byFamily.get(family).push({ path: `./fonts/${name}`, weight, style });
  }
  for (const [url, name] of files) {
    const r = await fetch(url);
    fs.writeFileSync(path.join(outDir, name), Buffer.from(await r.arrayBuffer()));
    console.log(path.join(outDir, name));
  }
  if (next) {
    const slug = f => f.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const ident = f => slug(f).replace(/-(\w)/g, (_, c) => c.toUpperCase());
    let ts = "// Generado por scripts/fonts.js. Variables CSS: " + [...byFamily.keys()].map(f => `--font-${slug(f)}`).join(', ') + "\nimport localFont from 'next/font/local';\n\n";
    for (const [family, src] of byFamily) {
      // Un archivo variable repetido para varios pesos se declara una vez con el rango.
      const merged = new Map();
      for (const f of src) {
        const k = f.path + f.style;
        const ws = f.weight.split(' ').map(Number);
        const m = merged.get(k);
        if (m) m.ws.push(...ws); else merged.set(k, { ...f, ws });
      }
      const entries = [...merged.values()].map(f => {
        const [lo, hi] = [Math.min(...f.ws), Math.max(...f.ws)];
        return `    { path: '${f.path}', weight: '${lo === hi ? lo : `${lo} ${hi}`}', style: '${f.style}' },`;
      });
      ts += `const ${ident(family)} = localFont({\n  src: [\n${entries.join('\n')}\n  ],\n  variable: '--font-${slug(family)}',\n  display: 'swap',\n});\n\n`;
    }
    ts += `export const fuentes = [${[...byFamily.keys()].map(f => ident(f) + '.variable').join(', ')}].join(' ');\n`;
    const tsFile = path.join(site, 'src', 'app', 'fuentes.ts');
    fs.writeFileSync(tsFile, ts);
    console.log(`\n${byFamily.size} familias en ${tsFile}. Úsalas en tokens.css: ${[...byFamily.keys()].map(f => `var(--font-${slug(f)})`).join(', ')}`);
  } else {
    fs.writeFileSync(path.join(outDir, 'fonts.css'), out);
    console.log(`\n${blocks.length} reglas @font-face en ${path.join(outDir, 'fonts.css')}`);
  }
  console.log('Licencia: Google Fonts publica con licencias libres (OFL, Apache o UFL). Confírmala en la ficha de cada familia.');
})();
