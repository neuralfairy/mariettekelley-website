"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Globe, Shield, Zap, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".scroll-fade-in")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 scroll-fade-in">
              Global Cloud Telephony That Scales With You
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto scroll-fade-in">
              iGCT by Mariettekelley connects you worldwide through reliable, cloud-powered voice solutions for
              enterprise sales teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-fade-in">
              <Link href="https://salescentri.com/get-started/free-trial">
                <Button className="cta-button text-lg px-8 py-4">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://salescentri.com/get-started/book-demo">
                <Button variant="outline" className="text-black bg-white/90 hover:bg-white text-lg px-8 py-4">
                  Book Demo
                </Button>
              </Link>
            </div>
            <div className="mt-8 scroll-fade-in">
              <Link href="https://salescentri.com/solutions/use-case-navigator/recommendations">
                <Button variant="ghost" className="text-white border border-white/30 hover:bg-white/10">
                  ROI Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose iGCT?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful cloud telephony features designed for modern sales teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Reach",
                description: "Connect with customers worldwide through our global SIP trunking network",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "ISO-certified security with end-to-end encryption for all communications",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Sub-second call routing with 99.9% uptime guarantee",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Advanced call routing, analytics, and team management features",
              },
            ].map((feature, index) => (
              <Card key={index} className="scroll-fade-in hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 text-[#fb6cc8] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Trusted by Sales Teams Worldwide</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "iGCT transformed our global outreach. We've seen a 40% increase in successful connections.",
                author: "Sarah Johnson",
                role: "VP of Sales, TechCorp",
              },
              {
                quote: "The call quality and reliability are exceptional. Our team productivity has never been higher.",
                author: "Michael Chen",
                role: "Sales Director, GlobalSoft",
              },
              {
                quote: "Seamless integration with our CRM and outstanding customer support. Highly recommended!",
                author: "Emily Rodriguez",
                role: "Head of Operations, SalesForce Pro",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="scroll-fade-in">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2e239a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 scroll-fade-in">
            Ready to Scale Your Sales Communications?
          </h2>
          <p className="text-xl mb-8 scroll-fade-in">
            Join thousands of sales teams already using iGCT to connect with customers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-fade-in">
            <Link href="https://salescentri.com/get-started/free-trial">
              <Button className="cta-button text-lg px-8 py-4">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://salescentri.com/pricing">
              <Button variant="outline" className="text-black bg-white hover:bg-gray-100 text-lg px-8 py-4">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
