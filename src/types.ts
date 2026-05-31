// types/supabase.ts (atau update types.ts)
export interface ProjectOverview {
  background: string;
  goals: string;
  problem: string;
}

export interface ProjectDetails {
  duration: string;
  role: string[];
  process: string[];
  features: string[];
  scope: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  sub_category: string;        // ⚠️ snake_case
  description: string;
  long_description: string;    // ⚠️ snake_case
  image_url: string;           // ⚠️ snake_case
  demo_url: string;            // ⚠️ snake_case
  github_url: string;          // ⚠️ snake_case
  behance_url: string;         // ⚠️ snake_case
  tools: string[];
  overview: ProjectOverview | null;  // ⚠️ nullable
  details: ProjectDetails | null;    // ⚠️ nullable
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  icon: string;
  color: 'primary' | 'secondary' | 'tertiary';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}