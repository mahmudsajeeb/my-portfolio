import React from 'react'
import { useQuery } from '@tanstack/react-query'

function useProject() {
  const {data: project=[], isLoading:loading} = useQuery({
    queryKey:['project'],
    queryFn:async()=>{
      const res = await fetch('skill.json')
      return res.json()
    }
  })
  return[project,loading]
}

export default useProject