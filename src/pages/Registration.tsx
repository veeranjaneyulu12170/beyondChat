import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, ArrowRight, Twitter, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LandingBackground from '../components/LandingBackground';
import HeroModel from '../components/HeroModel';
import AnimatedLetter from '../components/AnimatedLetter';

const Registration = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/setup');
  };

  const handleGoogleSignIn = () => {
    navigate('/setup');
  };

  const text = "Train Your AI Assistant in Minutes";

  return (
    <>
      <LandingBackground />
      
      {/* Hero Section */}
      <div id="home" className="relative min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16 relative z-10">
            <motion.h1 
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              {text.split('').map((letter, index) => (
                <AnimatedLetter letter={letter} index={index} key={index} />
              ))}
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Transform your website into an interactive experience with our AI-powered chatbot. 
              No coding required.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto glass rounded-2xl p-8 relative z-10"
            >
              <div className="text-center mb-8">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-24 h-24 mx-auto mb-4"
                >
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400"
                    alt="Avatar"
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>
                <h1 className="text-2xl font-bold mb-2">Join BeyondChats</h1>
                <p className="text-gray-400">Create your account in minutes</p>
              </div>

              <form onSubmit={handleContinue} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full glass rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full glass rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none"
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full glass rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white rounded-lg py-3 flex items-center justify-center space-x-2"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-[#1a1a1a] text-gray-400">Or continue with</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="w-full glass rounded-lg py-3 flex items-center justify-center space-x-2 hover:bg-white/10 transition-colors"
                >
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                  <span>Google</span>
                </button>
              </form>
            </motion.div>

            <div className="h-[600px] relative">
              <HeroModel />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose BeyondChats?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quick Setup",
                description: "Get your chatbot up and running in minutes with our intuitive setup process",
                icon: "⚡"
              },
              {
                title: "Smart Learning",
                description: "Our AI automatically learns from your website content to provide accurate responses",
                icon: "🧠"
              },
              {
                title: "Easy Integration",
                description: "Simple copy-paste integration or developer-friendly implementation options",
                icon: "🔌"
              },
              {
                title: "24/7 Availability",
                description: "Your AI assistant never sleeps, providing round-the-clock customer support",
                icon: "🌍"
              },
              {
                title: "Multi-Language Support",
                description: "Break language barriers with automatic translation in over 50 languages",
                icon: "🌐"
              },
              {
                title: "Analytics Dashboard",
                description: "Track conversations, user satisfaction, and chatbot performance in real-time",
                icon: "📊"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass p-6 rounded-xl hover:bg-primary/10 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 10px 30px -10px rgba(67, 24, 255, 0.3)"
                }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Trusted by Industry Leaders</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-100">
            {[
              { src: "./icons/reshot-icon-android-PRH35EK6VU.svg", alt: "Android" },
              { src: "./icons/reshot-icon-code-CZ2NMXUGQ8.svg", alt: "Code" },
              { src: "./icons/reshot-icon-github-NY46M9DGFU.svg", alt: "Github" },
            
            ].map((logo, index) => (
              <motion.img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-12 bg-white/90 rounded-full hover:bg-white transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Revolutionizing Customer Service with AI</h2>
              <p className="text-gray-400 mb-8">
                At BeyondChats, we're passionate about helping businesses provide exceptional customer service through AI-powered solutions. Our platform combines cutting-edge technology with intuitive design to create chatbots that truly understand your business.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2 text-white">500+</h3>
                  <p className="text-gray-400">Active Chatbots</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2 text-white">98%</h3>
                  <p className="text-gray-400">Customer Satisfaction</p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 2
              }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(67,24,255,0.2)] transform-gpu hover:scale-105 transition-transform duration-500">
                <motion.video
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source 
                    src="./videos/7048643_Animation_Motion Graphic_3840x2160.mp4" 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </motion.video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO at TechStart",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
                quote: "BeyondChats transformed our customer service. The AI chatbot handles 80% of inquiries automatically!"
              },
              {
                name: "Michael Chen",
                role: "Marketing Director",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
                quote: "Setup was incredibly easy, and the AI learns continuously. It's like having a 24/7 support team."
              },
              {
                name: "Emma Williams",
                role: "E-commerce Owner",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
                quote: "The automatic website scanning feature saved us weeks of training time. Highly recommended!"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass rounded-2xl p-8">
            <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4 text-gray-400">
                  <p>Email: contact@beyondchats.ai</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 AI Street, Tech Valley, CA 94025</p>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: Twitter, href: 'https://twitter.com/beyondchats' },
                      { icon: Linkedin, href: 'https://linkedin.com/company/beyondchats' },
                      { icon: Facebook, href: 'https://facebook.com/beyondchats' },
                      { icon: Instagram, href: 'https://instagram.com/beyondchats' },
                      { icon: Youtube, href: 'https://youtube.com/beyondchats' }
                    ].map(({ icon: Icon, href }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full glass rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full glass rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full glass rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white rounded-lg py-3"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-16 py-4">
        {[
          {
            icon: "🤖",
            title: "AI-Powered Responses",
            description: "Smart responses that learn from your website content"
          },
          {
            icon: "⚡",
            title: "Instant Setup",
            description: "Get your chatbot running in minutes, not hours"
          },
          {
            icon: "🔄",
            title: "Auto-Training",
            description: "Automatically learns from website updates"
          },
          {
            icon: "📊",
            title: "Analytics Dashboard",
            description: "Track performance and user interactions"
          },
          {
            icon: "🔒",
            title: "Secure & Private",
            description: "Enterprise-grade security for your data"
          },
          {
            icon: "🌐",
            title: "Multi-language Support",
            description: "Communicate in multiple languages"
          }
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            className="glass p-6 rounded-xl hover:bg-primary/10 transition-colors"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Registration;