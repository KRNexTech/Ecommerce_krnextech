"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface CategoryCardProps {
  title: string
  image: string
  href: string
}

export default function CategoryCard({ title, image, href }: CategoryCardProps) {
  return (
    <Link href={href} className="block">
      <motion.div
        className="category-card flex flex-col items-center"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative w-full aspect-square overflow-hidden rounded-xl mb-3 bg-sage-50">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sage-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <h3 className="text-sm font-medium text-center">{title}</h3>
      </motion.div>
    </Link>
  )
}
