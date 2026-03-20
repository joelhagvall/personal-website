"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/navigation";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  // Preload route on hover/focus for faster navigation
  // See: https://vercel.com/blog/introducing-react-best-practices (rule 2.5)
  const handlePrefetch = useCallback(
    (href: string, external?: boolean) => {
      if (!external && href !== pathname) {
        router.prefetch(href);
      }
    },
    [router, pathname]
  );

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="overflow-x-auto">
          <div className="flex h-14 w-max min-w-full items-center justify-center gap-4 whitespace-nowrap sm:gap-6 md:gap-10">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onMouseEnter={() => handlePrefetch(link.href, link.external)}
                  onFocus={() => handlePrefetch(link.href, link.external)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex items-center rounded-sm transition-colors hover:text-foreground/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    isActive ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {Icon && (
                    <Icon className="h-4 w-4 inline-block mr-1" aria-hidden="true" />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
