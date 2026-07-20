export type IconName = 'code' | 'smartphone' | 'headphones' | 'shield' | 'bot';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  owner?: string;
  repo?: string;
  iconName: IconName;
  status?: string;
  linkedinUrl?: string;
  demoUrl?: string;
  npmUrl?: string;
  modelUrl?: string;
  publicationUrl?: string;
  image?: string;
  imagePriority?: boolean;
}

export interface ProjectWithStats extends Project {
  githubUrl?: string;
  stars?: number | undefined;
  forks?: number | undefined;
}
