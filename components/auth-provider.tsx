"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, firstName: string, lastName: string) => Promise<void>
  signOut: () => void
}

// Create a default context value to use when the hook is called outside the provider
const defaultContextValue: AuthContextType = {
  user: null,
  loading: false,
  signIn: async () => {},
  signUp: async () => {},
  signOut: () => {},
}

const AuthContext = createContext<AuthContextType>(defaultContextValue)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user")
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser))
        } catch (e) {
          console.error("Failed to parse user from localStorage", e)
          localStorage.removeItem("user")
        }
      }
      setLoading(false)
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    // Simulate API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // In a real app, validate credentials with backend
        if (email && password) {
          const user = {
            id: "user_" + Math.random().toString(36).substr(2, 9),
            email,
            firstName: "John",
            lastName: "Doe",
          }
          setUser(user)
          localStorage.setItem("user", JSON.stringify(user))
          resolve()
        } else {
          reject(new Error("Invalid credentials"))
        }
      }, 1000)
    })
  }

  const signUp = async (email: string, password: string, firstName: string, lastName: string) => {
    // Simulate API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const user = {
          id: "user_" + Math.random().toString(36).substr(2, 9),
          email,
          firstName,
          lastName,
        }
        setUser(user)
        localStorage.setItem("user", JSON.stringify(user))
        resolve()
      }, 1000)
    })
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
