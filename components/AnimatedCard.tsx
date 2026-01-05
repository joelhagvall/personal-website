"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { fadeInScale, withDelay } from "@/lib/animations";
import { CARD_STYLES } from "@/lib/styles";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  cardClassName?: string;
}

export function AnimatedCard({
  children,
  delay = 0,
  className,
  cardClassName,
}: AnimatedCardProps) {
  return (
    <motion.div
      {...fadeInScale}
      transition={withDelay(delay)}
      className={cn("h-full", className)}
    >
      <Card className={cn(CARD_STYLES.default, "h-full", cardClassName)}>{children}</Card>
    </motion.div>
  );
}
