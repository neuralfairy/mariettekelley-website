import type { Metadata } from "next"
import Link from "next/link"
import { Plus, Minus, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export const metadata: Metadata = {
  title: "FAQ - Cloud Telephony Questions Answered | Mariettekelley Solutions",
  description:
    "Get answers to common questions about cloud calling, compliance, call routing, and iGCT features. Expert support for your telephony needs.",
  keywords: "cloud telephony FAQ, VoIP questions, call routing help, compliance questions, iGCT support",
}

export default function FAQPage() {
  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          question: "What is iGCT and how does it work?",
          answer:
            "iGCT (Global Cloud Telephony) is our comprehensive cloud-based communication platform that enables businesses to make and receive calls globally through the internet. It works by routing voice calls through our secure cloud infrastructure, providing features like call routing, analytics, VoiceBot integration, and SMS messaging.",
        },
        {
          question: "How quickly can I get started with iGCT?",
          answer:
            "You can start using iGCT within minutes of signing up. Our platform offers instant provisioning for most features, and our onboarding team can have you fully operational within 24 hours for standard setups.",
        },
        {
          question: "What makes iGCT different from other cloud telephony providers?",
          answer:
            "iGCT stands out with its focus on sales teams, global reach across 150+ countries, advanced AI integration, comprehensive analytics, and our commitment to voice-first communication strategies. We also provide dedicated support and custom integrations.",
        },
      ],
    },
    {
      category: "Features & Functionality",
      questions: [
        {
          question: "What calling features are included in iGCT?",
          answer:
            "iGCT includes global SIP trunking, intelligent call routing, call recording, number masking, conference calling, voicemail, call forwarding, and advanced analytics. Premium plans also include VoiceBot integration and AI-powered features.",
        },
        {
          question: "Can I integrate iGCT with my existing CRM?",
          answer:
            "Yes, iGCT integrates with popular CRM platforms including Salesforce, HubSpot, Pipedrive, and many others. We also provide API access for custom integrations with your existing business tools.",
        },
        {
          question: "How does the VoiceBot feature work?",
          answer:
            "Our VoiceBot uses advanced AI to handle initial customer interactions, qualify leads, and route calls to appropriate team members. It can understand natural language, follow conversation flows, and seamlessly transfer to human agents when needed.",
        },
        {
          question: "What analytics and reporting features are available?",
          answer:
            "iGCT provides comprehensive analytics including call volume, duration, success rates, agent performance, customer satisfaction scores, and ROI metrics. You can create custom reports and access real-time dashboards.",
        },
      ],
    },
    {
      category: "Technical & Setup",
      questions: [
        {
          question: "What internet connection do I need for iGCT?",
          answer:
            "We recommend a stable broadband connection with at least 100 kbps per concurrent call. For optimal quality, we suggest 1 Mbps or higher. Our system automatically adjusts to your connection quality to maintain call clarity.",
        },
        {
          question: "Do I need special hardware or software?",
          answer:
            "No special hardware is required. iGCT works with standard computers, smartphones, and IP phones. You can use our web application, mobile apps, or integrate with existing softphone applications.",
        },
        {
          question: "How do you ensure call quality and reliability?",
          answer:
            "We maintain 99.9% uptime through redundant infrastructure, multiple data centers, and automatic failover systems. Our global network optimizes call routing for the best possible quality and minimal latency.",
        },
        {
          question: "Can I port my existing phone numbers?",
          answer:
            "Yes, we support number porting from most carriers. The process typically takes 3-5 business days for local numbers and up to 2 weeks for toll-free numbers. Our team handles the entire porting process for you.",
        },
      ],
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          question: "How does iGCT pricing work?",
          answer:
            "We offer three main plans: Starter ($29/user/month), Professional ($79/user/month), and Enterprise (custom pricing). Each plan includes different minute allowances and features. Additional minutes are charged at competitive per-minute rates.",
        },
        {
          question: "Are there any setup fees or hidden costs?",
          answer:
            "No, we believe in transparent pricing. There are no setup fees, activation charges, or hidden costs. You only pay for your monthly plan and any additional minutes or premium features you use.",
        },
        {
          question: "Can I change my plan at any time?",
          answer:
            "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately for upgrades, and at the next billing cycle for downgrades. Our team can help you choose the best plan for your needs.",
        },
        {
          question: "Do you offer discounts for annual payments?",
          answer:
            "Yes, we offer up to 20% discount for annual payments. We also provide volume discounts for large teams and custom pricing for enterprise customers with specific requirements.",
        },
      ],
    },
    {
      category: "Security & Compliance",
      questions: [
        {
          question: "How secure is iGCT?",
          answer:
            "iGCT uses enterprise-grade security including end-to-end encryption, secure data centers, regular security audits, and compliance with industry standards like ISO 27001. All communications are encrypted in transit and at rest.",
        },
        {
          question: "Is iGCT compliant with regulations like GDPR and HIPAA?",
          answer:
            "Yes, iGCT is designed to meet various compliance requirements including GDPR, HIPAA, and other regional regulations. We provide data processing agreements and compliance documentation as needed.",
        },
        {
          question: "Where is my data stored?",
          answer:
            "Data is stored in secure, geographically distributed data centers. You can choose your preferred data residency location to meet local compliance requirements. All data is encrypted and regularly backed up.",
        },
        {
          question: "How do you handle call recording compliance?",
          answer:
            "Our call recording features include automatic compliance notifications, consent management, and secure storage. We help ensure you meet local recording laws and provide tools for managing recorded content.",
        },
      ],
    },
    {
      category: "Support & Training",
      questions: [
        {
          question: "What support options are available?",
          answer:
            "We offer multiple support channels including 24/7 live chat, email support, phone support, and a comprehensive knowledge base. Enterprise customers receive dedicated account management and priority support.",
        },
        {
          question: "Do you provide training for new users?",
          answer:
            "Yes, we provide comprehensive onboarding including live training sessions, video tutorials, documentation, and ongoing support. Our customer success team ensures your team is fully trained and productive.",
        },
        {
          question: "How quickly do you respond to support requests?",
          answer:
            "We aim to respond to all support requests within 2 hours during business hours. Critical issues receive immediate attention, and we provide 24/7 emergency support for system-wide issues.",
        },
      ],
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
              Get answers to common questions about cloud calling, compliance, and call routing with iGCT.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <Card key={faqIndex}>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <CardContent className="p-6 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-left text-gray-900">{faq.question}</h3>
                            <Plus className="h-5 w-5 text-gray-500 group-data-[state=open]:hidden" />
                            <Minus className="h-5 w-5 text-gray-500 hidden group-data-[state=open]:block" />
                          </div>
                        </CardContent>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="px-6 pb-6 pt-0">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is here to help you find the right solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="cta-button text-lg px-8 py-4">
                Contact Support <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://salescentri.com/get-started/book-demo">
              <Button variant="outline" className="text-black border-gray-300 text-lg px-8 py-4 bg-transparent">
                Book Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2e239a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Experience iGCT?</h2>
          <p className="text-xl mb-8">
            Start your free trial today and see how our cloud telephony platform can transform your sales
            communications.
          </p>
          <Link href="https://salescentri.com/get-started/free-trial">
            <Button className="cta-button text-lg px-8 py-4">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqCategories.flatMap((category) =>
              category.questions.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            ),
          }),
        }}
      />
    </div>
  )
}
