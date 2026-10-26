// Descarga de KanjiVG (CC BY-SA 3.0, Ulrich Apel) el orden y la forma de los trazos
// de cada carácter del diccionario y los guarda en src/datos/trazos.json.
// Uso, dentro del sitio: node scripts/trazos.mjs
import fs from 'node:fs';

const fuente = fs.readFileSync('src/datos/palabras.ts', 'utf8');
const chars = [...new Set([...fuente.matchAll(/ja: '([^']+)'/g)].flatMap(m => [...m[1]]))];
const datos = {};
for (const c of chars) {
  const hex = c.codePointAt(0).toString(16).padStart(5, '0');
  const res = await fetch(`https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${hex}.svg`);
  if (!res.ok) throw new Error(`KanjiVG no tiene ${c} (${hex}): ${res.status}`);
  const svg = await res.text();
  const trazos = [...svg.matchAll(/<path id="kvg:\w+-s(\d+)"([^>]*?)d="([^"]+)"/g)]
    .map(m => ({ n: +m[1], tipo: (m[2].match(/kvg:type="([^"]*)"/) || [])[1] || '', d: m[3] }))
    .sort((a, b) => a.n - b.n)
    .map(({ tipo, d }) => ({ tipo, d }));
  const numeros = [...svg.matchAll(/matrix\(1 0 0 1 ([\d.]+) ([\d.]+)\)">(\d+)</g)].map(m => [+m[1], +m[2]]);
  datos[c] = { trazos, numeros };
  console.log(c, trazos.length, 'trazos');
}
fs.writeFileSync('src/datos/trazos.json', JSON.stringify(datos));
console.log(`${chars.length} caracteres en src/datos/trazos.json`);
