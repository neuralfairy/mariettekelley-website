import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
  title: "Cloud Telephony Blog - VoIP & Global Outreach Insights | Mariettekelley Solutions",
  description:
    "Expert insights on VoIP, global outreach, call automation, and cloud telephony trends. Stay updated with the latest in B2B sales communications.",
  keywords: "VoIP blog, cloud telephony insights, global outreach, call automation, B2B sales communications",
}

export default function BlogPage() {
  const featuredPosts = [
    {
      title: "The Future of Global Sales Communications: Why Voice-First Matters",
      excerpt:
        "Discover why voice-first communication strategies are becoming essential for global sales teams and how to implement them effectively.",
      author: "Sarah Mitchell",
      date: "2024-01-15",
      category: "Strategy",
      readTime: "8 min read",
      link: "https://salescentri.com/blog/future-global-sales-communications",
    },
    {
      title: "Complete Guide to Cloud Telephony for Enterprise Sales Teams",
      excerpt:
        "Everything you need to know about implementing cloud telephony solutions for your enterprise sales organization.",
      author: "Michael Chen",
      date: "2024-01-12",
      category: "Technology",
      readTime: "12 min read",
      link: "https://salescentri.com/blog/cloud-telephony-enterprise-guide",
    },
    {
      title: "ROI Analysis: Measuring Success with VoIP Solutions",
      excerpt:
        "Learn how to calculate and maximize ROI from your VoIP investment with practical metrics and benchmarks.",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      category: "Analytics",
      readTime: "6 min read",
      link: "https://salescentri.com/blog/voip-roi-analysis",
    },
  ]

  const blogPosts = [
    {
      title: "Advanced Call Routing Strategies for Global Teams",
      excerpt: "Optimize your call routing for maximum efficiency across time zones and regions.",
      author: "David Park",
      date: "2024-01-08",
      category: "Technology",
      link: "https://salescentri.com/blog/advanced-call-routing-strategies",
    },
    {
      title: "VoiceBot Integration: Automating Your Sales Process",
      excerpt: "How AI-powered voice bots can qualify leads and improve conversion rates.",
      author: "Lisa Wang",
      date: "2024-01-05",
      category: "AI & Automation",
      link: "https://salescentri.com/blog/voicebot-integration-sales",
    },
    {
      title: "Compliance in Cloud Telephony: GDPR, HIPAA, and Beyond",
      excerpt: "Navigate regulatory requirements for cloud-based communication systems.",
      author: "Robert Johnson",
      date: "2024-01-03",
      category: "Compliance",
      link: "https://salescentri.com/blog/cloud-telephony-compliance",
    },
    {
      title: "Building a Global Sales Team with Cloud Communications",
      excerpt: "Best practices for scaling your sales team across international markets.",
      author: "Anna Thompson",
      date: "2023-12-28",
      category: "Strategy",
      link: "https://salescentri.com/blog/global-sales-team-cloud-communications",
    },
    {
      title: "SMS Marketing Integration with Voice Campaigns",
      excerpt: "Combine SMS and voice outreach for maximum campaign effectiveness.",
      author: "Carlos Martinez",
      date: "2023-12-25",
      category: "Marketing",
      link: "https://salescentri.com/blog/sms-voice-campaign-integration",
    },
    {
      title: "Call Analytics: Key Metrics for Sales Performance",
      excerpt: "Essential KPIs to track for optimizing your sales call performance.",
      author: "Jennifer Lee",
      date: "2023-12-22",
      category: "Analytics",
      link: "https://salescentri.com/blog/call-analytics-sales-metrics",
    },
    {
      title: "Number Masking: Protecting Agent Privacy in Sales Calls",
      excerpt: "Implement number masking to protect your team while maintaining professionalism.",
      author: "Mark Davis",
      date: "2023-12-20",
      category: "Security",
      link: "https://salescentri.com/blog/number-masking-agent-privacy",
    },
    {
      title: "CRM Integration Best Practices for Cloud Telephony",
      excerpt: "Seamlessly integrate your telephony system with popular CRM platforms.",
      author: "Rachel Green",
      date: "2023-12-18",
      category: "Integration",
      link: "https://salescentri.com/blog/crm-integration-cloud-telephony",
    },
    {
      title: "Cost Optimization Strategies for Enterprise VoIP",
      excerpt: "Reduce telephony costs while maintaining service quality and reliability.",
      author: "Thomas Wilson",
      date: "2023-12-15",
      category: "Cost Management",
      link: "https://salescentri.com/blog/voip-cost-optimization",
    },
    {
      title: "International Calling: Navigating Global Telephony Regulations",
      excerpt: "Understanding international calling regulations and best practices.",
      author: "Sophie Brown",
      date: "2023-12-12",
      category: "Compliance",
      link: "https://salescentri.com/blog/international-calling-regulations",
    },
    {
      title: "Voice Quality Optimization in Cloud Telephony",
      excerpt: "Technical strategies to ensure crystal-clear voice quality in cloud calls.",
      author: "Alex Kim",
      date: "2023-12-10",
      category: "Technology",
      link: "https://salescentri.com/blog/voice-quality-optimization",
    },
    {
      title: "Sales Team Training for Cloud Communication Tools",
      excerpt: "Effective training strategies for adopting new telephony technologies.",
      author: "Maria Garcia",
      date: "2023-12-08",
      category: "Training",
      link: "https://salescentri.com/blog/sales-team-training-cloud-tools",
    },
    {
      title: "Disaster Recovery Planning for Business Communications",
      excerpt: "Ensure business continuity with robust communication disaster recovery plans.",
      author: "James Taylor",
      date: "2023-12-05",
      category: "Business Continuity",
      link: "https://salescentri.com/blog/disaster-recovery-communications",
    },
    {
      title: "WhatsApp Business Integration for Sales Teams",
      excerpt: "Leverage WhatsApp Business API for enhanced customer engagement.",
      author: "Nina Patel",
      date: "2023-12-03",
      category: "Integration",
      link: "https://salescentri.com/blog/whatsapp-business-sales-integration",
    },
    {
      title: "Call Recording Best Practices and Legal Considerations",
      excerpt: "Navigate call recording requirements while maximizing training value.",
      author: "Kevin O'Connor",
      date: "2023-12-01",
      category: "Compliance",
      link: "https://salescentri.com/blog/call-recording-best-practices",
    },
    {
      title: "Scaling Customer Support with Cloud Telephony",
      excerpt: "Transform your customer support operations with cloud-based solutions.",
      author: "Laura Anderson",
      date: "2023-11-28",
      category: "Customer Support",
      link: "https://salescentri.com/blog/scaling-support-cloud-telephony",
    },
    {
      title: "API Integration Guide for Custom Telephony Solutions",
      excerpt: "Build custom integrations using modern telephony APIs and webhooks.",
      author: "Ryan Murphy",
      date: "2023-11-25",
      category: "Development",
      link: "https://salescentri.com/blog/api-integration-telephony",
    },
    {
      title: "Mobile-First Communication Strategies for Remote Sales",
      excerpt: "Optimize your communication stack for mobile-first remote sales teams.",
      author: "Amanda Foster",
      date: "2023-11-22",
      category: "Remote Work",
      link: "https://salescentri.com/blog/mobile-first-remote-sales",
    },
    {
      title: "Security Best Practices for Cloud-Based Communications",
      excerpt: "Implement enterprise-grade security for your cloud communication systems.",
      author: "Daniel Chang",
      date: "2023-11-20",
      category: "Security",
      link: "https://salescentri.com/blog/cloud-communications-security",
    },
    {
      title: "Performance Monitoring for VoIP Systems",
      excerpt: "Essential monitoring tools and techniques for VoIP system performance.",
      author: "Stephanie Liu",
      date: "2023-11-18",
      category: "Monitoring",
      link: "https://salescentri.com/blog/voip-performance-monitoring",
    },
    {
      title: "Customer Journey Mapping with Communication Touchpoints",
      excerpt: "Map customer journeys and optimize communication touchpoints for better conversion.",
      author: "Brian Scott",
      date: "2023-11-15",
      category: "Strategy",
      link: "https://salescentri.com/blog/customer-journey-communication",
    },
    {
      title: "AI-Powered Call Analytics and Insights",
      excerpt: "Leverage artificial intelligence to gain deeper insights from your call data.",
      author: "Grace Chen",
      date: "2023-11-12",
      category: "AI & Analytics",
      link: "https://salescentri.com/blog/ai-call-analytics",
    },
    {
      title: "Multi-Channel Communication Orchestration",
      excerpt: "Coordinate voice, SMS, email, and chat for seamless customer experiences.",
      author: "Paul Rodriguez",
      date: "2023-11-10",
      category: "Strategy",
      link: "https://salescentri.com/blog/multi-channel-orchestration",
    },
    {
      title: "Cloud Telephony Migration: Planning and Execution",
      excerpt: "Step-by-step guide to migrating from legacy systems to cloud telephony.",
      author: "Helen Zhang",
      date: "2023-11-08",
      category: "Migration",
      link: "https://salescentri.com/blog/cloud-telephony-migration",
    },
    {
      title: "Real-Time Communication Analytics Dashboard Design",
      excerpt: "Design effective dashboards for monitoring real-time communication metrics.",
      author: "Marcus Johnson",
      date: "2023-11-05",
      category: "Analytics",
      link: "https://salescentri.com/blog/realtime-analytics-dashboard",
    },
    {
      title: "Voice Biometrics in Business Communications",
      excerpt: "Explore the applications of voice biometrics for security and personalization.",
      author: "Olivia Martinez",
      date: "2023-11-03",
      category: "Technology",
      link: "https://salescentri.com/blog/voice-biometrics-business",
    },
    {
      title: "Omnichannel Customer Experience with Cloud Communications",
      excerpt: "Create seamless omnichannel experiences using cloud communication platforms.",
      author: "Tyler Williams",
      date: "2023-11-01",
      category: "Customer Experience",
      link: "https://salescentri.com/blog/omnichannel-cloud-communications",
    },
    {
      title: "Predictive Dialing Algorithms and Optimization",
      excerpt: "Understand and optimize predictive dialing algorithms for maximum efficiency.",
      author: "Isabella Davis",
      date: "2023-10-28",
      category: "Technology",
      link: "https://salescentri.com/blog/predictive-dialing-optimization",
    },
    {
      title: "Communication Compliance in Regulated Industries",
      excerpt: "Navigate communication compliance requirements in healthcare, finance, and legal sectors.",
      author: "Christopher Lee",
      date: "2023-10-25",
      category: "Compliance",
      link: "https://salescentri.com/blog/regulated-industry-compliance",
    },
    {
      title: "Edge Computing for Low-Latency Voice Communications",
      excerpt: "Leverage edge computing to reduce latency in global voice communications.",
      author: "Samantha Kim",
      date: "2023-10-22",
      category: "Technology",
      link: "https://salescentri.com/blog/edge-computing-voice-communications",
    },
    {
      title: "Conversational AI Integration in Sales Workflows",
      excerpt: "Integrate conversational AI to enhance sales workflows and customer interactions.",
      author: "Jonathan Miller",
      date: "2023-10-20",
      category: "AI & Automation",
      link: "https://salescentri.com/blog/conversational-ai-sales",
    },
    {
      title: "Quality Assurance Programs for Call Centers",
      excerpt: "Implement comprehensive QA programs to maintain high service standards.",
      author: "Victoria Brown",
      date: "2023-10-18",
      category: "Quality Assurance",
      link: "https://salescentri.com/blog/call-center-quality-assurance",
    },
    {
      title: "Blockchain Applications in Telecommunications",
      excerpt: "Explore how blockchain technology can enhance telecommunications security and transparency.",
      author: "Andrew Wilson",
      date: "2023-10-15",
      category: "Emerging Tech",
      link: "https://salescentri.com/blog/blockchain-telecommunications",
    },
    {
      title: "Voice-First User Experience Design",
      excerpt: "Design principles for creating intuitive voice-first user experiences.",
      author: "Natalie Garcia",
      date: "2023-10-12",
      category: "UX Design",
      link: "https://salescentri.com/blog/voice-first-ux-design",
    },
    {
      title: "Communication Data Privacy and GDPR Compliance",
      excerpt: "Ensure GDPR compliance in your communication data handling and storage practices.",
      author: "Richard Taylor",
      date: "2023-10-10",
      category: "Privacy",
      link: "https://salescentri.com/blog/communication-data-privacy",
    },
    {
      title: "Advanced IVR Design for Better Customer Experience",
      excerpt: "Create intelligent IVR systems that enhance rather than frustrate customer interactions.",
      author: "Michelle Wong",
      date: "2023-10-08",
      category: "Customer Experience",
      link: "https://salescentri.com/blog/advanced-ivr-design",
    },
    {
      title: "Telecommunications Infrastructure for Remote Work",
      excerpt: "Build robust telecommunications infrastructure to support distributed teams.",
      author: "Steven Anderson",
      date: "2023-10-05",
      category: "Infrastructure",
      link: "https://salescentri.com/blog/telecom-infrastructure-remote-work",
    },
    {
      title: "Voice Communication Accessibility Standards",
      excerpt: "Implement accessibility standards to make voice communications inclusive for all users.",
      author: "Diana Martinez",
      date: "2023-10-03",
      category: "Accessibility",
      link: "https://salescentri.com/blog/voice-communication-accessibility",
    },
    {
      title: "Future Trends in Business Communications Technology",
      excerpt: "Explore emerging trends that will shape the future of business communications.",
      author: "Matthew Clark",
      date: "2023-10-01",
      category: "Future Trends",
      link: "https://salescentri.com/blog/future-business-communications",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Cloud Telephony Insights</h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
              Expert insights on VoIP, global outreach, and call automation to help you stay ahead in B2B sales
              communications.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Sidebar Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Search */}
            <div className="lg:w-2/3">
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input type="text" placeholder="Search articles..." className="pl-10 py-3 text-lg" />
              </div>
            </div>

            {/* Sidebar Links */}
            <div className="lg:w-1/3">
              <Card>
                <CardHeader>
                  <CardTitle>Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link
                    href="https://salescentri.com/resources/whitepapers-ebooks"
                    className="flex items-center text-[#fb6cc8] hover:underline"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Download Guide
                  </Link>
                  <Link
                    href="https://salescentri.com/resources/case-studies"
                    className="flex items-center text-[#fb6cc8] hover:underline"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Case Studies
                  </Link>
                  <Link
                    href="https://salescentri.com/blog/product-updates"
                    className="flex items-center text-[#fb6cc8] hover:underline"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Product Updates
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600">Our most popular and insightful content</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-[#fb6cc8] transition-colors">
                    <Link href={post.link}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <span className="text-xs bg-[#fb6cc8]/10 text-[#fb6cc8] px-2 py-1 rounded">{post.category}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest trends and insights</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <CardTitle className="text-lg hover:text-[#fb6cc8] transition-colors">
                    <Link href={post.link}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">{post.category}</span>
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Sales Communications?</h2>
          <p className="text-xl mb-8">Put these insights into action with iGCT's powerful cloud telephony platform.</p>
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
