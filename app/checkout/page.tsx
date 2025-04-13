"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, CreditCard, Truck, CheckCircle, ShoppingBag, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { useCart } from "@/components/cart-context"
import { toast } from "@/hooks/use-toast"
import { useAuth } from "@/hooks/use-auth"

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const { user } = useAuth()
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)

  const shipping = 4.99
  const tax = subtotal * 0.07
  const total = subtotal + shipping + tax

  const [shippingInfo, setShippingInfo] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  })

  const [paymentInfo, setPaymentInfo] = useState({
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
    savePayment: false,
  })

  const [shippingMethod, setShippingMethod] = useState("standard")

  const handleShippingInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setShippingInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handlePaymentInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPaymentInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmitShipping = (e: React.FormEvent) => {
    e.preventDefault()
    // Validate shipping info
    if (
      !shippingInfo.firstName ||
      !shippingInfo.lastName ||
      !shippingInfo.email ||
      !shippingInfo.phone ||
      !shippingInfo.address ||
      !shippingInfo.city ||
      !shippingInfo.state ||
      !shippingInfo.zipCode
    ) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }
    setStep(2)
    window.scrollTo(0, 0)
  }

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault()
    // Validate payment info
    if (!paymentInfo.cardName || !paymentInfo.cardNumber || !paymentInfo.expDate || !paymentInfo.cvv) {
      toast({
        title: "Missing information",
        description: "Please fill in all required payment fields.",
        variant: "destructive",
      })
      return
    }
    setStep(3)
    window.scrollTo(0, 0)
  }

  const handlePlaceOrder = () => {
    setIsProcessing(true)

    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false)
      clearCart()
      router.push("/checkout/confirmation")
    }, 2000)
  }

  if (items.length === 0) {
    return (
      <div className="container py-16 px-4 md:px-6">
        <div className="max-w-md mx-auto text-center">
          <div className="w-24 h-24 rounded-full bg-sage-50 flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="h-12 w-12 text-sage-300" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">
            You don't have any items in your cart. Start shopping to add items.
          </p>
          <Link href="/products">
            <Button className="rounded-full">Browse Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8 px-4 md:px-6 md:py-12">
      <div className="mb-8">
        <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Continue Shopping
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">Checkout</h1>
            <div className="flex items-center">
              <div
                className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full ${
                  step >= 1 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                }`}
              >
                1
              </div>
              <div className={`h-1 w-8 sm:w-12 ${step >= 2 ? "bg-primary" : "bg-muted"}`}></div>
              <div
                className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full ${
                  step >= 2 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                }`}
              >
                2
              </div>
              <div className={`h-1 w-8 sm:w-12 ${step >= 3 ? "bg-primary" : "bg-muted"}`}></div>
              <div
                className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full ${
                  step >= 3 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                }`}
              >
                3
              </div>
            </div>
          </div>

          {/* Step 1: Shipping Information */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
              <div className="bg-white p-6 rounded-xl border mb-6">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <Truck className="mr-2 h-5 w-5 text-primary" />
                  Shipping Information
                </h2>

                <form onSubmit={handleSubmitShipping} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={shippingInfo.firstName}
                        onChange={handleShippingInfoChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={shippingInfo.lastName}
                        onChange={handleShippingInfoChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={shippingInfo.email}
                        onChange={handleShippingInfoChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={shippingInfo.phone}
                        onChange={handleShippingInfoChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address *</Label>
                    <Input
                      id="address"
                      name="address"
                      value={shippingInfo.address}
                      onChange={handleShippingInfoChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={shippingInfo.city}
                        onChange={handleShippingInfoChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State/Province *</Label>
                      <Input
                        id="state"
                        name="state"
                        value={shippingInfo.state}
                        onChange={handleShippingInfoChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">Zip/Postal Code *</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={shippingInfo.zipCode}
                        onChange={handleShippingInfoChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        name="country"
                        value={shippingInfo.country}
                        onChange={handleShippingInfoChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="text-lg font-medium mb-4">Shipping Method</h3>
                    <RadioGroup value={shippingMethod} onValueChange={setShippingMethod} className="space-y-3">
                      <div className="flex items-center justify-between border rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="standard" id="standard" />
                          <Label htmlFor="standard" className="font-medium">
                            Standard Shipping (3-5 business days)
                          </Label>
                        </div>
                        <span className="font-medium">$4.99</span>
                      </div>
                      <div className="flex items-center justify-between border rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="express" id="express" />
                          <Label htmlFor="express" className="font-medium">
                            Express Shipping (1-2 business days)
                          </Label>
                        </div>
                        <span className="font-medium">$9.99</span>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <Button type="submit" className="rounded-full btn-hover-effect group">
                      Continue to Payment
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}

          {/* Step 2: Payment Information */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
              <div className="bg-white p-6 rounded-xl border mb-6">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <CreditCard className="mr-2 h-5 w-5 text-primary" />
                  Payment Information
                </h2>

                <form onSubmit={handleSubmitPayment} className="space-y-4">
                  <Tabs defaultValue="card" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-4">
                      <TabsTrigger value="card">Credit Card</TabsTrigger>
                      <TabsTrigger value="paypal">PayPal</TabsTrigger>
                      <TabsTrigger value="apple">Apple Pay</TabsTrigger>
                    </TabsList>
                    <TabsContent value="card" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on Card *</Label>
                        <Input
                          id="cardName"
                          name="cardName"
                          value={paymentInfo.cardName}
                          onChange={handlePaymentInfoChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={paymentInfo.cardNumber}
                          onChange={handlePaymentInfoChange}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expDate">Expiration Date *</Label>
                          <Input
                            id="expDate"
                            name="expDate"
                            placeholder="MM/YY"
                            value={paymentInfo.expDate}
                            onChange={handlePaymentInfoChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            name="cvv"
                            placeholder="123"
                            value={paymentInfo.cvv}
                            onChange={handlePaymentInfoChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 pt-2">
                        <Checkbox
                          id="savePayment"
                          checked={paymentInfo.savePayment}
                          onCheckedChange={(checked) =>
                            setPaymentInfo((prev) => ({ ...prev, savePayment: checked as boolean }))
                          }
                        />
                        <label
                          htmlFor="savePayment"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Save payment information for future purchases
                        </label>
                      </div>
                    </TabsContent>
                    <TabsContent value="paypal" className="text-center py-8">
                      <p className="text-muted-foreground mb-4">
                        You will be redirected to PayPal to complete your payment.
                      </p>
                      <Button className="rounded-full">Continue with PayPal</Button>
                    </TabsContent>
                    <TabsContent value="apple" className="text-center py-8">
                      <p className="text-muted-foreground mb-4">
                        You will be redirected to Apple Pay to complete your payment.
                      </p>
                      <Button className="rounded-full">Continue with Apple Pay</Button>
                    </TabsContent>
                  </Tabs>

                  <div className="pt-4 flex justify-between">
                    <Button type="button" variant="outline" className="rounded-full" onClick={() => setStep(1)}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Shipping
                    </Button>
                    <Button type="submit" className="rounded-full btn-hover-effect group">
                      Review Order
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}

          {/* Step 3: Review Order */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
              <div className="bg-white p-6 rounded-xl border mb-6">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  Review Your Order
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Shipping Information</h3>
                    <div className="bg-sage-50 p-4 rounded-lg">
                      <p>
                        {shippingInfo.firstName} {shippingInfo.lastName}
                      </p>
                      <p>{shippingInfo.address}</p>
                      <p>
                        {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}
                      </p>
                      <p>{shippingInfo.country}</p>
                      <p className="mt-2">
                        {shippingInfo.email} | {shippingInfo.phone}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Payment Method</h3>
                    <div className="bg-sage-50 p-4 rounded-lg">
                      <p>Credit Card ending in {paymentInfo.cardNumber.slice(-4)}</p>
                      <p>{paymentInfo.cardName}</p>
                      <p>Expires: {paymentInfo.expDate}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Shipping Method</h3>
                    <div className="bg-sage-50 p-4 rounded-lg">
                      <p>
                        {shippingMethod === "standard"
                          ? "Standard Shipping (3-5 business days)"
                          : "Express Shipping (1-2 business days)"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Order Items</h3>
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-4 items-center">
                          <div className="w-16 h-16 rounded-lg overflow-hidden bg-sage-50">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                          </div>
                          <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <Button type="button" variant="outline" className="rounded-full" onClick={() => setStep(2)}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Payment
                    </Button>
                    <Button
                      type="button"
                      className="rounded-full btn-hover-effect group"
                      onClick={handlePlaceOrder}
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Place Order
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl border sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4 mb-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-sage-50 flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium line-clamp-1">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 text-sm text-muted-foreground">
              <p className="mb-2">
                By placing your order, you agree to our{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
              <p>
                We're committed to sustainability. Your order will be shipped in eco-friendly packaging, and we offset
                the carbon footprint of every delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Form buttons for mobile */}
      {step === 2 && (
        <div className="pt-4 flex flex-col-reverse sm:flex-row sm:justify-between gap-3 sm:gap-0">
          <Button type="button" variant="outline" className="rounded-full w-full sm:w-auto" onClick={() => setStep(1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shipping
          </Button>
          <Button type="submit" className="rounded-full w-full sm:w-auto btn-hover-effect group">
            Review Order
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      )}
      {step === 3 && (
        <div className="pt-4 flex flex-col-reverse sm:flex-row sm:justify-between gap-3 sm:gap-0">
          <Button type="button" variant="outline" className="rounded-full w-full sm:w-auto" onClick={() => setStep(2)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Payment
          </Button>
          <Button
            type="button"
            className="rounded-full w-full sm:w-auto btn-hover-effect group"
            onClick={handlePlaceOrder}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                Place Order
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  )
}
