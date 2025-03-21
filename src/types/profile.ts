export interface Project {
  title: string;
  link: string;
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  githubUsername?: string;
  projects: Project[];
  theme?: 'light' | 'dark' | 'gradient';
} 