"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function FeaturedCategories() {
  const featuredCategories = [
    {
      title: "Zero Waste Kitchen",
      image: "/zero-waste-kitchen.png",
      href: "/categories/home/kitchen",
      description: "Sustainable alternatives for a plastic-free kitchen",
    },
    {
      title: "Eco-Friendly Beauty",
      image: "/organic-beauty.png",
      href: "/categories/beauty",
      description: "Clean, cruelty-free beauty in sustainable packaging",
    },
    {
      title: "Sustainable Fashion",
      image: "/sustainable-fashion-collection.png",
      href: "/categories/clothing",
      description: "Ethically made clothing from eco-friendly materials",
    },
    {
      title: "Home & Living",
      image: "/sustainable-home-decor.png",
      href: "/categories/home",
      description: "Beautiful, sustainable pieces for your home",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 border-none">
            Featured Collections
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Shop By Category</h2>
          <p className="text-muted-foreground max-w-[600px]">
            Explore our curated collections of sustainable products for every aspect of your life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <Link href={category.href}>
                <div className="relative overflow-hidden rounded-xl aspect-[4/5]">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sage-900/80 via-sage-900/20 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-white/80 text-sm mb-3">{category.description}</p>
                    <span className="text-white text-sm font-medium flex items-center">
                      Shop Now <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/categories">
            <Badge className="px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 border-none flex items-center">
              View All Categories <ArrowRight className="ml-2 h-3 w-3" />
            </Badge>
          </Link>
        </div>
      </div>
    </section>
  )
}
