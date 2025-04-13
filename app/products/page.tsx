import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import ProductCard from "@/components/product-card"
import { Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ProductsPage() {
  // This would typically come from an API or database
  const products = [
    {
      id: "1",
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      image: "/placeholder.svg?height=400&width=300&query=premium cotton t-shirt",
      category: "Men's Clothing",
      isNew: true,
    },
    {
      id: "2",
      name: "Designer Denim Jacket",
      price: 89.99,
      originalPrice: 129.99,
      image: "/placeholder.svg?height=400&width=300&query=designer denim jacket",
      category: "Women's Clothing",
      isSale: true,
    },
    {
      id: "3",
      name: "Leather Crossbody Bag",
      price: 59.99,
      image: "/placeholder.svg?height=400&width=300&query=leather crossbody bag",
      category: "Accessories",
    },
    {
      id: "4",
      name: "Slim Fit Chino Pants",
      price: 49.99,
      image: "/placeholder.svg?height=400&width=300&query=slim fit chino pants",
      category: "Men's Clothing",
    },
    {
      id: "5",
      name: "Floral Print Dress",
      price: 69.99,
      image: "/placeholder.svg?height=400&width=300&query=floral print dress",
      category: "Women's Clothing",
    },
    {
      id: "6",
      name: "Classic Aviator Sunglasses",
      price: 24.99,
      image: "/placeholder.svg?height=400&width=300&query=aviator sunglasses",
      category: "Accessories",
    },
    {
      id: "7",
      name: "Wool Blend Sweater",
      price: 79.99,
      originalPrice: 99.99,
      image: "/placeholder.svg?height=400&width=300&query=wool blend sweater",
      category: "Men's Clothing",
      isSale: true,
    },
    {
      id: "8",
      name: "High-Waisted Jeans",
      price: 59.99,
      image: "/placeholder.svg?height=400&width=300&query=high waisted jeans",
      category: "Women's Clothing",
    },
  ]

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <div className="sticky top-20 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button variant="ghost" size="sm" className="h-8 text-xs">
                Clear All
              </Button>
            </div>

            <div className="space-y-4">
              <Accordion type="single" collapsible defaultValue="category">
                <AccordionItem value="category">
                  <AccordionTrigger>Category</AccordionTrigger>
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

                <AccordionItem value="size">
                  <AccordionTrigger>Size</AccordionTrigger>
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

                <AccordionItem value="color">
                  <AccordionTrigger>Color</AccordionTrigger>
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
              </Accordion>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl font-bold">All Products</h1>
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
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="mx-1">
              1
            </Button>
            <Button variant="outline" className="mx-1">
              2
            </Button>
            <Button variant="outline" className="mx-1">
              3
            </Button>
            <Button variant="outline" className="mx-1">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
