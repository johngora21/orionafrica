import Link from "next/link"
import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">EcoFarms</h3>
            <p className="text-sm">Your trusted partner for premium agricultural exports from Tanzania.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Product Categories</h4>
            <ul className="space-y-2">
              <li><Link href="#products" className="hover:text-white transition-colors">Beverages</Link></li>
              <li><Link href="#products" className="hover:text-white transition-colors">Nuts & Seeds</Link></li>
              <li><Link href="#products" className="hover:text-white transition-colors">Seeds & Grains</Link></li>
              <li><Link href="#products" className="hover:text-white transition-colors">Fresh Fruits</Link></li>
              <li><Link href="#products" className="hover:text-white transition-colors">Dried Fruits</Link></li>
              <li><Link href="#products" className="hover:text-white transition-colors">Industrial Crops</Link></li>
              <li><Link href="#products" className="hover:text-white transition-colors">Spices</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+255717801745" className="hover:text-white transition-colors">+255 717 801 745</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a href="https://wa.me/255717801745" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp: +255 717 801 745</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@ecofarms.co.tz" className="hover:text-white transition-colors">info@ecofarms.co.tz</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>Monday - Friday: 8AM - 6PM EAT</li>
              <li>Saturday: 9AM - 2PM EAT</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} EcoFarms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
