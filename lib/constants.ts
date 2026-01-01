/**
 * Re-export social constants from centralized site data
 * Maintained for backwards compatibility
 */

import { SOCIAL as SITE_SOCIAL } from "@/data/site";

export const SOCIAL = {
  github: SITE_SOCIAL.github.url,
  linkedin: SITE_SOCIAL.linkedin.url,
  email: SITE_SOCIAL.email,
} as const;

export type SocialKeys = keyof typeof SOCIAL;
