import { Card } from "@/components/ui/card";
import { CARD_STYLES } from "@/lib/styles";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  cardClassName?: string;
}

export function AnimatedCard({
  children,
  className,
  cardClassName,
}: AnimatedCardProps) {
  return (
    <div className={cn("h-full", className)}>
      <Card className={cn(CARD_STYLES.default, "h-full", cardClassName)}>{children}</Card>
    </div>
  );
}
