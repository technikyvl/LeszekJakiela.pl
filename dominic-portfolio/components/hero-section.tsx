import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background to-secondary/30 px-6 pb-24 pt-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600 w-fit">
              <div className="h-2 w-2 rounded-full bg-orange-500" />
              Dostępny do pracy
            </div>

            <div className="space-y-4">
              <h1 className="text-balance font-sans text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Fotograf & Designer UI/UX z Raciborza
              </h1>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-end justify-center space-y-6">
            <p className="text-pretty text-right text-base leading-relaxed text-muted-foreground md:text-lg">
              Cześć, jestem Leszek Jakieła – fotograf i designer UI/UX z pasją do tworzenia płynnych doświadczeń
              cyfrowych, które łączą i konwertują.
            </p>
            <Button className="group bg-orange-500 px-6 py-6 text-base font-medium text-white hover:bg-orange-600">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <ArrowRight className="h-4 w-4" />
                </div>
                Zobacz moje prace
              </div>
            </Button>
          </div>
        </div>

        {/* Large Name Typography with Video */}
        <div className="relative mt-16">
          <div className="relative">
            <video className="h-auto w-full rounded-3xl object-cover shadow-2xl" autoPlay loop muted playsInline>
              <source src="/placeholder.mp4" type="video/mp4" />
              Twoja przeglądarka nie obsługuje odtwarzania wideo.
            </video>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h2 className="font-sans text-6xl font-bold leading-none tracking-tighter text-white md:text-8xl lg:text-9xl">
                Leszek
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
