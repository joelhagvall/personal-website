"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useId, useRef } from "react";

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

// Hoist function outside component to avoid recreation
const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;

  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 };
    case 1:
      return { x: window.innerWidth, y: offset, angle: 135 };
    case 2:
      return { x: offset, y: window.innerHeight, angle: 225 };
    case 3:
      return { x: 0, y: offset, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};

interface StarState {
  x: number;
  y: number;
  angle: number;
  speed: number;
  distance: number;
}

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<SVGRectElement>(null);
  const gradientId = useId();

  // The animation mutates the <rect> directly instead of going through React
  // state — a setState per frame would re-render the whole component at 60fps.
  useEffect(() => {
    const rect = rectRef.current;
    const container = containerRef.current;
    if (!rect || !container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let inViewport = true;
    let star: StarState | null = null;
    let lastTime = 0;

    const scheduleNext = () => {
      const delay = Math.random() * (maxDelay - minDelay) + minDelay;
      timeoutId = setTimeout(spawn, delay);
    };

    const spawn = () => {
      if (!inViewport) {
        scheduleNext();
        return;
      }
      const { x, y, angle } = getRandomStartPoint();
      star = {
        x,
        y,
        angle,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };
      lastTime = performance.now();
      rafId = requestAnimationFrame(move);
    };

    const move = (now: number) => {
      if (!star) return;

      // Speeds are tuned as px/frame at 60fps; scale by elapsed frames so the
      // star moves at the same visual speed on 120Hz+ displays. Cap the step
      // so a background-tab pause doesn't teleport the star off screen.
      const frames = Math.min((now - lastTime) / (1000 / 60), 3);
      lastTime = now;

      const step = star.speed * frames;
      star.x += step * Math.cos((star.angle * Math.PI) / 180);
      star.y += step * Math.sin((star.angle * Math.PI) / 180);
      star.distance += step;

      if (
        star.x < -20 ||
        star.x > window.innerWidth + 20 ||
        star.y < -20 ||
        star.y > window.innerHeight + 20
      ) {
        star = null;
        rect.setAttribute("visibility", "hidden");
        scheduleNext();
        return;
      }

      const scale = 1 + star.distance / 100;
      const width = starWidth * scale;
      rect.setAttribute("visibility", "visible");
      rect.setAttribute("x", String(star.x));
      rect.setAttribute("y", String(star.y));
      rect.setAttribute("width", String(width));
      rect.setAttribute(
        "transform",
        `rotate(${star.angle}, ${star.x + width / 2}, ${star.y + starHeight / 2})`
      );

      rafId = requestAnimationFrame(move);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return;
      inViewport = entry.isIntersecting;
      if (!inViewport && star) {
        star = null;
        if (rafId !== undefined) cancelAnimationFrame(rafId);
        rect.setAttribute("visibility", "hidden");
        scheduleNext();
      }
    });
    observer.observe(container);

    spawn();

    return () => {
      observer.disconnect();
      if (rafId !== undefined) cancelAnimationFrame(rafId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [minSpeed, maxSpeed, minDelay, maxDelay, starWidth, starHeight]);

  return (
    <div
      ref={containerRef}
      className={cn("w-full h-full absolute inset-0", className)}
    >
      <svg className="w-full h-full" aria-hidden="true">
        <rect
          ref={rectRef}
          visibility="hidden"
          height={starHeight}
          fill={`url(#${gradientId})`}
        />
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
            <stop
              offset="100%"
              style={{ stopColor: starColor, stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
