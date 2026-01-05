import { FileText } from "lucide-react";
import type { NavLink } from "@/types/navigation";

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  {
    href: "/media/resume.pdf",
    label: "Resume",
    icon: FileText,
    external: true,
  },
];
