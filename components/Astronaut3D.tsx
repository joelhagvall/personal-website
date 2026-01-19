"use client";

import { useRef } from "react";
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
  const sunRef = useRef<THREE.Mesh>(null);
  const planetsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Sun pulse
    if (sunRef.current) {
      const material = sunRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 1.5 + Math.sin(t * 2) * 0.3;
    }

    // Rotate entire system slowly
    if (planetsRef.current) {
      planetsRef.current.rotation.y = t * 0.05;
    }
  });

  return (
    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
      <group rotation={[0.4, 0, 0]}>

        {/* === SUN === */}
        <mesh ref={sunRef}>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial
            color="#fbbf24"
            emissive="#f97316"
            emissiveIntensity={1.5}
          />
        </mesh>

        {/* Sun glow layers */}
        <mesh>
          <sphereGeometry args={[0.28, 32, 32]} />
          <meshStandardMaterial
            color="#fbbf24"
            emissive="#fbbf24"
            emissiveIntensity={0.8}
            transparent
            opacity={0.4}
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.32, 32, 32]} />
          <meshStandardMaterial
            color="#f97316"
            emissive="#f97316"
            emissiveIntensity={0.5}
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
            <meshStandardMaterial
              color="#ffffff"
              transparent
              opacity={0.15}
            />
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
          <meshStandardMaterial
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
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 2, 5], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#fbbf24" />
        <directionalLight position={[5, 5, 5]} intensity={0.3} />

        <SolarSystem />
      </Canvas>
    </div>
  );
}
