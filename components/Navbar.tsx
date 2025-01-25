"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/projects", label: "Projects" },
    { 
      href: "/media/Blockchain-Sweden-Industry-Report-2024-1.pdf",
      label: "Resume",
      icon: <FileText className="h-4 w-4 inline-block mr-1" />,
      external: true 
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-center px-4">
        <div className="flex gap-6 md:gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={cn(
                "transition-colors hover:text-foreground/80 flex items-center",
                pathname === link.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {link.icon && link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}