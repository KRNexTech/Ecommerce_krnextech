"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomeBanner() {
  return (
    <section className="py-12 bg-sage-50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="relative overflow-hidden rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0">
            <img src="/sustainable-living-banner.png" alt="Sustainable Living" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-sage-900/70 to-transparent"></div>
          </div>

          <div className="relative py-12 px-6 md:py-24 md:px-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Sustainable Living Made Simple</h2>
            <p className="text-sage-100 mb-6 max-w-md">
              Discover our curated collection of eco-friendly products that help you reduce your environmental footprint
              without compromising on style or quality.
            </p>
            <Link href="/categories">
              <Button className="rounded-full bg-white text-sage-900 hover:bg-sage-100 group">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
