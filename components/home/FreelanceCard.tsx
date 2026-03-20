import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";
import { FREELANCE } from "@/data/freelance";
import { LINK_STYLES } from "@/lib/styles";

export function FreelanceCard() {
  return (
    <AnimatedCard
      className="col-span-full"
      cardClassName="overflow-hidden"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-gray-300">
            {FREELANCE.heroBadge}
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              {FREELANCE.homeCard.heading}
            </h2>
            <p className="text-lg text-white/90">
              {FREELANCE.homeCard.availability}
            </p>
            <p className="max-w-2xl text-muted-foreground text-lg">
              {FREELANCE.homeCard.description}
            </p>
          </div>
        </div>

        <div className="grid gap-3 text-sm text-gray-300 sm:grid-cols-3 lg:max-w-md lg:grid-cols-1">
          {FREELANCE.homeCard.serviceHighlights.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-white/10 bg-black/20 px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Link href={FREELANCE.homeCard.primaryCta.href} className={LINK_STYLES.button}>
          {FREELANCE.homeCard.primaryCta.label}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <a
          href={FREELANCE.homeCard.secondaryCta.href}
          className="inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          {FREELANCE.homeCard.secondaryCta.label}
        </a>
      </div>
    </AnimatedCard>
  );
}
