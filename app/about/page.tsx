import type { Metadata } from "next"
import Link from "next/link"
import { Users, Target, Globe, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Mariettekelley Solutions - Voice-First Global Outreach | Tacoma, WA",
  description:
    "Learn about Mariettekelley Solutions, a Tacoma-based team pioneering voice-first global outreach with iGCT cloud telephony solutions.",
  keywords: "about mariettekelley, tacoma telephony company, voice-first outreach, cloud telephony team",
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "Our mission is to enable voice-first global outreach, connecting businesses with customers worldwide through reliable, innovative telephony solutions.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description:
        "Based in Tacoma, WA, we serve clients worldwide, understanding the unique challenges of international business communications.",
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description:
        "Every feature we build and every decision we make is guided by our commitment to delivering exceptional value to our customers.",
    },
    {
      icon: Award,
      title: "Innovation Focus",
      description:
        "We continuously innovate to stay ahead of industry trends, ensuring our clients have access to cutting-edge telephony technology.",
    },
  ]

  const stats = [
    { number: "150+", label: "Countries Served" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "10M+", label: "Calls Processed Monthly" },
    { number: "24/7", label: "Customer Support" },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Mariettekelley Solutions</h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
              Pioneering voice-first global outreach from Tacoma, Washington
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in Tacoma, Washington, Mariettekelley Solutions emerged from a simple yet powerful vision: to
                revolutionize how businesses connect with their customers globally through voice-first communication.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team recognized that in an increasingly digital world, the human voice remains the most powerful
                tool for building trust, closing deals, and creating lasting business relationships. This insight led to
                the development of iGCT, our comprehensive cloud telephony platform.
              </p>
              <p className="text-lg text-gray-600">
                Today, we serve enterprise sales teams across the globe, providing them with the tools they need to
                scale their communications while maintaining the personal touch that drives business success.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Mission</h3>
              <p className="text-lg text-gray-700 italic">
                "To enable voice-first global outreach by providing enterprise sales teams with reliable, scalable, and
                innovative cloud telephony solutions that connect businesses with customers worldwide."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-[#fb6cc8]/10 rounded-lg w-fit mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-[#fb6cc8]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">By the Numbers</h2>
            <p className="text-xl text-gray-600">Our impact in the global telephony market</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#fb6cc8] mb-2">{stat.number}</div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 mb-8">Meet the experts behind iGCT's success</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://salescentri.com/company/about-us/leadership-team">
                <Button className="cta-button">
                  Leadership Team <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://salescentri.com/company/team-advisors/career-openings">
                <Button variant="outline" className="text-black border-gray-300 bg-transparent">
                  Career Openings
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Based in Tacoma, Washington</h3>
            <p className="text-lg text-gray-600 mb-6">
              Our headquarters in Tacoma, WA, serves as the hub for our global operations. From the Pacific Northwest,
              we coordinate our worldwide network of telephony infrastructure, ensuring reliable service delivery across
              all time zones.
            </p>
            <p className="text-lg text-gray-600">
              The Tacoma location reflects our commitment to supporting local communities while serving global markets,
              embodying the entrepreneurial spirit of the Pacific Northwest technology sector.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2e239a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Join Our Success Story?</h2>
          <p className="text-xl mb-8">
            Discover how iGCT can transform your sales communications and help you connect with customers worldwide.
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
