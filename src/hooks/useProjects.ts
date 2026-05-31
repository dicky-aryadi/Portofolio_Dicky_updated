import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

interface Project {
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
  overview: {
    background: string
    goals: string
    problem: string
  } | null
  details: {
    duration: string
    role: string[]
    process: string[]
    features: string[]
    scope: string[]
  } | null
}

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProjects = async () => {
    try {
      setLoading(true)
      
      const { data, error } = await supabase
        .from('projects')
        .select(`
          *,
          overview:project_overviews(*),
          details:project_details(*)
        `)
        .order('created_at', { ascending: false })

      if (error) throw error

      // ✅ Data sudah object, langsung pakai
      const transformed = data?.map(project => ({
        ...project,
        overview: project.overview || null,
        details: project.details || null
      })) || []

      setProjects(transformed)
    } catch (err) {
      console.error('Error fetching projects:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch projects')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return { projects, loading, error, refetch: fetchProjects }
}