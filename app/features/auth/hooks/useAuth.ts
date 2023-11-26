"use client"

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"
import supabase from "@/utils/supabase"
import { useStore } from "@/stores/index"

export const useAuth = () => {
  const { loginUser } = useStore()
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      setEmail("")
      setPassword("")
      if (error) {
        alert(error.message)
      } else {
        router.push("/auth/todo-crud")
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      })
      setEmail("")
      setPassword("")
      if (error) {
        alert(error.message)
      }
    }
  }
  function signOut() {
    supabase.auth.signOut()
  }

  return {
    loginUser,
    email,
    password,
    isLogin,
    setPassword,
    setEmail,
    setIsLogin,
    signOut,
    handleSubmit,
  }
}
