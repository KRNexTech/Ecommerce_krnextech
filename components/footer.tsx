import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Leaf } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Leaf className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-xl">Verdant</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            Sustainable living made accessible. Eco-friendly products for a better tomorrow.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                All Products
              </Link>
            </li>
            <li>
              <Link
                href="/categories/clothing"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Clothing
              </Link>
            </li>
            <li>
              <Link
                href="/categories/accessories"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Accessories
              </Link>
            </li>
            <li>
              <Link href="/categories/home" className="text-muted-foreground hover:text-foreground transition-colors">
                Home Goods
              </Link>
            </li>
            <li>
              <Link href="/categories/beauty" className="text-muted-foreground hover:text-foreground transition-colors">
                Beauty
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/sustainability" className="text-muted-foreground hover:text-foreground transition-colors">
                Sustainability
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/press" className="text-muted-foreground hover:text-foreground transition-colors">
                Press
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Verdant. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <img src="/certification-1.png" alt="Certified B Corporation" className="h-10" />
            <img src="/certification-2.png" alt="Climate Neutral" className="h-10" />
            <img src="/certification-3.png" alt="1% For The Planet" className="h-10" />
          </div>
        </div>
      </div>
    </footer>
  )
}
