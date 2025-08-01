"use client"

import { Button } from "@/components/ui/button"
import { Leaf } from "lucide-react"

export default function Navbar() {

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = (href: string) => {
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={() => handleNavClick("#home")} className="flex items-center space-x-2">
            <img 
              src="/africaunveil.png" 
              alt="Neo Farms Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-gray-800">Orion Africa</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <Button
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full"
              onClick={() => handleNavClick("#contact")}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Navigation - Always Visible */}
          <div className="md:hidden flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 text-sm"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>


      </div>
    </nav>
  )
}
