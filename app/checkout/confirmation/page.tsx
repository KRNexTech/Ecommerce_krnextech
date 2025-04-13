"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, Package, ArrowRight, Home, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function OrderConfirmationPage() {
  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0")}`
  const estimatedDelivery = new Date()
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5)

  const formattedDeliveryDate = estimatedDelivery.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
    <div className="container py-16 px-4 md:px-6">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-muted-foreground">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
            <div>
              <p className="text-sm text-muted-foreground">Order Number</p>
              <p className="font-bold">{orderNumber}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Order Date</p>
              <p className="font-medium">{new Date().toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Estimated Delivery</p>
              <p className="font-medium">{formattedDeliveryDate}</p>
            </div>
          </div>

          <Separator className="mb-6" />

          <div className="space-y-4 mb-6">
            <h2 className="text-lg font-bold flex items-center">
              <Package className="mr-2 h-5 w-5 text-primary" />
              Order Details
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>$149.97</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>$4.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>$10.50</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$165.46</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold">Shipping Information</h2>
            <div className="bg-sage-50 p-4 rounded-lg">
              <p className="font-medium">John Doe</p>
              <p>123 Eco Street</p>
              <p>Portland, OR 97204</p>
              <p>United States</p>
              <p className="mt-2">Standard Shipping (3-5 business days)</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border mb-8">
          <h2 className="text-lg font-bold mb-4">What's Next?</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary">1</span>
              </div>
              <div>
                <h3 className="font-medium">Order Confirmation</h3>
                <p className="text-sm text-muted-foreground">
                  You'll receive an email confirmation with your order details.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary">2</span>
              </div>
              <div>
                <h3 className="font-medium">Order Processing</h3>
                <p className="text-sm text-muted-foreground">We're preparing your items for shipment.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary">3</span>
              </div>
              <div>
                <h3 className="font-medium">Shipping</h3>
                <p className="text-sm text-muted-foreground">
                  You'll receive a shipping confirmation with tracking information when your order ships.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary">4</span>
              </div>
              <div>
                <h3 className="font-medium">Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Your sustainable products will arrive at your doorstep in eco-friendly packaging.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard/orders">
            <Button variant="outline" className="rounded-full w-full sm:w-auto">
              <Package className="mr-2 h-4 w-4" />
              Track Order
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="rounded-full w-full sm:w-auto">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Button>
          </Link>
          <Link href="/products">
            <Button className="rounded-full w-full sm:w-auto btn-hover-effect group">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Continue Shopping
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
