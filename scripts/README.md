# Scripts

Sin dependencias propias: usan Node (18 o más) y Playwright, que ya están instalados en el entorno de Claude Code en la nube. En local: `npm i -D playwright && npx playwright install chromium`.

| Script | Para qué | Uso |
|---|---|---|
| `serve.js` | Previsualizar una web. Hace falta porque con `file://` el navegador bloquea las fuentes autoalojadas | `node scripts/serve.js sitios/<nombre>` |
| `fonts.js` | Descargar fuentes de Google Fonts para autoalojarlas (solo latin) y generar sus `@font-face` | `node scripts/fonts.js sitios/<nombre> "Familia:wght@400;700"` |
| `capture.js` | Capturas a 390, 768 y 1440px + avisos de scroll horizontal, h1 de más de 2 líneas, contraste AA y errores de consola | `node scripts/capture.js sitios/<nombre>/index.html` |

## Notas
- `fonts.js` usa la misma sintaxis que la URL de Google Fonts: `"Bodoni Moda:opsz,wght@6..96,500..800"`. Copia las reglas de `fonts/fonts.css` al `<style>` de la página.
- Una fuente variable trae un solo archivo para todos sus pesos: `fonts.js` lo descarga una vez.
- `capture.js` sale con código 1 si hay avisos. El contraste sobre imágenes o degradados no se mide: lo lista aparte para revisarlo a ojo.
- Mirar las capturas sigue siendo obligatorio: el script solo encuentra lo que se puede medir.
