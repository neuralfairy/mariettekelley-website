import type { Metadata } from "next"
import Link from "next/link"
import { MessageSquare, Bot, BarChart3, Globe, Shield, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "iGCT Features - Global Cloud Telephony Capabilities | Mariettekelley Solutions",
  description:
    "Explore iGCT's powerful features: Global SIP trunking, VoiceBot, SMS, number masking, call routing & analytics for enterprise sales teams.",
  keywords: "SIP trunking, VoiceBot, SMS, call routing, call analytics, number masking, cloud telephony features",
}

export default function FeaturesPage() {
  const coreFeatures = [
    {
      icon: Globe,
      title: "Global SIP Trunking",
      description:
        "Connect to customers worldwide with our robust global SIP trunking infrastructure. Enjoy crystal-clear voice quality and reliable connections across 150+ countries.",
      benefits: ["99.9% uptime guarantee", "Sub-100ms latency", "Automatic failover", "Local number presence"],
    },
    {
      icon: Bot,
      title: "VoiceBot Integration",
      description:
        "Intelligent voice automation that handles initial customer interactions, qualifies leads, and routes calls to the right team members.",
      benefits: [
        "24/7 availability",
        "Natural language processing",
        "Lead qualification",
        "Seamless handoff to humans",
      ],
    },
    {
      icon: MessageSquare,
      title: "SMS & Messaging",
      description:
        "Multi-channel communication platform supporting SMS, MMS, and instant messaging for comprehensive customer engagement.",
      benefits: ["Two-way SMS", "Bulk messaging", "Message templates", "Delivery tracking"],
    },
    {
      icon: Shield,
      title: "Number Masking",
      description:
        "Protect agent privacy while maintaining professional communication with dynamic number masking and call recording.",
      benefits: ["Agent privacy protection", "Professional appearance", "Call recording", "Compliance ready"],
    },
    {
      icon: BarChart3,
      title: "Call Routing & Analytics",
      description:
        "Advanced call routing algorithms and comprehensive analytics to optimize your sales performance and customer experience.",
      benefits: ["Intelligent routing", "Real-time analytics", "Performance metrics", "Custom reporting"],
    },
    {
      icon: Users,
      title: "Team Management",
      description:
        "Comprehensive team management tools with role-based access, performance tracking, and collaboration features.",
      benefits: ["Role-based permissions", "Team performance tracking", "Collaboration tools", "Activity monitoring"],
    },
  ]

  const additionalTools = [
    {
      title: "Voice AI Agent",
      description: "Advanced AI-powered voice agent for automated customer interactions",
      link: "https://salescentri.com/platforms/lead-management/voice-ai-agent",
    },
    {
      title: "WhatsApp Bot",
      description: "Automated WhatsApp messaging for customer engagement and support",
      link: "https://salescentri.com/platforms/lead-management/whatsapp-bot",
    },
    {
      title: "Cloud Dialer",
      description: "Automated cloud-based dialing system for high-volume outreach",
      link: "https://salescentri.com/platforms/lead-management/automated-cloud-dialer",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">iGCT Capabilities</h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive cloud telephony features designed to power your global sales operations
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Core Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to scale your sales communications globally
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#fb6cc8]/10 rounded-lg">
                      <feature.icon className="h-8 w-8 text-[#fb6cc8]" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-[#fb6cc8] rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Tools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Additional Tools & Integrations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Extend your capabilities with our advanced AI-powered tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalTools.map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{tool.title}</h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <Link href={tool.link}>
                    <Button className="cta-button w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2e239a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Experience iGCT Features?</h2>
          <p className="text-xl mb-8">
            See how our comprehensive telephony platform can transform your sales operations.
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
