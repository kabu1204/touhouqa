/* Composes and synthesizes the gate page music. No dependencies; the output is the same on every run.
   node compose.mjs [outDir]   -> outDir/film.wav (15.000 s cue timed to the film)
                                  outDir/map-loop.wav (64.000 s seamless loop for the map)
   Instruments: Karplus-Strong koto and shamisen, sine flute with breath, detuned saw pad, taiko,
   FM bells and noise swells, mixed through a Freeverb-style reverb and a soft limiter. */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const SR = 48000;
const OUT = process.argv[2] || path.join(path.dirname(fileURLToPath(import.meta.url)), 'out');

/* ---------- helpers ---------- */
function rng(seed) { let s = seed % 2147483647; if (s <= 0) s += 2147483646; return () => (s = (s * 16807) % 2147483647) / 2147483647; }
const rand = rng(20240917);
const noise = () => rand() * 2 - 1;
const hz = m => 440 * Math.pow(2, (m - 69) / 12);
const N = s => Math.round(s * SR);

/* one-pole low-pass state machine: y += a (x - y), a from a cut-off frequency */
const lpA = fc => 1 - Math.exp(-2 * Math.PI * Math.min(fc, SR * .45) / SR);

/* ---------- instruments: each returns a mono Float32Array ---------- */

/* Karplus-Strong plucked string with a fractional delay. bright 0..1 sets the pick noise colour, decay the ring time (s). */
function pluck(m, { dur = 2.5, bright = .6, decay = 1.6, body = .5 } = {}) {
  const f = hz(m), n = N(dur), out = new Float32Array(n);
  /* the averaging filter adds half a sample of delay, so the line is half a sample shorter */
  const L = SR / f - .5, size = Math.ceil(L) + 2, buf = new Float32Array(size);
  /* excitation: filtered noise plus a triangle plucked at 30 % of the string (carries the fundamental), without DC */
  let y = 0, mean = 0; const a = .25 + bright * .7;
  for (let i = 0; i < size; i++) { y += a * (noise() - y); const x = i / size, tri = x < .3 ? x / .3 : (1 - x) / .7; buf[i] = y * .8 + tri * .9; mean += buf[i]; }
  mean /= size; for (let i = 0; i < size; i++) buf[i] -= mean;
  /* per-period loss chosen so the level falls by 60 dB in `decay` seconds */
  const g = Math.pow(10, -3 / (decay * f));
  let w = 0, prev = 0;
  for (let i = 0; i < n; i++) {
    const r = (w - L + size * 4) % size, i0 = Math.floor(r), fr = r - i0;
    const s = buf[i0 % size] * (1 - fr) + buf[(i0 + 1) % size] * fr;
    const nx = g * (.5 * s + .5 * prev); prev = s;
    buf[w % size] = nx; out[i] = s; w++;
  }
  /* a little body resonance: blend in a softened copy */
  let lp = 0; const b = lpA(f * 3);
  for (let i = 0; i < n; i++) { lp += b * (out[i] - lp); out[i] = out[i] * (1 - body * .5) + lp * body; }
  fadeTail(out, .02);
  return out;
}

/* flute: sine with a few harmonics, delayed vibrato and breath noise */
function flute(m, len, { vib = .005, breath = .07, att = .06, rel = .14 } = {}) {
  const f = hz(m), n = N(len + rel), out = new Float32Array(n);
  let ph = 0, br = 0, br2 = 0; const ba = lpA(f * 2.2), bh = lpA(f * .6);
  for (let i = 0; i < n; i++) {
    const t = i / SR;
    const v = 1 + vib * Math.sin(2 * Math.PI * 5.3 * t) * Math.min(1, Math.max(0, (t - .18) / .3));
    ph += 2 * Math.PI * f * v / SR;
    const env = Math.min(1, t / att) * (t > len ? Math.max(0, 1 - (t - len) / rel) : 1) * (1 - .12 * Math.min(1, t / Math.max(len, .01)));
    const nz = noise(); br += ba * (nz - br); br2 += bh * (br - br2);
    const tone = Math.sin(ph) + .22 * Math.sin(2 * ph) + .07 * Math.sin(3 * ph);
    out[i] = env * (tone * .8 + (br - br2) * breath * 6 * (1 + 2 * Math.max(0, 1 - t / .08)));
  }
  return out;
}

/* pad: three detuned saws per note through a low-pass that can open over time */
function pad(notes, len, { att = .8, rel = 1.2, cut0 = 700, cut1 = 1400 } = {}) {
  const n = N(len + rel), out = new Float32Array(n);
  for (const m of notes) {
    const f = hz(m);
    for (const d of [-.006, 0, .007]) {
      let ph = rand(), y1 = 0, y2 = 0;
      for (let i = 0; i < n; i++) {
        const t = i / SR;
        ph += f * (1 + d) / SR; if (ph >= 1) ph -= 1;
        const fc = cut0 + (cut1 - cut0) * Math.min(1, t / Math.max(len, .01));
        const a = lpA(fc);
        y1 += a * ((ph * 2 - 1) - y1); y2 += a * (y1 - y2);
        const env = Math.min(1, t / att) * (t > len ? Math.max(0, 1 - (t - len) / rel) : 1);
        out[i] += y2 * env * .16;
      }
    }
  }
  return out;
}

/* taiko: a pitch-dropping sine for the drum head plus a short noise thump */
function taiko({ size = 1, len = 1.2 } = {}) {
  const n = N(len), out = new Float32Array(n);
  const f0 = 150 / size, f1 = 52 / size, dk = 4.5 / size;
  let ph = 0, lp = 0; const a = lpA(900);
  for (let i = 0; i < n; i++) {
    const t = i / SR, f = f1 + (f0 - f1) * Math.exp(-t * 22);
    ph += 2 * Math.PI * f / SR;
    lp += a * (noise() - lp);
    out[i] = Math.sin(ph) * Math.exp(-t * dk) + lp * 2.2 * Math.exp(-t * 40);
  }
  fadeTail(out, .05);
  return out;
}

/* bell: two-operator FM with an inharmonic ratio and a decaying index */
function bell(m, { len = 2.6, ratio = 3.5, index = 2.2, decay = 1.6 } = {}) {
  const f = hz(m), n = N(len), out = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const t = i / SR, idx = index * Math.exp(-t * 3);
    const mod = Math.sin(2 * Math.PI * f * ratio * t) * idx;
    out[i] = (Math.sin(2 * Math.PI * f * t + mod) + .3 * Math.sin(2 * Math.PI * f * 2.01 * t) * Math.exp(-t * 3)) * Math.exp(-t * 3 / decay) * Math.min(1, t / .002);
  }
  fadeTail(out, .05);
  return out;
}

/* noise: a rising swell (shape 'swell') or a crash cymbal (shape 'crash'), high-passed */
function noiseHit(len, shape, { hp = 3000 } = {}) {
  const n = N(len), out = new Float32Array(n); let lp = 0; const a = lpA(hp);
  for (let i = 0; i < n; i++) {
    const t = i / SR, x = noise(); lp += a * (x - lp);
    const env = shape === 'swell' ? Math.pow(t / len, 3) : Math.exp(-t * 2.2) * Math.min(1, t / .003);
    out[i] = (x - lp) * env;
  }
  if (shape !== 'swell') fadeTail(out, .1);
  return out;
}

function fadeTail(b, s) { const k = Math.min(b.length, N(s)); for (let i = 0; i < k; i++) b[b.length - 1 - i] *= i / k; }

/* ---------- mixing ---------- */
function makeMix(seconds) {
  const n = N(seconds);
  return { n, L: new Float32Array(n), R: new Float32Array(n), sL: new Float32Array(n), sR: new Float32Array(n) };
}
/* place a mono sound at time t with gain, pan (-1..1) and reverb send */
function put(mix, buf, t, gain = 1, pan = 0, send = .25) {
  const o = N(t), gl = Math.cos((pan + 1) * Math.PI / 4) * gain, gr = Math.sin((pan + 1) * Math.PI / 4) * gain;
  for (let i = 0; i < buf.length; i++) {
    const j = o + i; if (j < 0) continue; if (j >= mix.n) break;
    const s = buf[i];
    mix.L[j] += s * gl; mix.R[j] += s * gr; mix.sL[j] += s * gl * send; mix.sR[j] += s * gr * send;
  }
}

/* Freeverb-style reverb: eight damped combs and four all-passes per channel */
function reverb(mix, { room = .84, damp = .3, wet = .9 } = {}) {
  const combs = [1116, 1188, 1277, 1356, 1422, 1491, 1557, 1617], aps = [556, 441, 341, 225], spread = 23, k = SR / 44100;
  for (const [src, dst, sp] of [[mix.sL, mix.L, 0], [mix.sR, mix.R, spread]]) {
    const n = mix.n, acc = new Float32Array(n);
    for (const c of combs) {
      const len = Math.round((c + sp) * k), buf = new Float32Array(len); let p = 0, f = 0;
      for (let i = 0; i < n; i++) { const y = buf[p]; f = y * (1 - damp) + f * damp; buf[p] = src[i] * .015 + f * room; acc[i] += y; p = (p + 1) % len; }
    }
    for (const a of aps) {
      const len = Math.round((a + sp) * k), buf = new Float32Array(len); let p = 0;
      for (let i = 0; i < n; i++) { const b = buf[p], y = -acc[i] + b; buf[p] = acc[i] + b * .5; acc[i] = y; p = (p + 1) % len; }
    }
    for (let i = 0; i < n; i++) dst[i] += acc[i] * wet;
  }
}

/* normalise to a peak of -1 dBFS through a gentle saturating curve */
function master(mix, { peak = .89, drive = 1.25 } = {}) {
  let m = 0; for (let i = 0; i < mix.n; i++) m = Math.max(m, Math.abs(mix.L[i]), Math.abs(mix.R[i]));
  const pre = drive / m, norm = peak / Math.tanh(drive);
  for (let i = 0; i < mix.n; i++) { mix.L[i] = Math.tanh(mix.L[i] * pre) * norm; mix.R[i] = Math.tanh(mix.R[i] * pre) * norm; }
}

function writeWav(file, L, R) {
  const n = L.length, b = Buffer.alloc(44 + n * 4), dr = rng(7);
  b.write('RIFF', 0); b.writeUInt32LE(36 + n * 4, 4); b.write('WAVE', 8); b.write('fmt ', 12);
  b.writeUInt32LE(16, 16); b.writeUInt16LE(1, 20); b.writeUInt16LE(2, 22); b.writeUInt32LE(SR, 24); b.writeUInt32LE(SR * 4, 28); b.writeUInt16LE(4, 32); b.writeUInt16LE(16, 34);
  b.write('data', 36); b.writeUInt32LE(n * 4, 40);
  const q = x => Math.max(-32768, Math.min(32767, Math.round(x * 32767 + (dr() - dr()))));
  for (let i = 0; i < n; i++) { b.writeInt16LE(q(L[i]), 44 + i * 4); b.writeInt16LE(q(R[i]), 46 + i * 4); }
  fs.writeFileSync(file, b);
}

/* ---------- harmony (D minor) ---------- */
const CH = {                       // chord tones as MIDI notes: root, third, fifth (root in octave 3)
  Dm: [50, 53, 57], Bb: [46, 50, 53], C: [48, 52, 55], A: [45, 49, 52], Am: [45, 48, 52],
  F: [41, 45, 48], Gm: [43, 46, 50],
};
/* koto ostinato: chord tones in a rocking figure, starting one octave up */
const FIG = [0, 2, 1, 2, 3, 2, 1, 2];
const figNote = (ch, k) => { const c = CH[ch]; const idx = FIG[k % FIG.length]; return 12 + (idx === 3 ? c[0] + 12 : c[idx]); };

/* ================= the film cue: 15.000 s ================= */
/* Film landmarks (30 fps, web/film/src/Intro.jsx): slap frames 3-9, climb from 34, impact 239,
   Reimu cut-in 262, Marisa 318, seven seals from 340 every 5 frames, seals out 412, end 450. */
function filmCue() {
  const LEN = 15, mix = makeMix(LEN + .01);
  const T = { slap: 3 / 30, climb: 34 / 30, impact: 239 / 30, reimu: 262 / 30, marisa: 318 / 30, seals: 340 / 30, sealsOut: 412 / 30 };

  /* 1. ofuda slap: big taiko, shamisen stab, paper crack */
  put(mix, taiko({ size: 1.3, len: 1.6 }), T.slap, .9, 0, .35);
  for (const [m, p] of [[38, -.2], [45, 0], [50, .2], [57, .1]]) put(mix, pluck(m, { dur: 1.6, bright: .95, decay: .9 }), T.slap + .004, .5, p, .3);
  put(mix, noiseHit(.25, 'crash', { hp: 2500 }), T.slap, .35, .1, .2);
  put(mix, pad([38, 45], .9, { att: .3, rel: .6, cut0: 300, cut1: 700 }), T.slap + .05, .5, 0, .4);

  /* 2. climb: 14 beats from frame 34 to the impact (about 123 bpm) */
  const B1 = (T.impact - T.climb) / 14, prog1 = ['Dm', 'Dm', 'Dm', 'Dm', 'Bb', 'Bb', 'Bb', 'Bb', 'C', 'C', 'C', 'A', 'A', 'A'];
  for (let b = 0; b < 14; b++) {
    const ch = prog1[b], t = T.climb + b * B1, rise = b / 13;
    for (let s = 0; s < 4; s++) {
      const k = b * 4 + s;
      put(mix, pluck(figNote(ch, k), { dur: 1.2, bright: .55 + rise * .3, decay: 1.1 }), t + s * B1 / 4, (.22 + rise * .2) * (s === 0 ? 1.25 : 1), ((k % 2) ? .35 : -.35), .25);
    }
    put(mix, pluck(CH[ch][0] - 12, { dur: 1.5, bright: .35, decay: 1.4, body: .8 }), t, .5, 0, .15);
    if (b % 4 === 0 || b === 11) put(mix, taiko({ size: 1.1 }), t, .45 + rise * .25, 0, .25);
  }
  /* pad per chord, opening up */
  for (const [ch, b0, nb] of [['Dm', 0, 4], ['Bb', 4, 4], ['C', 8, 3], ['A', 11, 3]]) {
    const c = CH[ch], t = T.climb + b0 * B1;
    put(mix, pad([c[0], c[1] + 12, c[2] + 12], nb * B1, { att: .25, rel: .25, cut0: 500 + b0 * 120, cut1: 900 + (b0 + nb) * 160 }), t, .55 + b0 * .03, 0, .45);
  }
  /* flute over the climb */
  for (const [m, b, l] of [[69, 0, 2], [74, 2, 2], [77, 4, 3], [74, 7, 1], [76, 8, 2], [79, 10, 1], [81, 11, 3]])
    put(mix, flute(m, l * B1 * .97, { vib: .006 }), T.climb + b * B1, .32, -.1, .4);
  /* drum roll over the last two beats and a noise swell into the impact */
  for (let i = 0; i < 12; i++) { const t = T.climb + 12 * B1 + (i < 4 ? i * B1 / 4 : B1 + (i - 4) * B1 / 8); put(mix, taiko({ size: .75, len: .5 }), t, .2 + i * .03, (i % 2 ? .25 : -.25), .2); }
  put(mix, noiseHit(2.6, 'swell', { hp: 1800 }), T.impact - 2.6, .45, 0, .3);

  /* 3. impact: big taiko, crash, full chord */
  put(mix, taiko({ size: 1.45, len: 2 }), T.impact, 1, 0, .4);
  put(mix, noiseHit(2.2, 'crash', { hp: 4000 }), T.impact, .5, .15, .4);
  for (const [m, p] of [[38, 0], [50, -.3], [57, .3], [62, -.15], [65, .15], [69, 0]]) put(mix, pluck(m, { dur: 2.2, bright: .9, decay: 1.6 }), T.impact + .003, .38, p, .35);
  put(mix, bell(86, { len: 2.5 }), T.impact, .16, .3, .5);

  /* 4. Reimu's theme: a faster grid (about 160 bpm) anchored on the impact */
  const B2 = (T.marisa - T.impact) / 7, prog2 = ['Dm', 'Dm', 'Bb', 'Bb', 'C', 'C', 'A', 'A', 'Dm'];
  for (let b = 0; b < 9; b++) {
    const ch = prog2[b], t = T.impact + b * B2;
    for (let s = 0; s < 4; s++) { const k = b * 4 + s; put(mix, pluck(figNote(ch, k) + (s % 2 ? 12 : 0), { dur: .9, bright: .75, decay: .8 }), t + s * B2 / 4, .2 * (s === 0 ? 1.25 : 1), ((k % 2) ? .45 : -.45), .25); }
    put(mix, pluck(CH[ch][0] - 12, { dur: 1, bright: .4, decay: .9, body: .8 }), t, .5, 0, .15);
    put(mix, pluck(CH[ch][0] - 12, { dur: .6, bright: .4, decay: .5, body: .8 }), t + B2 / 2, .3, 0, .1);
    if (b % 2 === 0) put(mix, taiko({ size: 1 }), t, .5, 0, .25);
    else put(mix, taiko({ size: .7, len: .4 }), t + B2 / 2, .25, .2, .2);
  }
  for (const [ch, b0, nb] of [['Dm', 0, 2], ['Bb', 2, 2], ['C', 4, 2], ['A', 6, 2]]) { const c = CH[ch]; put(mix, pad([c[0] + 12, c[1] + 12, c[2] + 12], nb * B2, { att: .08, rel: .2, cut0: 1600, cut1: 2200 }), T.impact + b0 * B2, .45, 0, .45); }
  /* the motif, in eighths from the cut-in */
  const E = B2 / 2, t0 = T.reimu;
  for (const [m, e, l] of [[74, 0, 1.5], [77, 1.5, .5], [79, 2, 1], [81, 3, 2], [79, 5, 1], [77, 6, .5], [76, 6.5, .5], [74, 7, 1], [76, 8, 1], [77, 9, 1], [81, 10, 1], [86, 11, 3.2]]) {
    put(mix, flute(m, l * E * .92, { vib: .007, att: .025 }), t0 + e * E, .42, .05, .4);
    put(mix, flute(m - 12, l * E * .92, { vib: .004, att: .025, breath: .03 }), t0 + e * E, .12, -.2, .4);
  }
  put(mix, pluck(62, { bright: 1, dur: 1.4, decay: 1 }), T.reimu, .35, -.3, .35);
  put(mix, noiseHit(.6, 'crash', { hp: 5000 }), T.reimu, .22, -.2, .3);

  /* 5. Marisa: a bright bell glissando up the pentatonic scale */
  const PENT = [62, 65, 67, 69, 72, 74, 77, 79, 81, 84, 86, 89, 91, 93];
  for (let i = 0; i < 9; i++) put(mix, bell(PENT[i + 5], { len: 1.6, index: 1.6, decay: 1 }), T.marisa + i * .04, .1, -.6 + i * .15, .5);
  put(mix, noiseHit(.9, 'crash', { hp: 7000 }), T.marisa, .18, .4, .4);

  /* 6. the seven seals: one chime each */
  const sealNotes = [74, 77, 79, 81, 84, 86, 89];
  for (let i = 0; i < 7; i++) put(mix, bell(sealNotes[i], { len: 2.8, index: 1.8, decay: 1.8 }), T.seals + i * 5 / 30, .24, -.6 + i * .2, .55);
  put(mix, taiko({ size: 1.2, len: 1.6 }), T.seals, .55, 0, .35);
  /* a slower koto under the seals, then the resolution on D minor (add 9) */
  for (let k = 0; k < 8; k++) put(mix, pluck(figNote(k < 4 ? 'Dm' : 'Bb', k), { dur: 1.4, bright: .5, decay: 1.4 }), T.seals + k * B2, .2, (k % 2 ? .3 : -.3), .35);
  put(mix, pad([50, 57, 62, 65, 69], 2.3, { att: .3, rel: .4, cut0: 1800, cut1: 1000 }), T.seals, .4, 0, .5);
  const tRes = 13.7;
  put(mix, pad([38, 50, 57, 64, 65, 69], LEN - tRes - .5, { att: .4, rel: .6, cut0: 900, cut1: 600 }), tRes, .55, 0, .55);
  for (const [m, d] of [[62, 0], [69, .06], [76, .12], [77, .18]]) put(mix, bell(m, { len: 1.6, index: 1.2, decay: 1.4 }), tRes + d, .13, (d * 4) - .3, .6);
  put(mix, pluck(38, { dur: 1.8, bright: .3, decay: 1.6, body: .9 }), tRes, .5, 0, .2);
  put(mix, flute(81, 1, { vib: .008, breath: .1 }), tRes + .1, .22, .1, .5);

  reverb(mix, { room: .82, damp: .35, wet: .85 });
  master(mix);
  /* fade out to silence by 15.000 s so the map theme can take over */
  for (let i = 0; i < mix.n; i++) { const t = i / SR, g = t < 14.3 ? 1 : Math.max(0, 1 - (t - 14.3) / .7); mix.L[i] *= g * g; mix.R[i] *= g * g; }
  return [mix.L.subarray(0, N(LEN)), mix.R.subarray(0, N(LEN))];
}

/* ================= the map theme: 24 bars at 90 bpm, 64.000 s, seamless ================= */
function mapLoop() {
  const B = 60 / 90, BAR = 4 * B, BARS = 24, LEN = BARS * BAR, TAIL = 8, mix = makeMix(LEN + TAIL);
  const prog = ['Dm', 'Bb', 'F', 'C', 'Gm', 'Bb', 'A', 'A'];
  const melA = [[[69, 0, 2], [74, 2, 1], [76, 3, 1]], [[77, 0, 3], [74, 3, 1]], [[72, 0, 2], [69, 2, 1], [72, 3, 1]], [[76, 0, 2], [74, 2, 1], [72, 3, 1]],
    [[74, 0, 2], [70, 2, 1], [74, 3, 1]], [[77, 0, 2], [79, 2, 1], [77, 3, 1]], [[76, 0, 3], [73, 3, 1]], [[69, 0, 4]]];
  const melB = [[[74, 0, 1], [77, 1, 1], [81, 2, 2]], [[79, 0, 1], [77, 1, 1], [74, 2, 2]], [[84, 0, 2], [81, 2, 1], [77, 3, 1]], [[79, 0, 3], [76, 3, 1]],
    [[74, 0, 1], [79, 1, 1], [82, 2, 2]], [[81, 0, 1], [79, 1, 1], [77, 2, 2]], [[76, 0, 2], [81, 2, 1], [85, 3, 1]], [[81, 0, 3], [76, 3, 1]]];
  for (let bar = 0; bar < BARS; bar++) {
    const ch = prog[bar % 8], c = CH[ch], t = bar * BAR, pass = Math.floor(bar / 8);
    /* pad */
    put(mix, pad([c[0], c[1] + 12, c[2] + 12, c[0] + 24], BAR, { att: .9, rel: 1.4, cut0: 650, cut1: 800 }), t, .38, 0, .5);
    /* koto arpeggio in eighths, rising and falling */
    const arp = [0, 1, 2, 3, 4, 3, 2, 1], tones = [c[0] + 12, c[2] + 12, c[0] + 24, c[1] + 24, c[2] + 24];
    for (let e = 0; e < 8; e++) put(mix, pluck(tones[arp[e]], { dur: 2.2, bright: .45, decay: 1.8 }), t + e * B / 2, (e === 0 ? .26 : .19) * (pass === 0 ? .9 : 1), Math.sin(e * .9) * .5, .35);
    /* bass pluck */
    put(mix, pluck(c[0] - 12, { dur: 2.6, bright: .3, decay: 2.2, body: .9 }), t, .42, 0, .2);
    put(mix, pluck(c[2] - 12, { dur: 1.6, bright: .3, decay: 1.4, body: .9 }), t + 2 * B, .25, 0, .2);
    /* flute melody in the second and third passes */
    const mel = pass === 1 ? melA[bar % 8] : pass === 2 ? melB[bar % 8] : null;
    if (mel) for (const [m, b, l] of mel) put(mix, flute(m, l * B * .95, { vib: .006, breath: .08, att: .09, rel: .25 }), t + b * B, pass === 2 ? .27 : .24, .1, .5);
    /* light taiko */
    if (pass === 2 || (pass === 1 && bar % 2 === 0)) put(mix, taiko({ size: 1.2, len: 1.4 }), t, pass === 2 ? .3 : .2, 0, .3);
    if (pass === 2 && bar % 2 === 1) put(mix, taiko({ size: .8, len: .6 }), t + 3.5 * B, .14, .2, .3);
    /* bells at the turns of the first pass */
    if (pass === 0 && bar % 4 === 0) put(mix, bell([86, 81][bar / 4 % 2], { len: 3, index: 1.2, decay: 2 }), t + B, .1, .4, .6);
  }
  reverb(mix, { room: .86, damp: .3, wet: 1 });
  /* fold the tail past the loop point back onto the start */
  for (let i = 0; i < N(TAIL); i++) { mix.L[i] += mix.L[N(LEN) + i]; mix.R[i] += mix.R[N(LEN) + i]; }
  mix.n = N(LEN);
  master(mix, { peak: .89, drive: 1.1 });
  return [mix.L.subarray(0, N(LEN)), mix.R.subarray(0, N(LEN))];
}

export { SR, pluck, flute, pad, taiko, bell, noiseHit, writeWav, filmCue, mapLoop };

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  fs.mkdirSync(OUT, { recursive: true });
  const t0 = Date.now();
  writeWav(path.join(OUT, 'film.wav'), ...filmCue());
  writeWav(path.join(OUT, 'map-loop.wav'), ...mapLoop());
  console.log(`wrote film.wav and map-loop.wav to ${OUT} in ${((Date.now() - t0) / 1000).toFixed(1)} s`);
}
