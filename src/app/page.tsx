'use client'
import {
  ArrowRight,
  CheckCircle,
  Star,
  Building2,
  Shield,
  TrendingUp,
  Globe,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  BarChart3,
  Target,
  Car,
} from "lucide-react"
import { imageConfigDefault } from "next/dist/shared/lib/image-config"
import Image from "next/image"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots
} from "@/components/ui/carousel"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import { useState } from "react"
import { Menu,X } from "lucide-react"
import ContactForm from "@/app/ContactForm"
import { Toaster } from 'react-hot-toast';


export default function LandingPage() {
  const [isOpen, setisOpen] = useState(false)
  const toggleMenu = ()=> setisOpen(!isOpen)
  return (
    
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Link href="#home">
                <img src="/img/logo.png" alt="Logo" width="140" height="140" />
              </Link>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#home" className=" text-gray-800 hover:text-gray-900 transition-colors font-medium">Home</Link>
              <Link href="#services" className="text-gray-800 hover:text-gray-900 transition-colors font-medium">ContactIQ</Link>
              <Link href="#market-data" className="text-gray-800 hover:text-gray-900 transition-colors font-medium">Market Data</Link>
              <Link href="#contact" className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium">Contact Now</Link>
            </nav>

            {/* Hamburger (mobile only) */}
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {isOpen ? <X className="text-blue-700" size={28} /> : <Menu className="text-blue-700" size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-2 space-y-2 pb-4 rounded-xl  items-center justify-evenly">
              <Link href="#home" onClick={() => setisOpen(false)} className="block py-2 p-10 px-2 text-sm  text-gray-900 hover:bg-gray-100 rounded-lg">Home</Link>
              <Link href="#services" onClick={() => setisOpen(false)} className="block py-2 px-2  text-sm   text-gray-900 hover:bg-gray-100 rounded-lg">ContactIQ</Link>
              <Link href="#market-data" onClick={() => setisOpen(false)} className="block py-2 px-2  text-sm   text-gray-900 hover:bg-gray-100 rounded-lg">Market Data</Link>
              <Link href="#contact" onClick={() => setisOpen(false)} className="block py-2 px-2 text-sm   text-gray-900 rounded-lg">Contact Now</Link>
            </div> 
          )}
        </div>
      </header>

      {/* Hero Section */}

      <section id="home" className="pt-30 pb-12 md:pt md:pb-25 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
                <span className="text-blue-600 ">Powerful Solutions</span> for{" "}
                <div className="text-coral-500">Your Business</div>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-slide-up-delay">
                Streamline communications and enhance trading performance with our cloud-first products built for scale,
                compliance, and efficiency.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up-delay-2">
                <Link
                  href="#contact"
                  className="group bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="flex items-center space-x-8 gap-4 text-sm text-gray-600 animate-fade-in-delay">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Cloud-First Solutions
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Enterprise Grade
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  24/7 Support
                </div>
              </div>
            </div>
              <div className=" ">
               <Carousel className="w-full bg-blue-50" plugins={[Autoplay({delay:3000})]}>
                  <Card>
                    <CarouselContent>
                          <CarouselItem>
                            <div className="overflow-hidden">
                              <img src="/5124556.png" alt="ContactIQ" width="500px" height="500px"/>
                              <p className="flex justify-center items-center space-y-3 font-bold text-4xl text-blue-700">ContactIQ</p>
                            </div>
                            
                          </CarouselItem>
                          <CarouselItem>
                            <div className=" flex justify-center items-center w-full ">
                              <img src="/marketdata5.png" alt="Marketdata"  width="500px" height="350px"/>
                            </div>
                              <p className="pb-10 flex justify-center items-center font-bold text-4xl text-blue-700">Market Data</p>
                            
                          </CarouselItem>
                    </CarouselContent>
                  </Card>
                  <CarouselDots />
                </Carousel>
              </div>
          </div>
        </div>
        <div id="services" className=""></div>
      </section>

      {/* Services Section */}
      
      <section  className="py-15 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              <p className="text-blue-600">ContactIQ</p> Smart cloud voice recording
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for broking & finance sectors with SEBI & TRAI compliance. Record, audit, and monitor conversations across sites securely.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon:(<img src="/img/centralized.png" alt="Centralized Control" width="40"></img>),
                title: "Centralized Control",
                description:
                  "Centralized call recording management with branch-level controls."
              },
              {
                icon:(<img src="/img/smart2.png" alt="Smart call Routing" width="40"></img>),
                title: "Smart Call Routing",
                description:
                  "Order-to-call matching, voicemail support, and template-based call routing.",
              },
              {
                icon:(<img src="/img/secure2.png" alt="Secure & Trusted" width="40"></img>),
                title: "Secure & Trusted",
                description:
                  "Meets SEBI & TRAI regulations for voice logging and audit-ready reporting.",
              },
              {
                icon:(<img src="/img/personal.png" alt="Professional Presence" width="40"></img>),
                title: "Professional Presence",
                description:
                  "Establish brand credibility with consistent, easy-to-remember contact number.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2 border border-b-3 border-b-blue-600 border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Benefits Section */}
      <section className="py-15 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-coral-500/10 rounded-3xl blur-3xl"></div>
              <Image
                src="/recording-1.png"
                alt="Business Analytics Dashboard"
                width={500}
                height={200}
                className="relative rounded-xl "
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-blue-600">ContactIQ</span>?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Transform your business operations with our proven solutions trusted by leading financial institutions
                worldwide.
              </p>

             
                <div className="flex items-center font-bold text-xl text-blue-800"><img src="/img/image.png" alt="Click To Call" width={25} height={25} className="m-3"/><span>Click To Call</span></div>
                <div className="flex items-center font-bold text-xl text-blue-800"><img src="/img/image2.png" alt="Interactive Voice Response" width={25} height={25} className="m-3"/><span>Interactive Voice Response</span></div>
                <div className="flex items-center font-bold text-xl text-blue-800"><img src="/img/imagecopy2.png" alt="Outbound Dialer" width={25} height={25}  className="m-3"/><span>Outbound Dialer</span></div>
                <div className="flex items-center font-bold text-xl text-blue-800"><img src="/img/image3.png" alt="Mobile and Landline CLI" width={25} height={25} className="m-3"/><span>Mobile and Landline CLI</span></div>
                <div className="flex items-center font-bold text-xl text-blue-800"><img src="/img/image4.png" alt="Toll-Free" width={25} height={25} className="m-3"/><span>Toll-Free</span></div>
                <div className="flex items-center font-bold text-xl text-blue-800"><img src="/img/image5.png" alt="Number Masking" width={25} height={25} className="m-3"/><span>Number Masking</span></div>
            </div>
          </div>
        </div>
        <div id="market-data" className=""></div>
      </section>


       {/* Services Section */}
        
      <section  className="py-15 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              <p className="text-blue-600">Market Data</p> Real-Time Trading Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed for analysts and active traders. Make better decisions with granular visibility of every price move, trade, and signal across the exchange feed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon:(<img src="/img/priceupdates.png" alt="live price upates" width="40"></img>),
                title: "Live Price Updates",
                description:
                  "Instant visibility into every executed trade with price, volume, and timestamp.",
              },
              {
                icon:(<img src="/img/order.png" alt="Full Order Book Depth" width="40"></img>),
                title: "Full Order Book Depth",
                description: "Full market depth with all order additions, updates, and cancellations.",
              },
              {
                icon:(<img src="/img/replay.png" alt="Replay for Audit & Insight" width="40"></img>),
                title: "Replay for Audit & Insight",
                description:
                  "Replay market ticks for audit, training, or trade pattern validation.",
              },
              {
                icon:(<img src="/img/secure.png" alt="Seemless Integration" width="40"></img>),
                title: "Seemless Integration",
                description: "Integrate ultra fast market data with your existing applications without any changes.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group border-b-3 border-b-blue-600 bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br rounded-xl bg-blue-50 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div id="contact" className=""></div>
      </section>


      {/* Testimonials Section */}
      {/* <section className="py-25">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by <span className="text-blue-600">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-600">See what our clients say about their transformation journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Rodriguez",
                role: "Chief Trading Officer, FinanceCorpMX",
                content:
                  "Mercado Insights transformed our trading operations. We've seen a 25% improvement in efficiency and compliance.",
                rating: 5,
              },
              {
                name: "Carlos Mendoza",
                role: "CEO, InvestmentGroup",
                content:
                  "The market analytics platform provides insights we never had before. Game-changing for our investment strategy.",
                rating: 5,
              },
              {
                name: "Ana Gutierrez",
                role: "Operations Director, TradingFirm",
                content: "Outstanding support and cloud infrastructure. Our operations run smoother than ever before.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-200 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Form Section */} 
      
      <section  className="py-15 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Ready to <span className="text-blue-600">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-600">
                Get in touch with our experts to discuss your specific needs and discover how we can help you succeed.
              </p>
            </div>

            <div className="">
               <div className="p-8 bg-white rounded-xl shadow-md max-w-3xl m mx-auto">
                <Toaster position="top-center" reverseOrder={false} />
             <ContactForm />

              </div>

              {/* Contact Information */}
              {/* <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                  <p className="text-gray-600 mb-8">
                    Ready to take your business to the next level? Our team of experts is here to help you succeed.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email Us</h4>
                      <p className="text-gray-600">contact@mercadoinsights.com</p>
                      <p className="text-gray-600">support@mercadoinsights.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Call Us</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">+52 (55) 1234-5678</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Visit Us</h4>
                      <p className="text-gray-600">Mexico City, Mexico</p>
                      <p className="text-gray-600">New York, NY, USA</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-4">Business Hours</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </section> 

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-6">
        {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8"> */}
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">MERCADO INSIGHT</span>
                  <div className="text-xs text-blue-200 font-medium">SOLUTIONS</div>
                </div>
              </div>
              <p className="text-gray-200 mb-6">
                Empowering businesses with cutting-edge market insights and cloud-first solutions for sustainable
                growth.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-200">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Market Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Communication Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Trading Performance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cloud Infrastructure
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3 text-gray-200">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Market Data
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    News
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <div className="space-y-3 text-gray-200">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  contact@mercadoinsights.com
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  Mexico City, Mexico
                </div>
              </div>
            </div>
          </div> */}

          <div className="border-gray-200 text-center text-white">
            <p>&copy; 2025 Mercado Insight Solutions. All rights reserved.</p>
          {/* </div> */}
        </div>
      </footer>
    </div>
  )
}
