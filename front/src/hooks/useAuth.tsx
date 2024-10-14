"use client"

import { LoginData, ProfileData, RegisterData } from "@/types/types"
import { login, logout, register } from "@/utils/api.auth"
import { useEffect, useState } from "react"


export default function useAuth() {
  const [error, setError] = useState('')

  useEffect(() => {
  }, [])

  useEffect(() => {
    if (error) {
      console.log(error)
    }
  }, [error])

  function loginHandler(data: LoginData) {
    login(data).then(res => setError(res.message))
  }

  function logoutHandler() {
    logout()
  }

  function registerHandler(data: RegisterData) {
    register(data).then(res => setError(res.message))
  }

  return { error, loginHandler, logoutHandler, registerHandler}
}