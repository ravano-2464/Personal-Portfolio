export type NavLink = {
  label: string;
  href: `#${string}`;
};

export type ExperienceItem = {
  company: string;
  role: string;
  employmentType: string;
  period: string;
  description: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  description: string[];
};

export type SkillItem = {
  name: string;
  level: number;
};

export type SkillGroup = {
  title: string;
  caption: string;
  items: SkillItem[];
};

export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectItem = {
  title: string;
  category: string;
  overview: string;
  stack: string[];
  highlights: string[];
  image: string;
  links: ProjectLink[];
};

export type ContactDetails = {
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  github: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type PortfolioData = {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  navLinks: NavLink[];
  stats: StatItem[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  skillGroups: SkillGroup[];
  projects: ProjectItem[];
  contact: ContactDetails;
};
