"use client";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LinkedinIcon, MailIcon } from "lucide-react";
import { SOCIAL } from "@/lib/constants";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type Variant = "bubble" | "muted";
type MailMode = "open" | "copy";
type LabelVariant = "plain" | "profile";

interface SocialLinksProps {
  className?: string;
  variant?: Variant;
  mailMode?: MailMode;
  iconSize?: number; // lucide size prop
  labelVariant?: LabelVariant;
}

export function SocialLinks({
  className,
  variant = "bubble",
  mailMode = "open",
  iconSize = 24,
  labelVariant = "plain",
}: SocialLinksProps) {
  const baseBubble =
    "p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50";
  const baseMuted = "text-muted-foreground hover:text-primary transition-colors";
  const linkClass = variant === "bubble" ? baseBubble : baseMuted;

  return (
    <div className={cn("flex gap-4 items-center", className)}>
      <a
        href={SOCIAL.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={labelVariant === 'profile' ? 'GitHub profile' : 'GitHub'}
        className={linkClass}
      >
        <GitHubLogoIcon className={variant === "bubble" ? "w-6 h-6" : "w-5 h-5"} />
      </a>

      <a
        href={SOCIAL.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={labelVariant === 'profile' ? 'LinkedIn profile' : 'LinkedIn'}
        className={linkClass}
      >
        <LinkedinIcon className={variant === "bubble" ? "w-6 h-6" : "w-5 h-5"} />
      </a>

      <Popover>
        <PopoverTrigger asChild>
          <button
            className={cn(linkClass, variant === "muted" && "cursor-pointer")}
            aria-label="Email"
            type="button"
          >
            <MailIcon size={variant === "bubble" ? iconSize : 20} />
          </button>
        </PopoverTrigger>
        {mailMode === "open" ? (
          <PopoverContent className="w-80 bg-black/50 backdrop-blur-xl border border-white/10">
            <div className="space-y-3 p-1">
              <h4 className="font-medium text-white">Open Mail App?</h4>
              <p className="text-sm text-gray-300">
                This will open your default email application to send a message to: {SOCIAL.email}
              </p>
              <a
                href={`mailto:${SOCIAL.email}`}
                className="block w-full text-center py-2 px-4 rounded-md bg-white/10 hover:bg-white/20 transition-colors text-white font-medium"
              >
                Continue
              </a>
            </div>
          </PopoverContent>
        ) : (
          <PopoverContent className="w-auto p-3">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-muted-foreground">{SOCIAL.email}</p>
              <button
                onClick={() => {
                  void navigator.clipboard.writeText(SOCIAL.email);
                }}
                className="text-sm text-primary hover:underline"
                type="button"
              >
                Copy to clipboard
              </button>
            </div>
          </PopoverContent>
        )}
      </Popover>
    </div>
  );
}
