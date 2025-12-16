"use client";

import Link from "next/link";
import { AnimatedCard } from "@/components/AnimatedCard";
import { ProfileAvatar } from "./ProfileAvatar";
import { LINK_STYLES } from "@/lib/styles";

export function IntroductionCard() {
  return (
    <AnimatedCard delay={0} className="col-span-full">
      <div className="flex items-start gap-6">
        <ProfileAvatar />
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
          <p className="text-muted-foreground text-lg">
            Hi, i'm Joel Hägvall. I'm a software developer and tech enthusiast
            from Stockholm, Sweden. Welcome to my website! Check out the{" "}
            <Link
              href="/about"
              className={`${LINK_STYLES.primary} underline underline-offset-4`}
            >
              About Me
            </Link>{" "}
            page to get to know me better.
          </p>
        </div>
      </div>
    </AnimatedCard>
  );
}
