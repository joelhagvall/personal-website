"use client";

import { motion } from "framer-motion";
import type { MediaItem } from "@/types/media";
import {
  DRAG_CONFIG,
  CARD_STACK_POSITIONS,
  mediaCardHover,
  mediaCardTap,
} from "@/lib/animations";
import { OVERLAY_STYLES } from "@/lib/styles";

interface MediaCarouselProps {
  title: string;
  items: MediaItem[];
}

function formatItemLabel(item: MediaItem): string {
  if (item.author) {
    return `${item.title} - ${item.author} (${item.year})`;
  }
  return `${item.title} (${item.year})`;
}

export function MediaCarousel({ title, items }: MediaCarouselProps) {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
      <div className="relative h-[500px] flex justify-center">
        {items.map((item, index) => {
          const position = CARD_STACK_POSITIONS[index] ?? CARD_STACK_POSITIONS[0];

          return (
            <motion.div
              key={item.src}
              className="group absolute w-[250px] cursor-pointer rounded-lg touch-none overflow-hidden"
              drag="x"
              {...DRAG_CONFIG.carousel}
              initial={position}
              whileHover={mediaCardHover}
              whileTap={mediaCardTap}
            >
              <div className="relative">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full shadow-xl"
                  draggable="false"
                />
                {/* Glossy overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.2)_0%,_transparent_60%)] pointer-events-none" />
                {/* Tooltip - slides up from bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">{formatItemLabel(item)}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
