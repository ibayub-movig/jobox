'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { smoothScroll } from '../utils/smoothScroll'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Overview", href: "#overview" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "About", href: "#about" },
    { name: "FAQs", href: "#faqs" },
  ]

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-indigo-800 shadow-md' 
          : 'bg-gradient-to-br from-indigo-600/95 via-indigo-700/95 to-indigo-800/95 backdrop-blur-sm'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white font-heading">Jobox</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                onClick={smoothScroll}
                className="text-sm font-sans font-medium text-white hover:text-white/80 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a href="#join-waitlist" onClick={smoothScroll}>
              <Button 
                variant="secondary" 
                size="sm" 
                className="font-heading font-semibold text-sm text-indigo-700 bg-white hover:bg-indigo-100"
              >
                Join Waitlist
              </Button>
            </a>
          </nav>
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-800/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  smoothScroll(e);
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <a 
                href="#join-waitlist" 
                className="w-full block" 
                onClick={(e) => {
                  smoothScroll(e);
                  setIsMenuOpen(false);
                }}
              >
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="w-full font-heading font-semibold text-sm text-indigo-700 bg-white hover:bg-indigo-100"
                >
                  Join Waitlist
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

