"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Search, ShoppingCart, User, X, LogOut, Heart, Sun, Moon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import CartPreview from "@/components/cart-preview"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/hooks/use-auth"
import { useTheme } from "next-themes"
import { useCart } from "@/components/cart-context"

export default function Header() {
  const [showSearch, setShowSearch] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const { itemCount } = useCart()

  // Safely access auth context with fallback values
  const auth = useAuth()
  const user = auth?.user || null
  const signOut = auth?.signOut || (() => {})

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setShowMobileMenu(false)
  }, [pathname])

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "All Products" },
    {
      label: "Categories",
      children: [
        { href: "/categories/clothing", label: "Clothing" },
        { href: "/categories/accessories", label: "Accessories" },
        { href: "/categories/home", label: "Home Goods" },
        { href: "/categories/beauty", label: "Beauty" },
        { href: "/categories/footwear", label: "Footwear" },
        { href: "/categories/outdoor", label: "Outdoor" },
      ],
    },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-md backdrop-blur-md" : "bg-background"
      }`}
    >
      <div className="container px-4 sm:px-6 flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setShowMobileMenu(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>

          <Link href="/" className="flex items-center gap-2">
            <motion.div
              className="relative w-8 h-8 rounded-full bg-primary flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="h-4 w-4 text-white" />
            </motion.div>
            <span className="font-bold text-xl hidden sm:inline-block">Verdant</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {menuItems.map((item) =>
            !item.children ? (
              <Link
                key={item.href || item.label}
                href={item.href || "#"}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === item.href ? "bg-primary/10 text-primary" : "hover:bg-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="px-3 py-2 h-auto text-sm font-medium">
                    {item.label}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.href} asChild>
                      <Link href={child.href}>{child.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ),
          )}
        </nav>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg"
            onClick={() => setShowSearch(!showSearch)}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-lg" aria-label="Theme">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/dashboard/wishlist">
            <Button variant="ghost" size="icon" className="rounded-lg" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
            </Button>
          </Link>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-lg" aria-label="Account">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/orders">Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/wishlist">Wishlist</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button variant="ghost" size="icon" className="rounded-lg" aria-label="Login">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          )}

          <Sheet open={showCart} onOpenChange={setShowCart}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-lg relative" aria-label="Cart">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-white">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[350px] sm:w-[450px]">
              <CartPreview onClose={() => setShowCart(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            className="fixed inset-0 bg-background z-50 overflow-auto md:hidden"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="container py-4 px-4 safe-area-inset-top safe-area-inset-bottom">
              <div className="flex justify-between items-center mb-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setShowMobileMenu(false)}>
                  <div className="relative w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <ShoppingCart className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-bold text-xl">Verdant</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setShowMobileMenu(false)} className="touch-target">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              <nav className="space-y-4">
                <div className="space-y-1">
                  {menuItems.map((item) => (
                    <div key={item.label}>
                      {item.children ? (
                        <div className="space-y-1">
                          <button
                            onClick={() => toggleCategory(item.label)}
                            className="flex items-center justify-between w-full py-3 text-lg font-medium touch-target"
                          >
                            {item.label}
                            <Menu
                              className={`h-5 w-5 transition-transform ${
                                expandedCategory === item.label ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {expandedCategory === item.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="pl-4 space-y-1 overflow-hidden"
                              >
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={() => setShowMobileMenu(false)}
                                    className={`block py-3 touch-target ${
                                      pathname === child.href ? "text-primary font-medium" : "text-muted-foreground"
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href || "#"}
                          onClick={() => setShowMobileMenu(false)}
                          className={`block py-3 text-lg touch-target ${
                            pathname === item.href ? "text-primary font-medium" : "text-foreground"
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t">
                  {user ? (
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Logged in as {user.email}</p>
                      <div className="space-y-1">
                        <Link
                          href="/dashboard"
                          onClick={() => setShowMobileMenu(false)}
                          className="block py-3 text-foreground touch-target"
                        >
                          Dashboard
                        </Link>
                        <Link
                          href="/dashboard/orders"
                          onClick={() => setShowMobileMenu(false)}
                          className="block py-3 text-foreground touch-target"
                        >
                          My Orders
                        </Link>
                        <Link
                          href="/dashboard/wishlist"
                          onClick={() => setShowMobileMenu(false)}
                          className="block py-3 text-foreground touch-target"
                        >
                          Wishlist
                        </Link>
                        <button
                          onClick={() => {
                            signOut()
                            setShowMobileMenu(false)
                          }}
                          className="block py-3 text-foreground touch-target w-full text-left"
                        >
                          Log Out
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Link href="/login" onClick={() => setShowMobileMenu(false)} className="block w-full">
                        <Button className="w-full">Log In</Button>
                      </Link>
                      <Link href="/register" onClick={() => setShowMobileMenu(false)} className="block w-full">
                        <Button variant="outline" className="w-full">
                          Create Account
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search overlay */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-full max-w-md relative"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Input
                type="search"
                placeholder="Search for products..."
                className="w-full h-12 pl-12 pr-12 text-base rounded-full"
                autoFocus
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-full"
                onClick={() => setShowSearch(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
