import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LogoStrip } from "@/components/logo-strip"
import { AboutSection } from "@/components/about-section"
import { PortfolioGrid } from "@/components/portfolio-grid"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LogoStrip />
      <AboutSection />
      <PortfolioGrid />
    </main>
  )
}
