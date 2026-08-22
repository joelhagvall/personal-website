"use client";

import { useEffect, useRef, useState } from "react";

// Hoist static data outside component to avoid recreation on every render
// See: https://vercel.com/blog/introducing-react-best-practices (rule 6.3)
const PLANETS: readonly {
  name: string;
  orbit: number;
  size: number;
  color: string;
  speed: number;
  moon?: boolean;
  rings?: boolean;
}[] = [
  { name: "Earth", orbit: 0.8, size: 0.07, color: "#4a90d9", speed: 0.4, moon: true },
  { name: "Mars", orbit: 1.2, size: 0.05, color: "#c1440e", speed: 0.3 },
  { name: "Saturn", orbit: 1.8, size: 0.11, color: "#e8d5a3", speed: 0.15, rings: true },
];

// The scene is drawn with Canvas 2D instead of WebGL/three.js: it's only
// spheres, rings and lines, so a tiny manual projection saves the ~213 KB
// (gzip) three.js chunk from the landing page. Camera and animation values
// match the old react-three-fiber scene: camera at [0, 2, 5] with fov 45
// looking at the origin, orbit plane tilted 0.4 rad around the x-axis.
type V3 = [number, number, number];

const SQRT29 = Math.sqrt(29);
const CAMERA: V3 = [0, 2, 5];
// Camera basis from lookAt(origin) with up = +y
const FORWARD: V3 = [0, -2 / SQRT29, -5 / SQRT29];
const RIGHT: V3 = [1, 0, 0];
const UP: V3 = [0, 5 / SQRT29, -2 / SQRT29];
const FOV_TAN = Math.tan((45 * Math.PI) / 360);
const TILT = 0.4;
const RING_TILT = Math.PI / 2.5;
const ORBIT_SEGMENTS = 64;

/** Apply the orbit-plane tilt and the gentle floating motion (same values as the old floating group). */
function worldFromLocal(x: number, y: number, z: number, t: number): V3 {
  // Orbit plane tilt around x
  const y1 = y * Math.cos(TILT) - z * Math.sin(TILT);
  const z1 = y * Math.sin(TILT) + z * Math.cos(TILT);

  // Floating rotation (tiny angles, composition order is immaterial)
  const rz = Math.sin(t * 0.25) * 0.02;
  const rx = Math.cos(t * 0.25) * 0.02;
  const x2 = x * Math.cos(rz) - y1 * Math.sin(rz);
  const y2 = x * Math.sin(rz) + y1 * Math.cos(rz);
  const y3 = y2 * Math.cos(rx) - z1 * Math.sin(rx);
  const z3 = y2 * Math.sin(rx) + z1 * Math.cos(rx);

  return [x2, y3 + Math.sin(t * 0.5) * 0.04, z3];
}

interface Projected {
  x: number;
  y: number;
  /** Camera-space depth; larger = farther away. */
  z: number;
}

function project(p: V3, w: number, h: number): Projected {
  const dx = p[0] - CAMERA[0];
  const dy = p[1] - CAMERA[1];
  const dz = p[2] - CAMERA[2];
  const cx = dx * RIGHT[0] + dy * RIGHT[1] + dz * RIGHT[2];
  const cy = dx * UP[0] + dy * UP[1] + dz * UP[2];
  const cz = dx * FORWARD[0] + dy * FORWARD[1] + dz * FORWARD[2];
  const f = h / 2 / FOV_TAN;
  return { x: w / 2 + (cx * f) / cz, y: h / 2 - (cy * f) / cz, z: cz };
}

/** World size → screen pixels at a given depth. */
function scaleAt(worldSize: number, z: number, h: number): number {
  return (worldSize * (h / 2 / FOV_TAN)) / z;
}

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function mix(hexA: string, hexB: string, amount: number): string {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  const c = a.map((v, i) => Math.round(v + ((b[i] ?? 0) - v) * amount));
  return `rgb(${c[0]},${c[1]},${c[2]})`;
}

function shade(hex: string, factor: number): string {
  const c = hexToRgb(hex).map((v) => Math.min(255, Math.round(v * factor)));
  return `rgb(${c[0]},${c[1]},${c[2]})`;
}

function render(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h);
  const pulse = Math.sin(t * 2) * 0.08;

  // === SUN === (flat translucent glow discs, like the old meshBasicMaterial spheres)
  const sun = project(worldFromLocal(0, 0, 0, t), w, h);
  const sunR = scaleAt(0.25, sun.z, h);
  ctx.globalAlpha = Math.max(0, 0.2 + pulse * 0.5);
  ctx.fillStyle = "#f97316";
  ctx.beginPath();
  ctx.arc(sun.x, sun.y, scaleAt(0.32, sun.z, h), 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = Math.max(0, 0.4 + pulse);
  ctx.fillStyle = "#fbbf24";
  ctx.beginPath();
  ctx.arc(sun.x, sun.y, scaleAt(0.28, sun.z, h), 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.beginPath();
  ctx.arc(sun.x, sun.y, sunR, 0, Math.PI * 2);
  ctx.fill();

  // === ORBIT LINES ===
  ctx.strokeStyle = "rgba(255,255,255,0.15)";
  ctx.lineWidth = 1;
  for (const planet of PLANETS) {
    ctx.beginPath();
    for (let i = 0; i <= ORBIT_SEGMENTS; i++) {
      const angle = (i / ORBIT_SEGMENTS) * Math.PI * 2;
      const s = project(
        worldFromLocal(
          Math.cos(angle) * planet.orbit,
          0,
          Math.sin(angle) * planet.orbit,
          t
        ),
        w,
        h
      );
      if (i === 0) ctx.moveTo(s.x, s.y);
      else ctx.lineTo(s.x, s.y);
    }
    ctx.stroke();
  }

  // === PLANETS === (painter's algorithm: far to near)
  const bodies = PLANETS.map((planet) => {
    // The old planets group rotated at t*0.05 around y; same axis as the
    // orbits, so the angles just add.
    const angle = t * (planet.speed + 0.05);
    const local = {
      x: Math.cos(angle) * planet.orbit,
      z: Math.sin(angle) * planet.orbit,
    };
    const screen = project(worldFromLocal(local.x, 0, local.z, t), w, h);
    return { planet, local, screen };
  }).sort((a, b) => b.screen.z - a.screen.z);

  for (const { planet, local, screen } of bodies) {
    const pr = scaleAt(planet.size, screen.z, h);

    if (planet.rings) drawRing(ctx, local, screen, planet.size, t, w, h, "back");

    // Shade like the old point light at the sun: lit side faces the sun
    const dx = screen.x - sun.x;
    const dy = screen.y - sun.y;
    const len = Math.hypot(dx, dy) || 1;
    const g = ctx.createRadialGradient(
      screen.x - (dx / len) * pr * 0.7,
      screen.y - (dy / len) * pr * 0.7,
      pr * 0.1,
      screen.x,
      screen.y,
      pr * 1.05
    );
    g.addColorStop(0, mix(planet.color, "#ffe9b0", 0.55));
    g.addColorStop(0.45, planet.color);
    g.addColorStop(1, shade(planet.color, 0.25));
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(screen.x, screen.y, pr, 0, Math.PI * 2);
    ctx.fill();

    if (planet.rings) drawRing(ctx, local, screen, planet.size, t, w, h, "front");

    if (planet.moon) {
      const m = project(
        worldFromLocal(
          local.x + Math.cos(t * 8) * (planet.size + 0.08),
          0,
          local.z + Math.sin(t * 8) * (planet.size + 0.08),
          t
        ),
        w,
        h
      );
      ctx.fillStyle = "#c4c4c4";
      ctx.beginPath();
      ctx.arc(m.x, m.y, Math.max(0.5, scaleAt(0.015, m.z, h)), 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

/** Saturn's rings, split into a back and front pass so the planet disc occludes the far half. */
function drawRing(
  ctx: CanvasRenderingContext2D,
  planetLocal: { x: number; z: number },
  planetScreen: Projected,
  size: number,
  t: number,
  w: number,
  h: number,
  pass: "back" | "front"
) {
  const midRadius = ((1.4 + 2.2) / 2) * size;
  const bandWidth = (2.2 - 1.4) * size;
  ctx.strokeStyle = "rgba(212,196,168,0.7)";
  ctx.lineCap = "round";
  for (let i = 0; i < ORBIT_SEGMENTS; i++) {
    const b0 = (i / ORBIT_SEGMENTS) * Math.PI * 2;
    const b1 = ((i + 1) / ORBIT_SEGMENTS) * Math.PI * 2;
    const s0 = project(ringPoint(planetLocal, midRadius, b0, t), w, h);
    const s1 = project(ringPoint(planetLocal, midRadius, b1, t), w, h);
    const isBack = (s0.z + s1.z) / 2 > planetScreen.z;
    if ((pass === "back") !== isBack) continue;
    ctx.lineWidth = Math.max(1, scaleAt(bandWidth, (s0.z + s1.z) / 2, h));
    ctx.beginPath();
    ctx.moveTo(s0.x, s0.y);
    ctx.lineTo(s1.x, s1.y);
    ctx.stroke();
  }
}

function ringPoint(
  planetLocal: { x: number; z: number },
  radius: number,
  angle: number,
  t: number
): V3 {
  return worldFromLocal(
    planetLocal.x + Math.cos(angle) * radius,
    Math.sin(angle) * radius * Math.cos(RING_TILT),
    planetLocal.z + Math.sin(angle) * radius * Math.sin(RING_TILT),
    t
  );
}

interface Astronaut3DProps {
  className?: string;
}

export function Astronaut3D({ className = "" }: Astronaut3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!container || !canvas || !ctx) return;

    let w = 0;
    let h = 0;
    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    // Reduced-motion users get a single static frame, everyone else gets the
    // animation — but only while the canvas is on screen (no point rendering
    // at 60fps behind the rest of the page).
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let startTime = 0;
    // Elapsed animation time, kept across off-screen pauses so the scene
    // resumes where it left off instead of jumping back to t=0.
    let elapsed = 0;
    let firstFrame = true;
    let running = false;
    let visible = true;

    const loop = (now: number) => {
      if (!running) return;
      if (startTime === 0) startTime = now - elapsed * 1000;
      elapsed = (now - startTime) / 1000;
      if (w > 0 && h > 0) render(ctx, w, h, elapsed);
      if (firstFrame) {
        firstFrame = false;
        setCanvasReady(true);
      }
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running || reduced || !visible) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      startTime = 0;
      cancelAnimationFrame(raf);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return;
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    observer.observe(container);

    if (reduced) {
      if (w > 0 && h > 0) render(ctx, w, h, 0);
      setCanvasReady(true);
    } else {
      start();
    }

    return () => {
      stop();
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full ${className}`}
      role="img"
      aria-label="Animated 3D solar system with orbiting planets"
    >
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full transition-opacity duration-200 ${
          canvasReady ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
