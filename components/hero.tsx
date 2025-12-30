import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-pretty">
          Transforming Lives Through the <span className="text-primary italic">Eternal Word</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
          Welcome to HOUSE OF EL INTERNATIONAL GOSPEL NETWORK. We are a community dedicated to spiritual growth,
          authentic worship, and the global spread of the Gospel.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="h-14 px-8 text-lg rounded-full">
            Join Our Community
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 text-lg rounded-full border-primary text-primary hover:bg-primary/10 bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[128px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-foreground rounded-full blur-[128px]" />
      </div>
    </section>
  )
}
