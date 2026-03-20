import Link from "next/link";
import { AnimatedCard } from "@/components/AnimatedCard";
import { ProfileAvatar } from "./ProfileAvatar";
import { LINK_STYLES } from "@/lib/styles";
import { HOME_CONTENT } from "@/data/content";
import { FREELANCE } from "@/data/freelance";

export function IntroductionCard() {
  return (
    <AnimatedCard className="col-span-full">
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
          <p className="mt-4 text-muted-foreground text-base">
            {FREELANCE.homeCard.availability}{" "}
            <Link
              href="/work-with-me"
              className={`${LINK_STYLES.primary} underline underline-offset-4`}
            >
              See how I work
            </Link>
            .
          </p>
        </div>
      </div>
    </AnimatedCard>
  );
}
