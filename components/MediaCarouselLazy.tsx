"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { MediaItem } from "@/types/media";

// framer-motion only exists on the site for these carousels, and they sit far
// below the fold on the about page — split them into their own chunk and only
// load it once the section approaches the viewport.
const MediaCarousel = dynamic(() =>
  import("@/components/MediaCarousel").then((mod) => mod.MediaCarousel)
);

interface MediaCarouselLazyProps {
  title: string;
  items: MediaItem[];
  aspectRatio?: "square" | "portrait";
}

export function MediaCarouselLazy(props: MediaCarouselLazyProps) {
  const placeholderRef = useRef<HTMLElement>(null);
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    const el = placeholderRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldMount(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (shouldMount) {
    return <MediaCarousel {...props} />;
  }

  // Mirrors MediaCarousel's layout (heading + 500px stage) so nothing shifts
  // when the real component mounts
  return (
    <section ref={placeholderRef} aria-label={props.title}>
      <h3 className="text-2xl font-semibold mb-4 text-white">{props.title}</h3>
      <div className="h-[500px]" />
    </section>
  );
}
