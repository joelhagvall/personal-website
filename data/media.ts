import type { MediaItem, MediaSection } from "@/types/media";

export const movies: MediaItem[] = [
  {
    src: "/media/interstellar-poster.jpg",
    alt: "Interstellar (2014)",
    title: "Interstellar",
    year: 2014,
  },
  {
    src: "/media/hp3-poster.jpg",
    alt: "Harry Potter and the Prisoner of Azkaban (2004)",
    title: "Harry Potter and the Prisoner of Azkaban",
    year: 2004,
  },
];

export const music: MediaItem[] = [
  {
    src: "/media/parachutes.png",
    alt: "Parachutes - Coldplay (2000)",
    title: "Parachutes",
    author: "Coldplay",
    year: 2000,
  },
  {
    src: "/media/onerepublic.jpg",
    alt: "Waking Up - OneRepublic (2013)",
    title: "Waking Up",
    author: "OneRepublic",
    year: 2013,
  },
  {
    src: "/media/lana.png",
    alt: "Paradise - Lana Del Rey (2012)",
    title: "Paradise",
    author: "Lana Del Rey",
    year: 2012,
  },
];

export const books: MediaItem[] = [
  {
    src: "/media/imitation-game.jpg",
    alt: "The Imitation Game",
    title: "The Imitation Game",
    author: "Andrew Hodges",
    year: 1983,
  },
  {
    src: "/media/network-state.png",
    alt: "The Network State",
    title: "The Network State",
    author: "Balaji Srinivasan",
    year: 2022,
  },
];

export const mediaSections: MediaSection[] = [
  { title: "Favorite Movies", items: movies },
  { title: "Favorite Music", items: music },
  { title: "Favorite Books", items: books },
];
