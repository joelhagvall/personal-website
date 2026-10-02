export type IconName = 'code' | 'smartphone' | 'headphones' | 'shield' | 'bot' | 'train';
export type ProjectProminence = 'featured' | 'supporting' | 'earlier';
export type ProjectProofIconName =
  | 'dfri'
  | 'feber'
  | 'reddit'
  | 'linkedin'
  | 'github'
  | 'npm'
  | 'huggingface'
  | 'website'
  | 'maskera'
  | 'under-stockholm'
  | 'stockholm-university';

export interface ProjectProofSource {
  label: string;
  url: string;
  iconName: ProjectProofIconName;
}

export interface ProjectProofItem {
  text: string;
  sources?: ProjectProofSource[];
}

export interface ProjectCaseStudy {
  problem: string;
  built: string;
  proof: ProjectProofItem[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  prominence: ProjectProminence;
  caseStudy?: ProjectCaseStudy;
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
