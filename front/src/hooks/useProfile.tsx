"use client"

import { ProfileData } from "@/types/types"
import { getProfile, updateProfile } from "@/utils/api.profile"
import { useEffect, useState } from "react"


export default function useProfile() {
  const [profileData, setProfileData] = useState<any>()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getProfile().then(res => {
      setProfileData(res.data)
      setError(res.message)
    })
  }, [])

  useEffect(() => {
    if (profileData) {
      setIsLoading(false)
    } 
  }, [profileData])

  useEffect(() => {
    if (error) {
      console.log(error)
    }
  }, [error])

  const updateProfileData = (data: ProfileData) => {
    setIsLoading(true)
    updateProfile(data).then(res => {
      setProfileData(res.data)
      setError(res.message)
    })
  }

  return { profileData, isLoading, updateProfileData }
}