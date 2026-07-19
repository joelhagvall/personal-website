"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Hoist static data outside component to avoid recreation on every render
// See: https://vercel.com/blog/introducing-react-best-practices (rule 6.3)
const PLANETS = [
  { name: "Earth", orbit: 0.8, size: 0.07, color: "#4a90d9", speed: 0.4, moon: true },
  { name: "Mars", orbit: 1.2, size: 0.05, color: "#c1440e", speed: 0.3 },
  { name: "Saturn", orbit: 1.8, size: 0.11, color: "#e8d5a3", speed: 0.15, rings: true },
] as const;

function SolarSystem() {
  const glowInnerRef = useRef<THREE.Mesh>(null);
  const glowOuterRef = useRef<THREE.Mesh>(null);
  const planetsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Sun pulse via the glow layers' opacity
    const pulse = Math.sin(t * 2) * 0.08;
    if (glowInnerRef.current) {
      (glowInnerRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.4 + pulse;
    }
    if (glowOuterRef.current) {
      (glowOuterRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.2 + pulse * 0.5;
    }

    // Rotate entire system slowly
    if (planetsRef.current) {
      planetsRef.current.rotation.y = t * 0.05;
    }
  });

  // The sun, its glow layers and the orbit lines are self-lit decoration, so
  // they use unlit meshBasicMaterial — no PBR lighting cost. Only the planets
  // are actually shaded by the point light.
  return (
    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
      <group rotation={[0.4, 0, 0]}>

        {/* === SUN === */}
        <mesh>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshBasicMaterial color="#fbbf24" toneMapped={false} />
        </mesh>

        {/* Sun glow layers */}
        <mesh ref={glowInnerRef}>
          <sphereGeometry args={[0.28, 32, 32]} />
          <meshBasicMaterial
            color="#fbbf24"
            toneMapped={false}
            transparent
            opacity={0.4}
          />
        </mesh>
        <mesh ref={glowOuterRef}>
          <sphereGeometry args={[0.32, 32, 32]} />
          <meshBasicMaterial
            color="#f97316"
            toneMapped={false}
            transparent
            opacity={0.2}
          />
        </mesh>

        {/* === PLANETS === */}
        <group ref={planetsRef}>
          {PLANETS.map((planet) => (
            <Planet key={planet.name} {...planet} />
          ))}
        </group>

        {/* === ORBIT LINES === */}
        {PLANETS.map((planet) => (
          <mesh key={`orbit-${planet.name}`} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[planet.orbit, 0.003, 8, 64]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
          </mesh>
        ))}

      </group>
    </Float>
  );
}

interface PlanetProps {
  orbit: number;
  size: number;
  color: string;
  speed: number;
  moon?: boolean;
  rings?: boolean;
}

function Planet({ orbit, size, color, speed, moon, rings }: PlanetProps) {
  const planetRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (planetRef.current) {
      // Orbit around sun
      planetRef.current.position.x = Math.cos(t * speed) * orbit;
      planetRef.current.position.z = Math.sin(t * speed) * orbit;
    }

    if (meshRef.current) {
      // Planet rotation
      meshRef.current.rotation.y = t * 2;
    }
  });

  return (
    <group ref={planetRef}>
      {/* Planet sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial
          color={color}
          metalness={0.2}
          roughness={0.8}
        />
      </mesh>

      {/* Saturn's rings */}
      {rings && (
        <mesh rotation={[Math.PI / 2.5, 0, 0]}>
          <ringGeometry args={[size * 1.4, size * 2.2, 32]} />
          <meshBasicMaterial
            color="#d4c4a8"
            transparent
            opacity={0.7}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}

      {/* Earth's moon */}
      {moon && <Moon parentSize={size} />}
    </group>
  );
}

function Moon({ parentSize }: { parentSize: number }) {
  const moonRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (moonRef.current) {
      moonRef.current.position.x = Math.cos(t * 8) * (parentSize + 0.08);
      moonRef.current.position.z = Math.sin(t * 8) * (parentSize + 0.08);
    }
  });

  return (
    <mesh ref={moonRef}>
      <sphereGeometry args={[0.015, 8, 8]} />
      <meshStandardMaterial color="#c4c4c4" />
    </mesh>
  );
}

interface Astronaut3DProps {
  className?: string;
}

export function Astronaut3D({ className = "" }: Astronaut3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // "always" while visible, "never" when scrolled out of view (the WebGL loop
  // otherwise keeps rendering at 60fps behind the rest of the page), and a
  // single static "demand" frame for prefers-reduced-motion users.
  const [frameloop, setFrameloop] = useState<"always" | "never" | "demand">(
    "always"
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFrameloop("demand");
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return;
      setFrameloop(entry.isIntersecting ? "always" : "never");
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full ${className}`}
      role="img"
      aria-label="Animated 3D solar system with orbiting planets"
    >
      <Canvas
        camera={{ position: [0, 2, 5], fov: 45 }}
        style={{ background: "transparent" }}
        frameloop={frameloop}
        dpr={[1, 1.5]}
        gl={{ powerPreference: "low-power" }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#fbbf24" />
        <directionalLight position={[5, 5, 5]} intensity={0.3} />

        <SolarSystem />
      </Canvas>
    </div>
  );
}
