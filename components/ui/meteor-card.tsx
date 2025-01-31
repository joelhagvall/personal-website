"use client";

import { cn } from "@/lib/utils";
import React from "react";

export function MeteorCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-full w-full bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 rounded-lg overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 h-full w-full">
        <div className="absolute h-[500px] w-[500px] -left-32 -top-32">
          <div className="absolute h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute h-48 w-48 -translate-y-[6rem] translate-x-[2rem] rounded-full bg-indigo-500/20 blur-3xl" />
        </div>
        <div className="absolute h-[500px] w-[500px] -right-32 -bottom-32">
          <div className="absolute h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute h-48 w-48 translate-y-[6rem] -translate-x-[2rem] rounded-full bg-purple-500/20 blur-3xl" />
        </div>
      </div>
      <div className="relative z-10 p-6">{children}</div>
    </div>
  );
}