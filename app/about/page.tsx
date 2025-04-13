"use client"

import { motion } from "framer-motion"
import { Leaf, Heart, Globe, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      image: "/team-member-1.png",
      bio: "Alex founded Verdant with a vision to make sustainable fashion accessible to everyone.",
    },
    {
      name: "Jamie Chen",
      role: "Head of Design",
      image: "/team-member-2.png",
      bio: "Jamie leads our design team, creating beautiful products that don't compromise on sustainability.",
    },
    {
      name: "Taylor Williams",
      role: "Sustainability Director",
      image: "/team-member-3.png",
      bio: "Taylor ensures all our products and operations meet the highest environmental standards.",
    },
    {
      name: "Jordan Smith",
      role: "Community Manager",
      image: "/team-member-4.png",
      bio: "Jordan builds and nurtures our community of eco-conscious consumers.",
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
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div className="flex flex-col gap-4" initial="hidden" animate="visible" variants={fadeIn}>
              <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20 border-none">Our Story</Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Making Sustainability <span className="text-gradient">Accessible</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-[600px]">
                At Verdant, we believe that sustainable living should be accessible to everyone. Our mission is to
                provide eco-friendly products without compromising on quality, style, or affordability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-70 -z-10"></div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img alt="Verdant Team" className="object-cover w-full h-full" src="/about-hero.png" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-accent/20 to-primary/20 blur-xl opacity-70 -z-10"></div>
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <img alt="Verdant Founder" className="object-cover w-full h-full" src="/about-founder.png" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2 flex flex-col gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20 border-none">Our Beginning</Badge>
              <h2 className="text-3xl font-bold tracking-tight">From Idea to Impact</h2>
              <p className="text-muted-foreground">
                Verdant was founded in 2020 with a simple idea: what if shopping sustainably was as easy as shopping
                conventionally? Our founder, Alex Morgan, was frustrated by the lack of accessible, stylish eco-friendly
                products and decided to create a solution.
              </p>
              <p className="text-muted-foreground">
                What started as a small online store with just 10 products has grown into a comprehensive marketplace
                for sustainable living. Today, we offer hundreds of products across multiple categories, all meeting our
                strict sustainability standards.
              </p>
              <p className="text-muted-foreground">
                Despite our growth, our mission remains the same: to make sustainable living accessible to everyone by
                offering high-quality, eco-friendly products at fair prices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 border-none">Our Values</Badge>
            <h2 className="text-3xl font-bold tracking-tight mb-4">What We Stand For</h2>
            <p className="text-muted-foreground">
              Our values guide everything we do, from product selection to business operations.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              className="bg-white rounded-xl p-6 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-primary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                We prioritize products made from sustainable materials using eco-friendly processes.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-accent/10 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ethical Production</h3>
              <p className="text-muted-foreground">
                We ensure all products are made under fair working conditions with fair compensation.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-lavender-300/20 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-lavender-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Transparency</h3>
              <p className="text-muted-foreground">
                We provide clear information about our products, their materials, and their origins.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-sand-300/20 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-sand-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-muted-foreground">
                We believe sustainable products should be durable and well-made to reduce waste.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20 border-none">Our Impact</Badge>
              <h2 className="text-3xl font-bold tracking-tight">Making a Difference</h2>
              <p className="text-muted-foreground">
                We believe that every purchase is a chance to make a positive impact. Here's how our community is
                helping to create change:
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-border">
                  <div className="text-3xl font-bold text-primary mb-1">50K+</div>
                  <p className="text-sm text-muted-foreground">Plastic bottles recycled into products</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-border">
                  <div className="text-3xl font-bold text-primary mb-1">100+</div>
                  <p className="text-sm text-muted-foreground">Tons of CO2 emissions offset</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-border">
                  <div className="text-3xl font-bold text-primary mb-1">25K+</div>
                  <p className="text-sm text-muted-foreground">Trees planted through our initiatives</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-border">
                  <div className="text-3xl font-bold text-primary mb-1">$100K+</div>
                  <p className="text-sm text-muted-foreground">Donated to environmental causes</p>
                </div>
              </div>

              <p className="text-muted-foreground">
                We're proud of what we've accomplished so far, but we know there's still much more to do. We're
                committed to continuously improving our practices and increasing our positive impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-70 -z-10"></div>
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <img alt="Environmental Impact" className="object-cover w-full h-full" src="/about-impact.png" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 border-none">Our Team</Badge>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Meet the People Behind Verdant</h2>
            <p className="text-muted-foreground">
              Our passionate team is dedicated to making sustainable living accessible to everyone.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-xl overflow-hidden border border-border"
                variants={fadeIn}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 border-none">Join Our Journey</Badge>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Be Part of the Change</h2>
            <p className="text-muted-foreground mb-8">
              Whether you're just starting your sustainability journey or you're a seasoned eco-warrior, we invite you
              to join our community and be part of the change we're creating together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full btn-hover-effect group">
                Shop Our Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
