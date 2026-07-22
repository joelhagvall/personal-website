"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { PERSON } from "@/data/site";
import { FREELANCE } from "@/data/freelance";

const Astronaut3D = dynamic(
  () => import("@/components/Astronaut3D").then((mod) => mod.Astronaut3D),
  { ssr: false }
);

export function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="relative z-10 flex min-h-[424px] w-full flex-col items-center justify-center px-4">
        {/* 3D Astronaut - Above name */}
        <div className="w-48 h-48 md:w-56 md:h-56 mb-4">
          <Astronaut3D />
        </div>

        {/* Text Content */}
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 leading-relaxed py-2">
            {PERSON.name}
          </h1>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={FREELANCE.primaryCta.href}
              prefetch={false}
              className="rounded-full border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              {FREELANCE.primaryCta.label}
            </Link>
            <Link
              href={FREELANCE.secondaryCta.href}
              prefetch={false}
              className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              {FREELANCE.secondaryCta.label}
            </Link>
            <SocialLinks
              variant="bubble"
              mailMode="open"
              labelVariant="profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
