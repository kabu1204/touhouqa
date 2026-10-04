/* Renders the film compositions with Remotion.
   node render.mjs still <Intro16|Intro9> <frame,frame,...>   -> out/<id>-<frame>.png
   node render.mjs media <Intro16|Intro9> <output file>       -> video (CODEC=h264 or vp9, CRF, CONC)
   BROWSER_EXECUTABLE selects a Chromium headless shell; without it Remotion downloads its own. */
import { bundle } from '@remotion/bundler';
import { renderMedia, renderStill, selectComposition } from '@remotion/renderer';
import fs from 'fs';
import path from 'path';

const [, , mode, id, arg] = process.argv;
if (!['still', 'media'].includes(mode) || !id || !arg) { console.error('usage: node render.mjs still|media <Intro16|Intro9> <frames|output>'); process.exit(1); }
const browserExecutable = process.env.BROWSER_EXECUTABLE || null;
const chromiumOptions = { gl: process.env.GL || 'swiftshader' };
const serveUrl = await bundle({ entryPoint: path.resolve('src/index.jsx'), publicDir: path.resolve('public') });
const composition = await selectComposition({ serveUrl, id, browserExecutable, chromiumOptions });
const t0 = Date.now();
if (mode === 'still') {
  fs.mkdirSync('out', { recursive: true });
  for (const fr of arg.split(',').map(Number)) await renderStill({ composition, serveUrl, frame: fr, output: path.resolve(`out/${id}-${fr}.png`), browserExecutable, chromiumOptions });
} else {
  await renderMedia({ composition, serveUrl, codec: process.env.CODEC || 'h264', outputLocation: path.resolve(arg), browserExecutable, chromiumOptions, crf: +(process.env.CRF || 23), ...(process.env.CODEC === 'vp9' ? {} : { x264Preset: 'slow' }), pixelFormat: 'yuv420p', concurrency: +(process.env.CONC || 2),
    onProgress: ({ progress }) => { if (Math.round(progress * 100) % 10 === 0) process.stdout.write(`\r${Math.round(progress * 100)}%`); } });
}
console.log('\n' + id, mode, 'done in', ((Date.now() - t0) / 1000).toFixed(0), 's');
