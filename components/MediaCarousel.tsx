"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { MediaItem } from "@/types/media";
import {
  DRAG_CONFIG,
  CARD_STACK_POSITIONS,
  mediaCardHover,
  mediaCardTap,
} from "@/lib/animations";

interface MediaCarouselProps {
  title: string;
  items: MediaItem[];
  aspectRatio?: "square" | "portrait";
}

function formatItemLabel(item: MediaItem): string {
  if (item.author) {
    return `${item.title} - ${item.author} (${item.year})`;
  }
  return `${item.title} (${item.year})`;
}

export function MediaCarousel({ title, items, aspectRatio = "portrait" }: MediaCarouselProps) {
  const carouselId = `carousel-${title.toLowerCase().replace(/\s+/g, "-")}`;
  const aspectClass = aspectRatio === "square" ? "aspect-square" : "aspect-[2/3]";

  return (
    <section aria-labelledby={carouselId}>
      <h3 id={carouselId} className="text-2xl font-semibold mb-4 text-white">
        {title}
      </h3>
      <div
        className="relative h-[500px] flex justify-center"
        role="group"
        aria-label={`${title} collection - drag cards horizontally to browse`}
      >
        {items.map((item, index) => {
          const position = CARD_STACK_POSITIONS[index] ?? CARD_STACK_POSITIONS[0];

          return (
            <motion.div
              key={item.src}
              className="group absolute w-[250px] cursor-grab rounded-lg touch-none overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              drag="x"
              {...DRAG_CONFIG.carousel}
              initial={position}
              whileHover={mediaCardHover}
              whileTap={mediaCardTap}
              tabIndex={0}
              role="img"
              aria-label={formatItemLabel(item)}
            >
              <div className={`relative ${aspectClass}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover shadow-xl"
                  draggable="false"
                  sizes="250px"
                />
                {/* Glossy overlay effects */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.2)_0%,_transparent_60%)] pointer-events-none"
                  aria-hidden="true"
                />
                {/* Tooltip - slides up from bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white transform translate-y-full group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <p className="text-sm font-medium">{formatItemLabel(item)}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
