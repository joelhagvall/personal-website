"use client";

import { useState } from "react";
import { CalendarClock, Check, Copy, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FREELANCE } from "@/data/freelance";

export function FreelanceInquiryForm() {
  const [copyEmailState, setCopyEmailState] = useState<"idle" | "copied" | "error">("idle");

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(FREELANCE.contact.email);
      setCopyEmailState("copied");
      window.setTimeout(() => setCopyEmailState("idle"), 2000);
    } catch {
      setCopyEmailState("error");
      window.setTimeout(() => setCopyEmailState("idle"), 2000);
    }
  }

  return (
    <Card className="overflow-hidden border-white/10 bg-white/[0.04] text-white">
      <CardHeader className="border-b border-white/10 bg-white/[0.03]">
        <CardTitle className="text-2xl text-white">
          {FREELANCE.contact.bookingHeading}
        </CardTitle>
        <CardDescription className="max-w-2xl text-base leading-relaxed">
          {FREELANCE.contact.bookingDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6 p-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="space-y-4">
          <Button
            asChild
            size="lg"
            className="h-12 w-full gap-2.5 bg-white px-6 text-base font-semibold text-black hover:bg-gray-200 sm:w-auto"
          >
            <a
              href={FREELANCE.contact.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CalendarClock className="h-5 w-5" aria-hidden="true" />
              {FREELANCE.contact.bookingLabel}
            </a>
          </Button>

          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span>{FREELANCE.contact.backupLabel}</span>
            <a
              href={`mailto:${FREELANCE.contact.email}`}
              className="font-medium text-white underline-offset-4 transition-colors hover:text-gray-300 hover:underline"
            >
              {FREELANCE.contact.email}
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-black/20 p-4 lg:w-80">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {FREELANCE.contact.backupDescription}
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <Button
              asChild
              variant="outline"
              className="w-full justify-center gap-2.5 border-white/10 bg-transparent px-4 text-white hover:bg-white/10 hover:text-white"
            >
              <a href={`mailto:${FREELANCE.contact.email}`}>
                <Mail className="h-4 w-4" aria-hidden="true" />
                {FREELANCE.contact.emailCtaLabel}
              </a>
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleCopyEmail}
              className="w-full justify-center gap-2.5 border-white/10 bg-transparent px-4 text-white hover:bg-white/10 hover:text-white"
            >
              {copyEmailState === "copied" ? (
                <Check className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Copy className="h-4 w-4" aria-hidden="true" />
              )}
              {copyEmailState === "copied"
                ? FREELANCE.contact.copiedLabel
                : copyEmailState === "error"
                  ? FREELANCE.contact.copyFailedLabel
                  : FREELANCE.contact.copyEmailLabel}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
