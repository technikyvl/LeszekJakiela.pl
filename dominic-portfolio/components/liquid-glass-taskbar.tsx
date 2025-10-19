"use client"

import { useState, useEffect } from "react"
import { Home, User, Briefcase, Mail, Phone, Camera, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TaskbarItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  href?: string
  onClick?: () => void
}

const taskbarItems: TaskbarItem[] = [
  {
    id: "home",
    label: "Strona główna",
    icon: Home,
    href: "#home"
  },
  {
    id: "about",
    label: "O mnie",
    icon: User,
    href: "#about"
  },
  {
    id: "portfolio",
    label: "Portfolio",
    icon: Briefcase,
    href: "#portfolio"
  },
  {
    id: "contact",
    label: "Kontakt",
    icon: Mail,
    href: "#contact"
  },
  {
    id: "phone",
    label: "Telefon",
    icon: Phone,
    href: "tel:+48123456789"
  },
  {
    id: "camera",
    label: "Fotografia",
    icon: Camera,
    href: "#photography"
  }
]

export function LiquidGlassTaskbar() {
  const [activeItem, setActiveItem] = useState<string>("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleItemClick = (item: TaskbarItem) => {
    setActiveItem(item.id)
    if (item.href?.startsWith('#')) {
      const element = document.querySelector(item.href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (item.href) {
      window.open(item.href, '_blank')
    }
    if (item.onClick) {
      item.onClick()
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Taskbar */}
      <div className="hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className={cn(
          "relative px-6 py-3 rounded-full transition-all duration-500",
          "bg-white/10 backdrop-blur-xl border border-white/20",
          "shadow-2xl shadow-black/10",
          scrollY > 100 ? "scale-95" : "scale-100"
        )}>
          {/* Animated background blob */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse" />
          
          {/* Taskbar items */}
          <div className="relative flex items-center space-x-1">
            {taskbarItems.map((item) => {
              const Icon = item.icon
              const isActive = activeItem === item.id
              
              return (
                <Button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "relative px-4 py-2 rounded-full transition-all duration-300",
                    "text-white/80 hover:text-white hover:bg-white/10",
                    "group overflow-hidden",
                    isActive && "text-white bg-white/20"
                  )}
                >
                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  
                  <div className="relative flex items-center space-x-2">
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium hidden lg:inline">
                      {item.label}
                    </span>
                  </div>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                  )}
                </Button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <Button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          size="sm"
          className="bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20"
        >
          {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-16 right-4 w-64 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <div className="space-y-2">
              {taskbarItems.map((item) => {
                const Icon = item.icon
                const isActive = activeItem === item.id
                
                return (
                  <Button
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    variant="ghost"
                    className={cn(
                      "w-full justify-start px-4 py-3 rounded-xl transition-all duration-300",
                      "text-white/80 hover:text-white hover:bg-white/10",
                      isActive && "text-white bg-white/20"
                    )}
                  >
                    <Icon className="h-4 w-4 mr-3" />
                    {item.label}
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
