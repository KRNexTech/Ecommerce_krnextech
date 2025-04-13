"use client"

import Link from "next/link"
import { Minus, Plus, X, ShoppingBag, ArrowRight, Trash2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-context"

interface CartPreviewProps {
  onClose: () => void
}

export default function CartPreview({ onClose }: CartPreviewProps) {
  const { items, removeItem, updateQuantity, subtotal, itemCount } = useCart()
  const shipping = 4.99
  const total = subtotal + (subtotal > 0 ? shipping : 0)

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between py-4 border-b">
        <h2 className="text-lg font-semibold flex items-center">
          <ShoppingBag className="mr-2 h-5 w-5 text-primary" />
          Your Cart ({itemCount})
        </h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </div>

      {items.length > 0 ? (
        <>
          <div className="flex-1 overflow-auto py-4">
            <AnimatePresence initial={false}>
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="flex gap-3 py-4 border-b last:border-0"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-sage-50 flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between min-w-0">
                    <div>
                      <h3 className="font-medium text-sm line-clamp-1">{item.name}</h3>
                      <p className="text-xs text-muted-foreground">{item.category}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span className="w-6 text-center text-sm">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 text-muted-foreground hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="space-y-4 py-4 border-t">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between font-medium">
                <span>Total</span>
                <span className="text-lg">${total.toFixed(2)}</span>
              </div>
            </div>
            <div className="space-y-2">
              <Link href="/checkout" onClick={onClose}>
                <Button className="w-full rounded-full btn-hover-effect group">
                  Checkout
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button variant="outline" className="w-full rounded-full" onClick={onClose}>
                Continue Shopping
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center py-10">
          <div className="w-32 h-32 rounded-full bg-sage-50 flex items-center justify-center mb-4">
            <ShoppingBag className="h-16 w-16 text-sage-300" />
          </div>
          <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
          <p className="text-sm text-muted-foreground text-center mb-6">
            Looks like you haven't added any sustainable products to your cart yet.
          </p>
          <Button className="rounded-full" onClick={onClose}>
            Start Shopping
          </Button>
        </div>
      )}
    </div>
  )
}
