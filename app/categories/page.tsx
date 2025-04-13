"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Filter, ArrowRight, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter])
    }
  }

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter))
  }

  const clearFilters = () => {
    setActiveFilters([])
  }

  const categories = [
    {
      id: "clothing",
      title: "Clothing",
      description: "Sustainable apparel made from eco-friendly materials",
      image: "/category-clothing.png",
      count: 124,
      subcategories: ["T-Shirts", "Jeans", "Dresses", "Sweaters", "Outerwear"],
    },
    {
      id: "accessories",
      title: "Accessories",
      description: "Eco-conscious accessories to complete your look",
      image: "/category-accessories.png",
      count: 86,
      subcategories: ["Bags", "Jewelry", "Hats", "Scarves", "Belts"],
    },
    {
      id: "home",
      title: "Home Goods",
      description: "Sustainable products for an eco-friendly home",
      image: "/category-home.png",
      count: 93,
      subcategories: ["Kitchen", "Bedroom", "Bathroom", "Decor", "Furniture"],
    },
    {
      id: "beauty",
      title: "Beauty",
      description: "Clean, cruelty-free beauty products in sustainable packaging",
      image: "/category-beauty.png",
      count: 67,
      subcategories: ["Skincare", "Haircare", "Makeup", "Bath & Body", "Fragrance"],
    },
    {
      id: "footwear",
      title: "Footwear",
      description: "Eco-friendly shoes made with sustainable materials",
      image: "/category-footwear.png",
      count: 52,
      subcategories: ["Sneakers", "Sandals", "Boots", "Flats", "Athletic"],
    },
    {
      id: "outdoor",
      title: "Outdoor",
      description: "Sustainable gear for outdoor adventures",
      image: "/category-outdoor.png",
      count: 41,
      subcategories: ["Camping", "Hiking", "Beach", "Sports", "Travel"],
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
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-sage-50">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-50 to-sage-100 -z-10">
          <div className="noise-bg"></div>
        </div>
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 border-none">
              Explore Categories
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">Shop Our Sustainable Collections</h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Discover our curated categories of eco-friendly and ethically-made products
            </p>
            <div className="relative max-w-xl mx-auto">
              <Input
                type="search"
                placeholder="Search for products or categories..."
                className="pl-10 h-12 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-full"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold">All Categories</h2>
              <p className="text-muted-foreground">Browse all our sustainable product categories</p>
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              {activeFilters.length > 0 && (
                <>
                  <div className="flex flex-wrap gap-2 items-center">
                    {activeFilters.map((filter) => (
                      <Badge key={filter} variant="secondary" className="flex items-center gap-1">
                        {filter}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4 p-0 ml-1"
                          onClick={() => removeFilter(filter)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs">
                    Clear All
                  </Button>
                </>
              )}

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter Categories</SheetTitle>
                    <SheetDescription>Narrow down categories based on your preferences</SheetDescription>
                  </SheetHeader>

                  <div className="py-4">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="type">
                        <AccordionTrigger>Product Type</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            {["Clothing", "Accessories", "Home", "Beauty", "Footwear", "Outdoor"].map((type) => (
                              <div key={type} className="flex items-center space-x-2">
                                <Checkbox
                                  id={`type-${type}`}
                                  checked={activeFilters.includes(type)}
                                  onCheckedChange={(checked) => {
                                    if (checked) addFilter(type)
                                    else removeFilter(type)
                                  }}
                                />
                                <label
                                  htmlFor={`type-${type}`}
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {type}
                                </label>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="material">
                        <AccordionTrigger>Material</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            {["Organic Cotton", "Recycled Polyester", "Hemp", "Bamboo", "Cork", "Linen"].map(
                              (material) => (
                                <div key={material} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={`material-${material}`}
                                    checked={activeFilters.includes(material)}
                                    onCheckedChange={(checked) => {
                                      if (checked) addFilter(material)
                                      else removeFilter(material)
                                    }}
                                  />
                                  <label
                                    htmlFor={`material-${material}`}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {material}
                                  </label>
                                </div>
                              ),
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="certification">
                        <AccordionTrigger>Certification</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            {["Fair Trade", "GOTS Certified", "B Corp", "Climate Neutral", "Vegan"].map((cert) => (
                              <div key={cert} className="flex items-center space-x-2">
                                <Checkbox
                                  id={`cert-${cert}`}
                                  checked={activeFilters.includes(cert)}
                                  onCheckedChange={(checked) => {
                                    if (checked) addFilter(cert)
                                    else removeFilter(cert)
                                  }}
                                />
                                <label
                                  htmlFor={`cert-${cert}`}
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {cert}
                                </label>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="price">
                        <AccordionTrigger>Price Range</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <Slider defaultValue={[0, 100]} max={200} step={1} />
                            <div className="flex items-center justify-between">
                              <span className="text-sm">$0</span>
                              <span className="text-sm">$200+</span>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div className="flex justify-between mt-4">
                    <SheetClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button>Apply Filters</Button>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {categories.map((category) => (
              <motion.div key={category.id} variants={item}>
                <Link href={`/categories/${category.id}`} className="group">
                  <div className="category-card bg-white rounded-xl overflow-hidden border border-border h-full flex flex-col">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{category.title}</h3>
                        <Badge variant="outline">{category.count} items</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4 flex-grow">{category.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.subcategories.slice(0, 3).map((sub) => (
                          <Badge key={sub} variant="secondary" className="bg-sage-100 hover:bg-sage-200 text-sage-800">
                            {sub}
                          </Badge>
                        ))}
                        {category.subcategories.length > 3 && (
                          <Badge variant="secondary" className="bg-sage-100 hover:bg-sage-200 text-sage-800">
                            +{category.subcategories.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
                        Browse {category.title}
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
