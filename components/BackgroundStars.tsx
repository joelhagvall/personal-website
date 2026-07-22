import { cn } from "@/lib/utils";

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
      <span className="shooting-star-static" />
    </div>
  );
}
