"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function TrendingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  }

  const trendingItems = [
    {
      id: "trend1",
      title: "Zero-Waste Living",
      description: "Everyday essentials designed to eliminate waste",
      image: "/zero-waste-living.png",
      link: "/trends/zero-waste",
    },
    {
      id: "trend2",
      title: "Sustainable Fashion",
      description: "Eco-friendly clothing for the conscious consumer",
      image: "/sustainable-fashion.png",
      link: "/trends/sustainable-fashion",
    },
    {
      id: "trend3",
      title: "Plant-Based Products",
      description: "Innovative items made from plant-derived materials",
      image: "/plant-based-products.png",
      link: "/trends/plant-based",
    },
  ]

  return (
    <section className="py-16 bg-sage-50" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 border-none">Trending Now</Badge>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Sustainable Living Trends</h2>
          <p className="text-muted-foreground max-w-[600px]">
            Discover the latest innovations and movements in eco-friendly living
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {trendingItems.map((item) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-white border border-border"
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={item.link} className="absolute inset-0 z-10">
                <span className="sr-only">View {item.title}</span>
              </Link>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <div className="flex items-center text-sm font-medium text-primary">
                  Explore
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
