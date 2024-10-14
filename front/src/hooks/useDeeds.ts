"use client"

import { getDeedsList, deleteDeed } from "@/utils/api"
import { useEffect, useState } from "react"


export default function useDeeds() {
  const [deedsList, setDeedsList] = useState<any[]|undefined>()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getDeedsList().then(res => {
      setDeedsList(res.data)
      setError(res.message)
      console.log(res)
    })
  }, [])

  useEffect(() => {
    if (deedsList) {
      setIsLoading(false)
    } 
  }, [deedsList])

  useEffect(() => {
    if (error) {
      console.log(error)
    }
  }, [error])

  async function deleteDeedHandler(id: number) {
    setIsLoading(true)
    deleteDeed(id).then(() => {})
  }

  return { deedsList, isLoading, deleteDeedHandler }
}