"use client";

import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { cn } from "@/lib/utils";

interface BackgroundStarsProps {
  overlay?: boolean;
  className?: string;
}

export function BackgroundStars({ overlay = true, className }: BackgroundStarsProps) {
  if (overlay) {
    return (
      <div className={cn("absolute inset-0 pointer-events-none", className)}>
        <StarsBackground />
        <ShootingStars />
      </div>
    );
  }
  return (
    <div className={cn("relative", className)}>
      <StarsBackground />
      <ShootingStars />
    </div>
  );
}
