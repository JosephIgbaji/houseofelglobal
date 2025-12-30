import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 font-serif text-xl md:text-2xl font-bold tracking-tight text-primary"
        >
          <Image
            src="/images/logo.jpg"
            alt="HOUSE OF EL Logo"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
          />
          <span className="hidden sm:inline">HOUSE OF EL</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#leadership" className="hover:text-primary transition-colors">
            Leadership
          </Link>
          <Link href="#partnership" className="hover:text-primary transition-colors">
            Partnership
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="#partnership">Give Now</Link>
        </Button>
      </div>
    </header>
  )
}
