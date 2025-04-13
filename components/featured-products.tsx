"use client"
import { motion } from "framer-motion"
import { ArrowRight, ShoppingBag, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { toast } from "@/hooks/use-toast"

export default function FeaturedProducts() {
  // Featured products by category
  const featuredCategories = {
    trending: [
      {
        id: "1",
        name: "Organic Cotton Tee",
        price: 29.99,
        image: "/organic-cotton-tee.png",
        rating: 4.8,
        ratingCount: 156,
        category: "Clothing",
      },
      {
        id: "2",
        name: "Sustainable Denim Jeans",
        price: 79.99,
        image: "/sustainable-denim.png",
        rating: 4.7,
        ratingCount: 124,
        category: "Clothing",
      },
      {
        id: "3",
        name: "Eco-Friendly Backpack",
        price: 59.99,
        image: "/eco-backpack.png",
        rating: 4.9,
        ratingCount: 89,
        category: "Accessories",
      },
      {
        id: "4",
        name: "Recycled Wool Sweater",
        price: 89.99,
        image: "/recycled-wool-sweater.png",
        rating: 4.6,
        ratingCount: 72,
        category: "Clothing",
      },
    ],
    bestsellers: [
      {
        id: "5",
        name: "Bamboo Water Bottle",
        price: 24.99,
        image: "/bamboo-water-bottle.png",
        rating: 4.9,
        ratingCount: 203,
        category: "Accessories",
      },
      {
        id: "6",
        name: "Hemp Canvas Shoes",
        price: 69.99,
        image: "/hemp-canvas-shoes.png",
        rating: 4.7,
        ratingCount: 167,
        category: "Footwear",
      },
      {
        id: "7",
        name: "Organic Linen Shirt",
        price: 49.99,
        image: "/organic-linen-shirt.png",
        rating: 4.8,
        ratingCount: 118,
        category: "Clothing",
      },
      {
        id: "8",
        name: "Recycled Polyester Jacket",
        price: 129.99,
        image: "/recycled-jacket.png",
        rating: 4.6,
        ratingCount: 94,
        category: "Clothing",
      },
    ],
    newArrivals: [
      {
        id: "9",
        name: "Cork Yoga Mat",
        price: 39.99,
        image: "/cork-yoga-mat.png",
        rating: 4.8,
        ratingCount: 42,
        category: "Fitness",
      },
      {
        id: "10",
        name: "Biodegradable Phone Case",
        price: 19.99,
        image: "/biodegradable-phone-case.png",
        rating: 4.5,
        ratingCount: 36,
        category: "Accessories",
      },
      {
        id: "11",
        name: "Organic Cotton Socks (3-Pack)",
        price: 14.99,
        image: "/organic-cotton-socks.png",
        rating: 4.9,
        ratingCount: 28,
        category: "Clothing",
      },
      {
        id: "12",
        name: "Recycled Silver Earrings",
        price: 34.99,
        image: "/recycled-silver-earrings.png",
        rating: 4.7,
        ratingCount: 19,
        category: "Jewelry",
      },
    ],
  }

  const addToCart = (name: string) => {
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    })
  }

  return (
    <section className="py-16 bg-sage-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 border-none">Featured Products</Badge>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Shop Our Favorites</h2>
          <p className="text-muted-foreground max-w-[600px]">
            Discover our most popular sustainable products, from everyday essentials to unique finds
          </p>
        </div>

        <Tabs defaultValue="trending" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="bestsellers">Bestsellers</TabsTrigger>
              <TabsTrigger value="newArrivals">New Arrivals</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(featuredCategories).map(([category, products]) => (
            <TabsContent key={category} value={category} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((product) => (
                  <motion.div
                    key={product.id}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * Number.parseInt(product.id) }}
                  >
                    <Link href={`/products/${product.id}`}>
                      <div className="product-card bg-white rounded-xl overflow-hidden border border-border">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium line-clamp-1">{product.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{product.category}</p>

                          <div className="flex items-center gap-1 mb-3">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < Math.floor(product.rating)
                                      ? "fill-amber-400 text-amber-400"
                                      : "fill-muted text-muted"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">({product.ratingCount})</span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="font-bold">${product.price}</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                addToCart(product.name)
                              }}
                            >
                              <ShoppingBag className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center">
                <Button variant="outline" className="rounded-full group">
                  View All{" "}
                  {category === "bestsellers"
                    ? "Best Sellers"
                    : category === "newArrivals"
                      ? "New Arrivals"
                      : "Trending Products"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
