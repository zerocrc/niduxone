import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

// ---------------------------------------------------------------------------
// Simplex noise (3D) -- self-contained GLSL snippet used by both shaders
// ---------------------------------------------------------------------------
const SIMPLEX_NOISE_GLSL = /* glsl */ `
vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
  + i.y + vec4(0.0, i1.y, i2.y, 1.0))
  + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`;

// ---------------------------------------------------------------------------
// Node vertex shader
// ---------------------------------------------------------------------------
const NODE_VERTEX = /* glsl */ `
${SIMPLEX_NOISE_GLSL}

uniform float uTime;
uniform float uPulseTime;
uniform vec3  uPulseOrigin;
uniform float uPulseActive;

attribute float aSize;
attribute float aType; // 0 = core, 1 = leaf
attribute float aLayer;
attribute vec3  aBasePosition;

varying float vType;
varying float vPulse;
varying float vLayer;

void main() {
  vec3 pos = aBasePosition;

  // organic noise displacement
  float n = snoise(pos * 0.3 + uTime * 0.15);
  pos += normal * n * 0.25;

  // breathing
  float breath = sin(uTime * 0.8 + aLayer * 1.2) * 0.08 + 1.0;
  pos *= breath;

  // pulse response
  float dist = length(pos - uPulseOrigin);
  float pulseWave = smoothstep(0.0, 1.0, 1.0 - abs(dist - uPulseTime * 12.0) / 3.0);
  vPulse = pulseWave * uPulseActive;

  vType  = aType;
  vLayer = aLayer;

  vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = aSize * (300.0 / -mvPos.z) * (1.0 + vPulse * 0.6);
  gl_Position  = projectionMatrix * mvPos;
}
`;

// ---------------------------------------------------------------------------
// Node fragment shader
// ---------------------------------------------------------------------------
const NODE_FRAGMENT = /* glsl */ `
uniform float uTime;

varying float vType;
varying float vPulse;
varying float vLayer;

void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  if (d > 0.5) discard;

  // soft glow only — no ring
  float glow = exp(-d * 8.0);

  // color palette -- green spectrum
  vec3 primary   = vec3(0.788, 0.953, 0.114); // #C9F31D
  vec3 secondary = vec3(0.659, 0.800, 0.055); // #a8cc0e
  vec3 tertiary  = vec3(0.898, 1.000, 0.541); // #e5ff8a
  vec3 accent    = vec3(0.478, 0.722, 0.000); // #7ab800
  vec3 highlight = vec3(0.941, 1.000, 0.420); // #f0ff6b

  float t = sin(uTime * 0.5 + vLayer * 2.0) * 0.5 + 0.5;
  vec3 baseColor = mix(primary, secondary, t);
  if (vType > 0.5) {
    baseColor = mix(accent, tertiary, t);
  }

  // pulse color boost
  baseColor = mix(baseColor, highlight, vPulse * 0.8);

  float alpha = glow * 0.85;
  alpha *= 0.85 + 0.15 * sin(uTime * 1.5 + vLayer);

  gl_FragColor = vec4(baseColor * (glow * 1.2 + vPulse * 0.5), alpha);
}
`;

// ---------------------------------------------------------------------------
// Connection vertex shader
// ---------------------------------------------------------------------------
const CONNECTION_VERTEX = /* glsl */ `
${SIMPLEX_NOISE_GLSL}

uniform float uTime;
uniform float uPulseTime;
uniform vec3  uPulseOrigin;
uniform float uPulseActive;

attribute vec3  aStart;
attribute vec3  aEnd;
attribute float aProgress; // 0..1 along the line segment
attribute float aConnectionIndex;

varying float vAlpha;
varying float vProgress;
varying float vPulse;

void main() {
  // curved path via midpoint offset
  vec3 mid = (aStart + aEnd) * 0.5;
  vec3 diff = aEnd - aStart;
  float len = length(diff);
  vec3 perp = normalize(cross(diff, vec3(0.0, 1.0, 0.0)));
  if (length(perp) < 0.01) perp = normalize(cross(diff, vec3(1.0, 0.0, 0.0)));

  float curveAmount = len * 0.15;
  float noiseVal = snoise(vec3(aConnectionIndex * 0.1, uTime * 0.1, 0.0));
  mid += perp * curveAmount * noiseVal;

  // quadratic bezier
  float t = aProgress;
  vec3 pos = (1.0 - t) * (1.0 - t) * aStart + 2.0 * (1.0 - t) * t * mid + t * t * aEnd;

  // organic displacement
  float n = snoise(pos * 0.5 + uTime * 0.2) * 0.08;
  pos += perp * n;

  // flowing energy
  float flow = fract(t - uTime * 0.3 + aConnectionIndex * 0.1);
  float energy = exp(-pow((flow - 0.5) * 4.0, 2.0));

  // pulse
  float dist = length((aStart + aEnd) * 0.5 - uPulseOrigin);
  float pulseWave = smoothstep(0.0, 1.0, 1.0 - abs(dist - uPulseTime * 12.0) / 4.0);
  vPulse = pulseWave * uPulseActive;

  vAlpha = 0.06 + energy * 0.3 + vPulse * 0.4;
  vProgress = t;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

// ---------------------------------------------------------------------------
// Connection fragment shader
// ---------------------------------------------------------------------------
const CONNECTION_FRAGMENT = /* glsl */ `
uniform float uTime;

varying float vAlpha;
varying float vProgress;
varying float vPulse;

void main() {
  vec3 primary  = vec3(0.788, 0.953, 0.114); // #C9F31D
  vec3 accent   = vec3(0.478, 0.722, 0.000); // #7ab800
  vec3 highlight= vec3(0.941, 1.000, 0.420); // #f0ff6b

  vec3 col = mix(accent, primary, vProgress);
  col = mix(col, highlight, vPulse * 0.6);

  // fade at ends
  float endFade = smoothstep(0.0, 0.1, vProgress) * smoothstep(1.0, 0.9, vProgress);

  gl_FragColor = vec4(col, vAlpha * endFade);
}
`;

// ---------------------------------------------------------------------------
// Helper: golden-ratio sphere distribution
// ---------------------------------------------------------------------------
function goldenSpherePoint(index: number, total: number, radius: number): THREE.Vector3 {
  const goldenAngle = Math.PI * (3.0 - Math.sqrt(5.0));
  const y = 1.0 - (index / (total - 1)) * 2.0; // -1..1
  const radiusAtY = Math.sqrt(1.0 - y * y);
  const theta = goldenAngle * index;
  return new THREE.Vector3(
    Math.cos(theta) * radiusAtY * radius,
    y * radius,
    Math.sin(theta) * radiusAtY * radius,
  );
}

// ---------------------------------------------------------------------------
// Build the network data
// ---------------------------------------------------------------------------
interface NetworkData {
  positions: Float32Array;
  sizes: Float32Array;
  types: Float32Array;
  layers: Float32Array;
  normals: Float32Array;
  connections: { start: THREE.Vector3; end: THREE.Vector3 }[];
}

function buildNetwork(): NetworkData {
  const layerCounts = [1, 20, 40, 60, 40, 20]; // root + 5 layers
  const layerRadii = [0.0, 2.5, 4.5, 6.5, 8.5, 10.0];
  const nodes: { pos: THREE.Vector3; layer: number; type: number }[] = [];

  // root node
  nodes.push({ pos: new THREE.Vector3(0, 0, 0), layer: 0, type: 0 });

  // layers
  for (let l = 1; l < layerCounts.length; l++) {
    const count = layerCounts[l];
    for (let i = 0; i < count; i++) {
      const p = goldenSpherePoint(i, count, layerRadii[l]);
      nodes.push({ pos: p, layer: l, type: l <= 2 ? 0 : 1 });
    }
  }

  const totalNodes = nodes.length;
  const positions = new Float32Array(totalNodes * 3);
  const sizes = new Float32Array(totalNodes);
  const types = new Float32Array(totalNodes);
  const layersArr = new Float32Array(totalNodes);
  const normals = new Float32Array(totalNodes * 3);

  for (let i = 0; i < totalNodes; i++) {
    const n = nodes[i];
    positions[i * 3] = n.pos.x;
    positions[i * 3 + 1] = n.pos.y;
    positions[i * 3 + 2] = n.pos.z;

    const nrm = n.pos.clone().normalize();
    normals[i * 3] = nrm.x || 0;
    normals[i * 3 + 1] = nrm.y || 1;
    normals[i * 3 + 2] = nrm.z || 0;

    sizes[i] = n.layer === 0 ? 2.8 : n.type === 0 ? 1.6 : 0.9 + Math.random() * 0.5;
    types[i] = n.type;
    layersArr[i] = n.layer;
  }

  // connections between adjacent layers (nearest neighbours)
  const connections: { start: THREE.Vector3; end: THREE.Vector3 }[] = [];

  const layerOffsets: number[] = [];
  let offset = 0;
  for (const c of layerCounts) {
    layerOffsets.push(offset);
    offset += c;
  }

  for (let l = 0; l < layerCounts.length - 1; l++) {
    const srcStart = layerOffsets[l];
    const srcEnd = srcStart + layerCounts[l];
    const dstStart = layerOffsets[l + 1];
    const dstEnd = dstStart + layerCounts[l + 1];

    for (let si = srcStart; si < srcEnd; si++) {
      // connect to nearest nodes in next layer
      const srcPos = nodes[si].pos;
      const dists: { idx: number; dist: number }[] = [];
      for (let di = dstStart; di < dstEnd; di++) {
        dists.push({ idx: di, dist: srcPos.distanceTo(nodes[di].pos) });
      }
      dists.sort((a, b) => a.dist - b.dist);
      const connectCount = l === 0 ? 8 : 3;
      for (let k = 0; k < Math.min(connectCount, dists.length); k++) {
        connections.push({ start: srcPos.clone(), end: nodes[dists[k].idx].pos.clone() });
      }
    }
  }

  // some cross-connections within the same layer for visual richness
  for (let l = 2; l < layerCounts.length; l++) {
    const start = layerOffsets[l];
    const end = start + layerCounts[l];
    for (let i = start; i < end; i += 3) {
      const next = start + ((i - start + 1) % layerCounts[l]);
      connections.push({ start: nodes[i].pos.clone(), end: nodes[next].pos.clone() });
    }
  }

  return { positions, sizes, types, layers: layersArr, normals, connections };
}

// ---------------------------------------------------------------------------
// Build connection geometry (each connection = many line segments)
// ---------------------------------------------------------------------------
function buildConnectionGeometry(connections: { start: THREE.Vector3; end: THREE.Vector3 }[]): THREE.BufferGeometry {
  const SEGMENTS = 24;
  const totalVerts = connections.length * SEGMENTS;

  const starts = new Float32Array(totalVerts * 3);
  const ends = new Float32Array(totalVerts * 3);
  const progresses = new Float32Array(totalVerts);
  const indices = new Float32Array(totalVerts);

  let vi = 0;
  for (let ci = 0; ci < connections.length; ci++) {
    const c = connections[ci];
    for (let s = 0; s < SEGMENTS; s++) {
      const idx = vi;
      starts[idx * 3] = c.start.x;
      starts[idx * 3 + 1] = c.start.y;
      starts[idx * 3 + 2] = c.start.z;
      ends[idx * 3] = c.end.x;
      ends[idx * 3 + 1] = c.end.y;
      ends[idx * 3 + 2] = c.end.z;
      progresses[idx] = s / (SEGMENTS - 1);
      indices[idx] = ci;
      vi++;
    }
  }

  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(totalVerts * 3), 3)); // dummy, overridden in vertex shader
  geom.setAttribute('aStart', new THREE.BufferAttribute(starts, 3));
  geom.setAttribute('aEnd', new THREE.BufferAttribute(ends, 3));
  geom.setAttribute('aProgress', new THREE.BufferAttribute(progresses, 1));
  geom.setAttribute('aConnectionIndex', new THREE.BufferAttribute(indices, 1));

  // Build index buffer so each connection is a line strip
  const idxBuf: number[] = [];
  for (let ci = 0; ci < connections.length; ci++) {
    const base = ci * SEGMENTS;
    for (let s = 0; s < SEGMENTS - 1; s++) {
      idxBuf.push(base + s, base + s + 1);
    }
  }
  geom.setIndex(idxBuf);

  return geom;
}

// ---------------------------------------------------------------------------
// Starfield
// ---------------------------------------------------------------------------
function createStarfield(): THREE.Points {
  const COUNT = 2000;
  const positions = new Float32Array(COUNT * 3);
  const sizes = new Float32Array(COUNT);
  for (let i = 0; i < COUNT; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 40 + Math.random() * 60;
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
    sizes[i] = 0.5 + Math.random() * 1.5;
  }
  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geom.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 } },
    vertexShader: /* glsl */ `
      attribute float size;
      varying float vBright;
      uniform float uTime;
      void main() {
        vBright = 0.3 + 0.7 * fract(sin(dot(position.xy, vec2(12.9898,78.233))) * 43758.5453);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (200.0 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */ `
      varying float vBright;
      uniform float uTime;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        float a = exp(-d * 8.0) * vBright * (0.6 + 0.4 * sin(uTime * 0.5 + vBright * 6.28));
        gl_FragColor = vec4(vec3(0.75, 0.88, 0.55), a * 0.25);
      }
    `,
  });

  return new THREE.Points(geom, mat);
}

// ---------------------------------------------------------------------------
// React component
// ---------------------------------------------------------------------------
export default function NeuralNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement!;
    let width = parent.clientWidth;
    let height = parent.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x050508);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050508, 0.018);

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 200);
    camera.position.set(0, 5, 18);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;
    controls.maxDistance = 40;
    controls.minDistance = 6;
    controls.enablePan = false;
    controls.rotateSpeed = 0.6;

    // Post-processing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      1.0, // strength
      0.5, // radius
      0.25, // threshold
    );
    composer.addPass(bloom);
    composer.addPass(new OutputPass());

    // Build network
    const network = buildNetwork();

    // Pulse state
    const pulseUniforms = {
      uTime: { value: 0 },
      uPulseTime: { value: 0 },
      uPulseOrigin: { value: new THREE.Vector3(0, 0, 0) },
      uPulseActive: { value: 0 },
    };

    // ---- Nodes ----
    const nodeGeom = new THREE.BufferGeometry();
    nodeGeom.setAttribute('position', new THREE.BufferAttribute(network.positions, 3));
    nodeGeom.setAttribute('aBasePosition', new THREE.BufferAttribute(network.positions, 3));
    nodeGeom.setAttribute('normal', new THREE.BufferAttribute(network.normals, 3));
    nodeGeom.setAttribute('aSize', new THREE.BufferAttribute(network.sizes, 1));
    nodeGeom.setAttribute('aType', new THREE.BufferAttribute(network.types, 1));
    nodeGeom.setAttribute('aLayer', new THREE.BufferAttribute(network.layers, 1));

    const nodeMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: pulseUniforms,
      vertexShader: NODE_VERTEX,
      fragmentShader: NODE_FRAGMENT,
    });

    const nodePoints = new THREE.Points(nodeGeom, nodeMat);
    scene.add(nodePoints);

    // ---- Connections ----
    const connGeom = buildConnectionGeometry(network.connections);
    const connMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: pulseUniforms,
      vertexShader: CONNECTION_VERTEX,
      fragmentShader: CONNECTION_FRAGMENT,
    });
    const connLines = new THREE.LineSegments(connGeom, connMat);
    scene.add(connLines);

    // ---- Starfield ----
    const stars = createStarfield();
    scene.add(stars);

    // ---- Ambient light (for fog interaction) ----
    scene.add(new THREE.AmbientLight(0xc9f31d, 0.02));

    // ---- Pulse on click ----
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function onPointerDown(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);

      // Fire pulse from the closest node or just from camera direction intersecting sphere
      const dir = raycaster.ray.direction.clone().multiplyScalar(8);
      const origin = raycaster.ray.origin.clone().add(dir);

      pulseUniforms.uPulseOrigin.value.copy(origin);
      pulseUniforms.uPulseTime.value = 0;
      pulseUniforms.uPulseActive.value = 1;
    }

    canvas.addEventListener('pointerdown', onPointerDown);

    // ---- Resize ----
    function onResize() {
      width = parent.clientWidth;
      height = parent.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    }
    window.addEventListener('resize', onResize);

    // ---- Animation loop ----
    const clock = new THREE.Clock();
    let animId = 0;

    function animate() {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      pulseUniforms.uTime.value = elapsed;

      // advance pulse
      if (pulseUniforms.uPulseActive.value > 0) {
        pulseUniforms.uPulseTime.value += clock.getDelta() || 0.016;
        if (pulseUniforms.uPulseTime.value > 3) {
          pulseUniforms.uPulseActive.value = 0;
        }
      }

      // starfield time
      ((stars.material as THREE.ShaderMaterial).uniforms as Record<string, THREE.IUniform>).uTime.value = elapsed;

      controls.update();
      composer.render();
    }

    animate();

    // ---- Cleanup ----
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('pointerdown', onPointerDown);
      controls.dispose();
      renderer.dispose();
      composer.dispose();
      nodeGeom.dispose();
      nodeMat.dispose();
      connGeom.dispose();
      connMat.dispose();
      (stars.geometry as THREE.BufferGeometry).dispose();
      (stars.material as THREE.Material).dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  );
}
