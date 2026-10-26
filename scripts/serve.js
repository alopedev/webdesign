// Servidor estático mínimo, sin dependencias.
// Uso: node scripts/serve.js sitios/<nombre> [puerto]
// Hace falta porque con file:// el navegador bloquea las fuentes autoalojadas (CORS).
const http = require('http');
const fs = require('fs');
const path = require('path');

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.ico': 'image/x-icon', '.mp4': 'video/mp4',
};

function serve(dir, port = 0) {
  const root = path.resolve(dir);
  const server = http.createServer((req, res) => {
    let rel = decodeURIComponent(req.url.split('?')[0]);
    if (rel.endsWith('/')) rel += 'index.html';
    const file = path.join(root, rel);
    if (!file.startsWith(root)) { res.writeHead(403); return res.end(); }
    fs.readFile(file, (err, data) => {
      if (err) { res.writeHead(404); return res.end('No encontrado'); }
      res.writeHead(200, { 'content-type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream' });
      res.end(data);
    });
  });
  return new Promise(resolve => server.listen(port, () => resolve(server)));
}

module.exports = { serve };

if (require.main === module) {
  const [dir = '.', port = 8080] = process.argv.slice(2);
  serve(dir, Number(port)).then(s => console.log(`Sirviendo ${path.resolve(dir)} en http://localhost:${s.address().port}/`));
}
