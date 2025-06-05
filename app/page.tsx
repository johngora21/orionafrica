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
      {/* Hero Section - Clean Modern Design */}
      <section id="home" className="relative min-h-[90vh] bg-black overflow-hidden">
        {/* Main Content */}
        <div className="relative container mx-auto px-4 py-16 sm:py-20 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8"
              >
                <Sparkles className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-green-400">Trusted Since 2021</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              >
                Premium
                <span className="block text-green-400 mt-2">Tanzanian</span>
                <span className="block text-white mt-2">Agriculture</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Your trusted partner for high-quality agricultural exports from Tanzania. Serving governments and
                enterprises worldwide with premium crops and reliable service.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-3 gap-4 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                {[
                  { value: "25+", label: "Countries" },
                  { value: "100+", label: "Partners" },
                  { value: "15+", label: "Crops" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="#products" className="flex items-center gap-2">
                    Explore Products
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Featured Product */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl"></div>
                
                {/* Product Image */}
                <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={heroSlides[currentSlide].videoUrl}
                    alt={heroSlides[currentSlide].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Achievement Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-full">
                      {heroSlides[currentSlide].achievement}
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{heroSlides[currentSlide].title}</h3>
                    <p className="text-gray-300">{heroSlides[currentSlide].subtitle}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">Success Story</span>
                  </div>

                  {/* Action Button */}
                  <Button
                    size="lg"
                    className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl"
                  >
                    <a href="#contact">Learn More</a>
                  </Button>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-green-400 w-4" : "bg-white/30"
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
                height={400}
                className="rounded-xl md:rounded-2xl shadow-2xl w-full h-auto object-cover"
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
                }
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
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white font-poppins">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Let's Connect</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Ready to explore premium Tanzanian agricultural products? We're here to help.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-green-100 rounded-2xl">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">Send us a Message</h3>
                    <p className="text-sm text-gray-600 font-light">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 tracking-tight">First Name</label>
                      <Input 
                        placeholder="John" 
                        className="h-10 bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-2xl placeholder:text-gray-400 font-light"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 tracking-tight">Last Name</label>
                      <Input 
                        placeholder="Doe" 
                        className="h-10 bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-2xl placeholder:text-gray-400 font-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 tracking-tight">Email Address</label>
                    <Input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="h-10 bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-2xl placeholder:text-gray-400 font-light"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 tracking-tight">Company</label>
                    <Input 
                      placeholder="Your company name" 
                      className="h-10 bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-2xl placeholder:text-gray-400 font-light"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 tracking-tight">Inquiry Type</label>
                    <Select>
                      <SelectTrigger className="h-10 bg-white border-gray-200 rounded-2xl text-gray-400 font-light">
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

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 tracking-tight">Message</label>
                    <Textarea 
                      placeholder="Tell us about your requirements..." 
                      rows={4}
                      className="bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-2xl placeholder:text-gray-400 font-light"
                    />
                  </div>

                  <Button 
                    className="w-full h-11 bg-green-600 hover:bg-green-700 text-white text-base font-medium rounded-2xl transition-all duration-300 tracking-tight"
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
              className="lg:col-span-5 space-y-6"
            >
              {/* Map */}
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-blue-100 rounded-2xl">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">Visit Us</h3>
                    <p className="text-sm text-gray-600 font-light">Dar es Salaam, Tanzania</p>
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
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-purple-100 rounded-2xl">
                    <Phone className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">Contact Details</h3>
                    <p className="text-sm text-gray-600 font-light">Get in touch with our team</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-gray-100 rounded-2xl">
                      <Phone className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-light">Phone</p>
                      <p className="text-base font-medium text-gray-900 tracking-tight">+255 717 801 745</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-gray-100 rounded-2xl">
                      <Mail className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-light">Email</p>
                      <p className="text-base font-medium text-gray-900 tracking-tight">info@ecofarms.co.tz</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-gray-100 rounded-2xl">
                      <Clock className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-light">Business Hours</p>
                      <p className="text-base font-medium text-gray-900 tracking-tight">Mon-Fri: 8AM - 6PM EAT</p>
                      <p className="text-sm text-gray-500 font-light">Sat: 9AM - 2PM EAT</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-green-100 rounded-2xl">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-light">WhatsApp</p>
                      <a 
                        href="https://wa.me/255717801745" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-base font-medium text-gray-900 tracking-tight hover:text-green-600 transition-colors duration-300"
                      >
                        +255 717 801 745
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
