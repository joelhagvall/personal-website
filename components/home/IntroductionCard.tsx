"use client";

import Link from "next/link";
import { AnimatedCard } from "@/components/AnimatedCard";
import { ProfileAvatar } from "./ProfileAvatar";
import { LINK_STYLES } from "@/lib/styles";
import { HOME_CONTENT } from "@/data/content";

export function IntroductionCard() {
  return (
    <AnimatedCard delay={0} className="col-span-full">
      <div className="flex items-start gap-6">
        <ProfileAvatar />
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-3">
            {HOME_CONTENT.introduction.heading}
          </h2>
          <p className="text-muted-foreground text-lg">
            {HOME_CONTENT.introduction.text}{" "}
            <Link
              href="/about"
              className={`${LINK_STYLES.primary} underline underline-offset-4`}
            >
              {HOME_CONTENT.introduction.linkText}
            </Link>{" "}
            {HOME_CONTENT.introduction.linkSuffix}
          </p>
        </div>
      </div>
    </AnimatedCard>
  );
}
