export type IconName = 'code' | 'smartphone' | 'headphones' | 'shield';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  owner: string;
  repo: string;
  iconName: IconName;
  linkedinUrl?: string;
  demoUrl?: string;
}

