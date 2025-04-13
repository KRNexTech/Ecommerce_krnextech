import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import ProductCard from "@/components/product-card"
import { Search, ChevronDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Map category slug to display name
  const categoryMap: Record<string, string> = {
    mens: "Men's Fashion",
    womens: "Women's Fashion",
    accessories: "Accessories",
    electronics: "Electronics",
    home: "Home & Kitchen",
    beauty: "Beauty",
  }

  const categoryName = categoryMap[params.category]

  // If category doesn't exist, return 404
  if (!categoryName) {
    notFound()
  }

  // This would typically come from an API or database filtered by category
  const products = [
    {
      id: "1",
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      image: "/soft-cotton-tee.png",
      category: "Men's Clothing",
      isNew: true,
      rating: 4.6,
      ratingCount: 342,
    },
    {
      id: "2",
      name: "Designer Denim Jacket",
      price: 89.99,
      originalPrice: 129.99,
      image: "/stylish-denim-look.png",
      category: "Women's Clothing",
      isSale: true,
      rating: 4.8,
      ratingCount: 567,
    },
    {
      id: "3",
      name: "Leather Crossbody Bag",
      price: 59.99,
      image: "/classic-leather-crossbody.png",
      category: "Accessories",
      rating: 4.3,
      ratingCount: 289,
    },
    {
      id: "4",
      name: "Slim Fit Chino Pants",
      price: 49.99,
      image: "/folded-slim-chinos.png",
      category: "Men's Clothing",
      rating: 4.5,
      ratingCount: 412,
    },
    {
      id: "5",
      name: "Wireless Headphones",
      price: 129.99,
      originalPrice: 179.99,
      image: "/wireless-headphones.png",
      category: "Electronics",
      rating: 4.7,
      ratingCount: 823,
    },
    {
      id: "6",
      name: "Smart Fitness Tracker",
      price: 79.99,
      image: "/fitness-tracker.png",
      category: "Electronics",
      isNew: true,
      rating: 4.4,
      ratingCount: 356,
    },
    {
      id: "7",
      name: "Casual Sneakers",
      price: 69.99,
      image: "/casual-sneakers.png",
      category: "Men's Clothing",
      rating: 4.2,
      ratingCount: 278,
    },
    {
      id: "8",
      name: "Floral Summer Dress",
      price: 49.99,
      image: "/floral-dress.png",
      category: "Women's Clothing",
      rating: 4.6,
      ratingCount: 412,
    },
  ]

  // Filter products by category
  const filteredProducts = products.filter((product) => {
    if (params.category === "mens") return product.category === "Men's Clothing"
    if (params.category === "womens") return product.category === "Women's Clothing"
    if (params.category === "accessories") return product.category === "Accessories"
    if (params.category === "electronics") return product.category === "Electronics"
    return true
  })

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">{categoryName}</h1>
        <p className="text-muted-foreground">Discover our collection of {categoryName.toLowerCase()}</p>
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <div className="sticky top-20 space-y-6 bg-white p-4 rounded-lg border">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button variant="ghost" size="sm" className="h-8 text-xs text-flipkart-blue">
                Clear All
              </Button>
            </div>

            <div className="space-y-4">
              <Accordion type="single" collapsible defaultValue="category">
                <AccordionItem value="category" className="border-b">
                  <AccordionTrigger className="text-sm font-medium">Category</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="men" />
                        <label
                          htmlFor="men"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Men's Clothing
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="women" />
                        <label
                          htmlFor="women"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Women's Clothing
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="accessories" />
                        <label
                          htmlFor="accessories"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Accessories
                        </label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="price" className="border-b">
                  <AccordionTrigger className="text-sm font-medium">Price Range</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <Slider defaultValue={[0, 100]} max={200} step={1} />
                      <div className="flex items-center justify-between">
                        <span className="text-sm">₹0</span>
                        <span className="text-sm">₹200+</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="size" className="border-b">
                  <AccordionTrigger className="text-sm font-medium">Size</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-4 gap-2">
                      <Button variant="outline" size="sm" className="h-8">
                        XS
                      </Button>
                      <Button variant="outline" size="sm" className="h-8">
                        S
                      </Button>
                      <Button variant="outline" size="sm" className="h-8">
                        M
                      </Button>
                      <Button variant="outline" size="sm" className="h-8">
                        L
                      </Button>
                      <Button variant="outline" size="sm" className="h-8">
                        XL
                      </Button>
                      <Button variant="outline" size="sm" className="h-8">
                        XXL
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="color" className="border-b">
                  <AccordionTrigger className="text-sm font-medium">Color</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="flex flex-col items-center gap-1">
                        <div className="h-6 w-6 rounded-full bg-black" />
                        <span className="text-xs">Black</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="h-6 w-6 rounded-full bg-white border" />
                        <span className="text-xs">White</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="h-6 w-6 rounded-full bg-blue-500" />
                        <span className="text-xs">Blue</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="h-6 w-6 rounded-full bg-red-500" />
                        <span className="text-xs">Red</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="h-6 w-6 rounded-full bg-green-500" />
                        <span className="text-xs">Green</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="h-6 w-6 rounded-full bg-yellow-500" />
                        <span className="text-xs">Yellow</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="brand" className="border-b">
                  <AccordionTrigger className="text-sm font-medium">Brand</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="nike" />
                        <label htmlFor="nike" className="text-sm font-medium">
                          Nike
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="adidas" />
                        <label htmlFor="adidas" className="text-sm font-medium">
                          Adidas
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="puma" />
                        <label htmlFor="puma" className="text-sm font-medium">
                          Puma
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="levis" />
                        <label htmlFor="levis" className="text-sm font-medium">
                          Levi's
                        </label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="discount" className="border-b">
                  <AccordionTrigger className="text-sm font-medium">Discount</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="discount10" />
                        <label htmlFor="discount10" className="text-sm font-medium">
                          10% or more
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="discount25" />
                        <label htmlFor="discount25" className="text-sm font-medium">
                          25% or more
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="discount50" />
                        <label htmlFor="discount50" className="text-sm font-medium">
                          50% or more
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="discount75" />
                        <label htmlFor="discount75" className="text-sm font-medium">
                          75% or more
                        </label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded-lg border">
            <div className="flex items-center">
              <span className="text-sm text-muted-foreground mr-2">Showing {filteredProducts.length} results</span>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search products..." className="w-full pl-8 sm:w-[250px]" />
              </div>
              <Select defaultValue="featured">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Customer Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <Search className="h-12 w-12 text-gray-300" />
              </div>
              <h3 className="text-lg font-medium mb-2">No products found</h3>
              <p className="text-sm text-gray-500 max-w-md">
                We couldn't find any products matching your criteria. Try adjusting your filters or search terms.
              </p>
              <Button className="mt-6" variant="outline">
                Clear Filters
              </Button>
            </div>
          )}

          {filteredProducts.length > 0 && (
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-1">
                <Button variant="outline" className="h-10 w-10 p-0 rounded-md">
                  1
                </Button>
                <Button variant="outline" className="h-10 w-10 p-0 rounded-md">
                  2
                </Button>
                <Button variant="outline" className="h-10 w-10 p-0 rounded-md">
                  3
                </Button>
                <Button variant="outline" className="h-10 p-0 px-3 rounded-md flex items-center gap-1">
                  Next
                  <ChevronDown className="h-4 w-4 rotate-270" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
