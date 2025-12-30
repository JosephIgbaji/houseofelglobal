import { Card, CardTitle } from "@/components/ui/card"
import { Wallet, Landmark, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Partnership() {
  const accountInfo = "13111427171"

  return (
    <section id="partnership" className="py-24">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Partnership & Giving</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Your support enables us to continue our mission of spreading the Gospel and impacting lives globally. Thank
          you for partnering with us in this divine assignment.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="border-2 border-primary/20 overflow-hidden bg-card">
          <div className="grid md:grid-cols-5 h-full">
            <div className="md:col-span-2 bg-primary p-8 md:p-12 text-primary-foreground flex flex-col justify-center">
              <Wallet className="w-12 h-12 mb-6 opacity-80" />
              <h3 className="text-2xl font-serif font-bold mb-4">Make a Difference</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for
                God loveth a cheerful giver." — 2 Corinthians 9:7
              </p>
            </div>
            <div className="md:col-span-3 p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                    <Landmark className="w-5 h-5" />
                    <span>Zenith Bank</span>
                  </div>
                  <CardTitle className="text-3xl font-mono mb-1">{accountInfo}</CardTitle>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Account Number</p>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-1">Account Name</p>
                  <p className="font-semibold text-lg">House of El International Network</p>
                </div>

                <Button variant="outline" className="w-full mt-4 flex items-center gap-2 group bg-transparent">
                  <Copy className="w-4 h-4 group-hover:text-primary transition-colors" />
                  Copy Account Number
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
