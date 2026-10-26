# Scripts

Sin dependencias propias: usan Node (20.9 o más, lo pide Next.js) y Playwright, que ya están instalados en el entorno de Claude Code en la nube. En local: `npm i -D playwright && npx playwright install chromium`.

| Script | Para qué | Uso |
|---|---|---|
| `fonts.js` | Descargar fuentes de Google Fonts para autoalojarlas (solo latin) y generar `src/app/fuentes.ts` con `next/font/local` | `node scripts/fonts.js sitios/<nombre> "Familia:wght@400;700"` |
| `capture.js` | `npm run build` + `next start` + capturas a 390, 768 y 1440px de cada ruta + avisos de build, rutas que no responden, scroll horizontal, h1 de más de 2 líneas, contraste AA y errores de consola | `node scripts/capture.js sitios/<nombre> --rutas=/,/contacto` (`--espera=4000` si la entrada animada dura más de 1,2 s) |
| `serve.js` | Servidor estático mínimo. Lo usa `capture.js` para páginas HTML sueltas (webs anteriores al cambio a Next.js) | `node scripts/serve.js <carpeta>` |

## Notas
- `fonts.js` usa la misma sintaxis que la URL de Google Fonts: `"Bodoni Moda:opsz,wght@6..96,500..800"`. Cada familia queda como variable CSS (`--font-bodoni-moda`) para usarla en `tokens.css`.
- Una fuente variable trae un solo archivo para todos sus pesos: `fonts.js` lo descarga una vez.
- `capture.js` necesita `npm install` hecho en el sitio. También acepta una URL (`http://localhost:3000`) si ya hay un servidor en marcha. Sale con código 1 si hay avisos o si falla el build. El contraste sobre imágenes o degradados no se mide: lo lista aparte para revisarlo a ojo.
- Mirar las capturas sigue siendo obligatorio: el script solo encuentra lo que se puede medir.
