export type IconName = 'code' | 'smartphone' | 'headphones' | 'shield' | 'bot';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  owner: string;
  repo: string;
  iconName: IconName;
  linkedinUrl?: string;
  demoUrl?: string;
  publicationUrl?: string;
  image?: string;
}

export interface ProjectWithStats extends Project {
  githubUrl: string;
  stars?: number | undefined;
  forks?: number | undefined;
}
