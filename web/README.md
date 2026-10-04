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

## Publish on GitHub Pages

The workflow `.github/workflows/pages.yml` publishes the pages to GitHub Pages on every push to `main` that changes `web/`. It can also be run by hand from the Actions tab ("Deploy web pages"). The published site holds only the files the pages load: `index.html`, `media/`, `sprites/`, `site/` and `world/bundle.js`.

One-time setup: in the repository settings, open **Pages** and set **Source** to **GitHub Actions**. The site is then served at `https://<owner>.github.io/<repository>/`; all paths in the pages are relative, so the sub-path needs no change.

## Layout

```
web/
├── index.html               Gate page
├── media/                   Opening film with its music (H.264/AAC MP4 and VP9/Opus WebM; 16:9 and 9:16), posters,
│                            and the map theme (music-map.m4a and music-map.webm)
├── sprites/                 Character sprites for the place cards and the map
├── world/
│   ├── bundle.js            Prebuilt script: three.js, postprocessing and the world modules (global `TQ`)
│   └── src/                 Source of the bundle
│       ├── entry.js         Bundle entry point
│       ├── world.js         The painted world: terrain, landmarks, trees, light, camera views
│       ├── post.js          Post-processing: Kuwahara paint filter, light shafts, bloom, grade, still-frame accumulation
│       └── danmaku.js       Danmaku ring bursts and sakura petals
├── music/
│   ├── compose.mjs          Composes and synthesizes the music (Node.js, no dependencies); see "Music"
│   └── build.sh             Encodes the map theme and muxes the film cue into the films in media/
├── film/                    Source project of the opening film (Remotion); see "Rebuild the film"
│   ├── src/                 Film compositions: Intro16 (1920×1080) and Intro9 (1080×1920), 450 frames at 30 fps
│   ├── public/art/          Character art used in the film's cut-ins
│   ├── plates/              Renders the 3D background plates from world/src/ in a headless browser
│   ├── render.mjs           Renders a still frame or a full video of one composition
│   └── make-media.sh        Encodes the MP4 and WebM files and the posters into media/
├── site/
│   ├── index.html           Homepage and leaderboard
│   └── assets/              Animated mascot images (Reimu, Marisa)
└── package.json             Build script for world/bundle.js
```

## Music

The gate page has an original score, composed and synthesized by `music/compose.mjs`. It uses no recorded or third-party audio.

| Piece | Length | Where it plays |
|-------|--------|----------------|
| Film cue | 15 s | The audio track of the opening film. Its hits fall on the film's events: the ofuda slap, the impact, Reimu's cut-in, Marisa's star trail and the seven place seals. |
| Map theme | 64 s, looped | On the map, after the film. It fades in as the film's cue ends and loops without a gap (Web Audio). |

**Sound button.** Sound is off by default. The speaker button in the top bar, and the one over the film, turn it on and off; the choice is saved in the browser. Browsers block sound until the visitor interacts with the page. When sound was turned on in an earlier visit and the browser blocks it, the film plays silently, the button shows "Tap for sound", and the first tap or key press turns sound on.

**Rebuild the music** (requires Node.js and ffmpeg):

```bash
cd web
npm run music
```

This writes `music/out/film.wav` and `music/out/map-loop.wav`, encodes the map theme into `media/music-map.m4a` (AAC) and `media/music-map.webm` (Opus), and replaces the audio track of the four films in `media/` (the video is copied, not re-encoded). The output is the same on every run. `film/make-media.sh` runs this step after it renders new films.

## Rebuild the 3D bundle

`world/bundle.js` is committed, so the pages work without a build step. After changing a file in `world/src/`, rebuild the bundle:

```bash
cd web
npm install
npm run build
```

The build uses three.js 0.186.1 and postprocessing 6.39.5. A rebuild from the committed sources gives a byte-identical `bundle.js`.

## Rebuild the film

`media/` holds the encoded films, so the gate page does not need this step. The film is made in two stages:

1. **Background plates.** The 3D world from `world/src/` is rendered frame by frame in headless Chromium (Playwright) and saved as JPEG images in `film/public/plates/`, together with the screen positions of the landmarks.
2. **Composite.** Remotion draws the 2D layers (titles, spell-card banners, character cut-ins, danmaku, petals) over the plates and renders the video.

Requirements: Node.js 20 or later, a Chromium build for Playwright, and ffmpeg (for `make-media.sh`).

```bash
cd web/film
npm install

# 1. Background plates (450 frames per format; slow without a GPU)
npm run plates:16x9
npm run plates:9x16

# 2. Check single frames (written to out/)
node render.mjs still Intro16 0,150,300
npm run studio               # optional: interactive preview in the browser

# 3. Render and encode both formats into ../media
./make-media.sh              # or: ./make-media.sh 16x9
```

Settings:

| Variable | Used by | Effect |
|----------|---------|--------|
| `BROWSER_EXECUTABLE` | `render.mjs` | Path of the Chromium or headless-shell binary for Remotion. If unset, Remotion downloads its own. |
| `GL` | `render.mjs` | OpenGL backend for Remotion (default `swiftshader`). |
| `SS` | `plates/render-plates.mjs` | Supersampling factor of the plates (default 1.25). |
| `FROM`, `N`, `STEP` | `plates/render-plates.mjs` | Render only part of the frames, for example `FROM=300 N=10`. |

**Note.** The published films in `media/` were rendered from an earlier revision of `world/src/world.js`. A new render shows the current world, including the redesigned Hakugyokurou, so the last frame of the film then matches the live map more closely.

`film/public/plates/`, `film/out/` and `film/node_modules/` are generated and are not committed.

## Credits

Touhou Project © Team Shanghai Alice. Character sprites on the gate page and character art in the film: Dairi. Music: original score, generated by `music/compose.mjs`. TouhouQA is a fan project and is not affiliated with Team Shanghai Alice. Question content comes from THBWiki.
