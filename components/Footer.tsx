"use client";

import { motion } from "framer-motion";
import { SocialLinks } from "@/components/SocialLinks";
import { FOOTER_CONTENT } from "@/data/content";

type MailMode = "open" | "copy";

interface FooterProps {
  mailMode?: MailMode;
}

// Cache the current year to avoid creating new Date on every render
// This value only changes once per year, safe to cache at module level
const CURRENT_YEAR = new Date().getFullYear();

export function Footer({ mailMode = "open" }: FooterProps) {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="col-span-3 mt-8 border-t border-primary/10"
      aria-label="Site footer"
    >
      <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-xl font-semibold mb-2">{FOOTER_CONTENT.name}</p>
          <p className="text-sm text-muted-foreground">
            {FOOTER_CONTENT.tagline}
          </p>
        </div>
        <SocialLinks
          variant="muted"
          mailMode={mailMode}
          labelVariant="plain"
        />
        <div className="text-sm text-muted-foreground flex flex-col md:flex-row items-center gap-2">
          <span>{FOOTER_CONTENT.copyright(CURRENT_YEAR)}</span>
          <span className="hidden md:inline" aria-hidden="true">•</span>
          <a
            href="/security-policy"
            className="hover:text-primary transition-colors hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          >
            {FOOTER_CONTENT.securityPolicy}
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
