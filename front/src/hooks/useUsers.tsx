"use client"

import { getAllUsers } from "@/utils/api"
import { useEffect, useState } from "react"


export default function useUsers() {
  const [usersList, setUsersList] = useState<any>()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAllUsers().then(res => {
      setUsersList(res.data)
      setError(res.message)
    })
  }, [])

  useEffect(() => {
    if (usersList) {
      setIsLoading(false)
    } 
  }, [usersList])

  useEffect(() => {
    if (error) {
      console.log(error)
    }
  }, [error])

  return { usersList, isLoading }
}