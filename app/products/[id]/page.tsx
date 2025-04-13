"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, Minus, Plus, Share2, ShoppingBag, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductCard from "@/components/product-card"
import { useCart } from "@/components/cart-context"
import { motion } from "framer-motion"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("m")
  const [selectedColor, setSelectedColor] = useState("black")
  const [selectedImage, setSelectedImage] = useState(0)
  const { addItem } = useCart()

  // This would typically come from an API or database based on the ID
  const product = {
    id: params.id,
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    description:
      "Our premium cotton t-shirt is made from 100% organic cotton for ultimate comfort and durability. Perfect for everyday wear, this versatile piece features a classic fit and is available in multiple colors.",
    features: ["100% organic cotton", "Classic fit", "Crew neck", "Pre-shrunk fabric", "Machine washable"],
    colors: [
      { name: "Black", value: "black" },
      { name: "White", value: "white" },
      { name: "Navy", value: "navy" },
      { name: "Gray", value: "gray" },
    ],
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    images: [
      "/organic-cotton-tee.png",
      "/sustainable-fashion-1.png",
      "/sustainable-fashion-2.png",
      "/sustainable-fashion-3.png",
    ],
    rating: 4.8,
    reviewCount: 124,
    category: "Men's Clothing",
  }

  // Similar products
  const similarProducts = [
    {
      id: "2",
      name: "Designer Denim Jacket",
      price: 89.99,
      originalPrice: 129.99,
      image: "/sustainable-denim.png",
      category: "Women's Clothing",
      isSale: true,
    },
    {
      id: "3",
      name: "Leather Crossbody Bag",
      price: 59.99,
      image: "/eco-backpack.png",
      category: "Accessories",
    },
    {
      id: "4",
      name: "Slim Fit Chino Pants",
      price: 49.99,
      image: "/folded-slim-chinos.png",
      category: "Men's Clothing",
    },
  ]

  const incrementQuantity = () => setQuantity(quantity + 1)
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.images[0],
      category: product.category,
    })
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <nav className="flex text-sm text-muted-foreground overflow-x-auto pb-2 md:overflow-visible md:pb-0">
          <ol className="flex items-center">
            <li>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li className="mx-2">/</li>
            <li>
              <Link href="/products" className="hover:text-foreground">
                Products
              </Link>
            </li>
            <li className="mx-2">/</li>
            <li>
              <Link href="/categories/mens" className="hover:text-foreground">
                Men's Clothing
              </Link>
            </li>
            <li className="mx-2">/</li>
            <li className="text-foreground truncate max-w-[150px] md:max-w-none">{product.name}</li>
          </ol>
        </nav>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <motion.div
            className="overflow-hidden rounded-lg border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              className="w-full object-cover aspect-square"
            />
          </motion.div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-lg border cursor-pointer transition-all ${
                  selectedImage === index ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - View ${index + 1}`}
                  className="aspect-square w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div>
            <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
            <p className="mt-1 text-sm text-muted-foreground">Free shipping on orders over $50</p>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-medium">Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`h-8 w-8 rounded-full border ${
                      selectedColor === color.value ? "ring-2 ring-primary ring-offset-2" : ""
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  >
                    <span className="sr-only">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex h-10 w-10 items-center justify-center rounded-md border text-sm font-medium ${
                      selectedSize === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-input bg-background hover:bg-muted"
                    }`}
                  >
                    {size.toUpperCase()}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <Link href="#" className="underline">
                  Size Guide
                </Link>
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-medium">Quantity</h3>
              <div className="flex items-center">
                <Button variant="outline" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
                  <Minus className="h-4 w-4" />
                  <span className="sr-only">Decrease quantity</span>
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button variant="outline" size="icon" onClick={incrementQuantity}>
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Increase quantity</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button size="lg" className="flex-1 gap-2" onClick={handleAddToCart}>
              <ShoppingBag className="h-5 w-5" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="flex-1 gap-2">
              <Heart className="h-5 w-5" />
              Add to Wishlist
            </Button>
          </div>

          <Separator />

          <Tabs defaultValue="description">
            <TabsList className="w-full">
              <TabsTrigger value="description" className="flex-1">
                Description
              </TabsTrigger>
              <TabsTrigger value="features" className="flex-1">
                Features
              </TabsTrigger>
              <TabsTrigger value="shipping" className="flex-1">
                Shipping
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-4">
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </TabsContent>
            <TabsContent value="features" className="pt-4">
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="shipping" className="pt-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Free standard shipping on orders over $50</p>
                <p>Standard delivery: 3-5 business days</p>
                <p>Express delivery: 1-2 business days</p>
                <p>Free returns within 30 days</p>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-8 gap-1">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">SKU: {product.id.padStart(6, "0")}</p>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">You May Also Like</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {similarProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}
