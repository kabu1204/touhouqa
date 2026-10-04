/* TouhouQA opening film: the 2D layers composited over the painted 3D plates. */
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, spring, interpolate, delayRender, continueRender } from 'remotion';
import '@fontsource/noto-serif-sc/700.css';
import '@fontsource/noto-serif-sc/900.css';
import '@fontsource/cinzel-decorative/900.css';
import '@fontsource/cormorant-garamond/600-italic.css';
import '@fontsource/jetbrains-mono/700.css';

const C = { shu: '#cf2f2a', shuDeep: '#a3211d', gold: '#b88d22', goldSoft: '#e6cf86', ink: '#2a2124', inkSoft: '#66585a', washi: '#fffaf3' };
const ZH = "'Noto Serif SC', serif", SERIF = "'Cormorant Garamond', serif", MONO = "'JetBrains Mono', monospace";
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const sm = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const ci = (f, inR, outR, ease) => interpolate(f, inR, outR, { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease });
const easeOut = t => 1 - Math.pow(1 - t, 3);
function rng(seed) { let s = seed % 2147483647; if (s <= 0) s += 2147483646; return () => (s = (s * 16807) % 2147483647) / 2147483647; }

/* frame landmarks of the 3D timeline (30 fps) */
const F = { open: 34, impact: 239, whitePeak: 244, cutIn: 262, cutOut: 322, marisa: 318, seals: 340, sealsOut: 412, end: 450 };

const SEALS = [
  { id: 'hakurei', kj: '神', zh: '博丽神社', en: 'Hakurei Shrine' },
  { id: 'genbu', kj: '河', zh: '玄武之泽', en: 'Genbu Ravine' },
  { id: 'village', kj: '书', zh: '铃奈庵', en: 'Suzunaan' },
  { id: 'eientei', kj: '永', zh: '永远亭', en: 'Eientei' },
  { id: 'sdm', kj: '红', zh: '红魔馆', en: 'Scarlet Devil Mansion' },
  { id: 'kourindou', kj: '香', zh: '香霖堂', en: 'Kourindou' },
  { id: 'hakugyokurou', kj: '冥', zh: '白玉楼', en: 'Hakugyokurou' },
];

/* ---------- a canvas layer that is redrawn every frame ---------- */
function CanvasLayer({ draw, blend }) {
  const ref = useRef(null), frame = useCurrentFrame(), { width, height } = useVideoConfig();
  useLayoutEffect(() => { const c = ref.current, g = c.getContext('2d'); g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, width, height); draw(g, frame, width, height); });
  return <canvas ref={ref} width={width} height={height} style={{ position: 'absolute', inset: 0, mixBlendMode: blend || 'normal' }} />;
}

/* ---------- shot 1: the ofuda opening ---------- */
function Opening() {
  const f = useCurrentFrame(), { width: W, height: H, fps } = useVideoConfig(), u = Math.min(W, H) / 1080;
  if (f > F.open + 2) return null;
  const slap = spring({ frame: f - 3, fps, config: { damping: 11, mass: .6 } });
  const ofS = interpolate(slap, [0, 1], [2.6, 1]), ofO = f < 3 ? 0 : 1;
  const hole = ci(f, [15, F.open], [0, Math.hypot(W, H) * .62], t => t * t);
  const orb = ci(f, [13, 20], [0, 1], easeOut), orbFade = 1 - ci(f, [24, 33], [0, 1]);
  const shake = f >= 4 && f <= 9 ? Math.sin(f * 7.1) * 10 * u * (10 - f) / 6 : 0;
  const ofLeave = ci(f, [12, 19], [0, 1], t => t * t);
  return (
    <AbsoluteFill style={{ transform: `translate(${shake}px, ${shake * .6}px)` }}>
      <svg width={W} height={H} style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <filter id="fiber"><feTurbulence type="fractalNoise" baseFrequency="0.012 0.09" numOctaves="3" seed="4" /><feColorMatrix values="0 0 0 0 0.55  0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0.10 0" /></filter>
          <filter id="tear"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="9" /><feDisplacementMap in="SourceGraphic" scale={60 * u} /></filter>
          <mask id="hole"><rect width={W} height={H} fill="white" /><circle cx={W / 2} cy={H / 2} r={hole} fill="black" filter="url(#tear)" /></mask>
          <radialGradient id="wv" cx="50%" cy="50%" r="70%"><stop offset="60%" stopColor="#fffaf0" /><stop offset="100%" stopColor="#efe2c8" /></radialGradient>
        </defs>
        <g mask="url(#hole)">
          <rect width={W} height={H} fill="url(#wv)" />
          <rect width={W} height={H} filter="url(#fiber)" />
          <text x={W / 2} y={H * .9} textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize={16 * u} letterSpacing={8 * u} fill={C.inkSoft} opacity={ci(f, [6, 12], [0, .8])}>TOUHOUQA · 东方问答</text>
        </g>
      </svg>
      {/* the ofuda */}
      <div style={{ position: 'absolute', left: '50%', top: '50%', width: 150 * u, height: 440 * u, marginLeft: -75 * u, marginTop: -220 * u, opacity: ofO * (1 - ofLeave),
        transform: `scale(${ofS * (1 - ofLeave * .6)}) rotate(${-4 + (1 - slap) * -10 + ofLeave * 25}deg)`, background: 'linear-gradient(180deg,#fffdf6,#f6ecd6)', border: `${5 * u}px solid ${C.shu}`,
        boxShadow: `0 ${18 * u}px ${40 * u}px rgba(90,40,20,${.35 * (1 - ofLeave)}), inset 0 0 0 ${7 * u}px #fffaf0, inset 0 0 0 ${9 * u}px ${C.shu}`, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 34 * u }}>
        <div style={{ width: 54 * u, height: 54 * u, borderRadius: '50%', background: C.shu, display: 'grid', placeItems: 'center', color: '#fff', fontFamily: ZH, fontWeight: 900, fontSize: 30 * u }}>封</div>
        <div style={{ writingMode: 'vertical-rl', fontFamily: ZH, fontWeight: 900, fontSize: 52 * u, color: C.ink, marginTop: 16 * u, letterSpacing: 4 * u, whiteSpace: 'nowrap' }}>幻想乡开幕</div>
        <div style={{ position: 'absolute', bottom: 22 * u, fontFamily: MONO, fontWeight: 700, fontSize: 11 * u, letterSpacing: 3 * u, color: C.shu }}>TOUHOUQA</div>
      </div>
      {/* the yin-yang orb that bursts the paper open */}
      <svg width={W} height={H} style={{ position: 'absolute', inset: 0, opacity: orb * orbFade }}>
        <g transform={`translate(${W / 2} ${H / 2}) rotate(${f * 24}) scale(${(70 + Math.max(0, hole) * .9) * u / 100 + orb * .9})`}>
          <circle r="100" fill="#fff" stroke={C.shu} strokeWidth="6" />
          <path d="M0,-100 A100,100 0 0 1 0,100 A50,50 0 0 1 0,0 A50,50 0 0 0 0,-100Z" fill={C.shu} />
          <circle cy="-50" r="15" fill={C.shu} /><circle cy="50" r="15" fill="#fff" />
        </g>
      </svg>
    </AbsoluteFill>
  );
}

/* ---------- speed lines and petals ---------- */
function speedK(f) {
  const t = f / 30;
  const climb = sm(1.0, 2.0, t) * (.45 + .55 * sm(5.5, 7.8, t)) * (1 - sm(7.9, 8.05, t));
  const burst = sm(8.25, 8.45, t) * (1 - sm(8.6, 9.6, t)) * 1.2;
  return climb + burst;
}
function drawSpeed(g, f, W, H) {
  const k = speedK(f); if (k < .01) return;
  const r = rng(f * 97 + 13), cx = W / 2, cy = H / 2, R = Math.hypot(W, H) / 2;
  const n = Math.round(46 + 40 * k);
  for (let i = 0; i < n; i++) {
    const a = r() * Math.PI * 2, r0 = R * (.48 + r() * .35 - k * .12), w = (.0025 + r() * .006) * (1 + k);
    g.beginPath();
    g.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0 * .9);
    g.lineTo(cx + Math.cos(a - w) * R * 1.1, cy + Math.sin(a - w) * R * 1.1);
    g.lineTo(cx + Math.cos(a + w) * R * 1.1, cy + Math.sin(a + w) * R * 1.1);
    g.closePath();
    g.fillStyle = `rgba(255,255,255,${(.18 + r() * .4) * Math.min(1, k)})`; g.fill();
  }
}
function drawPetals(g, f, W, H) {
  const t = f / 30, u = Math.min(W, H) / 1080;
  const climbOn = sm(1.0, 1.6, t) * (1 - sm(7.95, 8.1, t)), drift = sm(8.6, 9.2, t) * (1 - sm(12.6, 13.6, t));
  if (climbOn < .01 && drift < .01) return;
  const N = 90;
  for (let i = 0; i < N; i++) {
    const r = rng(i * 7919 + 17);
    const life = 1.1 + r() * .9, ph = r() * life, a0 = r() * Math.PI * 2, spin = (r() - .5) * 8, hue = r();
    /* climb: petals stream from the vanishing point toward the lens */
    if (climbOn > .01) {
      const age = ((t + ph) % life) / life;
      const z = 1 - age, sc = 1 / (z * 6 + .25);
      const sx = W / 2 + Math.cos(a0) * W * .06 * sc + Math.sin(t * 2 + i) * 20 * u, sy = H * .45 + Math.sin(a0) * H * .05 * sc - (1 - z) * 30 * u;
      drawPetal(g, sx, sy, 9 * u * sc, a0 + t * spin, hue, climbOn * sm(0, .15, age) * (1 - sm(.85, 1, age)));
    }
    if (drift > .01) {
      const sp = 140 + r() * 160, y0 = r() * H * 1.2 - H * .1, x = ((r() * W + (t - 8.6) * sp * u * 3) % (W * 1.15)) - W * .05;
      const y = y0 + Math.sin(t * 1.4 + i) * 30 * u + (t - 8.6) * 40 * u;
      drawPetal(g, x, y % (H * 1.1), (7 + r() * 9) * u, t * spin + i, hue, drift * .9);
    }
  }
}
function drawPetal(g, x, y, s, rot, hue, a) {
  if (a < .01 || s < .5) return;
  g.save(); g.translate(x, y); g.rotate(rot); g.scale(1, .55 + .45 * Math.sin(rot * 1.7));
  g.globalAlpha = a;
  g.fillStyle = hue < .7 ? '#ffd3e2' : '#ffffff';
  g.beginPath(); g.moveTo(0, -s); g.bezierCurveTo(s * .9, -s * .6, s * .7, s * .7, 0, s); g.bezierCurveTo(-s * .7, s * .7, -s * .9, -s * .6, 0, -s); g.fill();
  g.fillStyle = 'rgba(232,120,160,.55)'; g.beginPath(); g.ellipse(0, s * .45, s * .22, s * .4, 0, 0, Math.PI * 2); g.fill();
  g.restore();
}

/* ---------- danmaku: ring bursts, spirals and rice bullets with additive glow ---------- */
function drawDanmaku(g, f, W, H) {
  const t0 = F.cutIn - 6, t1 = F.cutOut + 30; if (f < t0 || f > t1) return;
  const u = Math.min(W, H) / 1080, fade = 1 - sm(t1 - 18, t1, f);
  const portrait = H > W;
  const emitters = [
    { x: .2, y: .2, start: t0, col: [255, 70, 80], n: 28, sp: 9 },
    { x: .8, y: .16, start: t0 + 8, col: [90, 150, 255], n: 24, sp: 8 },
    { x: .5, y: portrait ? .14 : .1, start: t0 + 16, col: [255, 210, 90], n: 32, sp: 10 },
    { x: .32, y: portrait ? .82 : .78, start: t0 + 22, col: [210, 110, 255], n: 20, sp: 7 },
    { x: .74, y: portrait ? .8 : .74, start: t0 + 28, col: [120, 230, 170], n: 22, sp: 8 },
  ];
  g.globalCompositeOperation = 'lighter';
  for (const e of emitters) {
    for (let w = 0; w < 4; w++) {
      const age = f - e.start - w * 9; if (age < 0) continue;
      const rr = age * e.sp * u, rot = w * .21 + e.x * 3;
      const a = fade * (1 - sm(40, 70, age));
      if (a < .01) continue;
      for (let i = 0; i < e.n; i++) {
        const ang = rot + i / e.n * Math.PI * 2, x = e.x * W + Math.cos(ang) * rr, y = e.y * H + Math.sin(ang) * rr;
        if (x < -40 || x > W + 40 || y < -40 || y > H + 40) continue;
        rice(g, x, y, ang, 11 * u, e.col, a);
      }
    }
  }
  /* an Archimedean spiral of small orbs from the centre */
  const sAge = f - (t0 + 10);
  if (sAge > 0) for (let k = 0; k < 3; k++) for (let i = 0; i < 60; i++) {
    const born = i * .8; if (born > sAge) break;
    const age = sAge - born, ang = i * .42 + k * 2.094 + born * .02, rr = age * 11 * u;
    const x = W / 2 + Math.cos(ang) * rr, y = H * .44 + Math.sin(ang) * rr;
    orbB(g, x, y, 7 * u, k === 0 ? [255, 90, 90] : k === 1 ? [255, 255, 255] : [255, 200, 90], fade * (1 - sm(30, 55, age)));
  }
  g.globalCompositeOperation = 'source-over';
}
function rice(g, x, y, ang, s, col, a) {
  g.save(); g.translate(x, y); g.rotate(ang);
  const gr = g.createRadialGradient(0, 0, 0, 0, 0, s * 2.2); gr.addColorStop(0, `rgba(${col},${.9 * a})`); gr.addColorStop(1, `rgba(${col},0)`);
  g.fillStyle = gr; g.beginPath(); g.ellipse(0, 0, s * 2.2, s * 1.2, 0, 0, Math.PI * 2); g.fill();
  g.fillStyle = `rgba(255,255,255,${a})`; g.beginPath(); g.ellipse(0, 0, s * .9, s * .38, 0, 0, Math.PI * 2); g.fill();
  g.restore();
}
function orbB(g, x, y, s, col, a) {
  if (a < .01) return;
  const gr = g.createRadialGradient(x, y, 0, x, y, s * 2); gr.addColorStop(0, `rgba(255,255,255,${a})`); gr.addColorStop(.35, `rgba(${col},${.8 * a})`); gr.addColorStop(1, `rgba(${col},0)`);
  g.fillStyle = gr; g.beginPath(); g.arc(x, y, s * 2, 0, Math.PI * 2); g.fill();
}

/* ---------- shot 4: the impact frame ---------- */
function Impact() {
  const f = useCurrentFrame(), { width: W, height: H } = useVideoConfig();
  if (f < F.impact || f > F.impact + 1) return null;
  const r = rng(f * 31 + 5), lines = [];
  for (let i = 0; i < 70; i++) { const a = r() * Math.PI * 2, w = .004 + r() * .012, R = Math.hypot(W, H), r0 = R * (.08 + r() * .2);
    lines.push(`M${W / 2 + Math.cos(a) * r0},${H / 2 + Math.sin(a) * r0} L${W / 2 + Math.cos(a - w) * R},${H / 2 + Math.sin(a - w) * R} L${W / 2 + Math.cos(a + w) * R},${H / 2 + Math.sin(a + w) * R}Z`); }
  return <svg width={W} height={H} style={{ position: 'absolute', inset: 0 }}><path d={lines.join(' ')} fill="#000" opacity=".85" /></svg>;
}

/* ---------- shot 5: the spell card declaration ---------- */
function Silhouette({ src, color, style }) {
  return <div style={{ ...style, background: color, WebkitMaskImage: `url(${src})`, maskImage: `url(${src})`, WebkitMaskSize: 'contain', maskSize: 'contain', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center bottom', maskPosition: 'center bottom' }} />;
}
function CutIn() {
  const f = useCurrentFrame(), { width: W, height: H, fps } = useVideoConfig(), u = Math.min(W, H) / 1080, portrait = H > W;
  if (f < F.cutIn - 2 || f > F.cutOut + 22) return null;
  const inK = fr => spring({ frame: fr - F.cutIn, fps, config: { damping: 14, mass: .8 } });
  const outK = fr => ci(fr, [F.cutOut, F.cutOut + 14], [0, 1], t => t * t * t);
  const slideAt = fr => (1 - inK(fr)) * 60 - outK(fr) * 70;            // in vw
  const slide = slideAt(f), op = ci(f, [F.cutIn - 2, F.cutIn + 3], [0, 1]) * (1 - ci(f, [F.cutOut + 10, F.cutOut + 20], [0, 1]));
  const drift = 1 + .05 * ci(f, [F.cutIn, F.cutOut], [0, 1]);
  const bandH = portrait ? 260 * u : 230 * u, top = portrait ? H * .53 : H * .36;
  const reveal = ci(f, [F.cutIn, F.cutIn + 9], [0, 1], easeOut);          // 45 degree slice reveal of the portrait
  const face = f < F.cutIn + 24 ? 'determined' : 'smile';
  const src = staticFile(`art/Reimu/action/${face}.png`);
  const porH = portrait ? 760 * u : 640 * u, porW = porH * 860 / 1110;
  /* portrait: Reimu stands above the strip with her feet inside its top edge; landscape: she overlaps its left end */
  const porLeft = portrait ? W * .5 - porW * .5 : W * .5 - 640 * u - porW * .2;
  const porTop = portrait ? top - porH * .93 : top + bandH * .5 - porH * .62;
  const ghostX = fr => slideAt(fr) * W / 100;
  const porStyle = (dx) => ({ position: 'absolute', left: porLeft + dx, top: porTop, width: porW, height: porH, transform: `scale(${drift})`, transformOrigin: '50% 80%' });
  const clip = `polygon(0 ${100 - reveal * 200}%, ${reveal * 200}% 0, ${reveal * 200}% 100%, 0 100%)`;
  /* eye flare: Reimu's eyes sit near 31% x, 21% y of the sprite */
  const flareK = ci(f, [F.cutIn + 12, F.cutIn + 17, F.cutIn + 26], [0, 1, 0]);
  const eyeX = porLeft + slide * W / 100 + porW * (.5 + (.335 - .5) * drift), eyeY = porTop + porH * (.8 + (.215 - .8) * drift);
  const burst = ci(f, [F.cutIn + 2, F.cutIn + 36], [0, 1]);
  const textX = portrait ? 0 : 140 * u;
  return (
    <AbsoluteFill style={{ opacity: op, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: '50%', top: top + bandH / 2, width: burst * Math.hypot(W, H) * 1.4, height: burst * Math.hypot(W, H) * 1.4, transform: 'translate(-50%,-50%)', borderRadius: '50%', border: `${6 * u}px solid rgba(255,255,255,.9)`, boxShadow: '0 0 60px rgba(255,220,160,.9)', opacity: burst > 0 ? 1 - burst : 0 }} />
      <div style={{ position: 'absolute', left: '-10%', right: '-10%', top, height: bandH, transform: `rotate(-6deg) translateX(${slide * .5}vw)`, background: 'linear-gradient(90deg, rgba(255,250,243,0) 0%, rgba(255,250,243,.94) 12%, rgba(255,250,243,.96) 88%, rgba(255,250,243,0) 100%)', borderTop: `${4 * u}px solid ${C.shu}`, borderBottom: `${4 * u}px solid ${C.shu}`, boxShadow: `0 0 0 ${8 * u}px rgba(255,255,255,.35), 0 ${22 * u}px ${60 * u}px rgba(160,60,40,.25)` }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 9 * u, height: 1.5 * u, background: C.gold }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 9 * u, height: 1.5 * u, background: C.gold }} />
      </div>
      <div style={{ position: 'absolute', left: '-10%', right: '-10%', top: top + bandH + 18 * u, height: 28 * u, transform: `rotate(-6deg) translateX(${-slide * .8}vw)`, background: `repeating-linear-gradient(90deg, ${C.shu} 0 ${34 * u}px, transparent ${34 * u}px ${44 * u}px)`, opacity: .85 }} />
      {/* ghost silhouettes: red and blue copies that trail the portrait by two and three frames */}
      <Silhouette src={src} color="rgba(255,60,70,.55)" style={{ ...porStyle(ghostX(f - 2) + 14 * u), clipPath: clip, mixBlendMode: 'screen' }} />
      <Silhouette src={src} color="rgba(60,120,255,.5)" style={{ ...porStyle(ghostX(f - 3) - 10 * u), clipPath: clip, mixBlendMode: 'screen' }} />
      <Img src={src} style={{ ...porStyle(ghostX(f)), objectFit: 'contain', objectPosition: 'center bottom', clipPath: clip, filter: `drop-shadow(0 ${10 * u}px ${18 * u}px rgba(120,40,30,.35))` }} />
      {flareK > 0 && <svg width={W} height={H} style={{ position: 'absolute', inset: 0, mixBlendMode: 'screen' }}>
        <defs><radialGradient id="ef"><stop offset="0" stopColor="#fff" /><stop offset=".3" stopColor="#ffe0a0" /><stop offset="1" stopColor="#ff8040" stopOpacity="0" /></radialGradient></defs>
        <g transform={`translate(${eyeX} ${eyeY}) rotate(${f * 6}) scale(${flareK})`}>
          <circle r={34 * u} fill="url(#ef)" />
          <path d={`M0,${-120 * u} L${6 * u},0 L0,${120 * u} L${-6 * u},0Z M${-160 * u},0 L0,${5 * u} L${160 * u},0 L0,${-5 * u}Z`} fill="#fff" />
        </g></svg>}
      <div style={{ position: 'absolute', left: textX + slide * W / 100, right: 0, top: portrait ? top + 30 * u : top + 18 * u, height: bandH, transform: 'rotate(-6deg)', display: 'flex', alignItems: 'center', justifyContent: portrait ? 'center' : 'center' }}>
        <div style={{ display: 'grid', gap: 4 * u, marginLeft: portrait ? 0 : 380 * u, textAlign: portrait ? 'center' : 'left' }}>
          <span style={{ font: `700 ${portrait ? 22 * u : 20 * u}px ${MONO}`, letterSpacing: '.28em', color: C.shu }}>符卡宣言 · SPELL CARD</span>
          <span style={{ font: `900 ${portrait ? 74 * u : 92 * u}px/1.05 ${ZH}`, color: C.ink, letterSpacing: '.04em', whiteSpace: 'nowrap' }}>符卡<em style={{ fontStyle: 'normal', color: C.shu }}>「幻想乡开幕」</em></span>
          <span style={{ font: `italic 600 ${portrait ? 30 * u : 34 * u}px ${SERIF}`, color: C.inkSoft }}>Curtain-Raiser of Gensokyo</span>
        </div>
      </div>
    </AbsoluteFill>
  );
}

/* ---------- shot 6: Marisa's broom fly-over with a star trail ---------- */
function marisaPos(f, W, H) {
  const k = clamp((f - F.marisa) / 64, 0, 1), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
  const portrait = H > W;
  const x = -0.25 * W + e * 1.55 * W, y = (portrait ? .78 : .86) * H - e * (portrait ? .62 : .78) * H + Math.sin(k * Math.PI) * -.06 * H;
  return { x, y, k };
}
function drawStars(g, f, W, H) {
  if (f < F.marisa || f > F.marisa + 100) return;
  const u = Math.min(W, H) / 1080, s = (H > W ? 520 : 460) * u;
  g.globalCompositeOperation = 'lighter';
  for (let b = F.marisa; b <= Math.min(f, F.marisa + 64); b++) {
    const p = marisaPos(b, W, H), age = f - b; if (age > 30) continue;
    const r = rng(b * 131 + 7);
    for (let j = 0; j < 3; j++) {
      /* the bristles sit at the lower left of the rotated sprite */
      const x = p.x - s * .28 + (r() - .5) * 40 * u - age * (2 + r() * 3) * u, y = p.y + s * .22 + (r() - .5) * 40 * u + age * (1 + r() * 2) * u;
      star(g, x, y, (10 + r() * 14) * u * (1 - age / 30), age * .2 + r() * 6, r() < .5 ? [255, 236, 120] : [180, 220, 255], 1 - age / 30);
    }
  }
  g.globalCompositeOperation = 'source-over';
}
function star(g, x, y, s, rot, col, a) {
  if (s <= 0 || a <= 0) return;
  g.save(); g.translate(x, y); g.rotate(rot);
  const gr = g.createRadialGradient(0, 0, 0, 0, 0, s * 2); gr.addColorStop(0, `rgba(${col},${.6 * a})`); gr.addColorStop(1, `rgba(${col},0)`);
  g.fillStyle = gr; g.beginPath(); g.arc(0, 0, s * 2, 0, Math.PI * 2); g.fill();
  g.fillStyle = `rgba(255,255,240,${a})`; g.beginPath();
  for (let i = 0; i < 10; i++) { const rr = i % 2 ? s * .42 : s, an = i * Math.PI / 5 - Math.PI / 2; g.lineTo(Math.cos(an) * rr, Math.sin(an) * rr); }
  g.closePath(); g.fill(); g.restore();
}
function Marisa() {
  const f = useCurrentFrame(), { width: W, height: H } = useVideoConfig(), u = Math.min(W, H) / 1080;
  if (f < F.marisa || f > F.marisa + 66) return null;
  const p = marisaPos(f, W, H), s = (H > W ? 520 : 460) * u, w = s * 734 / 1160;
  const face = p.k < .45 ? 'determined' : 'smile';
  return <Img src={staticFile(`art/Marisa/broom/${face}.png`)} style={{ position: 'absolute', left: p.x - w / 2, top: p.y - s / 2, width: w, height: s, transform: `rotate(${38 + Math.sin(f * .3) * 2}deg)`, filter: `drop-shadow(0 ${12 * u}px ${16 * u}px rgba(40,50,90,.3))` }} />;
}

/* ---------- shot 6: seal stamp labels on the landmarks ---------- */
function Seals({ anchors }) {
  const f = useCurrentFrame(), { width: W, height: H, fps } = useVideoConfig(), u = Math.min(W, H) / 1080;
  if (!anchors || f < F.seals || f > F.sealsOut + 14) return null;
  const A = anchors[f] || anchors[Math.min(f, 449)]; if (!A) return null;
  const out = ci(f, [F.sealsOut, F.sealsOut + 12], [0, 1]);
  return <AbsoluteFill>{SEALS.map((s, i) => {
    const a = A[s.id]; if (!a || !a[2]) return null;
    const k = spring({ frame: f - F.seals - i * 5, fps, config: { damping: 10, mass: .6 } });
    if (k <= 0.001) return null;
    const x = a[0] * W, y = a[1] * H, sc = interpolate(k, [0, 1], [1.9, 1]) * (1 - out * .3);
    const flip = x > W * .72;
    return (
      <div key={s.id} style={{ position: 'absolute', left: x, top: y, opacity: Math.min(1, k * 1.5) * (1 - out), transform: `translate(-50%, -100%) scale(${sc}) rotate(${(1 - k) * -14}deg)`, transformOrigin: '50% 100%', display: 'flex', flexDirection: flip ? 'row-reverse' : 'row', alignItems: 'center', gap: 10 * u }}>
        <div style={{ width: 58 * u, height: 58 * u, background: C.shu, borderRadius: 8 * u, display: 'grid', placeItems: 'center', color: '#fff8ee', font: `900 ${36 * u}px ${ZH}`, boxShadow: `inset 0 0 0 ${3 * u}px #fff4e4, inset 0 0 0 ${5 * u}px ${C.shu}, 0 ${6 * u}px ${16 * u}px rgba(90,20,10,.35)`, transform: 'rotate(-4deg)' }}>{s.kj}</div>
        <div style={{ background: 'rgba(255,250,243,.93)', border: `${2 * u}px solid ${C.shu}`, borderRadius: 999, padding: `${6 * u}px ${16 * u}px`, display: 'grid', lineHeight: 1.15, boxShadow: `0 ${6 * u}px ${18 * u}px rgba(40,60,95,.25)`, whiteSpace: 'nowrap' }}>
          <span style={{ font: `700 ${24 * u}px ${ZH}`, color: C.ink }}>{s.zh}</span>
          <span style={{ font: `italic 600 ${18 * u}px ${SERIF}`, color: C.inkSoft }}>{s.en}</span>
        </div>
        <div style={{ position: 'absolute', left: '50%', bottom: -16 * u, width: 2 * u, height: 16 * u, background: C.shu }} />
      </div>);
  })}</AbsoluteFill>;
}

/* ---------- shot 2: vertical title on the approach ---------- */
function Approach() {
  const f = useCurrentFrame(), { width: W, height: H } = useVideoConfig(), u = Math.min(W, H) / 1080, t = f / 30;
  const a = sm(1.6, 2.2, t) * (1 - sm(5.4, 6.0, t)); if (a < .01) return null;
  const portrait = H > W, dy = (1 - sm(1.6, 2.4, t)) * 40 * u;
  return (
    <div style={{ position: 'absolute', right: portrait ? 50 * u : 110 * u, top: portrait ? 260 * u : 120 * u, opacity: a, transform: `translateY(${dy}px)`, display: 'flex', gap: 14 * u, alignItems: 'flex-start', filter: `drop-shadow(0 ${3 * u}px ${10 * u}px rgba(30,20,20,.45))` }}>
      <div style={{ writingMode: 'vertical-rl', font: `600 ${22 * u}px ${SERIF}`, fontStyle: 'italic', color: '#fff', letterSpacing: '.12em', marginTop: 8 * u }}>The approach to the Hakurei Shrine</div>
      <div style={{ writingMode: 'vertical-rl', font: `900 ${72 * u}px ${ZH}`, color: '#fff', letterSpacing: '.12em' }}>博丽神社<span style={{ color: '#ffd9d2' }}>参道</span></div>
      <div style={{ width: 54 * u, height: 54 * u, background: C.shu, borderRadius: 6 * u, display: 'grid', placeItems: 'center', color: '#fff', font: `900 ${30 * u}px ${ZH}`, marginTop: 6 * u }}>神</div>
    </div>);
}

/* ---------- the composition ---------- */
export const Intro = ({ tag }) => {
  const f = useCurrentFrame(), { width: W, height: H } = useVideoConfig(), u = Math.min(W, H) / 1080;
  const [anchors, setAnchors] = useState(null);
  const [handle] = useState(() => delayRender('anchors'));
  useEffect(() => { fetch(staticFile(`plates/anchors-${tag}.json`)).then(r => r.json()).then(j => { setAnchors(j); continueRender(handle); }).catch(() => continueRender(handle)); }, []);
  const impact = f >= F.impact && f <= F.impact + 1;
  const shake = (f >= F.impact && f < F.impact + 8) ? Math.sin(f * 9.3) * 14 * u * (1 - (f - F.impact) / 8) : (f >= F.cutIn && f < F.cutIn + 6) ? Math.sin(f * 7.7) * 6 * u * (1 - (f - F.cutIn) / 6) : 0;
  const plate = String(Math.min(f, 449)).padStart(4, '0');
  return (
    <AbsoluteFill style={{ background: '#fffaf3' }}>
      <AbsoluteFill style={{ transform: `translate(${shake}px, ${shake * .5}px) scale(${shake ? 1.02 : 1})`, filter: impact ? 'grayscale(1) invert(1) brightness(2) contrast(1.4)' : undefined }}>
        <Img src={staticFile(`plates/${tag}/${plate}.jpg`)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </AbsoluteFill>
      <CanvasLayer draw={drawSpeed} />
      <CanvasLayer draw={drawPetals} />
      <Impact />
      <Approach />
      <CanvasLayer draw={drawDanmaku} />
      <CutIn />
      <CanvasLayer draw={drawStars} />
      <Marisa />
      <Seals anchors={anchors} />
      <Opening />
    </AbsoluteFill>
  );
};
