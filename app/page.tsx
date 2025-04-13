"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import CategoryGrid from "@/components/category-grid"
import FeaturedProducts from "@/components/featured-products"
import FeaturedSection from "@/components/featured-section"
import NewsletterSection from "@/components/newsletter-section"
import TrendingSection from "@/components/trending-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-50 to-sage-100 -z-10">
          <div className="noise-bg"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-[10%] w-48 sm:w-64 h-48 sm:h-64 bg-mint-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-[10%] w-56 sm:w-72 h-56 sm:h-72 bg-coral-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20 border-none">
                Sustainable Shopping
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Eco-Friendly Products for a <span className="text-gradient">Better Tomorrow</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-[600px]">
                Discover our curated collection of sustainable, ethically-sourced products that look good and do good.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button size="lg" className="rounded-full btn-hover-effect group w-full sm:w-auto">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Link href="/about" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="rounded-full w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Hero image with responsive sizing */}
            <motion.div
              className="relative mt-8 lg:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl sm:rounded-2xl blur opacity-30 animate-pulse"></div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl bg-white">
                  <img
                    alt="Sustainable Products"
                    className="object-cover w-full h-full"
                    height="600"
                    width="800"
                    src="/hero-sustainable-products.png"
                  />
                </div>
              </div>

              {/* Floating badge - hidden on smallest screens */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-background rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg hidden sm:flex">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-primary/10 rounded-full p-1.5 sm:p-2">
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm sm:font-medium">Eco-Certified</p>
                    <p className="text-xs text-muted-foreground">All products verified</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <CategoryGrid />

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Featured Section */}
      <FeaturedSection />

      {/* Trending Section */}
      <TrendingSection />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  )
}
