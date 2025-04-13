"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Loader2, MessageSquare, Clock, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })
    }, 1500)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const faqs = [
    {
      question: "What makes your products sustainable?",
      answer:
        "Our products are made from eco-friendly materials like organic cotton, recycled polyester, and natural fibers. We also ensure ethical manufacturing processes and use minimal, recyclable packaging.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to most countries worldwide. International shipping typically takes 7-14 business days, and we offset the carbon footprint of all our shipments.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for unused items in their original packaging. Please note that the customer is responsible for return shipping costs unless the item is defective.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order ships, you'll receive a confirmation email with tracking information. You can also log into your account on our website to track your order status.",
    },
    {
      question: "Are your products vegan?",
      answer:
        "Most of our products are vegan. Each product page clearly indicates whether the item is vegan-friendly. We're working toward making our entire catalog vegan in the future.",
    },
  ]

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-sage-50">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-50 to-sage-100 -z-10">
          <div className="noise-bg"></div>
        </div>
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 border-none">Get In Touch</Badge>
            <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">We'd Love to Hear From You</h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Have questions, feedback, or just want to say hello? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              className="bg-white rounded-xl p-6 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-primary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">
                We'll respond to your email within 24-48 hours during business days.
              </p>
              <a href="mailto:hello@verdant.com" className="text-primary font-medium hover:underline">
                hello@verdant.com
              </a>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-accent/10 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">
                Our customer service team is available Monday through Friday, 9am-5pm EST.
              </p>
              <a href="tel:+1-800-123-4567" className="text-primary font-medium hover:underline">
                +1 (800) 123-4567
              </a>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-lavender-300/20 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-lavender-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Live Chat</h3>
              <p className="text-muted-foreground mb-4">
                Chat with our team in real-time for immediate assistance with your questions.
              </p>
              <Button className="rounded-full">Start Chat</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="sticky top-24">
                <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 border-none">Contact Form</Badge>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                      className="rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message here..."
                      rows={6}
                      className="rounded-lg"
                    />
                  </div>

                  <Button type="submit" className="w-full rounded-full btn-hover-effect" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-8">
                <div>
                  <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 border-none">
                    Our Location
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">Visit Our Office</h2>
                  <p className="text-muted-foreground mb-6">
                    We'd love to meet you in person at our sustainable headquarters.
                  </p>

                  <div className="aspect-video overflow-hidden rounded-xl mb-6">
                    <img src="/contact-hero.png" alt="Verdant Office" className="w-full h-full object-cover" />
                  </div>

                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">
                        123 Eco Street, Green Building
                        <br />
                        Portland, OR 97204
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-4">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Social Media</h3>
                      <div className="flex gap-4 mt-2">
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          Instagram
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          Twitter
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          Facebook
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-sage-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 border-none">Stay Updated</Badge>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Join Our Newsletter</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive updates on new products, sustainability tips, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="rounded-full" />
              <Button className="rounded-full btn-hover-effect">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
