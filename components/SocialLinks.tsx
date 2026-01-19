"use client";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LinkedinIcon } from "lucide-react";
import { SOCIAL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { LABELS } from "@/data/content";
import { EmailPopover } from "@/components/EmailPopover";

type Variant = "bubble" | "muted";
type MailMode = "open" | "copy";
type LabelVariant = "plain" | "profile";

interface SocialLinksProps {
  className?: string;
  variant?: Variant;
  mailMode?: MailMode;
  labelVariant?: LabelVariant;
}

export function SocialLinks({
  className,
  variant = "bubble",
  mailMode = "open",
  labelVariant = "plain",
}: SocialLinksProps) {
  const baseBubble =
    "p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center";
  const baseMuted =
    "text-muted-foreground hover:text-primary transition-colors flex items-center justify-center";
  const linkClass = variant === "bubble" ? baseBubble : baseMuted;

  const githubLabel =
    labelVariant === "profile" ? LABELS.githubProfile : "GitHub";
  const linkedinLabel =
    labelVariant === "profile" ? LABELS.linkedinProfile : "LinkedIn";

  return (
    <div className={cn("flex gap-4 items-center", className)} role="group" aria-label="Social links">
      <a
        href={SOCIAL.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${githubLabel} (opens in new tab)`}
        className={cn(linkClass, variant === "muted" && "w-5 h-5")}
      >
        <GitHubLogoIcon
          className={variant === "bubble" ? "w-6 h-6" : "w-5 h-5"}
          aria-hidden="true"
        />
      </a>

      <a
        href={SOCIAL.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${linkedinLabel} (opens in new tab)`}
        className={cn(linkClass, variant === "muted" && "w-5 h-5")}
      >
        <LinkedinIcon
          className={variant === "bubble" ? "w-6 h-6" : "w-5 h-5"}
          aria-hidden="true"
        />
      </a>

      <EmailPopover variant={variant} mailMode={mailMode} />
    </div>
  );
}
