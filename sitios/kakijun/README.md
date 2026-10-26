# Kakijun (書き順) — web de prueba

Escribes una palabra en español y un pincel la traza en japonés, en el orden real de trazos. Cliente ficticio. Plan en `PLAN.md`.

- **Traducción:** diccionario cerrado de muestra (`src/datos/palabras.ts`, 24 palabras comprobadas en Jisho/JMdict el 26/10/2026). Para palabras libres haría falta un servicio de traducción (p. ej. una ruta de servidor que llame a una API) y un diccionario con lecturas (JMdict, CC BY-SA); la web dejaría de ser 100 % estática.
- **Trazos:** `node scripts/trazos.mjs` descarga de KanjiVG (CC BY-SA 3.0, Ulrich Apel) la línea central de cada trazo en `src/datos/trazos.json`. `src/lib/pincel.ts` la convierte en una pincelada (grosor según el tipo de final: parar, gancho, barrido). Los filtros SVG `#sumi` y `#nijimi` (en `page.tsx`) dan el borde áspero y la mancha.
- **Fuente japonesa:** `node scripts/fuente-ja.mjs` baja de Google Fonts solo los caracteres usados de Shippori Mincho (~16 KB). Repetir al cambiar palabras.
- **Verificar:** `node scripts/capture.js sitios/kakijun --espera=4000` (el trazado inicial dura unos 3 s).
