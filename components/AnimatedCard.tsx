import type { ComponentPropsWithoutRef, ElementType } from "react";
import { Card } from "@/components/ui/card";
import { CARD_STYLES } from "@/lib/styles";
import { cn } from "@/lib/utils";

type CardElement = Extract<ElementType, "div" | "section" | "article">;

interface AnimatedCardProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  /** Outer element. Use "section" (with aria-labelledby) for landmark sections. */
  as?: CardElement;
  className?: string;
  cardClassName?: string;
}

export function AnimatedCard({
  children,
  as: Tag = "div",
  className,
  cardClassName,
  ...rest
}: AnimatedCardProps) {
  return (
    <Tag className={cn("h-full", className)} {...rest}>
      <Card className={cn(CARD_STYLES.default, "h-full", cardClassName)}>{children}</Card>
    </Tag>
  );
}
