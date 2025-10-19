import Image from "next/image"

export function PortfolioGrid() {
  const projects = [
    {
      id: 1,
      image: "/abstract-geometric-design-with-red-and-black.jpg",
      alt: "Abstract geometric design project",
    },
    {
      id: 2,
      image: "/minimalist-product-photography-with-orange-backgro.jpg",
      alt: "Product photography project",
    },
    {
      id: 3,
      image: "/modern-tech-product-on-white-surface.jpg",
      alt: "Tech product design project",
    },
  ]

  return (
    <section className="bg-secondary/30 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-card shadow-lg transition-transform hover:scale-[1.02]"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
