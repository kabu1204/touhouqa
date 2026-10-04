/* Live-map effects ported from the original daylight map: danmaku ring bursts and sakura petals at the shrine. */
import * as THREE from 'three';

const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

/* Ring bursts: each ring is a circle of glowing bullets that expands, turns slowly and fades. */
export function createDanmaku(scene, { max = 1400 } = {}) {
  const pos = new Float32Array(max * 3), col = new Float32Array(max * 3), alpha = new Float32Array(max);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.BufferAttribute(col, 3)); geo.setAttribute('alpha', new THREE.BufferAttribute(alpha, 1));
  const mat = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { uScale: { value: 400 } },
    vertexShader: `attribute vec3 color; attribute float alpha; varying vec3 vC; varying float vA; uniform float uScale;
      void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = clamp(1.6 * uScale / -mv.z, 6.0, 44.0); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `varying vec3 vC; varying float vA;
      void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; if (d > 1.0) discard;
        vec3 c = mix(vec3(1.0), vC, smoothstep(0.2, 0.55, d));
        float a = (1.0 - smoothstep(0.55, 1.0, d)) * 0.95 + (1.0 - smoothstep(0.0, 0.45, d)) * 0.5;
        gl_FragColor = vec4(c * a * vA * 1.4, 1.0);
        #include <colorspace_fragment>
      }` });
  const points = new THREE.Points(geo, mat); points.frustumCulled = false; points.renderOrder = 5; scene.add(points);
  const rings = [];
  const UP = new THREE.Vector3(0, 1, 0);
  function ring(t0, c, n, speed, color, { tilt = 0, life = 2.6, normal = UP } = {}) {
    const nrm = normal.clone().normalize();
    const u = Math.abs(nrm.y) > .99 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3().crossVectors(nrm, UP).normalize(), v = new THREE.Vector3().crossVectors(u, nrm).normalize();
    u.applyAxisAngle(nrm, tilt); v.applyAxisAngle(nrm, tilt);
    rings.push({ t0, c: c.clone(), n, speed, col: new THREE.Color(color), life, rot: Math.random() * 6.28, u, v });
    if (rings.length > 40) rings.splice(0, rings.length - 40);
  }
  function update(time, viewHeight, fov) {
    mat.uniforms.uScale.value = viewHeight / (2 * Math.tan(THREE.MathUtils.degToRad(fov) / 2));
    let k = 0;
    for (let r = rings.length - 1; r >= 0; r--) if (time - rings[r].t0 > rings[r].life) rings.splice(r, 1);
    for (const r of rings) {
      const age = time - r.t0; if (age < 0) continue;
      const rad = r.speed * age * (1 - age / (r.life * 2.2)), a = Math.min(1, age * 4) * (1 - sm(r.life * .6, r.life, age));
      for (let i = 0; i < r.n && k < max; i++, k++) {
        const th = r.rot + i / r.n * Math.PI * 2 + age * .25, x = Math.cos(th) * rad, z = Math.sin(th) * rad;
        pos[k * 3] = r.c.x + r.u.x * x + r.v.x * z; pos[k * 3 + 1] = r.c.y + r.u.y * x + r.v.y * z; pos[k * 3 + 2] = r.c.z + r.u.z * x + r.v.z * z;
        col[k * 3] = r.col.r; col[k * 3 + 1] = r.col.g; col[k * 3 + 2] = r.col.b; alpha[k] = a;
      }
    }
    geo.attributes.position.needsUpdate = geo.attributes.color.needsUpdate = geo.attributes.alpha.needsUpdate = true;
    geo.setDrawRange(0, k);
    points.visible = k > 0;
  }
  /* a burst over a place: a flat ring at the anchor and a slower, tilted second ring */
  function burst(time, at, color) {
    ring(time, at, 24, 13, color, { life: 2.6 });
    ring(time + .25, at.clone().add(new THREE.Vector3(0, 3, 0)), 18, 9, '#ffffff', { life: 2.2, tilt: .4, normal: new THREE.Vector3(.3, 1, .2) });
  }
  return { ring, burst, update, get active() { return rings.length; } };
}

/* Sakura petals drifting down around the shrine grounds. */
export function createPetals(scene, center, { count = 260, spread = 70, height = 26 } = {}) {
  const tex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d');
    g.translate(32, 32); g.rotate(.6);
    g.fillStyle = '#f7b9cf'; g.beginPath(); g.moveTo(0, -26); g.bezierCurveTo(20, -18, 18, 14, 0, 26); g.bezierCurveTo(-18, 14, -20, -18, 0, -26); g.fill();
    g.fillStyle = '#ffe3ee'; g.beginPath(); g.ellipse(-3, -4, 6, 13, 0, 0, Math.PI * 2); g.fill();
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  let seed = 7; const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const base = [], pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) base.push([center.x - spread * .4 + rand() * spread, center.y + rand() * height, center.z + (rand() - .5) * spread * .8, rand() * 10]);
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const points = new THREE.Points(geo, new THREE.PointsMaterial({ map: tex, size: 1.2, sizeAttenuation: true, transparent: true, depthWrite: false, alphaTest: .15 }));
  points.frustumCulled = false; scene.add(points);
  function update(t) {
    for (let i = 0; i < count; i++) {
      const b = base[i], fall = (t * 1.6 + b[3] * 3) % height;
      pos[i * 3] = b[0] - ((t * 2.2 + b[3] * 7) % spread) + spread * .5;
      pos[i * 3 + 1] = b[1] - fall + Math.sin(t + b[3]) * .6;
      pos[i * 3 + 2] = b[2] + Math.sin(t * .7 + b[3] * 2) * 2;
    }
    geo.attributes.position.needsUpdate = true;
  }
  return { update, points };
}
