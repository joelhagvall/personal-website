"use client";

import {LinkedinIcon, MailIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { motion } from "framer-motion";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export function FooterClient() {
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
          <p className="text-muted-foreground">Software Developer</p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/joelhagvall"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <GitHubLogoIcon className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/joel-hägvall-810601147/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>

          <Popover>
            <PopoverTrigger asChild>
              <button
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                aria-label="Email"
              >
                <MailIcon size={20} />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">joel.hagvall@gmail.com</p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("joel.hagvall@gmail.com");
                  }}
                  className="text-sm text-primary hover:underline"
                >
                  Copy to clipboard
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Joel Hägvall
          </p>
          <a href="mailto:joel.hagvall@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            joel.hagvall@gmail.com
          </a>
        </div>
      </div>
    </motion.div>
  );
}
