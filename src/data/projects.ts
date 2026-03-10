export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  featured?: boolean;
}

export const projects: Project[] = [];

export const skills = [
  { name: "Python", icon: "🐍", category: "Language" },
];
