import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { EducationRow } from '../types/supabase'

export const useEducation = () => {
  const [education, setEducation] = useState<EducationRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        setLoading(true)
        
        const { data, error } = await supabase
          .from('education')
          .select('*')
          .order('period', { ascending: false })

        if (error) throw error

        setEducation(data || [])
      } catch (err) {
        console.error('Error fetching education:', err)
        setError(err instanceof Error ? err.message : 'Failed to fetch education')
      } finally {
        setLoading(false)
      }
    }
    
    fetchEducation()
  }, [])

  return { education, loading, error }
}