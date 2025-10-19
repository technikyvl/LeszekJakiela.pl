export function LogoStrip() {
  const logos = [
    { name: "Zdjęcia Paszportowe", icon: "📷" },
    { name: "Fotografia Portretowa", icon: "👤" },
    { name: "Sesje Rodzinne", icon: "👨‍👩‍👧‍👦" },
    { name: "Zdjęcia Biznesowe", icon: "💼" },
    { name: "Fotografia Eventowa", icon: "🎉" },
  ]

  return (
    <section className="border-y border-border bg-card py-8">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:justify-between">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-3 opacity-40 transition-opacity hover:opacity-70">
              <span className="text-2xl text-muted-foreground">{logo.icon}</span>
              <span className="text-lg font-medium text-muted-foreground">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
