/* Renders the painted 3D plates of the film: one JPEG per frame, plus the screen positions of the landmarks
   (anchors), which the 2D layers in src/Intro.jsx follow. Output: public/plates/<16x9|9x16>/NNNN.jpg and
   public/plates/anchors-<tag>.json.

   Environment: SIZE (1920x1080 or 1080x1920), SS (supersampling, default 1.25), KW (Kuwahara radius, default 3),
   FROM, N, STEP (frame range, default all 450 frames). */
import { chromium } from 'playwright';
import fs from 'fs';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../..');                 // web/: serves /world/src and /film/node_modules
const types = { '.js': 'text/javascript', '.html': 'text/html' };
const [w, h] = (process.env.SIZE || '1920x1080').split('x').map(Number);
const FPS = 30, N = +(process.env.N || 450), FROM = +(process.env.FROM || 0), STEP = +(process.env.STEP || 1);
const tag = w > h ? '16x9' : '9x16', outDir = path.resolve(HERE, '../public/plates', tag);

fs.mkdirSync(outDir, { recursive: true });
const port = 8800 + (w > h ? 0 : 1);
const srv = http.createServer((q, r) => {
  const f = path.join(ROOT, decodeURIComponent(q.url.split('?')[0]));
  fs.readFile(f, (e, d) => { if (e) { r.statusCode = 404; return r.end(); } r.setHeader('Content-Type', types[path.extname(f)] || 'application/octet-stream'); r.end(d); });
}).listen(port);
/* SwiftShader gives the same image on every machine; remove these flags to render on the GPU. */
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: w, height: h } });
const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text().slice(0, 300)); });
await p.goto(`http://localhost:${port}/film/plates/plates.html?w=${w}&h=${h}&ss=${process.env.SS || 1.25}&kw=${process.env.KW ?? 3}`);
await p.waitForFunction(() => window.__ready, null, { timeout: 180000 });
const anchorsFile = path.resolve(HERE, '../public/plates', `anchors-${tag}.json`);
const anchors = fs.existsSync(anchorsFile) ? JSON.parse(fs.readFileSync(anchorsFile, 'utf8')) : {};
const t0 = Date.now();
for (let f = FROM; f < N; f += STEP) {
  await p.evaluate(t => __w.film(t), f / FPS);
  anchors[f] = await p.evaluate(() => __w.anchors());
  await p.screenshot({ path: path.join(outDir, String(f).padStart(4, '0') + '.jpg'), type: 'jpeg', quality: 95 });
  if (f % 30 === 0) { console.log(tag, 'frame', f, ((Date.now() - t0) / 1000).toFixed(0) + 's'); fs.writeFileSync(anchorsFile, JSON.stringify(anchors)); }
}
fs.writeFileSync(anchorsFile, JSON.stringify(anchors));
console.log(tag, 'done', ((Date.now() - t0) / 1000).toFixed(0) + 's', errs.slice(0, 5));
await b.close(); srv.close();
