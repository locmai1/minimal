export interface PersonalInfo {
  firstName: string;
  lastName: string;
  current?: CurrentPosition | null;
  about: string;
  interests: string[];
}

export interface CurrentPosition {
  role?: string | null;
  company?: string | null;
  team?: string | null;
}

export interface Experience {
  company: string;
  team: string;
  role: string;
  date: string;
}

export interface Project {
  name: string;
  link: string;
  description: string;
  status: 'Current' | 'Complete' | 'In Progress' | 'Paused';
}

export interface Education {
  degree: string;
  institution: string;
  date: string;
}

export interface SkillCategory {
  type: string;
  skills: string[];
}

export interface Social {
  name: string;
  link: string;
}

export interface ContactInfo {
  email: string;
  updated: string;
  note: string;
}

export interface ThemeContextType {
  currentTheme: string | undefined;
  setTheme: (theme: string) => void;
  isDarkMode: boolean;
}

export interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export interface TagProps {
  text: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}

export interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export interface ErrorDisplayProps {
  title: string;
  message: string;
  actionText?: string;
  onAction?: () => void;
  autoRedirect?: boolean;
  redirectDelay?: number;
  redirectPath?: string;
}
