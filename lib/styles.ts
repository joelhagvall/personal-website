// Centralized style constants for consistent styling across the application

export const CARD_STYLES = {
  base: "p-6 h-full bg-primary/5 border border-primary/10",
  hover: "hover:bg-primary/10 transition-all duration-300",
  default: "p-6 h-full bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10",
} as const;

export const LINK_STYLES = {
  primary: "text-primary hover:text-primary/80 font-medium transition-colors",
  muted: "text-muted-foreground hover:text-primary transition-colors",
  button: "inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors text-primary font-medium",
  underline: "font-medium text-gray-300 hover:text-white transition-colors underline decoration-white/50 hover:decoration-cyan-500",
} as const;

export const TEXT_STYLES = {
  gradientHeading: "bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400",
  sectionTitle: "text-2xl font-semibold mb-4 text-white",
  bodyText: "text-lg text-gray-300",
  mutedText: "text-gray-400",
} as const;

export const GLOW_STYLES = {
  card: "absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg blur opacity-75",
  avatar: "absolute -inset-0.5 bg-white/20 rounded-full blur opacity-75",
  bullet: "flex-shrink-0 h-2 w-2 mt-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]",
} as const;

export const OVERLAY_STYLES = {
  gradient: "absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
  radial: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.2)_0%,_transparent_60%)] pointer-events-none",
  tooltip: "absolute bottom-0 left-0 right-0 p-4 bg-black/70 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300",
} as const;
