import Link from "next/link"
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-green-600 p-2 rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Neo Farms</span>
            </div>
            <p className="text-green-100 leading-relaxed">
              Your trusted partner for premium Tanzanian agricultural exports. Serving international markets since 2021.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-green-300 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-green-300 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-green-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-green-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Products", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-green-100 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              {["Coffee", "Cashew Nuts", "Sesame Seeds", "Avocados", "Black Tea", "Sunflower Seeds"].map((item) => (
                <li key={item}>
                  <span className="text-green-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-300" />
                <span className="text-green-100">Dar es Salaam, Tanzania</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-300" />
                <span className="text-green-100">+255 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-300" />
                <span className="text-green-100">info@neofarms.co.tz</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-12 pt-8 text-center">
          <p className="text-green-100">
            © {new Date().getFullYear()} Neo Farms. All rights reserved. | Established 2021
          </p>
        </div>
      </div>
    </footer>
  )
}
