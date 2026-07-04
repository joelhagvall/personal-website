"use client";

import { useState, useEffect, useCallback } from "react";
import { ZoomIn, X } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function ProfileAvatar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Handle escape key and body scroll lock
  useEffect(() => {
    const handleEscape = (e: { key?: unknown }) => {
      if (e.key === "Escape") handleClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose]);

  return (
    <div className="relative shrink-0">
      <div className="group relative inline-block rounded-full">
        <button
          aria-label="Open larger profile image"
          aria-expanded={isOpen}
          className="rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50"
          onClick={() => setIsOpen(true)}
        >
          <Avatar className="h-20 w-20 cursor-pointer">
            <AvatarImage src="/media/selfie.webp" alt="Joel Hägvall" />
            <AvatarFallback>JH</AvatarFallback>
          </Avatar>
          <span
            className="pointer-events-none absolute inset-0 rounded-full bg-black/30 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center"
            aria-hidden="true"
          >
            <ZoomIn className="h-6 w-6 text-white" />
          </span>
        </button>
      </div>

      {/* Custom accessible lightbox modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="profile-image-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 animate-in fade-in-0"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 max-w-2xl w-full mx-4 animate-in zoom-in-95 fade-in-0">
            <h2 id="profile-image-title" className="sr-only">
              Profile image preview
            </h2>
            <button
              onClick={handleClose}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm p-1"
              aria-label="Close image preview"
            >
              <X className="h-8 w-8" aria-hidden="true" />
            </button>
            <img
              src="/media/selfie.webp"
              alt="Joel Hägvall - profile photo"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      )}

      <span
        className="absolute bottom-2.5 right-2.5 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white"
        role="img"
        aria-label="Online status indicator"
      />
    </div>
  );
}
