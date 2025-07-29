import Link from "next/link"
import { Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#3f213f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Phone className="h-8 w-8 text-[#fb6cc8]" />
              <span className="text-xl font-bold">Mariettekelley Solutions</span>
            </div>
            <p className="text-gray-300 mb-4">
              Global cloud telephony provider offering scalable voice and calling solutions for enterprise sales teams.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="h-4 w-4" />
              <span>Tacoma, WA</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-gray-300 hover:text-[#fb6cc8] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-[#fb6cc8] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#fb6cc8] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#fb6cc8] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-[#fb6cc8] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://salescentri.com/resources/case-studies"
                  className="text-gray-300 hover:text-[#fb6cc8] transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="https://salescentri.com/resources/whitepapers-ebooks"
                  className="text-gray-300 hover:text-[#fb6cc8] transition-colors"
                >
                  Download Guide
                </Link>
              </li>
              <li>
                <Link
                  href="https://salescentri.com/docs/api-reference"
                  className="text-gray-300 hover:text-[#fb6cc8] transition-colors"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="https://salescentri.com/docs/user-guide"
                  className="text-gray-300 hover:text-[#fb6cc8] transition-colors"
                >
                  User Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="/privacy" className="text-gray-300 hover:text-[#fb6cc8] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-[#fb6cc8] transition-colors">
                Terms of Service
              </Link>
            </div>
            <div className="text-gray-300 text-sm">
              <Link
                href="https://salescentri.com?utm_source=mariettekelley.com&utm_medium=footer&utm_campaign=partner_network"
                className="hover:text-[#fb6cc8] transition-colors"
              >
                Powered by Sales Intelligence Platform
              </Link>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm mt-4">
            © 2024 Mariettekelley Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
