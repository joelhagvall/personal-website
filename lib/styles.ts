// Centralized style constants for consistent styling across the application

export const CARD_STYLES = {
  base: "p-6 h-full bg-primary/5 border border-primary/10",
  hover: "hover:bg-primary/10 transition-all duration-300",
  default: "p-6 h-full bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10",
} as const;

export const LINK_STYLES = {
  primary: "text-primary hover:text-primary/80 font-medium transition-colors",
  muted: "text-muted-foreground hover:text-primary transition-colors",
  button: "inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors text-primary font-medium",
  underline: "font-medium text-foreground/80 hover:text-foreground transition-colors underline decoration-white/50 hover:decoration-cyan-500",
} as const;

export const TEXT_STYLES = {
  gradientHeading: "bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground",
  sectionTitle: "text-2xl font-semibold mb-4 text-foreground",
  bodyText: "text-lg text-foreground/80",
  mutedText: "text-muted-foreground",
} as const;
