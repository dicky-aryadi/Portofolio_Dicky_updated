// src/types/supabase.ts

export interface ProjectRow {
  id: string
  title: string
  category: string
  sub_category: string
  description: string
  long_description: string
  image_url: string
  demo_url: string
  github_url: string
  behance_url: string
  tools: string[]
  created_at: string
  updated_at: string
}

export interface ProjectOverviewRow {
  id: string
  project_id: string
  background: string
  goals: string
  problem: string
}

export interface ProjectDetailsRow {
  id: string
  project_id: string
  duration: string
  role: string[]
  process: string[]
  features: string[]
  scope: string[]
}

// Hasil join
export interface ProjectJoined extends ProjectRow {
  overview: ProjectOverviewRow | null
  details: ProjectDetailsRow | null
}

export interface EducationRow {
  id: string
  title: string
  institution: string
  period: string
  icon: string
  color: 'primary' | 'secondary' | 'tertiary'
  created_at: string
}