import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Pricing Plans - Transparent Cloud Telephony Pricing | Mariettekelley Solutions",
  description:
    "Choose from Starter, Professional, or Enterprise plans. Transparent pricing for iGCT cloud telephony solutions with no hidden fees.",
  keywords: "cloud telephony pricing, SaaS pricing, enterprise telephony costs, VoIP pricing plans",
}

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "per user/month",
      description: "Perfect for small sales teams getting started with cloud telephony",
      features: [
        "Up to 5 users",
        "1,000 minutes included",
        "Basic call routing",
        "SMS messaging",
        "Email support",
        "Basic analytics",
        "CRM integration",
        "Mobile app access",
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "per user/month",
      description: "Advanced features for growing sales teams and businesses",
      features: [
        "Up to 50 users",
        "5,000 minutes included",
        "Advanced call routing",
        "VoiceBot integration",
        "Number masking",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations",
        "Call recording",
        "Team management",
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact for pricing",
      description: "Tailored solutions for large organizations with specific requirements",
      features: [
        "Unlimited users",
        "Unlimited minutes",
        "Custom call routing",
        "Full VoiceBot suite",
        "Advanced security",
        "Custom analytics",
        "Dedicated support",
        "White-label options",
        "Custom integrations",
        "SLA guarantees",
        "On-premise deployment",
        "Compliance features",
      ],
      cta: "Get Custom Quote",
      ctaLink: "https://salescentri.com/pricing/enterprise-custom",
      popular: false,
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Transparent Pricing</h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your team. No hidden fees, no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://salescentri.com/pricing/plans-overview">
                <Button variant="outline" className="text-black bg-white hover:bg-gray-100">
                  View All Plans <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://salescentri.com/pricing">
                <Button className="cta-button">Get Pricing</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-shadow ${plan.popular ? "border-[#fb6cc8] border-2" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#fb6cc8] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-[#fb6cc8]">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-gray-600 ml-2">{plan.period}</span>}
                  </div>
                  <p className="text-gray-600 mt-4">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={plan.ctaLink}>
                    <Button
                      className={`w-full ${plan.popular ? "cta-button" : "bg-gray-900 text-white hover:bg-gray-800"}`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Compare Plans</h2>
            <p className="text-xl text-gray-600">See what's included in each plan</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Starter</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Professional</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: "Users", starter: "5", professional: "50", enterprise: "Unlimited" },
                    { feature: "Minutes Included", starter: "1,000", professional: "5,000", enterprise: "Unlimited" },
                    { feature: "Call Recording", starter: "✗", professional: "✓", enterprise: "✓" },
                    { feature: "VoiceBot", starter: "✗", professional: "✓", enterprise: "✓" },
                    { feature: "Advanced Analytics", starter: "✗", professional: "✓", enterprise: "✓" },
                    { feature: "API Access", starter: "✗", professional: "✓", enterprise: "✓" },
                    { feature: "Priority Support", starter: "✗", professional: "✓", enterprise: "✓" },
                    { feature: "Custom Integrations", starter: "✗", professional: "✓", enterprise: "✓" },
                    { feature: "SLA Guarantee", starter: "✗", professional: "✗", enterprise: "✓" },
                    { feature: "White-label", starter: "✗", professional: "✗", enterprise: "✓" },
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-center">{row.starter}</td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-center">{row.professional}</td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-center">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2e239a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Try iGCT risk-free with our 14-day free trial. No credit card required.</p>
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
