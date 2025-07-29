import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Ticket, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Contact Mariettekelley Solutions - Get in Touch | Tacoma, WA",
  description:
    "Contact Mariettekelley Solutions for cloud telephony support. Book meetings, live chat, or submit tickets. Based in Tacoma, WA.",
  keywords: "contact mariettekelley, cloud telephony support, tacoma contact, customer service",
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Calendar,
      title: "Book a Meeting",
      description: "Schedule a personalized demo or consultation with our team",
      action: "Schedule Now",
      link: "https://salescentri.com/get-started/calendly",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant support from our customer success team",
      action: "Start Chat",
      link: "https://salescentri.com/contact/support-request/live-chat",
    },
    {
      icon: Ticket,
      title: "Submit Ticket",
      description: "Submit a detailed support request for technical assistance",
      action: "Create Ticket",
      link: "https://salescentri.com/contact/support-request/submit-ticket",
    },
  ]

  const officeInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: "Tacoma, Washington, USA",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 8:00 AM - 6:00 PM PST",
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: "24/7 Emergency Support Available",
    },
    {
      icon: Mail,
      title: "Email Support",
      details: "Response within 2 hours",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
              Ready to transform your sales communications? Our team is here to help you get started with iGCT.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How Can We Help?</h2>
            <p className="text-xl text-gray-600">Choose the best way to connect with our team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-4 bg-[#fb6cc8]/10 rounded-lg w-fit mx-auto mb-4">
                    <method.icon className="h-8 w-8 text-[#fb6cc8]" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{method.description}</p>
                  <Link href={method.link}>
                    <Button className="cta-button w-full">
                      {method.action} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-xl text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form action="https://salescentri.com/get-started/contact" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="w-full"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full"
                    placeholder="Tell us more about your needs..."
                  />
                </div>

                <div className="text-center">
                  <Button type="submit" className="cta-button text-lg px-8 py-4">
                    Send Message <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Office Information</h2>
            <p className="text-xl text-gray-600">Visit us or reach out through multiple channels</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {officeInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-[#fb6cc8]/10 rounded-lg w-fit mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-[#fb6cc8]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2e239a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Don't wait - start your free trial today and see how iGCT can transform your sales communications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://salescentri.com/get-started/free-trial">
              <Button className="cta-button text-lg px-8 py-4">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://salescentri.com/get-started/book-demo">
              <Button variant="outline" className="text-black bg-white hover:bg-gray-100 text-lg px-8 py-4">
                Book Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
