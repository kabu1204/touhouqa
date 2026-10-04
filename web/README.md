# TouhouQA web pages

Static pages for TouhouQA. They need no build step and no server-side code.

| Page | File | Description |
|------|------|-------------|
| Gate | `index.html` | A short painted film that cross-fades into a live 3D map of Gensokyo. Each landmark opens a spell card that leads to a part of the site. |
| Homepage and leaderboard | `site/index.html` | The benchmark homepage (`#home`) and the leaderboard (`#leaderboard`), in a comic style. |

**Demo data.** The leaderboard rows, model names, scores and checksums are sample data, and banners on the pages say so. Replace them with real results before publishing the site.

## View locally

Browsers do not load the video and scripts from `file://` URLs reliably, so serve the folder over HTTP:

```bash
cd web
python3 -m http.server 8000
# open http://localhost:8000/
```

The gate page needs WebGL 2 for the 3D map. Without it, or if the map fails to start, the page shows a plain list of the places, with the error message at the bottom. With reduced motion turned on in the system settings, the film is skipped.

## Layout

```
web/
├── index.html               Gate page
├── media/                   Opening film (H.264 MP4 and VP9 WebM; 16:9 and 9:16) and posters
├── sprites/                 Character sprites for the place cards and the map
├── world/
│   ├── bundle.js            Prebuilt script: three.js, postprocessing and the world modules (global `TQ`)
│   └── src/                 Source of the bundle
│       ├── entry.js         Bundle entry point
│       ├── world.js         The painted world: terrain, landmarks, trees, light, camera views
│       ├── post.js          Post-processing: Kuwahara paint filter, light shafts, bloom, grade, still-frame accumulation
│       └── danmaku.js       Danmaku ring bursts and sakura petals
├── site/
│   ├── index.html           Homepage and leaderboard
│   └── assets/              Animated mascot images (Reimu, Marisa)
└── package.json             Build script for world/bundle.js
```

## Rebuild the 3D bundle

`world/bundle.js` is committed, so the pages work without a build step. After changing a file in `world/src/`, rebuild the bundle:

```bash
cd web
npm install
npm run build
```

The build uses three.js 0.186.1 and postprocessing 6.39.5. A rebuild from the committed sources gives a byte-identical `bundle.js`.

## Credits

Touhou Project © Team Shanghai Alice. Character sprites on the gate page: Dairi. TouhouQA is a fan project and is not affiliated with Team Shanghai Alice. Question content comes from THBWiki.
