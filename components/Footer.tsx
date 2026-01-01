"use client";

import { motion } from "framer-motion";
import { SocialLinks } from "@/components/SocialLinks";
import { FOOTER_CONTENT } from "@/data/content";

type MailMode = "open" | "copy";

interface FooterProps {
  mailMode?: MailMode;
}

export function Footer({ mailMode = "open" }: FooterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="col-span-3 mt-8 border-t border-primary/10"
    >
      <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-2">{FOOTER_CONTENT.name}</h2>
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
          <span>{FOOTER_CONTENT.copyright(new Date().getFullYear())}</span>
          <span className="hidden md:inline">•</span>
          <a
            href="/security-policy"
            className="hover:text-primary transition-colors hover:underline"
          >
            {FOOTER_CONTENT.securityPolicy}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
