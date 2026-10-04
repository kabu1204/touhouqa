/* TouhouQA painted Gensokyo: the shared world module.
   One deterministic scene used by the film plate renderer and by the live map. */
import * as THREE from 'three';

/* ================= math, random and noise ================= */
export const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
export const lerp = (a, b, t) => a + (b - a) * t;
export const sm = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
export const ease3 = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
export const easeOut = t => 1 - Math.pow(1 - t, 3);
let seed = 20261004;
const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const perm = new Uint8Array(512);
{ const p = Array.from({ length: 256 }, (_, i) => i); let s = 1337; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
  for (let i = 255; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255]; }
const GR = [[1, 1], [-1, 1], [1, -1], [-1, -1], [1, 0], [-1, 0], [0, 1], [0, -1]];
function snoise(x, y) {
  const F2 = 0.3660254, G2 = 0.2113249, s = (x + y) * F2, i = Math.floor(x + s), j = Math.floor(y + s), t = (i + j) * G2;
  const x0 = x - (i - t), y0 = y - (j - t), i1 = x0 > y0 ? 1 : 0, j1 = 1 - i1;
  const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2, x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2, ii = i & 255, jj = j & 255;
  let n = 0, t0 = .5 - x0 * x0 - y0 * y0, t1 = .5 - x1 * x1 - y1 * y1, t2 = .5 - x2 * x2 - y2 * y2;
  if (t0 > 0) { const g = GR[perm[ii + perm[jj]] & 7]; t0 *= t0; n += t0 * t0 * (g[0] * x0 + g[1] * y0); }
  if (t1 > 0) { const g = GR[perm[ii + i1 + perm[jj + j1]] & 7]; t1 *= t1; n += t1 * t1 * (g[0] * x1 + g[1] * y1); }
  if (t2 > 0) { const g = GR[perm[ii + 1 + perm[jj + 1]] & 7]; t2 *= t2; n += t2 * t2 * (g[0] * x2 + g[1] * y2); }
  return 70 * n;
}
function fbm(x, y, o = 5) { let a = 0, f = 1, amp = .5, sum = 0; for (let i = 0; i < o; i++) { a += amp * snoise(x * f, y * f); sum += amp; f *= 2.03; amp *= .5; } return a / sum; }
function ridged(x, y, o = 4) { let a = 0, f = 1, amp = .5, sum = 0; for (let i = 0; i < o; i++) { a += amp * (1 - Math.abs(snoise(x * f + 11.3, y * f - 7.1))); sum += amp; f *= 2.1; amp *= .5; } return a / sum; }
const smax = (a, b, k) => { const d = a - b; return .5 * (a + b + Math.sqrt(d * d + k * k)); };

/* ================= world layout ================= */
export const SUMMIT = { x: 424, z: 0, h: 140, r: 30 };
export const TORII_X = 446;
const LAKE = { x: -230, z: -50, r: 90, level: 2.5 };
const YM = { x: -200, z: -470 };
const PADS = [
  { x: 90, z: 140, r: 66 },      // Human Village
  { x: -70, z: 300, r: 30 },     // Eientei
  { x: -320, z: -115, r: 32 },   // Scarlet Devil Mansion
  { x: 215, z: -55, r: 14 },     // Kourindou
  { x: -100, z: -252, r: 10 },   // kappa workshop in Genbu Ravine
];
const RIVER = [[-108, -350, 96, 3, 8], [-114, -326, 44, 4, 10], [-126, -290, 36, 5, 14], [-140, -250, 28, 6, 18],
  [-162, -200, 18, 7, 22], [-186, -158, 9, 8, 24], [-208, -122, 3.2, 9, 24], [-222, -96, 2.5, 10, 24]];
const HAKUG = new THREE.Vector3(-400, 236, 262);

function hakureiH(x, z) {
  const crest = 72 + 68 * Math.exp(-((z / 150) ** 2));
  const dx = x - 430;
  const k = dx < 0 ? Math.exp(-Math.pow(-dx / 150, 1.6)) : Math.exp(-Math.pow(dx / 150, 1.8));
  return crest * k;
}
function natH(x, z) {
  let h = 9 + 13 * fbm(x / 430 + 3.1, z / 430 - 1.7, 4) + 4 * fbm(x / 110, z / 110, 3);
  const r = Math.hypot(x, z * 1.05);
  if (r > 470 && x < 420) h += sm(470, 900, r) * 170 * (.65 + .35 * fbm(x / 240, z / 240, 3)) * (1 - sm(250, 420, x));
  const dy = Math.hypot(x - YM.x, z - YM.z);
  if (dy < 900) h += 272 * Math.exp(-Math.pow(dy / 175, 1.7)) * (.8 + .32 * ridged(x / 90, z / 90, 4));
  let hk = hakureiH(x, z);
  if (hk > 4) hk += (x > 380 ? 8 : 4) * (ridged(x / 38, z / 38, 3) - .5) * sm(4, 40, hk);
  h = smax(h, hk, 18);
  const dS = Math.hypot(x - SUMMIT.x, z - SUMMIT.z);
  if (dS < 64) h = lerp(SUMMIT.h, h, sm(SUMMIT.r, SUMMIT.r + 16, dS));
  const dl = Math.hypot(x - LAKE.x, z - LAKE.z);
  if (dl < LAKE.r + 80) { const dn = dl + 18 * fbm(x / 80, z / 80, 2); h = lerp(-5, h, sm(LAKE.r - 15, LAKE.r + 35, dn)); }
  return h;
}
for (const p of PADS) p.h = natH(p.x, p.z);

const riverCurve = new THREE.CatmullRomCurve3(RIVER.map(r => new THREE.Vector3(r[0], 0, r[1])), false, 'centripetal');
const RIV = [];
{ const N = 160; for (let i = 0; i <= N; i++) { const u = i / N, p = riverCurve.getPointAt(u); const f = u * (RIVER.length - 1), k = Math.min(RIVER.length - 2, Math.floor(f)), w = f - k;
  RIV.push({ x: p.x, z: p.z, y: lerp(RIVER[k][2], RIVER[k + 1][2], w), hw: lerp(RIVER[k][3], RIVER[k + 1][3], w), ww: lerp(RIVER[k][4], RIVER[k + 1][4], w) }); } }
function nearest(list, x, z) { let best = 1e9, bi = 0; for (let i = 0; i < list.length; i++) { const dx = list[i].x - x, dz = list[i].z - z, d = dx * dx + dz * dz; if (d < best) { best = d; bi = i; } } return [Math.sqrt(best), bi]; }
const inRiverBox = (x, z) => x > -270 && x < -50 && z > -390 && z < -60;
function preTrailH(x, z) {
  let h = natH(x, z);
  for (const p of PADS) { const d = Math.hypot(x - p.x, z - p.z); if (d < p.r + 30) h = lerp(p.h, h, sm(p.r, p.r + 28, d)); }
  if (inRiverBox(x, z)) { const [d, i] = nearest(RIV, x, z), r = RIV[i]; if (d < r.hw + r.ww) h = lerp(r.y - 2.2, h, sm(r.hw, r.hw + r.ww, d)); }
  return h;
}

/* the climb trail on the outer face of the Hakurei mountain */
const CLIMB = [[672, 48], [640, 28], [610, -6], [588, -46], [566, -70], [546, -60], [538, -26], [533, 16], [524, 50], [508, 62], [496, 44], [493, 18], [488, 2], [470, 0], [444, 0], [424, 0]];
const climbCurve = new THREE.CatmullRomCurve3(CLIMB.map(c => new THREE.Vector3(c[0], 0, c[1])), false, 'centripetal', .5);
const TR = [];
{ const N = 700, pts = climbCurve.getSpacedPoints(N);
  for (const p of pts) TR.push({ x: p.x, z: p.z, y: preTrailH(p.x, p.z) });
  for (let pass = 0; pass < 4; pass++) { const c = TR.map(t => t.y); for (let i = 0; i < TR.length; i++) { let s = 0, n = 0; for (let k = -8; k <= 8; k++) { s += c[clamp(i + k, 0, TR.length - 1)]; n++; } TR[i].y = s / n; } }
  const i490 = TR.findIndex(t => t.x <= 490), y0 = TR[i490].y;
  for (let i = i490; i < TR.length; i++) { const t = TR[i]; t.y = t.x > 450 ? lerp(y0, SUMMIT.h, (490 - t.x) / (490 - 450)) : SUMMIT.h; }
  for (let i = 1; i < TR.length; i++) TR[i].y = Math.max(TR[i].y, TR[i - 1].y);
  let acc = 0; TR[0].s = 0; for (let i = 1; i < TR.length; i++) { acc += Math.hypot(TR[i].x - TR[i - 1].x, TR[i].z - TR[i - 1].z); TR[i].s = acc; }
}
const TR_LEN = TR[TR.length - 1].s;
const S_TORII = TR[TR.findIndex(t => t.x <= TORII_X)].s;
function trailAt(s, out = new THREE.Vector3()) { s = clamp(s, 0, TR_LEN); let lo = 0, hi = TR.length - 1; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (TR[m].s < s) lo = m; else hi = m; } const a = TR[lo], b = TR[hi], w = (s - a.s) / Math.max(1e-6, b.s - a.s); return out.set(lerp(a.x, b.x, w), lerp(a.y, b.y, w), lerp(a.z, b.z, w)); }
function trailInfo(x, z) { if (x < 400 || x > 700 || z < -110 || z > 100) return [1e9, 0]; const [d, i] = nearest(TR, x, z); return [d, TR[i].y]; }
let lastTD = 1e9;
function H(x, z) {
  let h = preTrailH(x, z);
  const [d, ty] = trailInfo(x, z); lastTD = d;
  if (d < 12) h = lerp(ty - .35, h, sm(3.6, 11, d));
  return h;
}

/* ================= GLSL shared code ================= */
const NOISE = `
float h21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1,0)), f.x), mix(h21(i + vec2(0,1)), h21(i + vec2(1,1)), f.x), f.y); }
float fbm2(vec2 p){ return vn(p) * .5 + vn(p * 2.07 + 1.3) * .28 + vn(p * 4.13 - 2.1) * .14 + vn(p * 8.3 + .7) * .08; }
`;

/* Shared lighting uniforms: every painted material reads these objects, so one update changes the whole world. */
export const LIGHT = {
  uSunDir: { value: new THREE.Vector3(0, 1, 0) },
  uSunCol: { value: new THREE.Color('#fff4e2') },
  uShadeCol: { value: new THREE.Color('#7f8fc4') },
  uSkyCol: { value: new THREE.Color('#bfe0ff') },
  uGroundCol: { value: new THREE.Color('#c9b48a') },
  uFogCol: { value: new THREE.Color('#cfe4f4') },
  uFogSun: { value: new THREE.Color('#ffe9cc') },
  uFogDen: { value: 0.0011 },
  uTime: { value: 0 },
  uDetail: { value: 1 },
  uLod: { value: new THREE.Vector2(1e6, 2e6) },   // live map only: leaf cards fade into impostors between these distances
  uFrame: { value: 0 },
};

const TOON_V = `
varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vAw;
attribute float aw;
uniform float uTime; uniform vec2 uLod;
#include <common>
#include <color_pars_vertex>
#include <shadowmap_pars_vertex>
void main(){
  vUv = uv; vAw = aw;
  #include <color_vertex>
  #include <beginnormal_vertex>
  #include <defaultnormal_vertex>
  #include <begin_vertex>
  #ifdef SWAY
    { vec4 ip = vec4(0.0, 0.0, 0.0, 1.0);
      #ifdef USE_INSTANCING
        ip = instanceMatrix * ip;
      #endif
      float k = max(transformed.y - 2.0, 0.0) * 0.012;
      transformed.x += sin(uTime * 1.3 + ip.x * 0.05 + ip.z * 0.03) * k;
      transformed.z += cos(uTime * 1.1 + ip.z * 0.05) * k * 0.7; }
  #endif
  #include <project_vertex>
  #include <worldpos_vertex>
  #include <shadowmap_vertex>
  vec4 wp = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    wp = instanceMatrix * wp;
  #endif
  wp = modelMatrix * wp; vW = wp.xyz;
  vN = normalize(inverseTransformDirection(transformedNormal, viewMatrix));
  #if defined(LODFADE) && defined(USE_INSTANCING)
    /* cards of trees beyond the fade band are drawn as impostors: move them outside the clip volume */
    if (length((modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz - cameraPosition) > uLod.y + 14.0) gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
  #endif
}`;

function toonFrag(colorCode = '', opts = {}) {
  return `
uniform vec3 uColor; uniform float uOpacity; uniform sampler2D uMap; uniform float uAlphaTest; uniform float uRim; uniform float uSelfLit; uniform float uWrap;
uniform vec3 uSunDir, uSunCol, uShadeCol, uSkyCol, uGroundCol, uFogCol, uFogSun; uniform float uFogDen, uTime, uDetail, uFrame; uniform vec2 uLod;
varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vAw;
#ifdef IMPOSTOR
  uniform vec3 uTint;
#endif
#include <common>
#include <packing>
#include <color_pars_fragment>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
${NOISE}
void main(){
  vec4 base = vec4(uColor, uOpacity);
  vec3 nImp = vec3(0.0, 0.0, 1.0);
  #ifdef USE_MAPTEX
    vec4 tx = texture2D(uMap, vUv);
    #ifdef IMPOSTOR
      nImp = normalize(tx.rgb * 2.0 - 1.0); base.a *= tx.a;
    #else
      base *= tx;
    #endif
    #ifdef A2C
      float aw = max(fwidth(base.a), 1e-4);
      base.a = smoothstep(uAlphaTest - aw, uAlphaTest + aw, base.a);
      if (base.a < 0.02) discard;
    #else
      if (base.a < uAlphaTest) discard;
    #endif
  #endif
  #ifdef LODFADE
    { float fd = smoothstep(uLod.x, uLod.y, length(vW - cameraPosition));
      float dth = fract(sin(dot(gl_FragCoord.xy + uFrame * vec2(17.0, 31.0), vec2(12.9898, 78.233))) * 43758.5453);
      #ifdef IMPOSTOR
        if (dth >= fd) discard;
      #else
        if (dth < fd) discard;
      #endif
    }
  #endif
  #ifdef USE_COLOR
    base.rgb *= vColor.rgb;
  #endif
  vec3 N = normalize(vN);
  #ifdef IMPOSTOR
    N = normalize(inverseTransformDirection(nImp, viewMatrix));
    base.rgb *= uTint * mix(0.7, 1.0, smoothstep(-0.5, 0.6, nImp.y));   // leaf texture shade and the crown's own occlusion
  #endif
  #ifdef DOUBLE
    if (!gl_FrontFacing) N = -N;
  #endif
  ${colorCode}
  float sh = 1.0;
  #ifdef USE_SHADOWMAP
    sh = getShadowMask();
  #endif
  float ndl = dot(N, uSunDir);
  float wrapNdl = (ndl + uWrap) / (1.0 + uWrap);
  float lit = smoothstep(0.0, 0.09, wrapNdl) * sh;
  float hi = smoothstep(0.62, 0.8, ndl) * sh;
  vec3 col = mix(base.rgb * uShadeCol, base.rgb * uSunCol, lit);
  col += base.rgb * uSunCol * hi * 0.10;
  col += base.rgb * mix(uGroundCol, uSkyCol, N.y * 0.5 + 0.5) * 0.16;
  vec3 V = normalize(cameraPosition - vW);
  float rim = pow(1.0 - max(dot(N, V), 0.0), 3.0) * uRim;
  col += rim * mix(uSkyCol, uSunCol, lit) * 0.45;
  col = mix(col, base.rgb, uSelfLit);
  float d = length(vW - cameraPosition);
  float f = (1.0 - exp(-d * uFogDen)) * mix(1.0, 0.55, smoothstep(40.0, 320.0, vW.y));
  vec3 fd = normalize(vW - cameraPosition);
  vec3 fc = mix(uFogCol, uFogSun, pow(max(dot(fd, uSunDir), 0.0), 6.0));
  col = mix(col, fc, clamp(f, 0.0, 1.0));
  gl_FragColor = vec4(col, base.a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;
}

/* create a painted (toon ramp) material */
export function paint(color = '#ffffff', o = {}) {
  const uniforms = THREE.UniformsUtils.merge([THREE.UniformsLib.lights, {
    uColor: { value: new THREE.Color(color) }, uOpacity: { value: o.opacity ?? 1 }, uMap: { value: o.map || null }, uAlphaTest: { value: o.alphaTest ?? .5 },
    uRim: { value: o.rim ?? .25 }, uSelfLit: { value: o.selfLit ?? 0 }, uWrap: { value: o.wrap ?? 0 } }]);
  Object.assign(uniforms, LIGHT);
  uniforms.uMap.value = o.map || null;
  const defines = {};
  if (o.map) defines.USE_MAPTEX = '';
  if (o.side === THREE.DoubleSide) defines.DOUBLE = '';
  if (o.sway) defines.SWAY = '';
  const m = new THREE.ShaderMaterial({ uniforms, defines, lights: true, vertexShader: TOON_V, fragmentShader: toonFrag(o.code || ''),
    vertexColors: !!o.vertexColors, side: o.side ?? THREE.FrontSide, transparent: !!o.transparent, depthWrite: o.depthWrite ?? true });
  m.isPaint = true;
  return m;
}
/* live view with multisampling: turn the hard alpha cut of textured cards into alpha-to-coverage edges */
export function smoothCards(scene) {
  scene.traverse(o => { const m = o.material; if (m && m.isPaint && m.defines && 'USE_MAPTEX' in m.defines && !m.transparent) { m.defines.A2C = ''; m.alphaToCoverage = true; m.needsUpdate = true; } });
}
/* depth material that respects alpha-tested leaf cards for shadow casting */
function cardDepth(map) { return new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map, alphaTest: .5 }); }

/* inverted-hull ink outline */
const INK = new THREE.ShaderMaterial({ side: THREE.BackSide, uniforms: { uW: { value: .06 }, uInk: { value: new THREE.Color('#3a2a2c') }, ...{ uFogCol: LIGHT.uFogCol, uFogDen: LIGHT.uFogDen } },
  vertexShader: `uniform float uW; varying float vD;
    #include <common>
    void main(){ vec3 p = position + normal * uW; vec4 mv = modelViewMatrix * vec4(p, 1.0);
      #ifdef USE_INSTANCING
        mv = modelViewMatrix * instanceMatrix * vec4(p, 1.0);
      #endif
      vD = -mv.z; gl_Position = projectionMatrix * mv; }`,
  fragmentShader: `uniform vec3 uInk, uFogCol; uniform float uFogDen; varying float vD;
    void main(){ float f = 1.0 - exp(-vD * uFogDen * 1.6); gl_FragColor = vec4(mix(uInk, uFogCol, clamp(f, 0.0, 1.0)), 1.0);
    #include <colorspace_fragment>
    }` });
function inkWidth(w) { const m = INK.clone(); m.uniforms.uW = { value: w }; m.uniforms.uInk = INK.uniforms.uInk; m.uniforms.uFogCol = LIGHT.uFogCol; m.uniforms.uFogDen = LIGHT.uFogDen; return m; }

/* ================= procedural painted textures ================= */
function canvasTex(w, h, draw, srgb = true) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}
function mkRand(s) { return () => (s = (s * 16807) % 2147483647) / 2147483647; }
/* a clump of leaves with a jagged painted edge, white so instance colour tints it */
function leafTex(kind) {
  return canvasTex(128, 128, (g, w, h) => {
    const r = mkRand(kind === 'cedar' ? 91 : kind === 'sakura' ? 57 : 23);
    const n = kind === 'cedar' ? 70 : 54;
    for (let i = 0; i < n; i++) {
      const a = r() * Math.PI * 2, d = Math.pow(r(), .6) * 44, x = 64 + Math.cos(a) * d, y = 64 + Math.sin(a) * d * (kind === 'cedar' ? .7 : 1);
      const shade = 200 + Math.round(55 * (1 - (y - 20) / 100) * (.6 + .4 * r()));
      g.fillStyle = `rgb(${shade},${shade},${shade})`;
      g.save(); g.translate(x, y); g.rotate(kind === 'cedar' ? (r() - .5) * .6 : r() * 6.28);
      g.beginPath();
      if (kind === 'cedar') { g.moveTo(-15, 0); g.lineTo(0, -5); g.lineTo(15, 0); g.lineTo(0, 5); }
      else g.ellipse(0, 0, 9 + r() * 5, 5 + r() * 3, 0, 0, Math.PI * 2);
      g.fill(); g.restore();
    }
  });
}
function grassTex() {
  return canvasTex(64, 64, (g) => {
    const r = mkRand(5);
    for (let i = 0; i < 26; i++) { const x = 6 + r() * 52, hgt = 30 + r() * 30, lean = (r() - .5) * 18, s = 180 + Math.round(r() * 75);
      g.fillStyle = `rgb(${s},${s},${s})`; g.beginPath(); g.moveTo(x - 2.4, 64); g.quadraticCurveTo(x + lean * .3, 64 - hgt * .5, x + lean, 64 - hgt); g.quadraticCurveTo(x + lean * .3 + 1.2, 64 - hgt * .5, x + 2.4, 64); g.fill(); }
  });
}
/* painted cumulus: a union of circles, lit from above with two cel tones and a lavender base */
function cloudAtlas() {
  const W = 1024, Hh = 512, cw = 512, ch = 256;
  return canvasTex(W, Hh, (g) => {
    for (let v = 0; v < 4; v++) {
      const ox = (v % 2) * cw, oy = Math.floor(v / 2) * ch, r = mkRand(101 + v * 17);
      const m = document.createElement('canvas'); m.width = cw; m.height = ch; const mg = m.getContext('2d');
      const blobs = [];
      const nb = 9 + Math.floor(r() * 5);
      for (let i = 0; i < nb; i++) { const u = (i + .5) / nb; const x = 70 + u * (cw - 140) + (r() - .5) * 30; const rad = (36 + r() * 46) * (1 - Math.abs(u - .5) * .9); blobs.push([x, ch - 60 - rad * .45 - r() * 18, rad]); }
      for (let i = 0; i < 7; i++) { const b = blobs[1 + Math.floor(r() * (nb - 2))]; blobs.push([b[0] + (r() - .5) * 50, b[1] - b[2] * .7, b[2] * (.6 + r() * .3)]); }
      /* height field from the blobs */
      const img = mg.createImageData(cw, ch), d = img.data;
      for (let y = 0; y < ch; y++) for (let x = 0; x < cw; x++) {
        let hgt = -1, nx = 0, ny = 0;
        for (const [bx, by, br] of blobs) { const dx = (x - bx) / br, dy = (y - by) / (br * .85); const q = 1 - dx * dx - dy * dy; if (q > 0) { const hh = Math.sqrt(q); if (hh > hgt) { hgt = hh; nx = dx; ny = dy; } } }
        const base = ch - 58;
        if (y > base + 4 * Math.sin(x * .05)) hgt = -1;
        const k = (y * cw + x) * 4;
        if (hgt <= 0) { d[k + 3] = 0; continue; }
        const lit = -ny * .75 - nx * .3 + hgt * .35;
        const t1 = lit > .18 ? 1 : lit > -.12 ? .5 : 0;
        const bottom = sm(base - 40, base, y);
        let R, G, B;
        if (t1 === 1) { R = 255; G = 255; B = 255; } else if (t1 === .5) { R = 232; G = 238; B = 250; } else { R = 196; G = 208; B = 236; }
        R = lerp(R, 178, bottom * .7); G = lerp(G, 190, bottom * .7); B = lerp(B, 226, bottom * .7);
        d[k] = R; d[k + 1] = G; d[k + 2] = B; d[k + 3] = 255 * clamp(hgt * 6, 0, 1);
      }
      mg.putImageData(img, 0, 0);
      g.drawImage(m, ox, oy);
    }
  });
}
function wallTex(o) {
  return canvasTex(256, 128, (g, w, h) => {
    g.fillStyle = o.base; g.fillRect(0, 0, w, h);
    const r = mkRand(o.seed || 3);
    for (let i = 0; i < 60; i++) { g.fillStyle = `rgba(${o.dark ? '0,0,0' : '120,90,60'},${.02 + r() * .03})`; g.fillRect(r() * w, r() * h, 20 + r() * 50, 2 + r() * 4); }
    const cols = o.cols || 4, cw = w / cols;
    if (o.shoji) for (let c = 0; c < cols; c++) { const x = c * cw + cw * .14, ww = cw * .72; g.fillStyle = o.frame; g.fillRect(x - 3, h * .18 - 3, ww + 6, h * .64 + 6); g.fillStyle = '#f7f1e3'; g.fillRect(x, h * .18, ww, h * .64);
      g.strokeStyle = o.frame; g.lineWidth = 2; for (let k = 1; k < 4; k++) { g.beginPath(); g.moveTo(x + ww * k / 4, h * .18); g.lineTo(x + ww * k / 4, h * .82); g.stroke(); } for (let k = 1; k < 5; k++) { g.beginPath(); g.moveTo(x, h * .18 + h * .64 * k / 5); g.lineTo(x + ww, h * .18 + h * .64 * k / 5); g.stroke(); } }
    if (o.windows) for (let row = 0; row < (o.rows || 1); row++) for (let c = 0; c < cols; c++) {
      const rh = h / (o.rows || 1), x = c * cw + cw * .3, y = row * rh + rh * .24, ww = cw * .4, hh = rh * .52;
      g.fillStyle = o.frame; g.fillRect(x - 4, y - 4, ww + 8, hh + 8); g.beginPath(); g.arc(x + ww / 2, y, ww / 2 + 4, Math.PI, 0); g.fill();
      g.fillStyle = o.glass; g.fillRect(x, y, ww, hh); g.beginPath(); g.arc(x + ww / 2, y, ww / 2, Math.PI, 0); g.fill();
      g.fillStyle = 'rgba(255,255,255,.35)'; g.fillRect(x + 2, y + 2, ww * .25, hh * .7);
      g.fillStyle = o.frame; g.fillRect(x + ww / 2 - 1, y - ww / 2, 2, hh + ww / 2); g.fillRect(x, y + hh * .45, ww, 2);
    }
    if (o.posts) { g.fillStyle = o.posts; for (let c = 0; c <= cols; c++) g.fillRect(c * cw - 4, 0, 8, h); g.fillRect(0, 0, w, 9); g.fillRect(0, h - 8, w, 8); }
    if (o.trim) { g.fillStyle = o.trim; g.fillRect(0, 0, w, 6); g.fillRect(0, h - 10, w, 10); }
  });
}
function signTex(text, bg, fg) { return canvasTex(256, 72, (g) => { g.fillStyle = bg; g.fillRect(0, 0, 256, 72); g.strokeStyle = fg; g.lineWidth = 3; g.strokeRect(6, 6, 244, 60); g.fillStyle = fg; g.font = '900 44px "Noto Serif SC", "Songti SC", serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(text, 128, 38); }); }

/* ================= geometry kit ================= */
function merge(geos) {
  /* minimal merge: position, normal, uv, optional colour */
  let n = 0, ni = 0; for (const g of geos) { n += g.attributes.position.count; ni += g.index ? g.index.count : g.attributes.position.count; }
  const pos = new Float32Array(n * 3), nor = new Float32Array(n * 3), uv = new Float32Array(n * 2), col = new Float32Array(n * 3), idx = new Uint32Array(ni);
  let o = 0, oi = 0;
  for (const g of geos) {
    const c = g.attributes.position.count;
    pos.set(g.attributes.position.array, o * 3); nor.set(g.attributes.normal.array, o * 3);
    if (g.attributes.uv) uv.set(g.attributes.uv.array, o * 2);
    if (g.attributes.color) col.set(g.attributes.color.array, o * 3); else col.fill(1, o * 3, (o + c) * 3);
    if (g.index) { for (let i = 0; i < g.index.count; i++) idx[oi++] = g.index.array[i] + o; } else for (let i = 0; i < c; i++) idx[oi++] = i + o;
    o += c;
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3)); out.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  out.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); out.setAttribute('color', new THREE.BufferAttribute(col, 3)); out.setIndex(new THREE.BufferAttribute(idx, 1));
  return out;
}
function tint(g, color) { const c = new THREE.Color(color), n = g.attributes.position.count, a = new Float32Array(n * 3); for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); return g; }
const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);

/* Japanese roof with sori (concave slope) and upturned eaves; hip=true gives a hipped roof.
   Built as a thick height-field shell. The ridge runs along x. */
function roofGeo(W, D, rise, o = {}) {
  const hip = !!o.hip, sori = o.sori ?? 1.6, lift = o.lift ?? .5, thick = o.thick ?? .35, NXs = o.nx ?? 36, NZs = o.nz ?? 22;
  const hw = W / 2, hd = D / 2, ridgeHalf = hip ? Math.max(0, hw - hd) : hw;
  const hAt = (x, z) => {
    const tz = 1 - Math.abs(z) / hd;
    let t = tz;
    if (hip) { const tx = 1 - Math.max(0, Math.abs(x) - ridgeHalf) / hd; t = Math.min(tz, tx); }
    t = clamp(t, 0, 1);
    let y = rise * (1 - Math.pow(1 - t, sori));
    const ex = Math.abs(x) / hw, ez = Math.abs(z) / hd;
    y += lift * Math.pow(Math.max(ex, hip ? ex : 0), 6) * (1 - t) * 2 + lift * .35 * Math.pow(1 - t, 3) * Math.pow(ex, 2);
    return y;
  };
  const top = [], bot = [], uvs = [], idx = [];
  for (let j = 0; j <= NZs; j++) for (let i = 0; i <= NXs; i++) {
    const x = -hw + W * i / NXs, z = -hd + D * j / NZs, y = hAt(x, z);
    top.push(x, y, z); bot.push(x, y - thick, z); uvs.push(x, Math.abs(z));
  }
  const row = NXs + 1, n = top.length / 3;
  const pos = new Float32Array(n * 6); pos.set(top, 0); pos.set(bot, n * 3);
  const uv = new Float32Array(n * 4); uv.set(uvs, 0); uv.set(uvs, n * 2);
  for (let j = 0; j < NZs; j++) for (let i = 0; i < NXs; i++) {
    const a = j * row + i, b = a + 1, c = a + row, d = c + 1;
    idx.push(a, c, b, b, c, d);
    idx.push(n + a, n + b, n + c, n + b, n + d, n + c);
  }
  /* fascia around the border */
  const border = [];
  for (let i = 0; i < NXs; i++) border.push([i, i + 1]);
  for (let j = 0; j < NZs; j++) border.push([j * row + NXs, (j + 1) * row + NXs]);
  for (let i = NXs; i > 0; i--) border.push([NZs * row + i, NZs * row + i - 1]);
  for (let j = NZs; j > 0; j--) border.push([j * row, (j - 1) * row]);
  for (const [a, b] of border) idx.push(a, n + a, b, b, n + a, n + b);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); g.setIndex(idx);
  g.computeVertexNormals();
  g.userData.hAt = hAt;
  return g;
}
/* gable end wall (a pentagon) to close a roof over a box body */
function gableWall(D, rise, thick = .3) {
  const s = new THREE.Shape(); s.moveTo(-D / 2, 0); s.lineTo(D / 2, 0); s.lineTo(0, rise); s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: thick, bevelEnabled: false }); g.translate(0, 0, -thick / 2); g.rotateY(Math.PI / 2); return g;
}

/* ================= the world ================= */
export function createWorld({ renderer, phone = false, quality = 1, onStep = () => {} } = {}) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 16 / 9, 0.3, 16000);
  const q = phone ? .55 : 1;
  const tick = [];      // per-frame callbacks (time)
  const anchors = [];   // landmark anchor points
  const treeSets = [];  // instanced leaf-card trees, for the live map's distant impostors
  seed = 20261004;

  /* ---------- sun and shadows ---------- */
  const sun = new THREE.DirectionalLight(0xffffff, 1);
  sun.castShadow = true;
  const SM = phone ? 1024 : (quality > 1 ? 4096 : 2048);
  sun.shadow.mapSize.set(SM, SM);
  sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.5;
  sun.shadow.radius = 2;
  scene.add(sun, sun.target);
  function setShadowBox(center, half) {
    const c = sun.shadow.camera; c.left = -half; c.right = half; c.top = half; c.bottom = -half; c.near = 1; c.far = half * 8; c.updateProjectionMatrix();
    sun.target.position.copy(center); sun.position.copy(center).addScaledVector(LIGHT.uSunDir.value, half * 4);
  }

  /* ---------- sky dome ---------- */
  const skyU = { uSunDir: LIGHT.uSunDir, uZen: { value: new THREE.Color('#2f7fd6') }, uMid: { value: new THREE.Color('#79b8ec') }, uHor: { value: new THREE.Color('#e6f2fa') }, uGlow: { value: new THREE.Color('#fff0d6') }, uGlowK: { value: 1 } };
  const sky = new THREE.Mesh(new THREE.SphereGeometry(12000, 48, 24), new THREE.ShaderMaterial({ side: THREE.BackSide, depthWrite: false, uniforms: skyU,
    vertexShader: `varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,
    fragmentShader: `uniform vec3 uSunDir, uZen, uMid, uHor, uGlow; uniform float uGlowK; varying vec3 vD;
      ${NOISE}
      void main(){ vec3 d = normalize(vD); float y = d.y;
        vec3 c = mix(uHor, uMid, smoothstep(-0.02, 0.22, y)); c = mix(c, uZen, smoothstep(0.2, 0.75, y));
        float s = max(dot(d, uSunDir), 0.0);
        c = mix(c, uGlow, pow(s, 6.0) * 0.55 * uGlowK + pow(s, 64.0) * 0.5 * uGlowK);
        c += vec3(1.0, 0.97, 0.9) * smoothstep(0.9993, 0.9997, s) * 2.0;
        /* painted wisps of high cirrus */
        vec2 p = d.xz / max(y + 0.25, 0.08) * 1.6;
        float w = fbm2(p * vec2(1.0, 3.0) + 7.0); float wisp = smoothstep(0.62, 0.78, w) * smoothstep(0.05, 0.3, y) * (1.0 - smoothstep(0.6, 0.9, y));
        c = mix(c, vec3(1.0), wisp * 0.55);
        c = mix(c, uHor * 1.02, smoothstep(0.02, -0.15, y));
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }` }));
  sky.renderOrder = -10; sky.frustumCulled = false; scene.add(sky);
  tick.push(() => sky.position.copy(camera.position));

  /* ---------- terrain ---------- */
  function axis(segs) { const out = []; for (const [a, b, n] of segs) { for (let i = 0; i < n; i++) out.push(a + (b - a) * i / n); } out.push(segs[segs.length - 1][1]); return out; }
  const XS = axis([[-1600, -600, Math.round(24 * q)], [-600, 370, Math.round(200 * q)], [370, 640, Math.round(260 * q)], [640, 1300, Math.round(30 * q)]]);
  const ZS = axis([[-1600, -600, Math.round(24 * q)], [-600, -140, Math.round(100 * q)], [-140, 140, Math.round(230 * q)], [140, 600, Math.round(100 * q)], [600, 1600, Math.round(24 * q)]]);
  const NX = XS.length, NZ = ZS.length;
  let HG, NYG;
  function axisIndex(arr, v) { let lo = 0, hi = arr.length - 1; if (v <= arr[0]) return [0, 0]; if (v >= arr[hi]) return [hi - 1, 1]; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (arr[m] <= v) lo = m; else hi = m; } return [lo, (v - arr[lo]) / (arr[lo + 1] - arr[lo])]; }
  function ground(x, z) {
    const [i, fx] = axisIndex(XS, x), [j, fz] = axisIndex(ZS, z), k = j * NX + i;
    return { h: lerp(lerp(HG[k], HG[k + 1], fx), lerp(HG[k + NX], HG[k + NX + 1], fx), fz), ny: lerp(lerp(NYG[k], NYG[k + 1], fx), lerp(NYG[k + NX], NYG[k + NX + 1], fx), fz) };
  }
  const TERRAIN_CODE = `
    {
      float det = uDetail;
      vec2 P = vW.xz;
      float slope = 1.0 - N.y;
      float n1 = fbm2(P * 0.006), n2 = fbm2(P * 0.031 + 5.0), n3 = vn(P * 0.16);
      /* painted grass: three posterised greens with soft borders */
      float pg = n1 * 0.62 + n2 * 0.38;
      vec3 g1 = vec3(0.43, 0.62, 0.17), g2 = vec3(0.25, 0.48, 0.13), g3 = vec3(0.13, 0.32, 0.12), g4 = vec3(0.62, 0.72, 0.25);
      vec3 grass = mix(g3, g2, smoothstep(0.36, 0.42, pg));
      grass = mix(grass, g1, smoothstep(0.52, 0.57, pg));
      grass = mix(grass, g4, smoothstep(0.66, 0.70, pg) * 0.8);
      /* brush strokes that follow a slowly turning direction */
      float ang = n1 * 9.0; vec2 dir = vec2(cos(ang), sin(ang)), per = vec2(-dir.y, dir.x);
      float stroke = vn(vec2(dot(P, dir) * 0.55, dot(P, per) * 2.6)) ;
      grass *= 0.9 + 0.2 * stroke * det;
      grass *= 0.95 + 0.1 * n3 * det;
      /* rock: warm grey with painted strata and dark cracks */
      float rockM = smoothstep(0.36, 0.46, slope + (n2 - 0.5) * 0.26);
      float strata = vn(vec2(vW.y * 0.55 + n2 * 3.0, dot(P, vec2(0.7, 0.7)) * 0.04));
      vec3 r1 = vec3(0.60, 0.55, 0.50), r2 = vec3(0.42, 0.39, 0.38), r3 = vec3(0.76, 0.71, 0.64);
      vec3 rock = mix(r2, r1, smoothstep(0.35, 0.45, strata)); rock = mix(rock, r3, smoothstep(0.7, 0.74, strata) * 0.6); rock = mix(rock, g2 * 0.9, smoothstep(0.6, 0.66, n3 * 0.5 + n1 * 0.5) * (1.0 - smoothstep(0.5, 0.7, slope)));
      float crack = smoothstep(0.035, 0.0, abs(vn(vec2(vW.y * 0.9, dot(P, vec2(0.8, -0.6)) * 0.25)) - 0.5)) * det;
      rock *= 1.0 - crack * 0.35;
      vec3 terr = mix(grass, rock, rockM);
      /* region colours painted in by the vertex colour and its weight */
      float peb = smoothstep(0.72, 0.8, vn(P * 1.7)) * det; vec3 reg = base.rgb * (0.9 + 0.16 * stroke + 0.08 * (n2 - 0.5)) * (1.0 - 0.18 * peb) + vec3(0.08, 0.06, 0.04) * smoothstep(0.75, 0.8, vn(P * 0.9 + 3.0));
      terr = mix(terr, reg, clamp(vAw, 0.0, 1.0));
      base.rgb = terr;
    }`;
  function buildTerrain() {
    const pos = new Float32Array(NX * NZ * 3), col = new Float32Array(NX * NZ * 3), aw = new Float32Array(NX * NZ), TD = new Float32Array(NX * NZ);
    HG = new Float32Array(NX * NZ);
    for (let j = 0; j < NZ; j++) for (let i = 0; i < NX; i++) { const k = j * NX + i, x = XS[i], z = ZS[j], h = H(x, z); HG[k] = h; TD[k] = lastTD; pos[k * 3] = x; pos[k * 3 + 1] = h; pos[k * 3 + 2] = z; }
    const idx = new Uint32Array((NX - 1) * (NZ - 1) * 6); let n = 0;
    for (let j = 0; j < NZ - 1; j++) for (let i = 0; i < NX - 1; i++) { const a = j * NX + i, b = a + 1, c = a + NX, d = c + 1; idx[n++] = a; idx[n++] = c; idx[n++] = b; idx[n++] = b; idx[n++] = c; idx[n++] = d; }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setIndex(new THREE.BufferAttribute(idx, 1)); g.computeVertexNormals();
    const nrm = g.attributes.normal.array; NYG = new Float32Array(NX * NZ);
    const C = { dirt: new THREE.Color('#c8a875'), sand: new THREE.Color('#e6d6a6'), snow: new THREE.Color('#f4f7fb'), stone: new THREE.Color('#cfc6b6'), cloud: new THREE.Color('#dfe7f2'), moss: new THREE.Color('#5d7d3a') };
    for (let j = 0; j < NZ; j++) for (let i = 0; i < NX; i++) {
      const k = j * NX + i, x = XS[i], z = ZS[j], h = HG[k], ny = nrm[k * 3 + 1]; NYG[k] = ny;
      let c = C.dirt, w = 0;
      const sand = (h < 6 && Math.hypot(x - LAKE.x, z - LAKE.z) < LAKE.r + 50) ? sm(6, 2.5, h) : 0;
      if (sand > w) { c = C.sand; w = sand; }
      const tr = TD[k] < 5.2 ? sm(5.2, 2.6, TD[k]) : 0; if (tr > w) { c = C.dirt; w = tr; }
      if (Math.abs(z) < 3 && x > 404 && x < 450) { c = C.stone; w = .9; }
      const v = PADS[0], lx = x - v.x, lz = z - v.z;
      if (Math.hypot(lx, lz) < v.r && (Math.abs(lx + lz * .25) < 3.4 || Math.abs(lz - lx * .25) < 3.4)) { c = C.dirt; w = .85; }
      if (inRiverBox(x, z)) { const [d, ii] = nearest(RIV, x, z); const rr = RIV[ii]; const bank = d < rr.hw + 3 ? .7 : 0; if (bank > w) { c = C.sand; w = bank * .6; } }
      if (h > 205) { const s = sm(205, 240, h) * sm(.5, .8, ny); if (s > w) { c = C.snow; w = s; } }
      if (x > 650) { const s = sm(650, 760, x); if (s > w) { c = C.cloud; w = s; } }
      col[k * 3] = c.r; col[k * 3 + 1] = c.g; col[k * 3 + 2] = c.b; aw[k] = w;
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.setAttribute('aw', new THREE.BufferAttribute(aw, 1));
    const m = paint('#ffffff', { vertexColors: true, code: TERRAIN_CODE, rim: 0, wrap: .15 });
    const mesh = new THREE.Mesh(g, m); mesh.receiveShadow = true; mesh.castShadow = true; scene.add(mesh);
  }

  /* ---------- water ---------- */
  const waterU = { uTime: LIGHT.uTime, uSunDir: LIGHT.uSunDir, uSkyCol: LIGHT.uSkyCol, uFogCol: LIGHT.uFogCol, uFogDen: LIGHT.uFogDen };
  function waterMat(flow, shallowR = 0) {
    return new THREE.ShaderMaterial({ uniforms: { ...waterU, uFlow: { value: flow }, uC: { value: new THREE.Vector3(LAKE.x, 0, LAKE.z) }, uR: { value: shallowR } },
      vertexShader: `varying vec3 vW; varying vec2 vUv; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
      fragmentShader: `uniform float uTime, uFogDen, uR; uniform vec3 uSunDir, uSkyCol, uFogCol, uC; uniform vec2 uFlow; varying vec3 vW; varying vec2 vUv;
        ${NOISE}
        void main(){
          vec2 p = vW.xz * 0.05 + uFlow * uTime;
          float n = fbm2(p), n2 = fbm2(p * 2.7 - uFlow * uTime * 1.7);
          vec3 deep = vec3(0.13, 0.42, 0.62), mid = vec3(0.25, 0.62, 0.78), light = vec3(0.62, 0.85, 0.92);
          float band = n * 0.6 + n2 * 0.4;
          vec3 col = mix(deep, mid, smoothstep(0.42, 0.47, band));
          col = mix(col, light, smoothstep(0.62, 0.66, band) * 0.8);
          float edge = 0.0;
          if (uR > 0.0) { float r = length(vW.xz - uC.xz) + 14.0 * (vn(vW.xz * 0.05) - 0.5); edge = smoothstep(uR - 26.0, uR - 8.0, r); col = mix(col, vec3(0.55, 0.84, 0.86), edge * 0.8);
            float foam = smoothstep(0.06, 0.0, abs(fract(r * 0.12 - uTime * 0.25) - 0.5) - 0.42) * smoothstep(uR - 20.0, uR - 2.0, r); col = mix(col, vec3(1.0), foam * 0.9); }
          if (uR < 0.0) { float s = abs(vUv.x - 0.5) * 2.0; float foam = smoothstep(0.7, 0.95, s + (vn(vW.xz * 0.4 + uFlow * uTime * 6.0) - 0.5) * 0.3); col = mix(col, vec3(1.0), foam * 0.85);
            float streak = smoothstep(0.7, 0.85, vn(vec2(vUv.x * 18.0, vUv.y * 0.6 - uTime * 2.2))); col = mix(col, vec3(0.9, 0.97, 1.0), streak * 0.45); }
          vec3 V = normalize(cameraPosition - vW);
          float glint = step(0.985, h21(floor(vW.xz * 1.6) + floor(uTime * 4.0))) * pow(max(dot(reflect(-V, vec3(0, 1, 0)), uSunDir), 0.0), 3.0);
          col += vec3(1.0, 0.97, 0.9) * glint * 1.6;
          float fres = pow(1.0 - max(V.y, 0.0), 4.0); col = mix(col, uSkyCol, fres * 0.55);
          float d = length(vW - cameraPosition); col = mix(col, uFogCol, clamp(1.0 - exp(-d * uFogDen), 0.0, 1.0));
          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }` });
  }
  function buildWater() {
    const lake = new THREE.Mesh(new THREE.CircleGeometry(LAKE.r + 60, 96), waterMat(new THREE.Vector2(.03, .018), LAKE.r + 30));
    lake.rotation.x = -Math.PI / 2; lake.position.set(LAKE.x, LAKE.level, LAKE.z); lake.receiveShadow = true; scene.add(lake);
    const start = RIV.findIndex(r => r.y < 46), pts = RIV.slice(start), pos = [], uv = [], idx = [];
    let acc = 0;
    for (let i = 0; i < pts.length; i++) {
      const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)], tx = b.x - a.x, tz = b.z - a.z, l = Math.hypot(tx, tz) || 1, nx = -tz / l, nz = tx / l, w = pts[i].hw + 1.5;
      if (i) acc += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].z - pts[i - 1].z);
      pos.push(pts[i].x + nx * w, pts[i].y, pts[i].z + nz * w, pts[i].x - nx * w, pts[i].y, pts[i].z - nz * w); uv.push(0, acc * .05, 1, acc * .05);
      if (i < pts.length - 1) { const k = i * 2; idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2); }
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx);
    const river = new THREE.Mesh(g, waterMat(new THREE.Vector2(-.05, .08), -1)); river.material.side = THREE.DoubleSide; scene.add(river);
    /* waterfall */
    const top = RIV[0], bot = RIV[start];
    const fallMat = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, side: THREE.DoubleSide, uniforms: { uTime: LIGHT.uTime },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `uniform float uTime; varying vec2 vUv; ${NOISE}
        void main(){ float n = vn(vec2(vUv.x * 22.0, vUv.y * 4.0 + uTime * 3.0)) * 0.6 + vn(vec2(vUv.x * 50.0, vUv.y * 10.0 + uTime * 5.0)) * 0.4;
          vec3 col = mix(vec3(0.62, 0.86, 0.95), vec3(1.0), step(0.5, n));
          float a = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
          gl_FragColor = vec4(col, a);
          #include <colorspace_fragment>
        }` });
    const fall = new THREE.Mesh(new THREE.PlaneGeometry(10, 1), fallMat);
    const mid = new THREE.Vector3((top.x + bot.x) / 2, (top.y + bot.y) / 2, (top.z + bot.z) / 2);
    const dir = new THREE.Vector3(bot.x - top.x, bot.y - top.y, bot.z - top.z), len = dir.length();
    fall.scale.y = len + 4; fall.position.copy(mid).add(new THREE.Vector3(0, 1.5, 0)); fall.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), dir.normalize());
    scene.add(fall);
    for (let i = 0; i < 6; i++) cloud(bot.x + (rand() - .5) * 12, bot.y + 3 + rand() * 4, bot.z + (rand() - .5) * 12, 22, .75);
  }

  /* ---------- clouds (painted cumulus billboards) ---------- */
  const atlas = cloudAtlas();
  const cloudMats = [0, 1, 2, 3].map(v => { const t = atlas.clone(); t.repeat.set(.5, .5); t.offset.set((v % 2) * .5, Math.floor(v / 2) === 0 ? .5 : 0); t.needsUpdate = true; return t; });
  function cloud(x, y, z, s, op = 1, v = Math.floor(rand() * 4)) {
    const m = new THREE.SpriteMaterial({ map: cloudMats[v], transparent: true, opacity: op, depthWrite: false, fog: false });
    const sp = new THREE.Sprite(m); sp.position.set(x, y, z); sp.scale.set(s * 2, s, 1); sp.center.set(.5, .2); scene.add(sp); return sp;
  }
  function buildClouds() {
    /* a sea of clouds at the foot of the outer face, layered in rows */
    const seaMat = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, uniforms: { uTime: LIGHT.uTime },
      vertexShader: `varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
      fragmentShader: `uniform float uTime; varying vec3 vW; ${NOISE}
        void main(){ vec2 p = vW.xz * 0.008 + vec2(uTime * 0.004, 0.0); float n = fbm2(p);
          float a = smoothstep(660.0, 760.0, vW.x);
          vec3 col = mix(vec3(0.80, 0.86, 0.96), vec3(1.0), smoothstep(0.45, 0.5, n));
          col = mix(col, vec3(0.93, 0.95, 1.0), smoothstep(0.62, 0.66, n) * 0.6);
          gl_FragColor = vec4(col, a);
          #include <colorspace_fragment>
        }` });
    const sea = new THREE.Mesh(new THREE.PlaneGeometry(8000, 8000), seaMat); sea.rotation.x = -Math.PI / 2; sea.position.set(4000, 10, 0); sea.renderOrder = 1; scene.add(sea);
    for (let i = 0; i < (phone ? 60 : 120); i++) cloud(680 + rand() * 600, 2 + rand() * 10, (rand() - .5) * 1100, 40 + rand() * 60, 1);
    for (let i = 0; i < 16; i++) { const p = trailAt(rand() * TR_LEN * .3), side = rand() < .5 ? -1 : 1; cloud(p.x + 20 + rand() * 30, p.y - 14 - rand() * 6, p.z + side * (34 + rand() * 30), 26 + rand() * 20, 1); }
    /* tall cumulus beyond the rim of Gensokyo and towers in the morning sky */
    for (let i = 0; i < 30; i++) { const a = Math.PI * (.55 + rand() * .9), r = 900 + rand() * 600; cloud(Math.cos(a) * r - 80, 140 + rand() * 160, Math.sin(a) * r, 180 + rand() * 180, 1); }
    for (let i = 0; i < 14; i++) { const a = Math.PI * (-.4 + rand() * .8), r = 1500 + rand() * 900; cloud(Math.cos(a) * r + 600, 60 + rand() * 120, Math.sin(a) * r, 260 + rand() * 200, 1); }
    for (let i = 0; i < 10; i++) { const a = Math.PI * (.6 + rand() * .8), r = 700 + rand() * 300; cloud(Math.cos(a) * r, 330 + rand() * 120, Math.sin(a) * r, 80 + rand() * 80, .95); }
  }

  /* ---------- materials ---------- */
  const M = {
    shu: paint('#e2412d', { rim: .3 }), black: paint('#2c2427'), stone: paint('#d3c9b8', { code: `base.rgb *= 0.88 + 0.16 * vn(vW.xz * 1.3 + vW.y) - 0.1 * smoothstep(0.03, 0.0, abs(fract(vW.x * 0.6 + vW.z * 0.2) - 0.5) - 0.47);` }), stoneDark: paint('#958c80'),
    wood: paint('#8d5f3d'), woodLight: paint('#c99b6a'), plaster: paint('#f5eee0'), tile: null, gold: paint('#e8bb4a', { rim: .6 }), white: paint('#fbf8f2', { side: THREE.DoubleSide }),
    rope: paint('#e1c98f'), pipe: paint('#4f8fc8'), redBrick: null,
  };
  const TILE_CODE = `base.rgb *= 0.86 + 0.14 * smoothstep(0.15, 0.35, abs(fract(vUv.x * 2.4) - 0.5) * 2.0); base.rgb *= 0.92 + 0.08 * smoothstep(0.85, 0.95, fract(vUv.y * 1.6));`;
  const roofMat = (c) => paint(c, { code: TILE_CODE, rim: .2, side: THREE.DoubleSide });
  const ROOF = { grey: roofMat('#5b5866'), brown: roofMat('#7a5238'), green: roofMat('#4f8f7d'), scarlet: roofMat('#7b2836'), blue: roofMat('#4a5f86'), hinoki: roofMat('#9a6a45') };
  const inked = [];
  function add(parent, geo, mat, x = 0, y = 0, z = 0, ry = 0, o = {}) {
    const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.y = ry; m.castShadow = o.shadow ?? true; m.receiveShadow = true; parent.add(m);
    if (o.ink) { const k = new THREE.Mesh(geo, inkWidth(o.ink)); m.add(k); inked.push(k); }
    return m;
  }
  function instanced(geo, mat, n, shadow = true) { const m = new THREE.InstancedMesh(geo, mat, n); m.frustumCulled = false; m.castShadow = shadow; m.receiveShadow = true; scene.add(m); return m; }

  /* a Japanese hall: raised floor, posts, plaster and shoji walls, curved roof (irimoya when hip=true) */
  function hall(parent, o) {
    const g = new THREE.Group(); g.position.set(o.x || 0, o.y || 0, o.z || 0); g.rotation.y = o.ry || 0; parent.add(g);
    const W = o.w, D = o.d, Hh = o.h, base = o.base ?? 1, fl = base;
    if (o.plinth !== false) add(g, box(W + 2.4, base, D + 2.4), M.stone, 0, base / 2, 0, 0, { ink: .05 });
    const wt = o.wallMat || paint('#ffffff', { map: wallTex({ base: '#f6efe1', frame: '#6e4b33', posts: '#6e4b33', shoji: true, cols: Math.max(2, Math.round(W / 3)), seed: Math.round(W * 7) }) });
    add(g, box(W, Hh, D), wt, 0, fl + Hh / 2, 0, 0, { ink: .05 });
    if (o.veranda !== false) {
      add(g, box(W + 2, .3, D + 2), M.wood, 0, fl + .15, 0);
      const rail = paint('#7a4f33');
      for (const s of [-1, 1]) { add(g, box(W + 2, .14, .14), rail, 0, fl + 1.1, s * (D / 2 + 1)); add(g, box(.14, .14, D + 2), rail, s * (W / 2 + 1), fl + 1.1, 0); }
      for (let i = 0; i <= Math.round(W / 2.2); i++) for (const s of [-1, 1]) add(g, new THREE.CylinderGeometry(.18, .18, Hh + .3, 8), M.wood, -W / 2 - 1 + (W + 2) * i / Math.round(W / 2.2), fl + Hh / 2, s * (D / 2 + 1), 0, { shadow: false });
    }
    const roofW = W + (o.over ?? 3.2) * 2, roofD = D + (o.over ?? 3.2) * 2, rise = o.rise ?? D * .42;
    const rg = roofGeo(roofW, roofD, rise, { hip: !!o.hip, lift: o.lift ?? .9, sori: 1.7, thick: .45 });
    const roofM = o.roof || ROOF.grey;
    add(g, rg, roofM, 0, fl + Hh + .1, 0, 0, { ink: .07 });
    if (!o.hip) for (const s of [-1, 1]) add(g, gableWall(D + 1, rise * .9, .3), M.plaster, s * (W / 2 + .1), fl + Hh, 0);
    if (o.hip && o.irimoya !== false) {
      /* the small gable on top of an irimoya roof */
      const gw = W * .55, gd = D * .5, gr = rise * .55;
      const top = roofGeo(gw + 1.6, gd + 1.6, gr, { lift: .3, sori: 1.4, thick: .35 });
      add(g, top, roofM, 0, fl + Hh + rise * .62, 0, 0, { ink: .06 });
      for (const s of [-1, 1]) add(g, gableWall(gd, gr * .9, .25), M.wood, s * (gw / 2 + .3), fl + Hh + rise * .62, 0);
    }
    const ridgeY = fl + Hh + (o.hip && o.irimoya !== false ? rise * .62 + rise * .55 : rise) + .15;
    add(g, box((o.hip && o.irimoya !== false ? W * .55 + 2 : roofW) + .4, .55, .7), M.black, 0, ridgeY, 0, 0, { ink: .04 });
    for (const s of [-1, 1]) add(g, box(.8, .9, .9), M.black, s * ((o.hip && o.irimoya !== false ? W * .55 + 2 : roofW) / 2 + .2), ridgeY + .25, 0);
    return g;
  }

  /* ---------- landmarks ---------- */
  function buildTorii(x, y, z, s = 1, ry = 0) {
    const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = ry; g.scale.setScalar(s); scene.add(g);
    const Ht = 8.2, span = 3.7;
    for (const k of [-1, 1]) {
      add(g, new THREE.CylinderGeometry(.42, .5, Ht, 20), M.shu, 0, Ht / 2, k * span, 0, { ink: .05 });
      add(g, new THREE.CylinderGeometry(.62, .66, .9, 20), M.black, 0, .45, k * span, 0, { ink: .04 });
      add(g, new THREE.CylinderGeometry(.5, .5, .25, 20), M.black, 0, Ht * .74 - .45, k * span);
    }
    add(g, box(.48, .6, 10.6), M.shu, 0, Ht * .74, 0, 0, { ink: .04 });                  // nuki
    add(g, box(.36, 1.3, .55), M.shu, 0, Ht * .74 + .95, 0, 0, { ink: .03 });            // gakuzuka
    const plaque = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.5), new THREE.MeshBasicMaterial({ map: canvasTex(64, 96, (gg) => { gg.fillStyle = '#2b2326'; gg.fillRect(0, 0, 64, 96); gg.strokeStyle = '#d9b24e'; gg.lineWidth = 4; gg.strokeRect(4, 4, 56, 88); gg.fillStyle = '#e8c35c'; gg.font = '900 30px "Noto Serif SC", serif'; gg.textAlign = 'center'; gg.fillText('博', 32, 42); gg.fillText('丽', 32, 78); }) }));
    plaque.position.set(.4, Ht * .74 + .95, 0); plaque.rotation.y = Math.PI / 2; g.add(plaque);
    /* curved shimaki and kasagi with upturned ends */
    const bent = (len, h, d, k) => { const gg = new THREE.BoxGeometry(d, h, len, 1, 1, 40); const p = gg.attributes.position; for (let i = 0; i < p.count; i++) { const zz = p.getZ(i) / (len / 2); p.setY(i, p.getY(i) + k * Math.pow(Math.abs(zz), 2.4)); } gg.computeVertexNormals(); return gg; };
    add(g, bent(12.2, .62, .82, .55), M.shu, 0, Ht + .1, 0, 0, { ink: .05 });
    add(g, bent(13.6, .6, 1.08, .85), M.black, 0, Ht + .7, 0, 0, { ink: .05 });
    /* shimenawa rope with shide paper */
    const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(0, Ht * .74 - .5, -span), new THREE.Vector3(0, Ht * .74 - 1.3, 0), new THREE.Vector3(0, Ht * .74 - .5, span)]);
    add(g, new THREE.TubeGeometry(curve, 30, .2, 10), M.rope, 0, 0, 0, 0, { ink: .03 });
    const shide = new THREE.Shape(); shide.moveTo(0, 0); shide.lineTo(.4, 0); shide.lineTo(.4, -.3); shide.lineTo(.1, -.3); shide.lineTo(.1, -.6); shide.lineTo(.4, -.6); shide.lineTo(.4, -.9); shide.lineTo(.1, -.9); shide.lineTo(.1, -1.2); shide.lineTo(0, -1.2); shide.closePath();
    if (s >= 1) for (const zz of [-2, 0, 2]) add(g, new THREE.ShapeGeometry(shide), M.white, .06, Ht * .74 - .95 - (zz === 0 ? .4 : .15), zz, Math.PI / 2, { shadow: false });
    return g;
  }
  function lantern(parent, x, y, z, s = 1) {
    const g = new THREE.Group(); g.position.set(x, y, z); g.scale.setScalar(s); parent.add(g);
    add(g, new THREE.CylinderGeometry(.75, .85, .35, 6), M.stone, 0, .18, 0, 0, { ink: .03 });
    add(g, new THREE.CylinderGeometry(.24, .3, 1.5, 10), M.stone, 0, 1.1, 0, 0, { ink: .03 });
    add(g, new THREE.CylinderGeometry(.62, .5, .28, 6), M.stone, 0, 1.95, 0);
    add(g, new THREE.CylinderGeometry(.45, .45, .7, 6), M.plaster, 0, 2.45, 0, 0, { ink: .03 });
    add(g, new THREE.ConeGeometry(.95, .6, 6), M.stoneDark, 0, 3.1, 0, 0, { ink: .03 });
    add(g, new THREE.SphereGeometry(.17, 10, 8), M.stoneDark, 0, 3.5, 0);
    return g;
  }
  function buildHakurei() {
    const y = SUMMIT.h;
    buildTorii(TORII_X, y, 0);
    /* main hall (haiden) faces +x, toward the torii and the climb */
    hall(scene, { x: 398, y, z: 0, ry: Math.PI / 2, w: 13, d: 9, h: 4.2, base: 1.4, hip: true, roof: ROOF.hinoki, rise: 4.8, over: 3 });
    /* honden behind */
    hall(scene, { x: 382, y, z: 0, ry: Math.PI / 2, w: 7, d: 6, h: 3.4, base: 1.8, roof: ROOF.hinoki, rise: 3.6, over: 1.8 });
    /* offertory box, bell rope and front steps */
    const g = new THREE.Group(); g.position.set(406, y, 0); scene.add(g);
    add(g, box(1.6, 1.1, 3), M.wood, 1.2, 1.95, 0, 0, { ink: .03 });
    const sai = new THREE.Mesh(new THREE.PlaneGeometry(2.6, .7), new THREE.MeshBasicMaterial({ map: signTex('奉 纳', '#5b3a26', '#f0d79a') })); sai.position.set(2.02, 2.05, 0); sai.rotation.y = Math.PI / 2; g.add(sai);
    for (let i = 0; i < 4; i++) add(g, box(.6, .35, 5), M.stone, 2.6 + i * .6, 1.4 - i * .35, 0);
    add(g, new THREE.CylinderGeometry(.09, .09, 4, 6), paint('#e94b4b'), .8, 4.2, 0, 0, { shadow: false });
    add(g, new THREE.SphereGeometry(.5, 16, 12), M.gold, .8, 6.3, 0);
    /* a paved approach, lanterns and the purification basin */
    const slabs = instanced(box(1.5, .14, 3), M.stone, 30, false), o = new THREE.Object3D();
    for (let i = 0; i < 30; i++) { o.position.set(410 + i * 1.18, y + .07, 0); o.rotation.y = (rand() - .5) * .04; o.updateMatrix(); slabs.setMatrixAt(i, o.matrix); }
    for (const s of [-1, 1]) { lantern(scene, 434, y, s * 4.6, 1.15); lantern(scene, 418, y, s * 4.6, 1.0); }
    add(scene, box(2.4, 1, 1.4), M.stone, 422, y + .5, -8, 0, { ink: .03 });
    /* a small shrine office */
    hall(scene, { x: 404, y, z: 17, ry: 0, w: 9, d: 5.5, h: 3, base: .6, roof: ROOF.grey, rise: 2.6, over: 1.4 });
    anchors.push({ id: 'hakurei', p: new THREE.Vector3(410, y + 9, 0) });
  }
  function buildStairs() {
    const i0 = TR.findIndex(t => t.x <= 490), i1 = TR.findIndex(t => t.x <= 448);
    const s0 = TR[i0].s, s1 = TR[i1].s, n = Math.round((s1 - s0) / .9);
    const im = instanced(box(6.6, .5, 1.0), M.stone, n), o = new THREE.Object3D(), p = new THREE.Vector3();
    for (let k = 0; k < n; k++) { trailAt(s0 + (k + .5) * (s1 - s0) / n, p); o.position.set(p.x, p.y - .2, p.z); o.rotation.set(0, Math.PI / 2, 0); o.updateMatrix(); im.setMatrixAt(k, o.matrix); }
    /* side curbs */
    for (const sd of [-1, 1]) { const c = instanced(box(1.0, .9, .6), M.stoneDark, n, false); for (let k = 0; k < n; k++) { trailAt(s0 + (k + .5) * (s1 - s0) / n, p); o.position.set(p.x, p.y + .1, p.z + sd * 3.6); o.updateMatrix(); c.setMatrixAt(k, o.matrix); } }
    /* small torii along the lower trail and lanterns on alternating sides */
    const a = new THREE.Vector3(), b = new THREE.Vector3();
    for (const s of [120, 260]) { trailAt(s - 1, a); trailAt(s + 1, b); const ry = Math.atan2(b.x - a.x, b.z - a.z) - Math.PI / 2; buildTorii(a.x, a.y - .3, a.z, .72, ry); }
    for (let s = 40, k = 0; s < S_TORII - 6; s += 30, k++) {
      trailAt(s - 1, a); trailAt(s + 1, b); const tx = b.x - a.x, tz = b.z - a.z, l = Math.hypot(tx, tz), side = k % 2 ? 1 : -1;
      const x = a.x - tz / l * 4.6 * side, z = a.z + tx / l * 4.6 * side; lantern(scene, x, ground(x, z).h - .1, z, .9);
    }
  }
  function buildVillage() {
    const v = PADS[0], y = v.h, sx = v.x + 9, sz = v.z + 10;
    const houseBody = [], spots = [];
    for (let gx = -5; gx <= 5; gx++) for (let gz = -5; gz <= 5; gz++) {
      if (gx === 0 || gz === 0) continue;
      const lx = gx * 10.5 + (rand() - .5) * 2.4, lz = gz * 10.5 + (rand() - .5) * 2.4;
      if (Math.hypot(lx, lz) > v.r - 8 || rand() < .22) continue;
      const ca = Math.cos(.245), sa = Math.sin(.245), x = v.x + lx * ca - lz * sa, z = v.z + lx * sa + lz * ca;
      if (Math.hypot(x - sx, z - sz) < 13) continue;
      spots.push({ x, z, ry: -.245 + (rand() < .5 ? 0 : Math.PI / 2), s: .85 + rand() * .3, v: Math.floor(rand() * 3) });
    }
    /* three house variants as merged geometry, instanced */
    const variants = [0, 1, 2].map(k => {
      const W = 6.5 + k, D = 5 + k * .4, Hh = 2.8 + (k === 2 ? 1.6 : 0);
      const body = tint(box(W, Hh, D).translate(0, Hh / 2, 0), k === 1 ? '#e9d8b8' : '#f4ecdc');
      const beam = tint(box(W + .1, .25, D + .1).translate(0, Hh * .55, 0), '#7a5236');
      const roof = tint(roofGeo(W + 1.8, D + 1.8, D * .42, { lift: .35, nx: 16, nz: 10, thick: .3 }).translate(0, Hh, 0), ['#5b5866', '#6d5240', '#55606c'][k]);
      const ridge = tint(box(W + 2, .35, .5).translate(0, Hh + D * .42 + 1.0, 0), '#2e2a2e');
      return merge([body, beam, roof, ridge]);
    });
    const vm = paint('#ffffff', { vertexColors: true, code: TILE_CODE.replace(/base\.rgb \*=/g, 'base.rgb *= (vW.y > 0.0) ? 1.0 : 1.0;') });
    variants.forEach((geo, k) => {
      const list = spots.filter(s => s.v === k), im = instanced(geo, vm, list.length), o = new THREE.Object3D();
      list.forEach((s, i) => { o.position.set(s.x, y, s.z); o.rotation.set(0, s.ry, 0); o.scale.setScalar(s.s); o.updateMatrix(); im.setMatrixAt(i, o.matrix); });
      const ink = new THREE.InstancedMesh(geo, inkWidth(.06), list.length); ink.frustumCulled = false; for (let i = 0; i < list.length; i++) { im.getMatrixAt(i, o.matrix); ink.setMatrixAt(i, o.matrix); } scene.add(ink);
    });
    /* Suzunaan: a two-storey book shop at the crossroads, with a noren curtain and a sign */
    const g = new THREE.Group(); g.position.set(sx, y, sz); g.rotation.y = -.245; scene.add(g);
    const wm = paint('#ffffff', { map: wallTex({ base: '#efe3cb', frame: '#5a3b28', posts: '#5a3b28', shoji: true, cols: 4, seed: 9 }) });
    add(g, box(10, 3.6, 7.5), wm, 0, 1.8, 0, 0, { ink: .05 });
    add(g, roofGeo(11.6, 9.4, 1.6, { lift: .3 }), ROOF.grey, 0, 3.6, 0, 0, { ink: .05 });
    add(g, box(8.4, 3, 6), wm, 0, 5.2, 0, 0, { ink: .05 });
    add(g, roofGeo(10.4, 8.2, 3, { lift: .5 }), ROOF.grey, 0, 6.7, 0, 0, { ink: .06 });
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 1.3), new THREE.MeshBasicMaterial({ map: signTex('铃奈庵', '#3a2b22', '#f3e3b8') })); sign.position.set(0, 4.1, 4.75); g.add(sign);
    const noren = paint('#3c5d8f', { side: THREE.DoubleSide }); for (let i = 0; i < 4; i++) add(g, box(1.1, 1.3, .05), noren, -1.8 + i * 1.2, 2.7, 3.85, 0, { shadow: false });
    anchors.push({ id: 'village', p: new THREE.Vector3(sx, y + 9, sz) });
  }
  function buildEientei() {
    const p = PADS[1], y = p.h, g = new THREE.Group(); g.position.set(p.x, y, p.z); g.rotation.y = -.5; scene.add(g);
    hall(g, { x: 0, y: 0, z: 0, w: 26, d: 11, h: 4.2, base: 1.2, hip: true, roof: ROOF.grey, rise: 5.5, over: 3.2 });
    hall(g, { x: -6, y: 0, z: 13, w: 11, d: 8, h: 3.6, base: 1, roof: ROOF.grey, rise: 3.4, over: 2 });
    hall(g, { x: 9, y: 0, z: -12, w: 9, d: 6, h: 3.2, base: 1, roof: ROOF.grey, rise: 2.8, over: 1.6 });
    /* bamboo grove: culms plus leaf-card crowns */
    const N = phone ? 800 : 1800;
    const culm = instanced(new THREE.CylinderGeometry(.2, .24, 1, 6), paint('#ffffff', { rim: .3 }), N, !phone);
    const lt = leafTex('cedar'); const leafGeo = cardClump(5, 2.2, .9, 'sphere');
    const leaf = instanced(leafGeo, paint('#ffffff', { map: lt, alphaTest: .45, side: THREE.DoubleSide, rim: .35, wrap: .3, sway: true }), N, !phone); leaf.customDepthMaterial = cardDepth(lt);
    const o = new THREE.Object3D(), c = new THREE.Color(); let n = 0, tries = 0;
    while (n < N && tries++ < N * 8) {
      const a = rand() * Math.PI * 2, r = 30 + Math.sqrt(rand()) * 100, x = p.x + Math.cos(a) * r * 1.2, z = p.z + Math.sin(a) * r;
      const gd = ground(x, z); if (gd.ny < .85 || gd.h < 4) continue;
      if (Math.hypot(x - PADS[0].x, z - PADS[0].z) < PADS[0].r + 6) continue;
      const h = 12 + rand() * 8;
      o.position.set(x, gd.h + h / 2, z); o.rotation.set((rand() - .5) * .12, 0, (rand() - .5) * .12); o.scale.set(1, h, 1); o.updateMatrix(); culm.setMatrixAt(n, o.matrix); culm.setColorAt(n, c.setHSL(.22 + rand() * .05, .5, .5 + rand() * .1));
      o.position.set(x, gd.h + h - 1, z); o.rotation.set(0, rand() * 3, 0); o.scale.set(1.5 + rand() * .6, 1.5 + rand() * .6, 1.5 + rand() * .6); o.updateMatrix(); leaf.setMatrixAt(n, o.matrix); leaf.setColorAt(n, c.setHSL(.24 + rand() * .06, .55, .42 + rand() * .1));
      n++;
    }
    culm.count = leaf.count = n;
    anchors.push({ id: 'eientei', p: new THREE.Vector3(p.x, y + 12, p.z) });
  }
  function buildSDM() {
    const p = PADS[2], y = p.h, g = new THREE.Group(); g.position.set(p.x, y, p.z); g.rotation.y = -.6; scene.add(g);
    const brick = paint('#ffffff', { map: wallTex({ base: '#c23a35', frame: '#f4e6d2', glass: '#3c3550', windows: true, cols: 6, rows: 2, trim: '#f4e6d2', dark: true, seed: 4 }) });
    const brickT = paint('#ffffff', { map: wallTex({ base: '#c23a35', frame: '#f4e6d2', glass: '#3c3550', windows: true, cols: 2, rows: 3, trim: '#f4e6d2', dark: true, seed: 6 }) });
    add(g, box(48, 1.2, 34), M.stone, 0, .6, 0);
    add(g, box(12, 11, 30), brick, 0, 6.7, 0, 0, { ink: .07 });
    add(g, roofGeo(32, 14, 5, { hip: true, sori: 1.05, lift: 0 }), ROOF.scarlet, 0, 12.2, 0, Math.PI / 2, { ink: .07 });
    for (const s of [-1, 1]) {
      add(g, box(16, 9, 11), brick, -4, 5.7, s * 18.5, 0, { ink: .07 }); add(g, roofGeo(18, 13, 4, { hip: true, sori: 1.05, lift: 0 }), ROOF.scarlet, -4, 10.2, s * 18.5, 0, { ink: .07 });
      add(g, new THREE.CylinderGeometry(2.6, 2.6, 14, 20), brickT, 3, 8.2, s * 26, 0, { ink: .07 }); add(g, new THREE.ConeGeometry(3.3, 6, 20), ROOF.scarlet, 3, 18.2, s * 26, 0, { ink: .07 });
    }
    /* the clock tower */
    add(g, box(7.5, 26, 7.5), brickT, 1, 13.6, 0, 0, { ink: .07 }); add(g, new THREE.ConeGeometry(6, 8, 4), ROOF.scarlet, 1, 30.6, 0, Math.PI / 4, { ink: .07 });
    const face = new THREE.Mesh(new THREE.CircleGeometry(2.6, 40), new THREE.MeshBasicMaterial({ map: canvasTex(128, 128, (gg) => { gg.fillStyle = '#fbf3e3'; gg.beginPath(); gg.arc(64, 64, 62, 0, 7); gg.fill(); gg.strokeStyle = '#b8922e'; gg.lineWidth = 6; gg.stroke(); gg.fillStyle = '#2b2326'; for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; gg.fillRect(64 + Math.cos(a) * 50 - 3, 64 + Math.sin(a) * 50 - 3, 6, 6); } gg.lineWidth = 6; gg.strokeStyle = '#2b2326'; gg.beginPath(); gg.moveTo(64, 64); gg.lineTo(64, 24); gg.moveTo(64, 64); gg.lineTo(92, 74); gg.stroke(); }) }));
    face.position.set(4.8, 21, 0); face.rotation.y = Math.PI / 2; g.add(face);
    /* gate, garden wall and rose beds */
    for (const s of [-1, 1]) { add(g, box(1.4, 5, 1.4), M.stone, 27, 2.5, s * 5, 0, { ink: .04 }); add(g, box(.9, 2.4, 22), paint('#d8cfc0'), 27, 1.2, s * 16.5, 0, { ink: .04 }); }
    add(g, box(1, 1, 11.4), M.shu, 27, 5.2, 0, 0, { ink: .04 });
    const rose = paint('#d43c4f'), hedge = paint('#3f8a3e');
    for (let i = 0; i < 12; i++) add(g, new THREE.SphereGeometry(1.4, 12, 8), i % 3 ? hedge : rose, 12 + (i % 6) * 2.5, 1.6, (i < 6 ? -1 : 1) * 9);
    for (let i = 0; i < 12; i++) { const a = rand() * Math.PI * 2, r = rand() * LAKE.r * .85; cloud(LAKE.x + Math.cos(a) * r, LAKE.level + 1, LAKE.z + Math.sin(a) * r, 26 + rand() * 18, .55); }
    anchors.push({ id: 'sdm', p: new THREE.Vector3(p.x, y + 36, p.z) });
  }
  function buildKourindou() {
    const p = PADS[3], y = p.h;
    const g = hall(scene, { x: p.x, y, z: p.z, ry: .4, w: 9, d: 7, h: 4, base: .5, roof: ROOF.brown, rise: 3, over: 1.4, veranda: false, wallMat: paint('#ffffff', { map: wallTex({ base: '#d9b98c', frame: '#5c3d27', posts: '#5c3d27', shoji: true, cols: 3, seed: 12 }) }) });
    const s = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 1.3), new THREE.MeshBasicMaterial({ map: signTex('香霖堂', '#2a2124', '#f6e7c1') })); s.position.set(0, 3.9, 3.56); g.add(s);
    const mats = [M.wood, M.stone, M.gold, M.pipe, paint('#7a8f6a')];
    for (let i = 0; i < 12; i++) add(g, i % 4 === 3 ? new THREE.CylinderGeometry(.5, .5, 1.2, 10) : box(.6 + rand() * 1.2, .5 + rand(), .6 + rand()), mats[i % 5], -3.5 + rand() * 8, .6, 5 + rand() * 3, rand(), { ink: .03 });
    lantern(g, 5.5, 0, 5, .8);
    anchors.push({ id: 'kourindou', p: new THREE.Vector3(p.x, y + 7, p.z) });
  }
  function buildGenbu() {
    const p = PADS[4], y = p.h, g = new THREE.Group(); g.position.set(p.x, y, p.z); g.rotation.y = .9; scene.add(g);
    hall(g, { w: 7, d: 5.6, h: 3.6, base: .4, roof: ROOF.green, rise: 2.4, over: 1.2, veranda: false });
    const wheel = new THREE.Group(); wheel.position.set(0, 3.2, -4.8); g.add(wheel);
    add(wheel, new THREE.TorusGeometry(3, .26, 8, 28), M.wood, 0, 0, 0, 0, { ink: .03 });
    for (let i = 0; i < 8; i++) add(wheel, box(.3, 3, .9), M.wood, 0, 0, 0).rotation.z = i * Math.PI / 8;
    for (let i = 0; i < 3; i++) add(g, new THREE.CylinderGeometry(.3, .3, 5, 10), M.pipe, -3.8, 1.6 + i * .8, -1 + i, 0, { ink: .03 }).rotation.z = Math.PI / 2;
    tick.push(t => { wheel.rotation.z = -t * .8; });
    anchors.push({ id: 'genbu', p: new THREE.Vector3(-112, y + 14, -285) });
  }
  function buildHakugyokurou() {
    const c = HAKUG, g = new THREE.Group(); g.position.copy(c); scene.add(g);
    /* Island body. Everything new here draws from its own random stream, so the global sequence (and with it the
       forest placement that the film shows) is unchanged. */
    const ir = mkRand(4242);
    const cone = new THREE.ConeGeometry(61, 96, 64, 16); cone.rotateX(Math.PI); cone.translate(0, -48, 0);
    const pp = cone.attributes.position;
    for (let i = 0; i < pp.count; i++) {
      const x = pp.getX(i), yy = pp.getY(i), z = pp.getZ(i), a = Math.atan2(z, x), k = 1 + yy / 96;   // k: 1 at the rim, 0 at the tip
      const lump = snoise(Math.cos(a) * 2.2 + yy * .02, Math.sin(a) * 2.2) * 6 + snoise(x * .07 + yy * .05, z * .07) * 3.5;
      const bulge = Math.sin(Math.min(1, -yy / 96) * Math.PI) * 9;   // a rounded belly instead of a straight cone
      const r = Math.hypot(x, z), rr = r > .01 ? (r + (lump + bulge) * Math.min(1, k * 3)) / r : 1;
      pp.setXYZ(i, x * rr, yy + snoise(x * .05, z * .05) * 4 * (1 - k), z * rr);
    }
    cone.computeVertexNormals();
    add(g, cone, paint('#ffffff', { rim: .45, wrap: .6, code: `{
      float hN = clamp((vW.y - ${(c.y - 98).toFixed(1)}) / 96.0, 0.0, 1.0);
      float ang = atan(vW.z - ${c.z.toFixed(1)}, vW.x - (${c.x.toFixed(1)}));
      float st = vn(vec2(vW.y * 0.32 + vn(vec2(ang * 3.0, vW.y * 0.05)) * 2.5, ang * 5.0));
      vec3 r1 = vec3(0.80, 0.60, 0.44), r2 = vec3(0.46, 0.33, 0.30), r3 = vec3(0.95, 0.82, 0.64);
      vec3 rock = mix(r2, r1, smoothstep(0.38, 0.46, st)); rock = mix(rock, r3, smoothstep(0.68, 0.72, st) * 0.8);
      rock *= 1.0 - 0.45 * smoothstep(0.05, 0.0, abs(vn(vec2(vW.y * 0.7, ang * 9.0)) - 0.5));
      rock = mix(rock, vec3(0.30, 0.46, 0.20), smoothstep(0.86, 0.95, hN + (vn(vec2(ang * 14.0, 1.0)) - 0.5) * 0.08));
      rock *= mix(0.62, 1.0, smoothstep(0.0, 0.7, hN));
      base.rgb = rock; }` }), 0, -2.2, 0);
    /* grassy top with a bevelled, irregular rim, painted like the ground */
    const rim = new THREE.Shape(); for (let i = 0; i <= 96; i++) { const a = i / 96 * Math.PI * 2, r = 60.5 + snoise(Math.cos(a) * 1.8, Math.sin(a) * 1.8) * 2.2; i ? rim.lineTo(Math.cos(a) * r, Math.sin(a) * r) : rim.moveTo(Math.cos(a) * r, Math.sin(a) * r); }
    const top = new THREE.ExtrudeGeometry(rim, { depth: 2.4, bevelEnabled: true, bevelThickness: 1.4, bevelSize: 1.8, bevelSegments: 3, curveSegments: 1 }); top.rotateX(-Math.PI / 2); top.translate(0, -3.5, 0);   // top surface at y = 0.1, as before
    add(g, top, paint('#ffffff', { code: TERRAIN_CODE, rim: 0, wrap: .15 }), 0, -.2, 0);
    /* white gravel court raked in rings in front of the hall, and a stone path from the stairway head */
    add(g, new THREE.CircleGeometry(15, 48).rotateX(-Math.PI / 2), paint('#ece6d6', { rim: 0, code: `base.rgb *= 0.93 + 0.07 * smoothstep(0.2, 0.5, abs(fract(length(vW.xz - vec2(${(c.x - 2).toFixed(1)}, ${(c.z + 10).toFixed(1)})) * 1.1) - 0.5) * 2.0);` }), -2, .16, 10, 0, { shadow: false });
    { const slab = instanced(box(2.2, .25, 1.5), M.stone, 16, false); scene.remove(slab); g.add(slab); const o = new THREE.Object3D();
      for (let i = 0; i < 16; i++) { const u = i / 15; o.position.set(lerp(44, 8, u) + (ir() - .5) * .6, .2, lerp(-24, -4, u) + (ir() - .5) * .6); o.rotation.y = Math.atan2(36, 20) + (ir() - .5) * .25; o.updateMatrix(); slab.setMatrixAt(i, o.matrix); } }
    /* a ring of dark pines and pale cherries around the rim */
    { const ltC = leafTex('cedar'), ltK = leafTex('sakura');
      const tiers = []; for (let i = 0; i < 6; i++) tiers.push([0, 3.6 + i * 1.55, 0, 1.15 - i * .15]);
      const pineG = cardClump(11, 2.2, 1.05, 'cone', tiers), cherG = cardClump(14, 2.4, 1.15, 'sphere', [[0, 6.8, 0, 1.1], [1.8, 5.9, .6, .8], [-1.6, 6.1, -.8, .85], [.4, 5.6, -1.8, .75]]);
      const trunkG = new THREE.CylinderGeometry(.28, .45, 5.5, 7); trunkG.translate(0, 2.75, 0);
      const mk = (geo, tex, n) => { const m = new THREE.InstancedMesh(geo, paint('#ffffff', { map: tex, alphaTest: .45, side: THREE.DoubleSide, rim: .35, wrap: .35, sway: true }), n); m.customDepthMaterial = cardDepth(tex); m.castShadow = m.receiveShadow = true; m.frustumCulled = false; m.count = 0; g.add(m); return m; };
      const pines = mk(pineG, ltC, 26), chers = mk(cherG, ltK, 14), trunks = new THREE.InstancedMesh(trunkG, paint('#6a4a35', { rim: .1 }), 40); trunks.count = 0; trunks.frustumCulled = false; g.add(trunks);
      const o = new THREE.Object3D(), col = new THREE.Color(), stairA = Math.atan2(-26, 48);
      for (let i = 0, tries = 0; i < 40 && tries < 400; tries++) {
        const a = ir() * Math.PI * 2, r = 36 + ir() * 19, x = Math.cos(a) * r, z = Math.sin(a) * r;
        if (Math.abs(Math.atan2(Math.sin(a - stairA), Math.cos(a - stairA))) < .32 || Math.hypot(x - 18, z - 18) < 16) continue;
        const cherry = chers.count < 14 && ir() < .38, m = cherry ? chers : pines;
        if (!cherry && pines.count >= 26) continue;
        const sc = .85 + ir() * .5; o.position.set(x, .05, z); o.rotation.set(0, ir() * 6.28, 0); o.scale.set(sc, sc * (.9 + ir() * .3), sc); o.updateMatrix();
        m.setMatrixAt(m.count, o.matrix); m.setColorAt(m.count, cherry ? col.setHSL(.95 + ir() * .03, .72, .85 + ir() * .05) : col.setHSL(.37 + ir() * .05, .42, .3 + ir() * .06)); m.count++;
        trunks.setMatrixAt(trunks.count++, o.matrix); i++;
      } }
    hall(g, { x: -8, z: -6, ry: .3, w: 32, d: 14, h: 5, base: 1, hip: true, roof: ROOF.grey, rise: 6, over: 3, plinth: true });
    hall(g, { x: 16, z: -20, ry: .3, w: 14, d: 10, h: 4.2, base: 1, roof: ROOF.grey, rise: 3.6, over: 2 });
    /* Saigyou Ayakashi: a vast pale cherry tree */
    add(g, new THREE.CylinderGeometry(1.4, 3.2, 18, 12), M.wood, 18, 9, 18, 0, { ink: .05 });
    const st = leafTex('sakura'), cg = cardClump(14, 9, 1.1, 'sphere');
    for (let i = 0; i < 8; i++) { const m = add(g, cg, paint('#f9e1ec', { map: st, alphaTest: .45, side: THREE.DoubleSide, rim: .5, wrap: .35 }), 18 + (rand() - .5) * 20, 20 + rand() * 7, 18 + (rand() - .5) * 18, rand() * 6); m.customDepthMaterial = cardDepth(st); m.scale.setScalar(.9 + rand() * .4); }
    /* the long stairway descending into the clouds */
    const n = 80, steps = new THREE.InstancedMesh(box(6, .5, 1.6), M.stone, n), o = new THREE.Object3D();
    const dir = new THREE.Vector3(0.62, -0.68, -0.38).normalize();
    for (let i = 0; i < n; i++) { o.position.set(48, -1, -26).addScaledVector(dir, i * 2.1); o.rotation.set(0, Math.atan2(dir.x, dir.z), 0); o.updateMatrix(); steps.setMatrixAt(i, o.matrix); }
    steps.frustumCulled = false; steps.castShadow = true; g.add(steps);
    for (let i = 0; i < 14; i++) { const a = rand() * Math.PI * 2, r = 30 + rand() * 50; cloud(c.x + Math.cos(a) * r, c.y - 80 - rand() * 40, c.z + Math.sin(a) * r, 60 + rand() * 40, 1); }
    anchors.push({ id: 'hakugyokurou', p: new THREE.Vector3(c.x, c.y + 18, c.z) });
  }

  /* ---------- trees: clumps of leaf cards whose normals point out from the crown ---------- */
  function cardClump(nCards, R, cardS, shape = 'sphere', centers = null) {
    const r = mkRand(nCards * 31 + Math.round(R * 10));
    const pos = [], nor = [], uv = [], idx = [];
    const cs = centers || [[0, 0, 0, 1]];
    for (const [cx, cy, cz, cr] of cs) {
      const n = Math.round(nCards * cr);
      for (let i = 0; i < n; i++) {
        const u = r() * 2 - 1, th = r() * Math.PI * 2, s = Math.sqrt(1 - u * u);
        const d = new THREE.Vector3(s * Math.cos(th), u * (shape === 'cone' ? .55 : .85), s * Math.sin(th));
        const c = new THREE.Vector3(cx, cy, cz).addScaledVector(d, R * cr * (.55 + r() * .35));
        /* card orientation: random rotation facing roughly outward */
        const nrm = d.clone().normalize();
        const t1 = new THREE.Vector3().crossVectors(nrm, new THREE.Vector3(r() - .5, 1, r() - .5)).normalize(), t2 = new THREE.Vector3().crossVectors(nrm, t1);
        const a = r() * Math.PI * 2, e1 = t1.clone().multiplyScalar(Math.cos(a)).addScaledVector(t2, Math.sin(a)), e2 = t1.clone().multiplyScalar(-Math.sin(a)).addScaledVector(t2, Math.cos(a));
        const sz = cardS * R * cr * (.8 + r() * .5);
        const base = pos.length / 3;
        for (const [px, py, uu, vv] of [[-1, -1, 0, 0], [1, -1, 1, 0], [1, 1, 1, 1], [-1, 1, 0, 1]]) {
          const v = c.clone().addScaledVector(e1, px * sz * .5).addScaledVector(e2, py * sz * .5);
          pos.push(v.x, v.y, v.z);
          const on = v.clone().sub(new THREE.Vector3(cx * .4, cy * .4 - R * .2, cz * .4)).normalize(); nor.push(on.x, on.y, on.z); uv.push(uu, vv);
        }
        idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
      }
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx);
    return g;
  }
  function buildTrees() {
    const NC = Math.round((phone ? 1100 : 2600) * quality), NB = Math.round((phone ? 1100 : 2800) * quality), NS = 80;
    /* broadleaf crown: five clumps; cedar: stacked tiers along a cone */
    const broad = cardClump(14, 2.4, 1.15, 'sphere', [[0, 6.8, 0, 1.1], [1.8, 5.9, .6, .8], [-1.6, 6.1, -.8, .85], [.4, 5.6, -1.8, .75], [-.4, 8.1, .3, .7]]);
    const tiers = []; for (let i = 0; i < 6; i++) tiers.push([0, 3.6 + i * 1.55, 0, 1.15 - i * .15]);
    const cedar = cardClump(11, 2.2, 1.05, 'cone', tiers);
    const trunk = new THREE.CylinderGeometry(.28, .45, 5.5, 7); trunk.translate(0, 2.75, 0);
    const ltB = leafTex('broad'), ltC = leafTex('cedar'), ltS = leafTex('sakura');
    const mk = (geo, tex, n) => { const m = instanced(geo, paint('#ffffff', { map: tex, alphaTest: .45, side: THREE.DoubleSide, rim: .35, wrap: .35, sway: true }), n, true); m.customDepthMaterial = cardDepth(tex); m.count = 0; return m; };
    const bm = mk(broad, ltB, NB), cm = mk(cedar, ltC, NC), sk = mk(broad, ltS, NS);
    treeSets.push({ mesh: bm, geo: broad, tex: ltB }, { mesh: cm, geo: cedar, tex: ltC }, { mesh: sk, geo: broad, tex: ltS });
    const tm = instanced(trunk, paint('#6a4a35', { rim: .1 }), NC + NB + NS, false); tm.count = 0;
    const o = new THREE.Object3D(), c = new THREE.Color();
    const blocked = (x, z) => {
      for (const p of PADS) if (Math.hypot(x - p.x, z - p.z) < p.r + 5) return true;
      if (Math.hypot(x - SUMMIT.x, z - SUMMIT.z) < SUMMIT.r + 6) return true;
      if (Math.hypot(x - PADS[1].x, z - PADS[1].z) < 140) return true;
      if (trailInfo(x, z)[0] < 7.5) return true;
      if (inRiverBox(x, z)) { const [d, i] = nearest(RIV, x, z); if (d < RIV[i].hw + 6) return true; }
      return false;
    };
    const place = (m, x, z, h, s, col) => { o.position.set(x, h - .3, z); o.rotation.set(0, rand() * 6.28, 0); o.scale.set(s, s * (.85 + rand() * .35), s); o.updateMatrix(); m.setMatrixAt(m.count, o.matrix); m.setColorAt(m.count, col); m.count++; tm.setMatrixAt(tm.count, o.matrix); tm.count++; };
    let tries = 0;
    const FOM = { x: 260, z: -170, r: 125 };
    while ((cm.count < NC || bm.count < NB) && tries++ < 120000) {
      let x, z;
      if (rand() < .32) { x = 380 + rand() * 250; z = -180 + rand() * 320; } else { x = -640 + rand() * 1120; z = -640 + rand() * 1280; }
      const gd = ground(x, z); if (gd.h < 5 || gd.ny < .74 || gd.h > 228 || x > 615) continue;
      if (blocked(x, z)) continue;
      const inFom = Math.hypot(x - FOM.x, z - FOM.z) < FOM.r;
      const dens = inFom ? .95 : sm(-.15, .45, fbm(x / 170 + 9, z / 170 - 4, 3)) * (x > 380 ? 1.15 : .8);
      if (rand() > dens) continue;
      const cedarP = x > 380 ? .72 : gd.h > 70 ? .7 : inFom ? .25 : .35;
      if (rand() < cedarP && cm.count < NC) place(cm, x, z, gd.h, .85 + rand() * .6, c.setHSL(.36 + rand() * .05, .45 + rand() * .1, .36 + rand() * .07));
      else if (bm.count < NB) place(bm, x, z, gd.h, .8 + rand() * .55, inFom ? c.setHSL(.33 + rand() * .06, .42, .36 + rand() * .06) : c.setHSL(.22 + rand() * .07, .55 + rand() * .15, .42 + rand() * .1));
    }
    for (let i = 0; i < NS; i++) {
      let x, z;
      if (i < 16) { const a = rand() * Math.PI * 2, r = 19 + rand() * 10; x = SUMMIT.x + Math.cos(a) * r; z = SUMMIT.z + Math.sin(a) * r; if (Math.abs(z) < 9 && x > 392) continue; }
      else { const a = rand() * Math.PI * 2, r = 80 + rand() * 120; x = PADS[0].x + Math.cos(a) * r; z = PADS[0].z + Math.sin(a) * r; if (blocked(x, z)) continue; }
      const gd = ground(x, z); if (gd.h < 5) continue;
      place(sk, x, z, gd.h, 1 + rand() * .4, c.setHSL(.95 + rand() * .03, .75, .86 + rand() * .05));
    }
  }
  function buildRocks() {
    const geo = new THREE.DodecahedronGeometry(1, 1); const p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), z = p.getZ(i), n = 1 + snoise(x * 1.7 + y, z * 1.7) * .22; p.setXYZ(i, x * n, y * n * .75, z * n); }
    geo.computeVertexNormals();
    const N = phone ? 350 : 900, m = instanced(geo, paint('#ffffff', { rim: .2 }), N), o = new THREE.Object3D(), c = new THREE.Color(), a = new THREE.Vector3(), b = new THREE.Vector3();
    let n = 0, tries = 0;
    while (n < N && tries++ < N * 10) {
      const s = rand() * S_TORII; trailAt(s, a); trailAt(s + 1, b);
      const side = rand() < .5 ? -1 : 1, tx = b.x - a.x, tz = b.z - a.z, l = Math.hypot(tx, tz) || 1, off = 4.4 + Math.pow(rand(), 1.6) * 30;
      const x = a.x - tz / l * off * side, z = a.z + tx / l * off * side;
      if (trailInfo(x, z)[0] < 4.2) continue;
      const gd = ground(x, z), near = off < 8, sc = (near ? .5 : .7) + rand() * (near ? .9 : 2.4);
      o.position.set(x, gd.h - sc * .25, z); o.rotation.set(rand() * 3, rand() * 3, rand() * 3); o.scale.set(sc * (1 + rand() * .6), sc, sc * (1 + rand() * .5)); o.updateMatrix(); m.setMatrixAt(n, o.matrix);
      m.setColorAt(n, c.setHSL(.08 + rand() * .04, .1 + rand() * .06, .58 + rand() * .14)); n++;
    }
    m.count = n;
  }
  /* grass tufts and flowers along the climb, for close-range detail in the flight */
  function buildGrass() {
    const tex = grassTex(); const geo = new THREE.PlaneGeometry(1, 1); geo.translate(0, .5, 0);
    const cross = merge([geo.clone(), geo.clone().rotateY(Math.PI / 2)]);
    const N = phone ? 3000 : 9000;
    const m = instanced(cross, paint('#ffffff', { map: tex, alphaTest: .4, side: THREE.DoubleSide, rim: .2, wrap: .5, sway: true }), N, false);
    const o = new THREE.Object3D(), c = new THREE.Color(), a = new THREE.Vector3(), b = new THREE.Vector3(); let n = 0, tries = 0;
    while (n < N && tries++ < N * 6) {
      const s = rand() * TR_LEN; trailAt(s, a); trailAt(s + 1, b);
      const side = rand() < .5 ? -1 : 1, tx = b.x - a.x, tz = b.z - a.z, l = Math.hypot(tx, tz) || 1, off = 3.2 + Math.pow(rand(), 1.3) * 16;
      const x = a.x - tz / l * off * side, z = a.z + tx / l * off * side;
      if (trailInfo(x, z)[0] < 3.2) continue;
      const gd = ground(x, z); if (gd.ny < .6) continue;
      const sc = .7 + rand() * .9; o.position.set(x, gd.h - .05, z); o.rotation.set(0, rand() * 3, 0); o.scale.set(sc * 1.4, sc, sc * 1.4); o.updateMatrix(); m.setMatrixAt(n, o.matrix);
      const flower = rand() < .08; m.setColorAt(n, flower ? c.set(rand() < .5 ? '#ffe36b' : '#ffffff') : c.setHSL(.22 + rand() * .06, .55, .45 + rand() * .12)); n++;
    }
    m.count = n;
  }

  /* ---------- build ---------- */
  onStep('terrain'); buildTerrain();
  onStep('water'); buildWater(); buildClouds();
  onStep('landmarks'); buildHakurei(); buildStairs(); buildVillage(); buildEientei(); buildSDM(); buildKourindou(); buildGenbu(); buildHakugyokurou();
  onStep('forest'); buildTrees(); buildRocks(); buildGrass();

  /* ================= lighting presets ================= */
  const SUN_CLIMB = new THREE.Vector3(-0.97, 0.16, 0.10).normalize();
  const SUN_MAP = new THREE.Vector3(-0.40, 0.62, 0.68).normalize();
  const PRESET = {
    climb: { sun: '#ffe9c8', shade: '#b9b4d8', sky: '#d6e6f8', ground: '#e0c79a', fog: '#f4e6d2', fogSun: '#fff2dc', den: .0011, zen: '#3b86d8', mid: '#9ccaf0', hor: '#fbe9d2', glow: '#fff1d6', glowK: 1.2 },
    map: { sun: '#fff8ec', shade: '#98a2d2', sky: '#c4e2ff', ground: '#cdb98d', fog: '#d2e6f6', fogSun: '#fff2dc', den: .00020, zen: '#2c7ad3', mid: '#78b8ee', hor: '#e9f4fb', glow: '#fff4e0', glowK: .6 },
  };
  const tmpA = new THREE.Color(), tmpB = new THREE.Color();
  function setLight(k) {
    const A = PRESET.climb, B = PRESET.map, mixc = (u, a, b) => u.value.copy(tmpA.set(a)).lerp(tmpB.set(b), k);
    LIGHT.uSunDir.value.copy(SUN_CLIMB).lerp(SUN_MAP, k).normalize();
    mixc(LIGHT.uSunCol, A.sun, B.sun); mixc(LIGHT.uShadeCol, A.shade, B.shade); mixc(LIGHT.uSkyCol, A.sky, B.sky); mixc(LIGHT.uGroundCol, A.ground, B.ground);
    mixc(LIGHT.uFogCol, A.fog, B.fog); mixc(LIGHT.uFogSun, A.fogSun, B.fogSun); LIGHT.uFogDen.value = lerp(A.den, B.den, k);
    mixc(skyU.uZen, A.zen, B.zen); mixc(skyU.uMid, A.mid, B.mid); mixc(skyU.uHor, A.hor, B.hor); mixc(skyU.uGlow, A.glow, B.glow); skyU.uGlowK.value = lerp(A.glowK, B.glowK, k);
  }
  setLight(1);

  /* ================= camera rigs ================= */
  const MAP = { target: new THREE.Vector3(-40, 10, -30), dist: 1000, polar: 60, az: 17, fov: 50 };
  const PLACE_VIEWS = { // focus, label height and camera [distance, polar, azimuth]
    hakurei: { p: new THREE.Vector3(414, SUMMIT.h + 5, 0), view: [86, 62, 36] },
    genbu: { p: new THREE.Vector3(-112, PADS[4].h + 8, -285), view: [120, 58, 70] },
    village: { p: new THREE.Vector3(PADS[0].x, PADS[0].h + 3, PADS[0].z), view: [165, 54, 45] },
    eientei: { p: new THREE.Vector3(PADS[1].x, PADS[1].h + 4, PADS[1].z), view: [130, 52, 40] },
    sdm: { p: new THREE.Vector3(PADS[2].x, PADS[2].h + 9, PADS[2].z), view: [170, 60, 50] },
    kourindou: { p: new THREE.Vector3(PADS[3].x, PADS[3].h + 3, PADS[3].z), view: [62, 60, 40] },
    hakugyokurou: { p: new THREE.Vector3(-400, 248, 262), view: [190, 70, 30] },
  };
  function viewFrom(target, dist, polar, az, portrait) {
    const p = THREE.MathUtils.degToRad(polar), a = THREE.MathUtils.degToRad(az), k = portrait ? 1.55 : 1;
    return new THREE.Vector3(Math.sin(p) * Math.cos(a), Math.cos(p), Math.sin(p) * Math.sin(a)).multiplyScalar(dist * k).add(target);
  }
  const mapView = (portrait) => ({ cam: viewFrom(MAP.target, MAP.dist, MAP.polar, MAP.az, portrait), target: MAP.target.clone(), fov: portrait ? 60 : MAP.fov });
  const placeView = (id, portrait) => { const P = PLACE_VIEWS[id]; return { cam: viewFrom(P.p, P.view[0], P.view[1], P.view[2], portrait), target: P.p.clone(), fov: portrait ? 60 : MAP.fov }; };

  /* the film timeline, in seconds */
  const T = { climb0: 1.0, torii: 8.05, end: 15.0 };
  const T_E = T.torii + .25;
  const F_TAB = []; { let a = 0; const f = t => .3 + .7 * sm(T.climb0 - .6, T.climb0 + .8, t) + .2 * sm(6.2, 7.6, t); for (let i = 0; i <= 900; i++) { F_TAB.push(a); a += f(i / 100) * .01; } }
  /* scale so that the torii is reached exactly at T.torii */
  const rawAt = t => { const i = clamp(t * 100, 0, 900), k = Math.floor(i), w = i - k; return lerp(F_TAB[k], F_TAB[Math.min(900, k + 1)], w); };
  const S0 = 46, sAt = t => S0 + rawAt(t) / rawAt(T.torii) * (S_TORII - S0);
  const reveal = { curve: null, portrait: null };
  function revealCurve(portrait) {
    if (reveal.portrait === portrait) return reveal.curve;
    const mv = mapView(portrait), E = trailAt(sAt(T_E)).add(new THREE.Vector3(0, 1.7, 0));
    const c = new THREE.CatmullRomCurve3([E, new THREE.Vector3(396, SUMMIT.h + 26, 2), new THREE.Vector3(360, SUMMIT.h + 110, 30), new THREE.Vector3(420, SUMMIT.h + 300, 90), mv.cam], false, 'centripetal');
    c.mv = mv; c.E = E; reveal.curve = c; reveal.portrait = portrait; return c;
  }
  const _p = new THREE.Vector3(), _q = new THREE.Vector3(), _r = new THREE.Vector3();
  function filmPose(t, portrait = false) {
    const out = { pos: new THREE.Vector3(), look: new THREE.Vector3(), fov: 70, roll: 0, speed: 0, white: 0, light: 0, bloom: .35, flare: 0 };
    const wPeak = T.torii + .1;
    out.white = sm(wPeak - .35, wPeak, t) * (1 - sm(wPeak + .25, wPeak + 1.1, t));
    if (t <= T_E) {
      const s = sAt(t), p = trailAt(s, _p);
      const ds = (sAt(t + .02) - sAt(Math.max(t - .02, 0))) / .04; out.speed = ds;
      const bob = Math.sin(t * 9.1) * .06 + Math.sin(t * 15.3) * .03;
      out.pos.set(p.x, p.y + 1.7 + bob, p.z);
      const ahead = trailAt(s + 16, _q), lift = sm(6.6, 7.9, t) * 6.0;
      if (s + 16 > TR_LEN) ahead.x -= (s + 16 - TR_LEN);
      out.look.set(ahead.x, ahead.y + 1.4 + lift + 4.0 * (1 - sm(T.climb0, T.climb0 + 2, t)), ahead.z);
      const a8 = trailAt(s + 8, _r).clone(), a20 = trailAt(s + 20, _r);
      let dy = Math.atan2(a20.z - a8.z, a20.x - a8.x) - Math.atan2(a8.z - p.z, a8.x - p.x);
      while (dy > Math.PI) dy -= Math.PI * 2; while (dy < -Math.PI) dy += Math.PI * 2;
      out.roll = clamp(-dy * .9, -.3, .3);
      out.fov = 66 + 16 * sm(T.climb0 - .4, T.climb0 + 1.2, t) + 12 * sm(6.8, T.torii, t);
      out.bloom = .35 + .9 * sm(6.6, T.torii, t);
      out.flare = .45 + .55 * sm(5.0, T.torii - .2, t);
      out.light = 0;
    } else {
      const u = clamp((t - T_E) / (T.end - T_E), 0, 1);
      const c = revealCurve(portrait);
      /* a quick burst out over the shrine, then a long slow crane back */
      const e = u < .3 ? easeOut(u / .3) * .38 : .38 + .62 * ease3((u - .3) / .7);
      c.getPoint(e, out.pos);
      const fwd = c.E.clone().add(new THREE.Vector3(-260, -60, 10));
      out.look.copy(fwd).lerp(c.mv.target, ease3(clamp(u * 1.3, 0, 1)));
      out.fov = lerp(104, c.mv.fov, easeOut(clamp(u * 1.6, 0, 1)));
      out.bloom = lerp(1.1, .3, sm(0, .3, u));
      out.flare = lerp(.4, 0, sm(0, .25, u));
      out.speed = 30 * (1 - sm(0, .3, u));
      out.light = 1;
    }
    if (portrait) {
      /* keep the horizontal field of view similar to the landscape cut */
      const hl = 2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(out.fov) / 2) * 16 / 9) * (t <= T_E ? .66 : .9);
      out.fov = THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(hl / 2) * 16 / 9));
      if (t > T_E) out.fov = lerp(out.fov, mapView(true).fov, sm(.5, 1, (t - T_E) / (T.end - T_E)));
    }
    return out;
  }
  function applyFilm(t, portrait = false) {
    const P = filmPose(t, portrait);
    camera.position.copy(P.pos); camera.up.set(0, 1, 0); camera.lookAt(P.look); camera.rotateZ(P.roll);
    camera.fov = P.fov; camera.updateProjectionMatrix();
    setLight(sm(T.torii, T.torii + .3, t));
    if (t < T_E) setShadowBox(P.pos, 80); else setShadowBox(new THREE.Vector3(60, 60, 0), 700);
    update(t);
    return P;
  }
  function update(time) {
    LIGHT.uTime.value = time;
    for (const f of tick) f(time);
  }
  function setCamera(cam, target, fov) { camera.position.copy(cam); camera.up.set(0, 1, 0); camera.lookAt(target); camera.fov = fov; camera.updateProjectionMatrix(); }
  function sunScreen() { const s = camera.position.clone().addScaledVector(LIGHT.uSunDir.value, 5000).project(camera); return { x: s.x * .5 + .5, y: s.y * .5 + .5, front: s.z < 1 }; }


  /* ================= live map: distant trees as baked impostors ================= */
  /* Each leaf-card crown is rendered once into a normal map seen from 35 degrees above. Far trees draw one
     camera-facing card lit by those normals with the same toon ramp, so the forest reads as soft painted crowns
     instead of sub-pixel leaf cards. Cards and impostors cross-fade between uLod.x and uLod.y. */
  const IMP_V = `
    uniform vec4 uBox; uniform vec3 uSunDir;
    varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vAw;
    #include <common>
    #include <color_pars_vertex>
    #include <shadowmap_pars_vertex>
    void main(){
      vUv = uv; vAw = 0.0;
      #include <color_vertex>
      vec4 ip = modelMatrix * instanceMatrix * vec4(0.0, uBox.x, 0.0, 1.0);
      float sx = length(instanceMatrix[0].xyz), sy = length(instanceMatrix[1].xyz);
      vec3 camR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
      vec3 camU = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
      vec3 toCam = normalize(cameraPosition - ip.xyz);
      vec3 wp3 = ip.xyz + camR * position.x * uBox.y * sx + camU * position.y * uBox.y * sy + toCam * uBox.z * sx;
      vec4 worldPosition = vec4(wp3, 1.0);
      vec4 mvPosition = viewMatrix * worldPosition;
      gl_Position = projectionMatrix * mvPosition;
      vW = wp3; vN = toCam;
      vec3 transformedNormal = (viewMatrix * vec4(uSunDir, 0.0)).xyz;
      worldPosition.xyz += uSunDir * uBox.y * sx * 0.9;   // look up shadows at the sunlit top of the crown
      #include <shadowmap_vertex>
    }`;
  function bakeCrown(geo, tex, size = 512) {
    geo.computeBoundingSphere();
    const bs = geo.boundingSphere, r = bs.radius * .92;
    const cam = new THREE.OrthographicCamera(-r, r, r, -r, .1, r * 8);
    const el = THREE.MathUtils.degToRad(35);
    cam.position.copy(bs.center).add(new THREE.Vector3(Math.cos(el), Math.sin(el), 0).multiplyScalar(r * 3)); cam.lookAt(bs.center);
    const mat = new THREE.ShaderMaterial({ side: THREE.DoubleSide, uniforms: { uMap: { value: tex } },
      vertexShader: `varying vec3 vN; varying vec2 vUv; void main(){ vUv = uv; vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `uniform sampler2D uMap; varying vec3 vN; varying vec2 vUv; void main(){ if (texture2D(uMap, vUv).a < 0.45) discard; vec3 n = normalize(vN); if (n.z < 0.0) n.z = -n.z * 0.3; gl_FragColor = vec4(normalize(n) * 0.5 + 0.5, 1.0); }` });
    const sc = new THREE.Scene(); sc.add(new THREE.Mesh(geo, mat));
    const rt = new THREE.WebGLRenderTarget(size, size, { samples: 4 });
    const prevRT = renderer.getRenderTarget(), prevCol = renderer.getClearColor(new THREE.Color()), prevA = renderer.getClearAlpha();
    renderer.setRenderTarget(rt); renderer.setClearColor(new THREE.Color(.5, .5, 1), 0); renderer.clear(); renderer.render(sc, cam);
    const px = new Uint8Array(size * size * 4); renderer.readRenderTargetPixels(rt, 0, 0, size, size, px);
    renderer.setRenderTarget(prevRT); renderer.setClearColor(prevCol, prevA); rt.dispose(); mat.dispose();
    for (let i = 0; i < px.length; i += 4) if (px[i + 3] < 8) { px[i] = 128; px[i + 1] = 128; px[i + 2] = 255; px[i + 3] = 0; }
    const t = new THREE.DataTexture(px, size, size, THREE.RGBAFormat); t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter; t.anisotropy = 4; t.needsUpdate = true;
    return { tex: t, cy: bs.center.y, half: r };
  }
  let lodOn = false;
  function enableTreeLod({ near = 240, far = 330 } = {}) {
    if (lodOn) return; lodOn = true;
    LIGHT.uLod.value.set(near, far);
    const quad = new THREE.PlaneGeometry(2, 2);
    const baked = new Map();
    for (const set of treeSets) {
      const src = set.mesh;
      if (!baked.has(set.geo.uuid + set.tex.uuid)) baked.set(set.geo.uuid + set.tex.uuid, bakeCrown(set.geo, set.tex));
      const b = baked.get(set.geo.uuid + set.tex.uuid);
      const m = paint('#ffffff', { map: b.tex, alphaTest: .5, rim: .35, wrap: .35 });
      m.vertexShader = IMP_V; m.defines.IMPOSTOR = ''; m.defines.LODFADE = '';
      m.uniforms.uBox = { value: new THREE.Vector4(b.cy, b.half, b.half * .6, 0) };
      m.uniforms.uTint = { value: set.tex === treeSets[2].tex ? new THREE.Vector3(.8, .62, .72) : new THREE.Vector3(.8, .8, .8) };
      if (renderer.capabilities.isWebGL2) { m.defines.A2C = ''; m.alphaToCoverage = true; }
      const imp = new THREE.InstancedMesh(quad, m, src.instanceMatrix.count);
      imp.instanceMatrix = src.instanceMatrix; imp.instanceColor = src.instanceColor; imp.count = src.count;
      imp.frustumCulled = false; imp.castShadow = false; imp.receiveShadow = true; scene.add(imp);
      src.material.defines.LODFADE = ''; src.material.needsUpdate = true;
    }
  }
  return { scene, camera, sun, LIGHT, setLight, setShadowBox, applyFilm, filmPose, update, setCamera, mapView, placeView, PLACE_VIEWS, anchors, T, sunScreen, ground, enableTreeLod };
}
