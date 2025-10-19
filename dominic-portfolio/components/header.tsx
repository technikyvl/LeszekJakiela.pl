import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
            <div className="h-3 w-3 rounded-full border-2 border-accent-foreground" />
          </div>
          <span className="text-lg font-semibold text-foreground">Leszek Jakieła</span>
        </div>
        <Button variant="ghost" size="icon" className="text-foreground">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </Button>
      </div>
    </header>
  )
}
