"use client"

import type React from "react"
import { useRef } from "react"
import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { Send, Leaf } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setEmail("")
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      })
    }, 1000)
  }

  return (
    <section className="py-16 bg-background" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 animate-pulse -z-10"></div>
          <div className="relative bg-white dark:bg-sage-900 rounded-2xl p-8 md:p-12 shadow-lg border border-border overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <motion.div
              className="relative z-10 flex flex-col items-center text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary/10 rounded-full p-3">
                <Leaf className="h-6 w-6 text-primary" />
              </div>

              <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20 border-none">Stay Connected</Badge>

              <h2 className="text-3xl font-bold tracking-tight">Join Our Sustainable Community</h2>
              <p className="text-muted-foreground max-w-[500px]">
                Subscribe to our newsletter for eco-friendly tips, exclusive offers, and updates on new sustainable
                products.
              </p>

              <motion.form
                onSubmit={handleSubmit}
                className="w-full max-w-md mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 rounded-full"
                  />
                  <Button type="submit" disabled={isLoading} className="rounded-full btn-hover-effect">
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
