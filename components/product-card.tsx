"use client"

import type React from "react"

import Link from "next/link"
import { Heart, Star, ShoppingBag, Eye } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { useCart } from "@/components/cart-context"

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  isNew?: boolean
  isSale?: boolean
  rating?: number
  ratingCount?: number
  isEco?: boolean
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isNew = false,
  isSale = false,
  rating = 4.2,
  ratingCount = 120,
  isEco = true,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id,
      name,
      price,
      quantity: 1,
      image,
      category,
    })
  }

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // Wishlist functionality would be implemented here
  }

  return (
    <motion.div
      className="product-card rounded-lg sm:rounded-xl overflow-hidden bg-white border border-border"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link href={`/products/${id}`} className="absolute inset-0 z-10">
        <span className="sr-only">View {name}</span>
      </Link>
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />

        {/* Quick action buttons */}
        <div className="absolute right-2 sm:right-3 top-2 sm:top-3 z-20 flex flex-col gap-2">
          <Button
            variant="secondary"
            size="icon"
            className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white"
            onClick={handleAddToWishlist}
          >
            <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
            <span className="sr-only">Add to wishlist</span>
          </Button>

          <Button
            variant="secondary"
            size="icon"
            className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              window.location.href = `/products/${id}`
            }}
          >
            <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span className="sr-only">Quick view</span>
          </Button>
        </div>

        {/* Badges */}
        <div className="absolute left-2 sm:left-3 top-2 sm:top-3 flex flex-col gap-1 sm:gap-2">
          {isNew && <Badge className="text-xs bg-primary text-white">New</Badge>}
          {isSale && (
            <Badge variant="destructive" className="text-xs">
              Sale
            </Badge>
          )}
          {isEco && <Badge className="text-xs bg-sage-600 text-white">Eco</Badge>}
          {discount >= 10 && !isSale && <Badge className="text-xs bg-accent text-white">{discount}% OFF</Badge>}
        </div>

        {/* Quick add to cart button - visible on touch and hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-primary text-white p-2 sm:p-3 flex justify-center items-center cursor-pointer z-20 text-sm"
          initial={{ y: 100 }}
          animate={{ y: isHovered ? 0 : 100 }}
          transition={{ duration: 0.3 }}
          onClick={handleAddToCart}
        >
          <ShoppingBag className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
          Add to Cart
        </motion.div>
      </div>

      <div className="p-3 sm:p-4">
        <h3 className="text-sm sm:text-base font-medium line-clamp-1">{name}</h3>
        <p className="text-xs text-muted-foreground mb-1 sm:mb-2">{category}</p>

        <div className="flex items-center mb-1 sm:mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground ml-1 sm:ml-2">({ratingCount})</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-sm sm:text-base">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-xs sm:text-sm text-muted-foreground line-through">${originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
