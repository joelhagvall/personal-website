"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface StarProps {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number | null;
}

interface StarBackgroundProps {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  className?: string;
}

export const StarsBackground: React.FC<StarBackgroundProps> = ({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Everything lives outside React state: a setState on resize used to
  // re-run the render effect and re-randomize the whole sky.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let stars: StarProps[] = [];
    let rafId: number | undefined;
    let inViewport = true;
    let cssWidth = 0;
    let cssHeight = 0;
    let lastWidth = 0;
    let lastHeight = 0;

    const generateStars = (width: number, height: number): StarProps[] => {
      const numStars = Math.floor(width * height * starDensity);
      return Array.from({ length: numStars }, () => {
        const shouldTwinkle =
          allStarsTwinkle || Math.random() < twinkleProbability;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 0.05 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
          twinkleSpeed: shouldTwinkle
            ? minTwinkleSpeed +
              Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
            : null,
        };
      });
    };

    const render = () => {
      ctx.clearRect(0, 0, cssWidth, cssHeight);
      const now = Date.now() * 0.001;
      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        if (star.twinkleSpeed !== null) {
          star.opacity = 0.5 + Math.abs(Math.sin(now / star.twinkleSpeed) * 0.5);
        }
      }
    };

    const loop = () => {
      render();
      rafId = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (rafId === undefined && inViewport && !reducedMotion) {
        rafId = requestAnimationFrame(loop);
      }
    };

    const stopLoop = () => {
      if (rafId !== undefined) {
        cancelAnimationFrame(rafId);
        rafId = undefined;
      }
    };

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cssWidth = rect.width;
      cssHeight = rect.height;
      canvas.width = Math.round(cssWidth * dpr);
      canvas.height = Math.round(cssHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Mobile browsers fire resize when the URL bar hides/shows, which is a
      // height-only change of ~100px — re-randomizing then makes the sky
      // visibly reshuffle mid-scroll. Only regenerate on real size changes.
      if (cssWidth !== lastWidth || Math.abs(cssHeight - lastHeight) > 120) {
        lastWidth = cssWidth;
        lastHeight = cssHeight;
        stars = generateStars(cssWidth, cssHeight);
      }

      if (reducedMotion) render();
    };

    updateSize();
    if (reducedMotion) {
      render();
    } else {
      startLoop();
    }

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      if (!entry) return;
      inViewport = entry.isIntersecting;
      if (inViewport) {
        startLoop();
      } else {
        stopLoop();
      }
    });
    intersectionObserver.observe(canvas);

    return () => {
      stopLoop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [
    starDensity,
    allStarsTwinkle,
    twinkleProbability,
    minTwinkleSpeed,
    maxTwinkleSpeed,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("h-full w-full absolute inset-0", className)}
    />
  );
};
