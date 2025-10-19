import { ArrowRight, MapPin, Phone, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="bg-background px-6 py-24 md:px-12 md:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-balance text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
          Profesjonalna fotografia w sercu Raciborza
        </h2>

        <p className="mb-10 text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
          Jestem Leszek Jakieła, profesjonalnym fotografem z wieloletnim doświadczeniem. Moje studio "Fotograf na
          Długiej" znajduje się w centrum Raciborza przy ulicy Długiej 6. Specjalizuję się w wykonywaniu zdjęć
          paszportowych oraz fotografii portretowej. Z dumą mogę powiedzieć, że moi klienci oceniają moje usługi na 5,0
          gwiazdek na podstawie 227 opinii.
        </p>

        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
            <MapPin className="h-5 w-5 text-accent" />
            <div>
              <p className="text-sm font-medium text-foreground">Adres</p>
              <p className="text-sm text-muted-foreground">Długa 6, Racibórz</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
            <Phone className="h-5 w-5 text-accent" />
            <div>
              <p className="text-sm font-medium text-foreground">Telefon</p>
              <p className="text-sm text-muted-foreground">+48 606 139 096</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
            <Star className="h-5 w-5 text-accent" />
            <div>
              <p className="text-sm font-medium text-foreground">Ocena</p>
              <p className="text-sm text-muted-foreground">5,0 (227 opinii)</p>
            </div>
          </div>
        </div>

        <Button
          size="lg"
          className="group gap-2 rounded-full bg-accent px-6 py-6 text-accent-foreground hover:bg-accent/90"
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-foreground/20">
            <ArrowRight className="h-4 w-4" />
          </div>
          zobacz moje prace
        </Button>
      </div>
    </section>
  )
}
