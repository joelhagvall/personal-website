import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

// Twinkling stars on top of the static sky: [left %, top %, size px, cycle s].
// Fixed values so server and client render the same markup
const TWINKLES: [number, number, number, number][] = [
  [8, 12, 2, 5.2],
  [22, 6, 1.5, 3.6],
  [37, 18, 2.5, 7.4],
  [52, 9, 1.5, 4.3],
  [68, 15, 2, 6.1],
  [84, 7, 1.5, 3.9],
  [94, 24, 2.5, 5.7],
  [14, 32, 1.5, 6.8],
  [30, 41, 2, 4.1],
  [61, 35, 1.5, 7.9],
  [78, 44, 2, 3.3],
  [90, 52, 1.5, 6.4],
  [5, 58, 2.5, 4.8],
  [24, 66, 1.5, 7.1],
  [45, 72, 2, 3.7],
  [70, 63, 2.5, 5.5],
  [86, 78, 1.5, 4.4],
  [12, 86, 2, 6.6],
  [36, 92, 1.5, 3.5],
  [58, 85, 2, 7.6],
  [76, 94, 1.5, 5],
];

interface BackgroundStarsProps {
  overlay?: boolean;
  className?: string;
}

export function BackgroundStars({ overlay = true, className }: BackgroundStarsProps) {
  return (
    <div
      className={cn(
        overlay ? "absolute inset-0" : "relative min-h-full",
        "pointer-events-none overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      <img
        src="/stars.svg"
        alt=""
        width={1600}
        height={900}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {TWINKLES.map(([left, top, size, cycle]) => (
        <span
          key={`${left}-${top}`}
          className="twinkle-star"
          style={
            {
              left: `${left}%`,
              top: `${top}%`,
              "--size": `${size}px`,
              "--cycle": `${cycle}s`,
              // Start each star somewhere mid-cycle so they never pulse in step
              "--offset": `${-((left * 7 + top * 13) % 80) / 10}s`,
            } as CSSProperties
          }
        />
      ))}
      <span className="shooting-star-static shooting-star-static--a" />
      <span className="shooting-star-static shooting-star-static--b" />
    </div>
  );
}
