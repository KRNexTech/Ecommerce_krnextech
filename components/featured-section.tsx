"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function FeaturedSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-16 bg-background" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 border-none">Our Mission</Badge>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Sustainability at Our Core</h2>
            <p className="text-muted-foreground mb-6">
              We believe that shopping sustainably shouldn't mean compromising on style or quality. Our mission is to
              bring you products that are good for you and good for the planet.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2 mt-1">
                  <Leaf className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Eco-Friendly Materials</h3>
                  <p className="text-sm text-muted-foreground">
                    All our products are made from sustainable, recycled, or organic materials.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2 mt-1">
                  <Leaf className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Ethical Production</h3>
                  <p className="text-sm text-muted-foreground">
                    We partner with manufacturers who provide fair wages and safe working conditions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2 mt-1">
                  <Leaf className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Carbon-Neutral Shipping</h3>
                  <p className="text-sm text-muted-foreground">
                    We offset the carbon footprint of every shipment to minimize environmental impact.
                  </p>
                </div>
              </div>
            </div>

            <Button className="rounded-full btn-hover-effect group">
              Learn More About Our Values
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-70 -z-10"></div>

              {/* Main image for mobile */}
              <div className="md:hidden rounded-xl overflow-hidden mb-4">
                <img
                  src="/sustainable-mission-main.png"
                  alt="Sustainable Materials"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>

              {/* Desktop layout */}
              <div className="hidden md:grid grid-cols-2 gap-4 mb-4">
                <div className="aspect-[3/4] rounded-xl overflow-hidden">
                  <img
                    src="/sustainable-mission-main.png"
                    alt="Sustainable Materials"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-rows-2 gap-4">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src="/eco-friendly-process.png"
                      alt="Eco-Friendly Manufacturing Process"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src="/sustainable-materials.png"
                      alt="Sustainable Materials"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Secondary images - 2 column for mobile, 3 column for desktop */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {/* These two images only show on tablet and up */}
                <div className="hidden md:block rounded-xl overflow-hidden">
                  <img
                    src="/eco-friendly-process.png"
                    alt="Eco-Friendly Manufacturing Process"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
                <div className="hidden md:block rounded-xl overflow-hidden">
                  <img
                    src="/sustainable-materials.png"
                    alt="Sustainable Materials"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>

                {/* These show on all devices */}
                <div className="rounded-xl overflow-hidden">
                  <img
                    src="/eco-certifications.png"
                    alt="Eco Certifications"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img
                    src="/brand-values.png"
                    alt="Our Brand Values"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
                <div className="rounded-xl overflow-hidden md:hidden">
                  <img
                    src="/sustainable-packaging.png"
                    alt="Sustainable Packaging"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
                <div className="hidden md:block rounded-xl overflow-hidden">
                  <img
                    src="/sustainable-packaging.png"
                    alt="Sustainable Packaging"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
