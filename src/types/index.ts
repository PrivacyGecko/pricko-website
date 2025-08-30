export interface ToolCardProps {
  icon: string;
  title: string;
  description: string;
  status?: 'live' | 'beta' | 'coming-soon' | 'in-development' | 'long-term';
  features?: string[];
  delay?: number;
  className?: string;
  url?: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
}

export interface PageProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  className?: string;
  disabled?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  items: string[];
}

export interface TokenomicsData {
  totalSupply: string;
  distribution: {
    category: string;
    percentage: number;
    amount: string;
    description: string;
  }[];
}

export interface PrivacyTool {
  id: string;
  name: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  status: 'live' | 'beta' | 'coming-soon';
  image?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}