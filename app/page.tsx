"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Globe,
  Truck,
  Award,
  Users,
  Target,
  Heart,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  ChevronLeft,
  ChevronRight,
  Play,
  Sparkles,
  TrendingUp,
  Shield,
} from "lucide-react"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const services = [
  {
    icon: Globe,
    title: "Global Export Services",
    description:
      "Comprehensive export services to over 25 countries worldwide with proper documentation and certifications.",
    features: ["Export Documentation", "Customs Clearance", "International Shipping", "Regulatory Compliance"],
    color: "#16a34a", // Green
  },
  {
    icon: Truck,
    title: "Logistics & Delivery",
    description:
      "End-to-end logistics solutions ensuring products reach destinations in perfect condition and on time.",
    features: ["Cold Chain Management", "Packaging Solutions", "Tracking Systems", "Timely Delivery"],
    color: "#2563eb", // Blue
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Rigorous quality control processes and international certifications ensuring global standards compliance.",
    features: ["Quality Testing", "ISO Certification", "HACCP Compliance", "Organic Certification"],
    color: "#9333ea", // Purple
  },
]

export default function HomePage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "Sustainable Avocado Farming",
      subtitle: "Premium Tanzanian Avocados",
      videoUrl: "/Africado-sustainable-avocado-farming-in-Tanzania.webp",
      achievement: "Sustainable",
    },
    {
      title: "Global Export Excellence",
      subtitle: "International Port Operations",
      videoUrl: "/Adani-Ports.jpg",
      achievement: "Global Reach",
    },
    {
      title: "100+ Happy Partners",
      subtitle: "Trusted Relationships",
      videoUrl: "/Africado-sustainable-avocado-farming-in-Tanzania.webp",
      achievement: "Partnership Success",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean Modern Design */}
      <section id="home" className="relative min-h-[90vh] bg-black overflow-hidden">
        {/* Main Content */}
        <div className="relative container mx-auto px-4 py-16 sm:py-20 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6"
              >
                Premium
                <span className="block text-green-600 mt-1 sm:mt-2">Tanzanian</span>
                <span className="block text-white mt-1 sm:mt-2">Agriculture</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Your trusted partner for high-quality agricultural exports from Tanzania. Serving governments and
                enterprises worldwide with premium crops and reliable service.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0"
              >
                {[
                  { value: "25+", label: "Countries" },
                  { value: "100+", label: "Partners" },
                  { value: "17+", label: "Crops" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="#products" className="flex items-center gap-2">
                    Explore Products
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Featured Product */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl"></div>
                
                {/* Product Image */}
                <div className="relative h-48 sm:h-64 md:h-80 rounded-xl overflow-hidden mb-4 sm:mb-6">
                  <Image
                    src={heroSlides[currentSlide].videoUrl}
                    alt={heroSlides[currentSlide].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Achievement Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <div className="px-3 sm:px-4 py-1 sm:py-2 bg-green-600 text-white text-xs sm:text-sm font-medium rounded-full">
                      {heroSlides[currentSlide].achievement}
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">{heroSlides[currentSlide].title}</h3>
                    <p className="text-sm sm:text-base text-gray-300">{heroSlides[currentSlide].subtitle}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400">Success Story</span>
                  </div>

                  {/* Action Button */}
                  <Button
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl text-sm sm:text-base"
                  >
                    <a href="#contact">Learn More</a>
                  </Button>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 mt-4 sm:mt-6">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-green-600 w-4" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}

      {/* About Section */}
      <section id="about" className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8 md:mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-4 md:mb-6">About Orion Africa</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pioneering agricultural excellence in Tanzania since 2021, connecting local farmers with global markets
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-8 md:mb-12 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600 mb-3 md:mb-4 lg:mb-6">Our Story</h3>
              <div className="space-y-3 md:space-y-4 lg:space-y-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  Founded in 2021 in Dar es Salaam, Orion Africa emerged from a vision to bridge Tanzania's rich
                  agricultural heritage with growing global demand for premium, sustainably-sourced crops.
                </p>
                <p>
                  We recognized the immense potential of Tanzanian agriculture and the need for a reliable partner
                  meeting international quality standards while supporting local farming communities.
                </p>
                <p>
                  Today, we proudly serve governments, corporations, and enterprises across 25+ countries, delivering
                  partnerships built on trust, quality, and reliability.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <Image
                src="/shutterstock_499876297-1024x767.jpg"
                alt="Orion Africa agricultural operations - sustainable farming in Tanzania"
                width={600}
                height={400}
                className="rounded-xl md:rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          {/* Mission, Vision, Values */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "To connect Tanzania's finest agricultural products with global markets, ensuring sustainable growth for local farmers while meeting international quality standards.",
                color: "#16a34a",
              },
              {
                icon: Globe,
                title: "Our Vision",
                description:
                  "To become Africa's leading agricultural export company, recognized globally for quality, reliability, and sustainable farming practices.",
                color: "#2563eb",
              },
              {
                icon: Heart,
                title: "Our Values",
                description:
                  "Quality excellence, sustainable practices, farmer empowerment, customer satisfaction, and building lasting international partnerships.",
                color: "#9333ea",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className={index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}>
                <Card className="text-center p-4 sm:p-6 md:p-8 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">{item.title}</h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-8 md:py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8 md:mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-4 md:mb-6">
              Premium Export Crops
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover Tanzania's finest agricultural products, carefully selected and processed to meet international
              quality standards
            </p>
          </motion.div>

          {/* Horizontal Scrolling Container with Navigation Buttons */}
          <div className="relative group">
            {/* Gradient overlays to indicate scrollable content */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none z-5"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none z-5"></div>
            <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-10 px-2 md:px-4">
              <button
                onClick={scrollLeft}
                className="bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none transition-opacity"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
              </button>
              <button
                onClick={scrollRight}
                className="bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none transition-opacity"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
              </button>
            </div>

            <div
              ref={scrollContainerRef}
              className="flex gap-3 md:gap-4 lg:gap-6 overflow-x-auto pb-4 md:pb-6 scrollbar-hide horizontal-scroll px-2 md:px-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                scrollBehavior: "smooth",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {[
                {
                  name: "Premium Arabica Coffee",
                  category: "Beverages",
                  description:
                    "High-altitude grown Arabica beans with exceptional flavor profiles from Mount Kilimanjaro and Meru slopes.",
                  features: ["Single Origin", "High Altitude", "Specialty Grade", "Fair Trade"],
                  image: "/types-of-coffee-beans-in-malaysia-featured.jpeg",
                  rating: 5,
                  exportGrade: "AA",
                  color: "#7c2d12", // Brown
                  price: "12,500",
                  minOrder: "1000 kg",
                },
                {
                  name: "Grade A Cashew Nuts",
                  category: "Nuts & Seeds",
                  description:
                    "Premium quality cashew nuts processed to international standards with careful selection and packaging.",
                  features: ["Grade A Quality", "Raw/Roasted", "Bulk Packaging", "Export Ready"],
                  image: "/cashew-cores-1549580_1280.jpg",
                  rating: 5,
                  exportGrade: "Grade A",
                  color: "#b45309", // Amber
                  price: "25,000",
                  minOrder: "500 kg",
                },
                {
                  name: "White Sesame Seeds",
                  category: "Seeds & Grains",
                  description:
                    "High oil content white sesame seeds perfect for oil extraction and food processing applications.",
                  features: ["High Oil Content", "99% Purity", "Natural", "Bulk Available"],
                  image: "/sesame-seeds-white-spices100.jpg",
                  rating: 5,
                  exportGrade: "Premium",
                  color: "#16a34a", // Green
                  price: "8,500",
                  minOrder: "2000 kg",
                },
                {
                  name: "Fresh Avocados",
                  category: "Fresh Fruits",
                  description:
                    "Premium Hass and Fuerte avocados grown in optimal conditions with careful harvesting and packing.",
                  features: ["Hass & Fuerte", "Export Quality", "Cold Chain", "Year Round"],
                  image: "/66fa7c77ebf0e0014afbc64e_lg.webp",
                  rating: 5,
                  exportGrade: "Class I",
                  color: "#15803d", // Dark Green
                  price: "7,200",
                  minOrder: "500 kg",
                },
                {
                  name: "Fresh Pineapples",
                  category: "Fresh Fruits",
                  description:
                    "Sweet and juicy pineapples grown in tropical conditions, perfect for fresh consumption and processing.",
                  features: ["Sweet Variety", "Export Quality", "Fresh & Processed", "Year Round"],
                  image: "/pineapple2.jpg",
                  rating: 5,
                  exportGrade: "Class I",
                  color: "#f59e0b", // Orange
                  price: "4,800",
                  minOrder: "1000 kg",
                },
                {
                  name: "Premium Maize",
                  category: "Grains & Cereals",
                  description:
                    "High-quality maize grains suitable for human consumption and animal feed with excellent nutritional value.",
                  features: ["High Protein", "Non-GMO", "Bulk Available", "Export Ready"],
                  image: "/8e284eaf0fcc410a87514b70f1a0fad7.webp",
                  rating: 5,
                  exportGrade: "Grade A",
                  color: "#fbbf24", // Yellow
                  price: "2,200",
                  minOrder: "5000 kg",
                },
                {
                  name: "Quality Beans",
                  category: "Legumes & Pulses",
                  description:
                    "Various bean varieties including kidney, pinto, and black beans with high protein content.",
                  features: ["High Protein", "Multiple Varieties", "Bulk Packaging", "Export Grade"],
                  image: "/cd2a8a6f-9c2f-4b1f-a5e5-87aa0cf9ce6e-YELLOW BEANS.jpg",
                  rating: 5,
                  exportGrade: "Premium",
                  color: "#dc2626", // Red
                  price: "5,500",
                  minOrder: "2000 kg",
                },
                {
                  name: "Sunflower Oil",
                  category: "Oils & Fats",
                  description:
                    "Premium sunflower oil extracted from high-quality seeds, perfect for cooking and industrial applications.",
                  features: ["High Quality", "Pure Extraction", "Cooking Grade", "Industrial Use"],
                  image: "/images.jpeg",
                  rating: 5,
                  exportGrade: "Premium",
                  color: "#eab308", // Yellow
                  price: "9,500",
                  minOrder: "1000 L",
                },
                {
                  name: "Fresh Onions",
                  category: "Vegetables",
                  description:
                    "Premium red, white, and shallot onions grown in optimal conditions for export markets.",
                  features: ["Multiple Varieties", "Export Quality", "Year Round", "Bulk Available"],
                  image: "/product-jpeg-500x500.webp",
                  rating: 5,
                  exportGrade: "Class I",
                  color: "#f97316", // Orange
                  price: "3,200",
                  minOrder: "2000 kg",
                },
                {
                  name: "Traditional Cowpeas",
                  category: "Legumes & Pulses",
                  description:
                    "Traditional cowpeas with high protein content, drought-resistant and perfect for regional markets.",
                  features: ["High Protein", "Drought Resistant", "Traditional", "Regional Export"],
                  image: "/BlackEyedPeas.jpeg",
                  rating: 5,
                  exportGrade: "Grade A",
                  color: "#059669", // Green
                  price: "4,500",
                  minOrder: "1500 kg",
                },
                {
                  name: "Pigeon Peas",
                  category: "Legumes & Pulses",
                  description:
                    "Growing export market for pigeon peas with high protein content and gluten-free properties.",
                  features: ["High Protein", "Gluten Free", "Growing Market", "Export Ready"],
                  image: "/Whole-Pigeon-Peas-Wholesale-Split-Peas.avif",
                  rating: 5,
                  exportGrade: "Premium",
                  color: "#7c3aed", // Purple
                  price: "6,200",
                  minOrder: "1000 kg",
                },
                {
                  name: "Green Grams",
                  category: "Legumes & Pulses",
                  description:
                    "Popular green grams in regional markets with quick cooking properties and high nutritional value.",
                  features: ["Quick Cooking", "High Protein", "Regional Popular", "Export Grade"],
                  image: "/green-gram-1713261798-7386693.jpeg",
                  rating: 5,
                  exportGrade: "Grade A",
                  color: "#16a34a", // Green
                  price: "5,300",
                  minOrder: "1500 kg",
                },
                {
                  name: "Premium Groundnuts",
                  category: "Nuts & Seeds",
                  description:
                    "High-quality groundnuts/peanuts available in raw and processed forms for various markets.",
                  features: ["High Oil Content", "Raw & Processed", "Multiple Grades", "Export Ready"],
                  image: "/java-peanuts-1725343548-7588180.jpeg",
                  rating: 5,
                  exportGrade: "Grade A",
                  color: "#92400e", // Brown
                  price: "11,500",
                  minOrder: "1000 kg",
                },

                {
                  name: "Premium Vanilla",
                  category: "Spices & Herbs",
                  description:
                    "High-value vanilla beans with growing demand in international markets for premium products.",
                  features: ["High Value", "Premium Quality", "Growing Demand", "International Market"],
                  image: "/WhatsApp-Image-2023-03-21-at-17.05.11-e1679489714228.jpeg",
                  rating: 5,
                  exportGrade: "Premium",
                  color: "#7c2d12", // Brown
                  price: "125,000",
                  minOrder: "100 kg",
                },
                {
                  name: "Quality Rice",
                  category: "Grains & Cereals",
                  description:
                    "Premium rice varieties including local and imported types for diverse market requirements.",
                  features: ["Multiple Varieties", "Local & Imported", "Bulk Available", "Export Grade"],
                  image: "/hq720.jpg",
                  rating: 5,
                  exportGrade: "Grade A",
                  color: "#fef3c7", // Light Yellow
                  price: "3,800",
                  minOrder: "3000 kg",
                },
                {
                  name: "Wheat Grains",
                  category: "Grains & Cereals",
                  description:
                    "Limited production wheat grains with high quality for specific market requirements.",
                  features: ["Limited Production", "High Quality", "Specific Markets", "Export Ready"],
                  image: "/wholesale-price-export-quality-100-organic-and-natural-dried-brown-wheat-grain-266.jpg",
                  rating: 5,
                  exportGrade: "Premium",
                  color: "#fbbf24", // Yellow
                  price: "4,200",
                  minOrder: "2000 kg",
                },

                {
                  name: "Traditional Millet",
                  category: "Grains & Cereals",
                  description:
                    "Traditional millet staple crop with excellent nutritional properties and regional popularity.",
                  features: ["Traditional Staple", "High Nutrition", "Regional Popular", "Export Ready"],
                  image: "/texture-grain-yellow-millet-white-background_67651-3884.avif",
                  rating: 5,
                  exportGrade: "Premium",
                  color: "#a16207", // Brown
                  price: "2,800",
                  minOrder: "1500 kg",
                }
              ].map((product, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-64 sm:w-72 md:w-80"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg h-full">
                    <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4">
                        <Badge
                          className="text-white border-0 text-xs"
                          style={{ backgroundColor: product.color }}
                        >
                          {product.category}
                        </Badge>
                      </div>
                      <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
                        <Badge
                          variant="secondary"
                          className="bg-white/90 text-gray-800 font-semibold text-xs"
                        >
                          {product.exportGrade}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-3 sm:p-4 md:p-6 flex flex-col h-full">
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 line-clamp-2">{product.name}</h3>
                          <div className="flex items-center">
                            {[...Array(product.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm line-clamp-3">{product.description}</p>
                        <div className="flex flex-wrap gap-1 mb-2 sm:mb-3 md:mb-4">
                          {product.features.slice(0, 2).map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-gray-300">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <div className="mb-2 sm:mb-3 md:mb-4">
                          <div className="text-sm sm:text-base md:text-lg font-bold text-green-600">
                            TZS {product.price}/kg
                          </div>
                          <div className="text-xs sm:text-sm text-gray-500">
                            Min. Order: {product.minOrder}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-1 sm:gap-2 mt-auto">
                        <Button
                          className="flex-1 text-white border-0 text-xs sm:text-sm"
                          style={{ backgroundColor: product.color }}
                        >
                          <a href="#contact">Quote</a>
                        </Button>
                        <Button
                          variant="outline"
                          className="border-gray-300 text-gray-700 hover:bg-gray-50 text-xs sm:text-sm"
                        >
                          <a href="#contact">Sample</a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8 md:mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-4 md:mb-6">Our Services</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive agricultural export services tailored for international partners
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-4 sm:p-6 md:p-8 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6"
                      style={{ backgroundColor: service.color }}
                    >
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">{service.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4 md:mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-1 sm:space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-2 sm:mr-3" style={{ backgroundColor: service.color }}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Export Process */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600 mb-4 sm:mb-6 md:mb-8">Our Export Process</h3>
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                {[
                  {
                    step: "01",
                    title: "Inquiry & Quotation",
                    description: "Submit requirements and receive detailed quotations",
                    color: "#16a34a",
                  },
                  {
                    step: "02",
                    title: "Sample Approval",
                    description: "Review product samples to ensure quality standards",
                    color: "#2563eb",
                  },
                  {
                    step: "03",
                    title: "Order Processing",
                    description: "Confirm orders with contracts and delivery schedules",
                    color: "#9333ea",
                  },
                  {
                    step: "04",
                    title: "Quality Control",
                    description: "Rigorous testing and certification processes",
                    color: "#ea580c",
                  },
                  {
                    step: "05",
                    title: "Shipping & Delivery",
                    description: "Professional packaging and tracked shipping",
                    color: "#0891b2",
                  },
                ].map((process, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                    <div
                      className="text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm md:text-base flex-shrink-0"
                      style={{ backgroundColor: process.color }}
                    >
                      {process.step}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-1 md:mb-2">{process.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative bg-white/95 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent rounded-2xl"></div>
                
                {/* Product Image */}
                <div className="relative h-48 sm:h-64 md:h-80 rounded-xl overflow-hidden mb-4 sm:mb-6">
                  <Image
                    src="/agriculture-trucks.jpeg"
                    alt="Export process"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Achievement Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <div className="px-3 sm:px-4 py-1 sm:py-2 bg-green-600 text-white text-xs sm:text-sm font-medium rounded-full">
                      Global Logistics
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Professional Export Services</h3>
                    <p className="text-sm sm:text-base text-gray-700">World-class logistics and transportation for your agricultural exports</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600">Reliable Service</span>
                  </div>

                  {/* Action Button */}
                  <Button
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl text-sm sm:text-base"
                  >
                    <a href="#contact">Contact Us</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white font-poppins">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8 md:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Let's Connect</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Ready to explore premium Tanzanian agricultural products? We're here to help.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 bg-green-600/10 rounded-2xl">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 tracking-tight">Send us a Message</h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-light">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                <form className="space-y-3 sm:space-y-4">
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-xs sm:text-sm font-medium text-gray-700 tracking-tight">First Name</label>
                      <Input 
                        placeholder="John" 
                        className="h-9 sm:h-10 bg-gray-50 border-gray-200 focus:border-green-600 focus:ring-green-600 rounded-2xl placeholder:text-gray-400 font-light"
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-xs sm:text-sm font-medium text-gray-700 tracking-tight">Last Name</label>
                      <Input 
                        placeholder="Doe" 
                        className="h-9 sm:h-10 bg-gray-50 border-gray-200 focus:border-green-600 focus:ring-green-600 rounded-2xl placeholder:text-gray-400 font-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-medium text-gray-700 tracking-tight">Email Address</label>
                    <Input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="h-9 sm:h-10 bg-gray-50 border-gray-200 focus:border-green-600 focus:ring-green-600 rounded-2xl placeholder:text-gray-400 font-light"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-medium text-gray-700 tracking-tight">Company</label>
                    <Input 
                      placeholder="Your company name" 
                      className="h-9 sm:h-10 bg-gray-50 border-gray-200 focus:border-green-600 focus:ring-green-600 rounded-2xl placeholder:text-gray-400 font-light"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-medium text-gray-700 tracking-tight">Inquiry Type</label>
                    <Select>
                      <SelectTrigger className="h-9 sm:h-10 bg-white border-gray-200 rounded-2xl text-gray-400 font-light">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-gray-200 rounded-2xl font-light">
                        <SelectItem value="quote" className="hover:bg-gray-50">Request Quote</SelectItem>
                        <SelectItem value="samples" className="hover:bg-gray-50">Request Samples</SelectItem>
                        <SelectItem value="partnership" className="hover:bg-gray-50">Partnership Inquiry</SelectItem>
                        <SelectItem value="bulk" className="hover:bg-gray-50">Bulk Order</SelectItem>
                        <SelectItem value="other" className="hover:bg-gray-50">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-medium text-gray-700 tracking-tight">Message</label>
                    <Textarea 
                      placeholder="Tell us about your requirements..." 
                      rows={4}
                      className="bg-gray-50 border-gray-200 focus:border-green-600 focus:ring-green-600 rounded-2xl placeholder:text-gray-400 font-light"
                    />
                  </div>

                  <Button 
                    className="w-full h-10 sm:h-11 bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base font-medium rounded-2xl transition-all duration-300 tracking-tight"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Right Column - Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-4 sm:space-y-6"
            >
              {/* Map */}
              <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 bg-blue-100 rounded-2xl">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 tracking-tight">Visit Us</h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-light">Dar es Salaam, Tanzania</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 bg-gray-100 rounded-2xl">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 font-light">Address</p>
                      <p className="text-sm sm:text-base font-medium text-gray-900 tracking-tight">Dar es Salaam, Tanzania</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 bg-gray-100 rounded-2xl">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 font-light">Office Hours</p>
                      <p className="text-sm sm:text-base font-medium text-gray-900 tracking-tight">Mon-Fri: 8AM - 6PM EAT</p>
                      <p className="text-xs sm:text-sm text-gray-500 font-light">Sat: 9AM - 2PM EAT</p>
                    </div>
                  </div>
                </div>

                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7526231084834!2d39.2084!3d-6.7924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b0c37c8c3c1%3A0x47e5d3971489240d!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1647881234567!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                  />
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 bg-purple-100 rounded-2xl">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 tracking-tight">Contact Details</h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-light">Get in touch with our team</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 bg-gray-100 rounded-2xl">
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 font-light">Phone</p>
                      <p className="text-sm sm:text-base font-medium text-gray-900 tracking-tight">+255 755 070 072</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 bg-gray-100 rounded-2xl">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 font-light">Email</p>
                      <p className="text-sm sm:text-base font-medium text-gray-900 tracking-tight">info@orionafrica.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 bg-gray-100 rounded-2xl">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 font-light">Business Hours</p>
                      <p className="text-sm sm:text-base font-medium text-gray-900 tracking-tight">Mon-Fri: 8AM - 6PM EAT</p>
                      <p className="text-xs sm:text-sm text-gray-500 font-light">Sat: 9AM - 2PM EAT</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 bg-green-600/10 rounded-2xl">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 font-light">WhatsApp</p>
                      <a 
                        href="https://wa.me/255755070072" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-medium text-gray-900 tracking-tight hover:text-green-600 transition-colors duration-300"
                      >
                        +255 755 070 072
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
