"use client";

import { useState, useRef, useEffect } from "react";
import { MailIcon, X } from "lucide-react";
import { SOCIAL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { LABELS, EMAIL_POPOVER } from "@/data/content";

type Variant = "bubble" | "muted";
type MailMode = "open" | "copy";

interface EmailPopoverProps {
  variant?: Variant;
  mailMode?: MailMode;
  className?: string;
}

export function EmailPopover({
  variant = "bubble",
  mailMode = "open",
  className,
}: EmailPopoverProps) {
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  function getEventPath(e: { composedPath?: () => unknown[] }): unknown[] {
    return typeof e.composedPath === "function" ? e.composedPath() : [];
  }

  const baseBubble =
    "p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center";
  const baseMuted =
    "text-muted-foreground hover:text-primary transition-colors flex items-center justify-center";
  const buttonClass = variant === "bubble" ? baseBubble : baseMuted;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SOCIAL.email);
      setCopyFeedback("Email copied to clipboard");
      setTimeout(() => setCopyFeedback(null), 2000);
    } catch {
      setCopyFeedback("Failed to copy email");
      setTimeout(() => setCopyFeedback(null), 2000);
    }
  };

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: { target: unknown; composedPath?: () => unknown[] }) => {
      const path = getEventPath(event);

      if (path.length > 0) {
        const clickedInsidePopover = popoverRef.current ? path.includes(popoverRef.current) : false;
        const clickedInsideTrigger = triggerRef.current ? path.includes(triggerRef.current) : false;

        if (!clickedInsidePopover && !clickedInsideTrigger) setIsOpen(false);
        return;
      }
    };

    const handleEscape = (event: { key?: unknown }) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      {/* Screen reader announcement for copy feedback */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {copyFeedback}
      </div>

      <div className={cn("relative flex items-center", className)}>
        <button
          ref={triggerRef}
          className={cn(buttonClass, variant === "muted" && "cursor-pointer w-5 h-5")}
          aria-label={LABELS.email}
          aria-expanded={isOpen}
          aria-controls="email-popover"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MailIcon className={variant === "bubble" ? "w-6 h-6" : "w-5 h-5"} aria-hidden="true" />
        </button>

        {isOpen && (
          <div
            ref={popoverRef}
            id="email-popover"
            role="dialog"
            aria-labelledby="email-dialog-title"
            aria-modal="false"
            className={cn(
              "absolute z-50 mt-2 rounded-md border shadow-md outline-none animate-in fade-in-0 zoom-in-95 top-full",
              mailMode === "open"
                ? "w-80 bg-black/50 backdrop-blur-xl border-white/10 -left-32"
                : "w-auto p-3 bg-popover border-border right-0"
            )}
          >
            {mailMode === "open" ? (
              <div className="space-y-3 p-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-white" id="email-dialog-title">
                    {EMAIL_POPOVER.openMailTitle}
                  </h4>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Close"
                    type="button"
                  >
                    <X className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
                <p className="text-sm text-gray-300">
                  {EMAIL_POPOVER.openMailDescription(SOCIAL.email)}
                </p>
                <a
                  href={`mailto:${SOCIAL.email}`}
                  className="block w-full text-center py-2 px-4 rounded-md bg-white/10 hover:bg-white/20 transition-colors text-white font-medium focus:outline-none focus:ring-2 focus:ring-white/50"
                  onClick={() => setIsOpen(false)}
                >
                  {LABELS.continue}
                </a>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-medium" id="email-dialog-title">
                    {EMAIL_POPOVER.emailLabel}
                  </p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    aria-label="Close"
                    type="button"
                  >
                    <X className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground">{SOCIAL.email}</p>
                <button
                  onClick={handleCopyEmail}
                  className="text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm text-left"
                  type="button"
                  aria-label={`Copy email address ${SOCIAL.email} to clipboard`}
                >
                  {LABELS.copyToClipboard}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
