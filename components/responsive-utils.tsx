"use client"

import { useState, useEffect, type ReactNode } from "react"
import { cn } from "@/lib/utils"

// Responsive container with proper padding for different screen sizes
export function ResponsiveContainer({
  children,
  className,
  fluid = false,
}: {
  children: ReactNode
  className?: string
  fluid?: boolean
}) {
  return (
    <div className={cn("w-full mx-auto px-4 sm:px-6 md:px-8", fluid ? "max-w-full" : "max-w-7xl", className)}>
      {children}
    </div>
  )
}

// Responsive grid with adjustable columns for different screen sizes
export function ResponsiveGrid({
  children,
  className,
  cols = { mobile: 1, sm: 2, md: 3, lg: 4 },
  gap = "md",
}: {
  children: ReactNode
  className?: string
  cols?: {
    mobile: number
    sm?: number
    md?: number
    lg?: number
  }
  gap?: "sm" | "md" | "lg"
}) {
  const gapSize = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
  }

  return (
    <div
      className={cn(
        "grid",
        `grid-cols-${cols.mobile}`,
        cols.sm && `sm:grid-cols-${cols.sm}`,
        cols.md && `md:grid-cols-${cols.md}`,
        cols.lg && `lg:grid-cols-${cols.lg}`,
        gapSize[gap],
        className,
      )}
    >
      {children}
    </div>
  )
}

// Hook to detect screen size
export function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        isMobile: window.innerWidth < 640,
        isTablet: window.innerWidth >= 640 && window.innerWidth < 1024,
        isDesktop: window.innerWidth >= 1024,
      })
    }

    // Set initial size
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return screenSize
}

// Component that renders different content based on screen size
export function ResponsiveView({
  mobile,
  tablet,
  desktop,
}: {
  mobile: ReactNode
  tablet?: ReactNode
  desktop?: ReactNode
}) {
  const { isMobile, isTablet, isDesktop } = useScreenSize()

  if (isMobile) return <>{mobile}</>
  if (isTablet) return <>{tablet || desktop || mobile}</>
  return <>{desktop || tablet || mobile}</>
}
