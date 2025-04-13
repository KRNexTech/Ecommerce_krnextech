"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"

interface MobileMenuProps {
  className?: string
}

export default function MobileMenu({ className }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const pathname = usePathname()
  const { user, signOut } = useAuth()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

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
    <div className={className}>
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
        <Menu className="h-5 w-5" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background z-50 overflow-auto"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="container py-4">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-white font-bold">V</span>
                  </div>
                  <span className="font-bold text-xl">Verdant</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={closeMenu} aria-label="Close menu">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="space-y-6">
                <div className="space-y-2">
                  {menuItems.map((item, index) => (
                    <div key={item.label}>
                      {item.children ? (
                        <div className="space-y-2">
                          <button
                            onClick={() => toggleCategory(item.label)}
                            className="flex items-center justify-between w-full py-2 text-lg font-medium"
                          >
                            {item.label}
                            <ChevronDown
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
                                className="pl-4 space-y-2 overflow-hidden"
                              >
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={closeMenu}
                                    className={`block py-2 ${
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
                          href={item.href}
                          onClick={closeMenu}
                          className={`block py-2 text-lg ${
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
                      <div className="space-y-2">
                        <Link href="/dashboard" onClick={closeMenu} className="block py-2 text-foreground">
                          Dashboard
                        </Link>
                        <Link href="/dashboard/orders" onClick={closeMenu} className="block py-2 text-foreground">
                          My Orders
                        </Link>
                        <Link href="/dashboard/wishlist" onClick={closeMenu} className="block py-2 text-foreground">
                          Wishlist
                        </Link>
                        <button
                          onClick={() => {
                            signOut()
                            closeMenu()
                          }}
                          className="block py-2 text-foreground"
                        >
                          Log Out
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Link href="/login" onClick={closeMenu}>
                        <Button className="w-full">Log In</Button>
                      </Link>
                      <Link href="/register" onClick={closeMenu}>
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
    </div>
  )
}
