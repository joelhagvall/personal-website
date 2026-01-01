/**
 * About page specific data
 * Profile info is imported from centralized site.ts
 */

import { PERSON, SOCIAL } from "./site";

export const profile = {
  name: PERSON.name,
  age: PERSON.age,
  birthYear: PERSON.birthYear,
  bio: PERSON.bio,
  avatar: PERSON.avatar,
  location: PERSON.location,
  githubUrl: SOCIAL.github.url,
} as const;

export const techInterests = [
  "Blockchain technology fascinates me, the use of a distributed ledger together with cryptography that enables transparency, immutability and security - which I believe will solve some of the major issues today in the digital world when it comes to managing and securing data of all forms.",
  "The use of artificial intelligence, especially for health and optimizing mundane human tasks. AI agents are very fascinating.",
  "Blockchain together with smart contracts, to perform more error proof, immutable and public transactions.",
  "Blind computing with multiple PETs (Privacy Enhancing Technologies) on private and sensitive data, especially while using AI.",
] as const;

export const otherInterests = [
  "Physical fitness and working out.",
  "Reading and learning new things through books and podcasts.",
  "Investing in different markets and learning about the human psychology connected to it.",
  "Optimizing my time - this by being clear in my communication, having short meetings with focus on quality and respect.",
  "Music and movies with a deeper meaning or story.",
] as const;
