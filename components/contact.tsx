import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-bold">Visit Us</h3>
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-primary shrink-0" />
              <div>
                <p className="font-medium text-lg">Headquarters</p>
                <address className="not-italic text-muted-foreground mt-2 leading-relaxed opacity-80">
                  No. 40, Along Kasti-nla Road,
                  <br />
                  Wukari-takum, Taraba State,
                  <br />
                  Nigeria
                </address>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-bold">Contact</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-muted-foreground opacity-80 mt-1">09160308688 / 09028670529</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-muted-foreground opacity-80 mt-1">houseofelgospel@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-bold">Stay Connected</h3>
            <p className="text-muted-foreground opacity-80 leading-relaxed">
              Join us for our weekly services and experience the power of the Gospel in a vibrant community of
              believers.
            </p>
            <div className="flex gap-4 pt-2">
              <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer">
                F
              </div>
              <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer">
                X
              </div>
              <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer">
                I
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
