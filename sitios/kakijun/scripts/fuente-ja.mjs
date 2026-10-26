// Subconjunto japonés de Shippori Mincho: solo los caracteres que usa la web
// (kana y kanji del diccionario + los de la interfaz). Google Fonts lo recorta
// con el parámetro text=. Genera src/app/fonts/ShipporiMincho-ja.woff2.
// Uso, dentro del sitio: node scripts/fuente-ja.mjs (repetir al cambiar palabras.ts)
import fs from 'node:fs';

const INTERFAZ = '書き順朱墨ō';
const fuente = fs.readFileSync('src/datos/palabras.ts', 'utf8');
const usados = [...fuente.matchAll(/(?:ja|kana): '([^']+)'/g)].map(m => m[1]).join('') + INTERFAZ;
const texto = [...new Set(usados)].sort().join('');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
const css = await (await fetch(`https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500&text=${encodeURIComponent(texto)}`, { headers: { 'user-agent': UA } })).text();
const url = css.match(/url\((.+?)\)/)?.[1];
if (!url) throw new Error('Google Fonts no devolvió la fuente:\n' + css);
fs.writeFileSync('src/app/fonts/ShipporiMincho-ja.woff2', Buffer.from(await (await fetch(url)).arrayBuffer()));
console.log(`${texto.length} caracteres: ${texto}`);
