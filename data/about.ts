export const profile = {
  name: "Joel Hägvall",
  age: 25,
  birthYear: 2000,
  bio: "I'm a software developer with a big interest in technology and how it can be used to make a difference.",
  avatar: "/media/selfie.jpeg",
  location: {
    city: "Stockholm",
    country: "Sweden",
    flag: "🇸🇪",
    description: "Born and raised.",
    coordinates: {
      lat: "59.3293° N",
      lng: "18.0686° E",
    },
  },
  githubUrl: "https://github.com/joelhagvall",
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
