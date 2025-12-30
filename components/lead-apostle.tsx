import Image from "next/image"

export function LeadApostle() {
  return (
    <section id="leadership" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/dsc3951.jpeg"
              alt="Lead Apostle Ogbeche Peter Ohobu"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-2">
              Our Leadership
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Ogbeche Peter Ohobu</h2>
            <p className="text-xl text-primary font-medium">Lead Apostle</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Apostle Ogbeche Peter Ohobu is a visionary leader called to steward the House of El International Gospel
                Network. With a deep passion for the prophetic and the apostolic, he has dedicated his life to raising a
                generation that walks in the power and truth of God's Word.
              </p>
              <p>
                His ministry is characterized by a strong emphasis on spiritual transformation, empowerment, and
                reaching the unreached with the message of hope and salvation.
              </p>
            </div>
            <div className="pt-6">
              <div className="flex items-center gap-4 p-4 border rounded-xl bg-background">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xl font-serif">"</span>
                </div>
                <p className="italic text-sm">
                  "Leading souls back to the heart of the Father through the pure gospel of Christ."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
