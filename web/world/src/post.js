/* Post-processing chain for the painted world: Kuwahara paint, light shafts with speed blur, bloom and a final grade. */
import * as THREE from 'three';
import { EffectComposer, RenderPass, EffectPass, Pass, Effect, EffectAttribute, BlendFunction, BloomEffect } from 'postprocessing';

/* Kuwahara filter: each pixel takes the mean of the least varied of four quadrants, which flattens texture into strokes.
   The film uses this square form. The live map uses the smooth form below, because square quadrants turn small
   detail into visible blocks at a single sample per pixel. */
class KuwaharaEffect extends Effect {
  constructor(radius = 3) {
    super('Kuwahara', `
      uniform float uR;
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor){
        vec3 m[4]; vec3 s[4];
        for (int k = 0; k < 4; k++) { m[k] = vec3(0.0); s[k] = vec3(0.0); }
        float n = 0.0;
        for (int j = 0; j <= RAD; j++) for (int i = 0; i <= RAD; i++) {
          vec2 o = vec2(float(i), float(j)) * texelSize * uR / float(RAD);
          vec3 c0 = texture2D(inputBuffer, uv + vec2(-o.x, -o.y)).rgb;
          vec3 c1 = texture2D(inputBuffer, uv + vec2( o.x, -o.y)).rgb;
          vec3 c2 = texture2D(inputBuffer, uv + vec2(-o.x,  o.y)).rgb;
          vec3 c3 = texture2D(inputBuffer, uv + vec2( o.x,  o.y)).rgb;
          m[0] += c0; s[0] += c0 * c0; m[1] += c1; s[1] += c1 * c1; m[2] += c2; s[2] += c2 * c2; m[3] += c3; s[3] += c3 * c3;
          n += 1.0;
        }
        float best = 1e9; vec3 col = inputColor.rgb;
        for (int k = 0; k < 4; k++) { vec3 mu = m[k] / n; vec3 v = abs(s[k] / n - mu * mu); float sv = v.r + v.g + v.b; if (sv < best) { best = sv; col = mu; } }
        outputColor = vec4(col, inputColor.a);
      }`, { attributes: EffectAttribute.CONVOLUTION, defines: new Map([['RAD', String(Math.max(1, Math.round(radius)))]]), uniforms: new Map([['uR', new THREE.Uniform(radius)]]) });
  }
}

/* Generalized Kuwahara filter with eight smooth, overlapping sectors and polynomial weights (Kyprianidis et al.).
   Sectors are blended by their variance instead of picked, so strokes have soft edges and no block pattern.
   The sector weights depend only on the tap offset, so they are computed here once and written into an unrolled
   shader as constants. */
function kuwaharaTaps(rad) {
  const zeta = 2 / rad, eta = (zeta + Math.cos(.58)) / Math.sin(.58) ** 2, taps = [], tot = new Array(8).fill(0);
  for (let j = -rad; j <= rad; j++) for (let i = -rad; i <= rad; i++) {
    const vx = i / (2 * rad), vy = j / (2 * rad); if (vx * vx + vy * vy > .25) continue;
    const w = new Array(8); let z, vxx = zeta - eta * vx * vx, vyy = zeta - eta * vy * vy;
    z = Math.max(0, vy + vxx); w[0] = z * z; z = Math.max(0, -vx + vyy); w[2] = z * z; z = Math.max(0, -vy + vxx); w[4] = z * z; z = Math.max(0, vx + vyy); w[6] = z * z;
    const rx = Math.SQRT1_2 * (vx - vy), ry = Math.SQRT1_2 * (vx + vy); vxx = zeta - eta * rx * rx; vyy = zeta - eta * ry * ry;
    z = Math.max(0, ry + vxx); w[1] = z * z; z = Math.max(0, -rx + vyy); w[3] = z * z; z = Math.max(0, -ry + vxx); w[5] = z * z; z = Math.max(0, rx + vyy); w[7] = z * z;
    const sum = w.reduce((a, b) => a + b, 0), g = Math.exp(-3.125 * (vx * vx + vy * vy)) / Math.max(sum, 1e-5);
    const ws = w.map(x => x * g); ws.forEach((x, k) => { tot[k] += x; }); taps.push({ i, j, ws });
  }
  /* weights are normalized per sector, and tiny ones are dropped */
  for (const t of taps) t.ws = t.ws.map((x, k) => x / tot[k]).map(x => x < .004 ? 0 : x);
  return taps;
}
class SmoothKuwaharaEffect extends Effect {
  constructor(radius = 3) {
    const rad = Math.max(1, Math.round(radius)), f = x => x.toFixed(5);
    let body = '';
    for (const t of kuwaharaTaps(rad)) {
      body += `c = clamp(texture2D(inputBuffer, uv + vec2(${f(t.i)}, ${f(t.j)}) * texelSize).rgb, 0.0, 1.0); cc = c * c;\n`;
      t.ws.forEach((w, k) => { if (w) body += `m${k} += c * ${f(w)}; s${k} += cc * ${f(w)};\n`; });
    }
    const decl = [0, 1, 2, 3, 4, 5, 6, 7].map(k => `vec3 m${k} = vec3(0.0), s${k} = vec3(0.0);`).join(' ');
    const fin = [0, 1, 2, 3, 4, 5, 6, 7].map(k => `mu[${k}] = m${k}; { vec3 v = abs(s${k} - m${k} * m${k}); sg[${k}] = v.r + v.g + v.b; }`).join('\n');
    super('SmoothKuwahara', `
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor){
        ${decl}
        vec3 c, cc;
        ${body}
        vec3 mu[8]; float sg[8];
        ${fin}
        /* weights are relative to the least varied sector, so strong edges never underflow to black */
        float sgMin = sg[0]; for (int k = 1; k < 8; k++) sgMin = min(sgMin, sg[k]);
        vec4 outc = vec4(0.0);
        for (int k = 0; k < 8; k++) { float wk = 1.0 / (1.0 + pow(HARD * 1000.0 * max(sg[k] - sgMin, 0.0), 2.0)); outc += vec4(mu[k] * wk, wk); }
        vec3 col = outc.rgb / outc.w;
        /* keep highlights above 1 (sun, bullets) from the original pixel */
        col += max(inputColor.rgb - 1.0, 0.0);
        outputColor = vec4(col, inputColor.a);
      }`, { attributes: EffectAttribute.CONVOLUTION, defines: new Map([['HARD', '6.0']]) });
  }
}

/* Still-camera accumulation: while the view rests, jittered frames are averaged (an exponential window of about
   eight frames), which gives the resting map the edge quality of a supersampled film frame. */
class AccumPass extends Pass {
  constructor() {
    super('AccumPass');
    const opts = { type: THREE.HalfFloatType, depthBuffer: false };
    this.rt = [new THREE.WebGLRenderTarget(1, 1, opts), new THREE.WebGLRenderTarget(1, 1, opts)];
    this.i = 0; this.n = 0; this.window = 8;
    const vs = `varying vec2 vUv; void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 1.0, 1.0); }`;
    this.blend = new THREE.ShaderMaterial({ depthTest: false, depthWrite: false, uniforms: { tCur: { value: null }, tPrev: { value: null }, uW: { value: 1 } }, vertexShader: vs,
      fragmentShader: `uniform sampler2D tCur, tPrev; uniform float uW; varying vec2 vUv; void main(){ gl_FragColor = vec4(mix(texture2D(tPrev, vUv).rgb, texture2D(tCur, vUv).rgb, uW), 1.0); }` });
    this.copy = new THREE.ShaderMaterial({ depthTest: false, depthWrite: false, uniforms: { tMap: { value: null } }, vertexShader: vs,
      fragmentShader: `uniform sampler2D tMap; varying vec2 vUv; void main(){ gl_FragColor = vec4(texture2D(tMap, vUv).rgb, 1.0);
        #include <colorspace_fragment>
      }` });
    this.fullscreenMaterial = this.blend;
  }
  reset() { this.n = 0; }
  render(renderer, inputBuffer, outputBuffer) {
    const next = this.rt[1 - this.i];
    this.blend.uniforms.tCur.value = inputBuffer.texture; this.blend.uniforms.tPrev.value = this.rt[this.i].texture;
    this.blend.uniforms.uW.value = Math.max(1 / (this.n + 1), 1 / this.window);
    this.fullscreenMaterial = this.blend; renderer.setRenderTarget(next); renderer.render(this.scene, this.camera);
    this.copy.uniforms.tMap.value = next.texture;
    this.fullscreenMaterial = this.copy; renderer.setRenderTarget(this.renderToScreen ? null : outputBuffer); renderer.render(this.scene, this.camera);
    this.i = 1 - this.i; this.n++;
  }
  setSize(w, h) { for (const r of this.rt) r.setSize(w, h); this.n = 0; }
}

/* Light shafts from the sun position plus a radial speed blur from the frame centre. */
class RadialEffect extends Effect {
  constructor() {
    super('Radial', `
      uniform vec2 uSun; uniform float uShaft, uSpeed; uniform vec3 uShaftCol;
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor){
        vec3 col = inputColor.rgb;
        if (uSpeed > 0.001) {
          vec2 d = uv - vec2(0.5); float r = length(d);
          vec3 acc = vec3(0.0);
          for (int i = 0; i < 10; i++) acc += texture2D(inputBuffer, uv - d * float(i) * 0.0035 * uSpeed).rgb;
          col = mix(col, acc / 10.0, smoothstep(0.25, 0.7, r));
        }
        if (uShaft > 0.001) {
          vec2 d = (uv - uSun) / 28.0; vec2 p = uv; float acc = 0.0, w = 1.0;
          for (int i = 0; i < 28; i++) { p -= d; vec3 c = texture2D(inputBuffer, clamp(p, 0.0, 1.0)).rgb;
            float l = dot(c, vec3(0.3, 0.55, 0.15)); acc += smoothstep(0.80, 0.96, l) * w; w *= 0.965; }
          acc /= 28.0;
          col += uShaftCol * acc * uShaft;
        }
        outputColor = vec4(col, inputColor.a);
      }`, { attributes: EffectAttribute.CONVOLUTION, uniforms: new Map([['uSun', new THREE.Uniform(new THREE.Vector2(.5, .5))], ['uShaft', new THREE.Uniform(0)], ['uSpeed', new THREE.Uniform(0)], ['uShaftCol', new THREE.Uniform(new THREE.Color('#fff1d0'))]]) });
  }
}

/* Final grade: saturation and lift, a painted lens flare, vignette, paper grain and the white flash. */
class GradeEffect extends Effect {
  constructor() {
    super('Grade', `
      uniform vec2 uSun; uniform float uFlare, uWhite, uVig, uGrain, uAspect, uSat, uSeed, uCon;
      float hh(vec2 p){ p = fract(p * vec2(443.897, 441.423)); p += dot(p, p.yx + 19.19); return fract((p.x + p.y) * p.x); }
      vec3 ring(vec2 uv, vec2 c, float r, float w, vec3 col){ vec2 d = (uv - c) * vec2(uAspect, 1.0); float x = length(d); return col * smoothstep(w, 0.0, abs(x - r)) ; }
      vec3 disc(vec2 uv, vec2 c, float r, vec3 col){ vec2 d = (uv - c) * vec2(uAspect, 1.0); float x = length(d); return col * (1.0 - smoothstep(r * 0.75, r, x)); }
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor){
        vec3 c = inputColor.rgb;
        float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
        c = mix(vec3(l), c, uSat);
        c = max((c - 0.45) * uCon + 0.45, 0.0);
        c = mix(c, c * vec3(0.94, 0.95, 1.06) + vec3(0.015, 0.01, 0.04), 1.0 - smoothstep(0.0, 0.45, l));
        c = mix(c, c * vec3(1.04, 1.01, 0.95), smoothstep(0.55, 1.0, l));
        if (uFlare > 0.001) {
          vec2 s = uSun, ax = vec2(0.5) - s; vec3 f = vec3(0.0);
          f += disc(uv, s + ax * 0.55, 0.035, vec3(0.55, 0.85, 0.6)) * 0.22;
          f += disc(uv, s + ax * 0.85, 0.06, vec3(0.6, 0.7, 1.0)) * 0.16;
          f += ring(uv, s + ax * 1.25, 0.11, 0.012, vec3(1.0, 0.75, 0.6)) * 0.12;
          f += disc(uv, s + ax * 1.5, 0.02, vec3(1.0, 0.9, 0.7)) * 0.4;
          f += ring(uv, s + ax * 1.85, 0.2, 0.02, vec3(0.6, 0.85, 1.0)) * 0.08;
          vec2 d = (uv - s) * vec2(uAspect, 1.0);
          float star = pow(max(0.0, 1.0 - abs(d.y) * 60.0), 3.0) * exp(-abs(d.x) * 3.0) + pow(max(0.0, 1.0 - abs(d.x) * 70.0), 3.0) * exp(-abs(d.y) * 6.0) * 0.5;
          f += vec3(1.0, 0.95, 0.85) * (star * 0.6 + exp(-length(d) * 9.0) * 0.5);
          c += f * uFlare;
        }
        vec2 q = (uv - 0.5) * vec2(uAspect, 1.0);
        c *= mix(1.0, 1.0 - uVig, smoothstep(0.45, 1.1, length(q)));
        float g = hh(uv * 1031.0 + uSeed) - 0.5; float fib = hh(floor(uv * vec2(380.0, 90.0)) + 3.1) - 0.5;
        c += (g * 0.022 + fib * 0.012) * uGrain;
        c = mix(c, vec3(1.0, 0.99, 0.97), uWhite);
        outputColor = vec4(c, 1.0);   // opaque: leaf cards write partial alpha into the scene buffer
      }`, { uniforms: new Map([['uSun', new THREE.Uniform(new THREE.Vector2(.5, .5))], ['uFlare', new THREE.Uniform(0)], ['uWhite', new THREE.Uniform(0)], ['uVig', new THREE.Uniform(.22)], ['uGrain', new THREE.Uniform(1)], ['uAspect', new THREE.Uniform(16 / 9)], ['uSat', new THREE.Uniform(1.16)], ['uCon', new THREE.Uniform(1)], ['uSeed', new THREE.Uniform(0)]]) });
  }
}

export function createPost(renderer, scene, camera, { kuwahara = 3, smooth = false, accumulate = false, bloom = true, multisampling = 0 } = {}) {
  const composer = new EffectComposer(renderer, { frameBufferType: THREE.HalfFloatType, multisampling });
  composer.addPass(new RenderPass(scene, camera));
  const kw = kuwahara > 0 ? (smooth ? new SmoothKuwaharaEffect(kuwahara) : new KuwaharaEffect(kuwahara)) : null;
  if (kw) composer.addPass(new EffectPass(camera, kw));
  const radial = new RadialEffect();
  const bl = bloom ? new BloomEffect({ mipmapBlur: true, intensity: .35, luminanceThreshold: .78, luminanceSmoothing: .2, radius: .7 }) : null;
  composer.addPass(new EffectPass(camera, radial));
  const grade = new GradeEffect();
  composer.addPass(bl ? new EffectPass(camera, bl, grade) : new EffectPass(camera, grade));
  const acc = accumulate ? new AccumPass() : null;
  if (acc) composer.addPass(acc);
  const U = n => radial.uniforms.get(n), G = n => grade.uniforms.get(n);
  return {
    composer,
    get accumulated() { return acc ? acc.n : 0; },
    resetAccum() { if (acc) acc.reset(); },
    set({ sun, sunFront = true, shaft = 0, speed = 0, flare = 0, white = 0, bloomK = .35, aspect, seed = 0, grain, sat, con } = {}) {
      if (sun) { U('uSun').value.set(sun.x, sun.y); G('uSun').value.set(sun.x, sun.y); }
      const vis = sunFront && sun && sun.x > -.2 && sun.x < 1.2 && sun.y > -.2 && sun.y < 1.2 ? 1 : 0;
      U('uShaft').value = shaft * vis; U('uSpeed').value = speed; G('uFlare').value = flare * vis; G('uWhite').value = white; G('uSeed').value = seed;
      if (grain !== undefined) G('uGrain').value = grain;
      if (sat !== undefined) G('uSat').value = sat;
      if (con !== undefined) G('uCon').value = con;
      if (aspect) G('uAspect').value = aspect;
      if (bl) bl.intensity = bloomK;
    },
    setSize(w, h) { composer.setSize(w, h); },
    render(dt) { composer.render(dt); },
  };
}
