import { FileText } from "lucide-react";
import type { NavLink } from "@/types/navigation";

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/work-with-me", label: "Work with me" },
  { href: "/about", label: "About Me" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  {
    href: "/resume",
    label: "Resume",
    icon: FileText,
  },
];
