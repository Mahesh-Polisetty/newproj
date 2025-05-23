export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
}

export interface Skill {
  name: string;
  proficiency: number;
}

export interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: Skill[];
}

export interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ContactInfo {
  icon: JSX.Element;
  title: string;
  value: string;
  link: string;
}