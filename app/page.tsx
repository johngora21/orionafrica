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
      title: "25+ Countries Served",
      subtitle: "Global Export Success",
      videoUrl: "/placeholder.svg?height=600&width=800",
      achievement: "International Reach",
    },
    {
      title: "1000+ Tons Exported",
      subtitle: "Premium Quality Delivered",
      videoUrl: "/placeholder.svg?height=600&width=800",
      achievement: "Volume Excellence",
    },
    {
      title: "100+ Happy Partners",
      subtitle: "Trusted Relationships",
      videoUrl: "/placeholder.svg?height=600&width=800",
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
      {/* Hero Section - Mobile Responsive */}
      <section id="home" className="relative overflow-hidden bg-black pt-16 pb-8 md:pt-20 md:pb-12">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating geometric shapes - Responsive sizes */}
          <motion.div
            className="absolute top-20 left-4 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-green-500 rounded-full opacity-20"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-32 md:top-40 right-8 md:right-20 w-10 h-10 md:w-16 md:h-16 bg-blue-500 rounded-lg opacity-20"
            animate={{
              rotate: [0, 180, 360],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-32 md:bottom-40 left-1/4 w-8 h-8 md:w-12 md:h-12 bg-purple-500 rounded-full opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-6 h-6 md:w-8 md:h-8 bg-orange-500 rounded-lg opacity-20"
            animate={{
              rotate: [0, -180, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Main Hero Content */}
        <div className="relative z-20 container mx-auto px-4 py-8 md:py-12">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-4 md:space-y-6 text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 md:px-4 py-2 text-green-400"
              >
                <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm font-medium">Trusted Since 2021</span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-3 md:space-y-4">
                <motion.h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <span className="text-white">Premium</span>
                  <br />
                  <span className="text-green-400">Tanzanian</span>
                  <br />
                  <span className="text-white">Agriculture</span>
                </motion.h1>

                <motion.div
                  className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 text-blue-400"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="w-8 md:w-12 h-0.5 bg-blue-400"></div>
                  <span className="text-sm md:text-lg font-medium">For Global Markets</span>
                </motion.div>
              </div>

              {/* Description */}
              <motion.p
                className="text-base md:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Your trusted partner for high-quality agricultural exports from Tanzania. Serving governments and
                enterprises worldwide with premium crops and reliable service.
              </motion.p>

              {/* Stats Row */}
              <motion.div
                className="flex items-center justify-center lg:justify-start gap-4 md:gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-white">25+</div>
                  <div className="text-xs md:text-sm text-gray-400">Countries</div>
                </div>
                <div className="w-px h-8 md:h-12 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-white">100+</div>
                  <div className="text-xs md:text-sm text-gray-400">Partners</div>
                </div>
                <div className="w-px h-8 md:h-12 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-white">15+</div>
                  <div className="text-xs md:text-sm text-gray-400">Crops</div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <a href="#products" className="flex items-center gap-2">
                    Explore Products
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/20 text-white hover:bg-white hover:text-gray-900 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 group"
                >
                  <Play className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:scale-110 transition-transform" />
                  <a href="#about">Watch Story</a>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex items-center justify-center lg:justify-start gap-4 md:gap-6 pt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <div className="flex items-center gap-2 text-gray-400">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                  <span className="text-xs md:text-sm">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                  <span className="text-xs md:text-sm">Export Leader</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Interactive Product Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative mt-8 lg:mt-0"
            >
              {/* Main Product Display */}
              <div className="relative">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  {/* Product Card */}
                  <div className="relative bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-3 md:p-6 border border-white/20 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl md:rounded-3xl"></div>

                    {/* Product Image */}
                    <div className="relative h-40 md:h-60 rounded-lg md:rounded-xl overflow-hidden mb-3 md:mb-4">
                      <video
                        src={heroSlides[currentSlide].videoUrl}
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>

                      {/* Floating Badge */}
                      <div className="absolute top-2 md:top-4 right-2 md:right-4">
                        <div className="px-2 md:px-3 py-1 rounded-full bg-green-600 text-white text-xs md:text-sm font-medium">
                          {heroSlides[currentSlide].achievement}
                        </div>
                      </div>
                    </div>

                    {/* Success Info */}
                    <div className="space-y-3 md:space-y-4">
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">
                          {heroSlides[currentSlide].title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-300">{heroSlides[currentSlide].subtitle}</p>
                      </div>

                      {/* Success Indicator */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-gray-300 text-xs md:text-sm">Success Story</span>
                      </div>

                      {/* Quick Action */}
                      <Button
                        size="sm"
                        className="w-full bg-green-600 hover:bg-green-700 text-white border-0 text-sm md:text-base"
                      >
                        <a href="#contact">Learn More</a>
                      </Button>
                    </div>
                  </div>
                </motion.div>

                {/* Slide Indicators */}
                <div className="flex justify-center gap-2 mt-4 md:mt-6">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? "bg-green-400 scale-125" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>

                {/* Floating Elements - Hidden on mobile for performance */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-green-500/20 rounded-full blur-xl hidden md:block"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-12 h-12 md:w-16 md:h-16 bg-blue-500/20 rounded-full blur-xl hidden md:block"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <motion.div
          className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="flex flex-col items-center gap-1 text-white/60">
            <span className="text-xs">Scroll</span>
            <div className="w-4 h-6 md:w-5 md:h-8 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-1.5 md:h-2 bg-white/60 rounded-full mt-1"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </div>
        </motion.div>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-4 md:mb-6">About EcoFarms</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pioneering agricultural excellence in Tanzania since 2021, connecting local farmers with global markets
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-4 md:mb-6">Our Story</h3>
              <div className="space-y-4 md:space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
                <p>
                  Founded in 2021 in Dar es Salaam, EcoFarms emerged from a vision to bridge Tanzania's rich
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
              className="relative"
            >
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="EcoFarms facility"
                width={600}
                height={500}
                className="rounded-xl md:rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>

          {/* Mission, Vision, Values */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 md:gap-8"
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
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center p-6 md:p-8 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">{item.title}</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-4 md:mb-6">
              Premium Export Crops
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover Tanzania's finest agricultural products, carefully selected and processed to meet international
              quality standards
            </p>
          </motion.div>

          {/* Horizontal Scrolling Container with Navigation Buttons */}
          <div className="relative">
            <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-10 px-2 md:px-4">
              <button
                onClick={scrollLeft}
                className="bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
              </button>
              <button
                onClick={scrollRight}
                className="bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
              </button>
            </div>

            <div
              ref={scrollContainerRef}
              className="flex gap-4 md:gap-6 overflow-x-auto pb-4 md:pb-6 scrollbar-hide px-2 md:px-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {[
                {
                  name: "Premium Arabica Coffee",
                  category: "Beverages",
                  description:
                    "High-altitude grown Arabica beans with exceptional flavor profiles from Mount Kilimanjaro and Meru slopes.",
                  features: ["Single Origin", "High Altitude", "Specialty Grade", "Fair Trade"],
                  image: "/placeholder.svg?height=300&width=400",
                  rating: 5,
                  exportGrade: "AA",
                  color: "#7c2d12", // Brown
                },
                {
                  name: "Grade A Cashew Nuts",
                  category: "Nuts & Seeds",
                  description:
                    "Premium quality cashew nuts processed to international standards with careful selection and packaging.",
                  features: ["Grade A Quality", "Raw/Roasted", "Bulk Packaging", "Export Ready"],
                  image: "/placeholder.svg?height=300&width=400",
                  rating: 5,
                  exportGrade: "Grade A",
                  color: "#b45309", // Amber
                },
                {
                  name: "White Sesame Seeds",
                  category: "Seeds & Grains",
                  description:
                    "High oil content white sesame seeds perfect for oil extraction and food processing applications.",
                  features: ["High Oil Content", "99% Purity", "Natural", "Bulk Available"],
                  image: "/placeholder.svg?height=300&width=400",
                  rating: 5,
                  exportGrade: "Premium",
                  color: "#16a34a", // Green
                },
                {
                  name: "Fresh Avocados",
                  category: "Fresh Fruits",
                  description:
                    "Premium Hass and Fuerte avocados grown in optimal conditions with careful harvesting and packing.",
                  features: ["Hass & Fuerte", "Export Quality", "Cold Chain", "Year Round"],
                  image: "/placeholder.svg?height=300&width=400",
                  rating: 5,
                  exportGrade: "Class I",
                  color: "#15803d", // Dark Green
                },
                {
                  name: "Black CTC Tea",
                  category: "Beverages",
                  description:
                    "High-quality black tea processed using Crush, Tear, Curl method offering strong flavor and excellent color.",
                  features: ["CTC Process", "Strong Flavor", "Export Grade", "Bulk Packaging"],
                  image: "/placeholder.svg?height=300&width=400",
                  rating: 5,
                  exportGrade: "FTGFOP",
                  color: "#b91c1c", // Red
                },
                {
                  name: "Sunflower Seeds",
                  category: "Seeds & Grains",
                  description:
                    "Oil-rich sunflower seeds ideal for oil extraction and snack food production with high oil content.",
                  features: ["High Oil Content", "Uniform Size", "Food Grade", "Industrial Use"],
                  image: "/placeholder.svg?height=300&width=400",
                  rating: 5,
                  exportGrade: "Premium",
                  color: "#eab308", // Yellow
                },
                {
                  name: "Dried Mangoes",
                  category: "Dried Fruits",
                  description:
                    "Naturally dried mango slices with no added preservatives, processed using traditional drying methods.",
                  features: ["No Preservatives", "Natural", "Organic Option", "Ready to Eat"],
                  image: "/placeholder.svg?height=300&width=400",
                  rating: 5,
                  exportGrade: "Premium",
                  color: "#ea580c", // Orange
                },
                {
                  name: "Fresh Pineapples",
                  category: "Fresh Fruits",
                  description:
                    "Sweet, juicy pineapples grown in Tanzania's tropical climate, harvested at optimal ripeness.",
                  features: ["Sweet Variety", "Export Quality", "Fresh Packed", "Seasonal"],
                  image: "/placeholder.svg?height=300&width=400",
                  rating: 5,
                  exportGrade: "Class I",
                  color: "#ca8a04", // Yellow
                },
                {
                  name: "Sisal Fiber",
                  category: "Industrial Crops",
                  description:
                    "High-quality sisal fiber for rope, twine, and textile manufacturing, processed to international standards.",
                  features: ["Industrial Grade", "Various Lengths", "Natural Fiber", "Sustainable"],
                  image: "/placeholder.svg?height=300&width=400",
                  rating: 5,
                  exportGrade: "Grade 1",
                  color: "#166534", // Forest Green
                },
                {
                  name: "Cotton",
                  category: "Industrial Crops",
                  description:
                    "Premium quality cotton fiber with excellent staple length and strength for textile manufacturing.",
                  features: ["Long Staple", "High Strength", "Organic Available", "Export Grade"],
                  image: "/placeholder.svg?height=300&width=400",
                  rating: 5,
                  exportGrade: "Middling",
                  color: "#2563eb", // Blue
                },
                {
                  name: "Vanilla Beans",
                  category: "Spices",
                  description:
                    "Premium vanilla beans with rich aroma and flavor, carefully cured and processed for export markets.",
                  features: ["Grade A", "Rich Aroma", "Hand-picked", "Cured"],
                  image: "/placeholder.svg?height=300&width=400",
                  rating: 5,
                  exportGrade: "Grade A",
                  color: "#9333ea", // Purple
                },
                {
                  name: "Macadamia Nuts",
                  category: "Nuts & Seeds",
                  description:
                    "Premium macadamia nuts with excellent taste and nutritional value, processed to international standards.",
                  features: ["Premium Quality", "High Oil Content", "Nutritious", "Export Ready"],
                  image: "/placeholder.svg?height=300&width=400",
                  rating: 5,
                  exportGrade: "Style 1",
                  color: "#a16207", // Amber
                },
              ].map((product, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-72 md:w-80"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg h-full">
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-3 md:top-4 left-3 md:left-4">
                        <Badge
                          className="text-white border-0 text-xs md:text-sm"
                          style={{ backgroundColor: product.color }}
                        >
                          {product.category}
                        </Badge>
                      </div>
                      <div className="absolute top-3 md:top-4 right-3 md:right-4">
                        <Badge
                          variant="secondary"
                          className="bg-white/90 text-gray-800 font-semibold text-xs md:text-sm"
                        >
                          {product.exportGrade}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4 md:p-6 flex flex-col h-full">
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2 md:mb-3">
                          <h3 className="text-lg md:text-xl font-bold text-gray-800">{product.name}</h3>
                          <div className="flex items-center">
                            {[...Array(product.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-3 md:mb-4 text-sm">{product.description}</p>
                        <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                          {product.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-gray-300">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-auto">
                        <Button
                          className="flex-1 text-white border-0 text-sm md:text-base"
                          style={{ backgroundColor: product.color }}
                        >
                          <a href="#contact">Request Quote</a>
                        </Button>
                        <Button
                          variant="outline"
                          className="border-gray-300 text-gray-700 hover:bg-gray-50 text-sm md:text-base"
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-4 md:mb-6">Our Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive agricultural export services tailored for international partners
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 md:p-8 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6"
                      style={{ backgroundColor: service.color }}
                    >
                      <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">{service.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: service.color }}></div>
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
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-6 md:mb-8">Our Export Process</h3>
              <div className="space-y-4 md:space-y-6">
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
                  <div key={index} className="flex items-start space-x-3 md:space-x-4">
                    <div
                      className="text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-base flex-shrink-0"
                      style={{ backgroundColor: process.color }}
                    >
                      {process.step}
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1 md:mb-2">{process.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{process.description}</p>
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
              className="relative"
            >
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Export process"
                width={500}
                height={600}
                className="rounded-xl md:rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 md:py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8 md:mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-4 md:mb-6">Contact EcoFarms</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to partner with us? Get in touch for quotes, samples, or to discuss your requirements
            </p>
          </motion.div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
            <div>
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-800">Our Location</h3>
              </div>
              <p className="text-lg font-semibold text-gray-800 mb-2">Dar es Salaam, Tanzania</p>
              <p className="text-base text-gray-600">East Africa's commercial hub with excellent port facilities</p>
            </div>

            <div>
              <div className="flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-800">Phone</h3>
              </div>
              <p className="text-lg font-semibold text-gray-800 mb-2">+255 XXX XXX XXX</p>
              <p className="text-base text-gray-600">Available 24/7 for urgent inquiries</p>
            </div>

            <div>
              <div className="flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-purple-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-800">Email</h3>
              </div>
              <p className="text-lg font-semibold text-gray-800 mb-2">info@ecofarms.co.tz</p>
              <p className="text-base text-gray-600">We respond within 24 hours</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-6 md:p-8 bg-white shadow-xl border-0">
                <CardContent className="p-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-4 md:mb-6">Send Us a Message</h3>
                  <form className="space-y-4 md:space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <Input placeholder="Your first name" className="border-gray-300" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <Input placeholder="Your last name" className="border-gray-300" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <Input type="email" placeholder="your.email@company.com" className="border-gray-300" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company/Organization</label>
                      <Input placeholder="Your company name" className="border-gray-300" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                      <Input placeholder="Your country" className="border-gray-300" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type *</label>
                      <Select>
                        <SelectTrigger className="border-gray-300">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="quote">Request Quote</SelectItem>
                          <SelectItem value="samples">Request Samples</SelectItem>
                          <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                          <SelectItem value="bulk">Bulk Order</SelectItem>
                          <SelectItem value="government">Government Contract</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Products of Interest</label>
                      <Select>
                        <SelectTrigger className="border-gray-300">
                          <SelectValue placeholder="Select products" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beverages">Beverages (Coffee, Tea)</SelectItem>
                          <SelectItem value="nuts-seeds">Nuts & Seeds (Cashew, Sesame, Sunflower)</SelectItem>
                          <SelectItem value="fruits">Fresh & Dried Fruits (Avocados, Mangoes, Pineapples)</SelectItem>
                          <SelectItem value="industrial">Industrial Crops (Cotton, Sisal)</SelectItem>
                          <SelectItem value="spices">Spices & Specialty (Vanilla, Macadamia)</SelectItem>
                          <SelectItem value="multiple">Multiple Categories</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                      <Textarea
                        placeholder="Please provide details about your requirements, quantities, delivery timeline, and any specific questions..."
                        rows={6}
                        className="border-gray-300"
                      />
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base md:text-lg font-semibold">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8"
            >
              {/* Business Hours */}
              <Card className="p-4 md:p-6 bg-white shadow-lg border-0">
                <CardContent className="p-0">
                  <div className="flex items-center mb-3 md:mb-4">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-green-600 mr-3" />
                    <h4 className="text-lg md:text-xl font-bold text-gray-800">Business Hours</h4>
                  </div>
                  <div className="space-y-2 text-sm md:text-base text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 6:00 PM EAT</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 2:00 PM EAT</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                    <p className="text-xs md:text-sm text-green-600 mt-3">
                      * Emergency support available 24/7 for existing orders
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="p-4 md:p-6 bg-gray-50 shadow-lg border-0">
                <CardContent className="p-0">
                  <div className="flex items-center mb-3 md:mb-4">
                    <Globe className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mr-3" />
                    <h4 className="text-lg md:text-xl font-bold text-gray-800">Quick Facts</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-sm md:text-base text-gray-600">Response time: Within 24 hours</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-sm md:text-base text-gray-600">Sample delivery: 5-7 business days</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-sm md:text-base text-gray-600">Minimum order quantities available</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-sm md:text-base text-gray-600">Custom packaging solutions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Team Support */}
              <Card className="p-4 md:p-6 bg-white shadow-lg border-0">
                <CardContent className="p-0">
                  <div className="flex items-center mb-3 md:mb-4">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-purple-600 mr-3" />
                    <h4 className="text-lg md:text-xl font-bold text-gray-800">Our Team</h4>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Our experienced export team includes agricultural specialists, quality control experts, and
                    logistics coordinators ready to assist with your requirements.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
