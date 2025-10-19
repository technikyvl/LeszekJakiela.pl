import { Header } from "@/components/header"
import { VideoContainer } from "@/components/video-container"
import { LiquidGlassTaskbar } from "@/components/liquid-glass-taskbar"
import { HeroSection } from "@/components/hero-section"
import { LogoStrip } from "@/components/logo-strip"
import { AboutSection } from "@/components/about-section"
import { PortfolioGrid } from "@/components/portfolio-grid"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <LiquidGlassTaskbar />
      <Header />
      
      {/* Video Container Section */}
      <section id="home" className="relative">
        <VideoContainer 
          videoSrc="/placeholder-video.mp4" // Replace with actual video path
          poster="/placeholder.jpg"
          className="w-full"
        />
      </section>
      
      <HeroSection />
      <LogoStrip />
      <AboutSection />
      <PortfolioGrid />
    </main>
  )
}
