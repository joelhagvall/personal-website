/**
 * Re-export social constants from centralized site data
 * Maintained for backwards compatibility
 */

import { SOCIAL as SITE_SOCIAL } from "@/data/site";

export const SOCIAL = {
  github: SITE_SOCIAL.github.url,
  linkedin: SITE_SOCIAL.linkedin.url,
  email: SITE_SOCIAL.email,
  buymeacoffee: SITE_SOCIAL.buymeacoffee.url,
} as const;

export type SocialKeys = keyof typeof SOCIAL;
