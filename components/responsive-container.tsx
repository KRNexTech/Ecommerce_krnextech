"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ResponsiveContainerProps {
  children: ReactNode
  className?: string
  fullWidth?: boolean
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
  padding?: "none" | "sm" | "md" | "lg"
}

export default function ResponsiveContainer({
  children,
  className,
  fullWidth = false,
  maxWidth = "2xl",
  padding = "md",
}: ResponsiveContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    full: "max-w-full",
  }

  const paddingClasses = {
    none: "px-0",
    sm: "px-4",
    md: "px-4 md:px-6",
    lg: "px-4 md:px-6 lg:px-8",
  }

  return (
    <div
      className={cn(
        "mx-auto w-full",
        fullWidth ? "max-w-full" : maxWidthClasses[maxWidth],
        paddingClasses[padding],
        className,
      )}
    >
      {children}
    </div>
  )
}
