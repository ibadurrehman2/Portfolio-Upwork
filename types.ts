
export type ProjectStatus = 'Live' | 'In Progress' | 'Case Study';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  status: ProjectStatus;
  githubUrl?: string;
  demoUrl?: string;
  heightClass: string; // Used to simulate masonry variety
}

export type Category = 'All' | 'Web' | 'Mobile' | 'Design' | 'AI';
