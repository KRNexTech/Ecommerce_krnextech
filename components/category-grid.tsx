"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function CategoryGrid() {
  const categories = [
    {
      title: "Clothing",
      image: "/category-clothing.png",
      href: "/categories/clothing",
      description: "Sustainable apparel made from eco-friendly materials",
    },
    {
      title: "Accessories",
      image: "/category-accessories.png",
      href: "/categories/accessories",
      description: "Eco-conscious accessories to complete your look",
    },
    {
      title: "Home Goods",
      image: "/category-home.png",
      href: "/categories/home",
      description: "Sustainable products for an eco-friendly home",
    },
    {
      title: "Beauty",
      image: "/category-beauty.png",
      href: "/categories/beauty",
      description: "Clean, cruelty-free beauty products in sustainable packaging",
    },
    {
      title: "Footwear",
      image: "/category-footwear.png",
      href: "/categories/footwear",
      description: "Eco-friendly shoes made with sustainable materials",
    },
    {
      title: "Outdoor",
      image: "/category-outdoor.png",
      href: "/categories/outdoor",
      description: "Sustainable gear for outdoor adventures",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 border-none">Shop by Category</Badge>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Discover Our Collections</h2>
          <p className="text-muted-foreground max-w-[600px]">
            Explore our curated categories of sustainable and eco-friendly products
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div key={category.title} variants={item}>
              <Link href={category.href} className="group">
                <div className="category-card flex flex-col items-center">
                  <div className="relative w-full aspect-square overflow-hidden rounded-lg sm:rounded-xl mb-2 sm:mb-3 bg-sage-50">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sage-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-3">
                      <span className="text-white font-medium text-xs sm:text-sm flex items-center">
                        Shop Now <ArrowRight className="ml-1 h-3 w-3" />
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xs sm:text-sm font-medium text-center">{category.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

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
