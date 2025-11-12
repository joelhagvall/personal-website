"use client";

import { motion } from "framer-motion";
import { SocialLinks } from "@/components/SocialLinks";

type MailMode = 'open' | 'copy';

interface FooterProps {
  mailMode?: MailMode;
}

export function Footer({ mailMode = 'open' }: FooterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="col-span-3 mt-8 border-t border-primary/10"
    >
      <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-2">Joel Hägvall</h2>
          <p className="text-sm text-muted-foreground">
            Software Developer based in Stockholm, Sweden.
          </p>
        </div>
        <SocialLinks variant="muted" mailMode={mailMode} labelVariant="plain" />
        <div className="text-sm text-muted-foreground flex flex-col md:flex-row items-center gap-2">
          <span>&copy; {new Date().getFullYear()} • Built with Next.js</span>
          <span className="hidden md:inline">•</span>
          <a
            href="/security-policy"
            className="hover:text-primary transition-colors hover:underline"
          >
            Security Policy
          </a>
        </div>
      </div>
    </motion.div>
  );
}
