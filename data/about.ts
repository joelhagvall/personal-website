/**
 * About page specific data
 * Profile info is imported from centralized site.ts
 */

import { PERSON, SOCIAL } from "./site";

export const profile = {
  name: PERSON.name,
  bio: PERSON.bio,
  avatar: PERSON.avatar,
  location: PERSON.location,
  githubUrl: SOCIAL.github.url,
} as const;

export const techInterests = [
  "Blockchain technology fascinates me: a distributed ledger combined with cryptography gives transparency, immutability and security, and smart contracts make transactions more error proof and public. I believe it can solve some of the big problems with managing and securing data.",
  "The use of artificial intelligence, especially for health and optimizing mundane human tasks. AI agents are very fascinating.",
  "Blind computing with multiple PETs (Privacy Enhancing Technologies) on private and sensitive data, especially while using AI.",
] as const;

export const otherInterests = [
  "Physical fitness and working out.",
  "Reading and learning new things through books and podcasts.",
  "Investing in different markets and learning about the human psychology connected to it.",
  "Using my time well: clear communication and short, focused meetings built on quality and respect.",
  "Music and movies with a deeper meaning or story.",
] as const;
