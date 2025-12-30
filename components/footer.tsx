import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 border-t bg-background">
      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-6 text-sm text-muted-foreground">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/images/logo.jpg"
            alt="HOUSE OF EL Logo"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover mb-2"
          />
          <span className="font-serif text-lg font-bold text-primary tracking-tight">
            HOUSE OF EL INTERNATIONAL GOSPEL NETWORK
          </span>
        </div>
        <p>© {new Date().getFullYear()} HOUSE OF EL INTERNATIONAL GOSPEL NETWORK. All rights reserved.</p>
        <p className="max-w-md">No. 40, Along Kasti-nla Road, Wukari-takum, Taraba State, Nigeria</p>
        <p>Built with grace by <Link href="https://www.rimotehands.com/" target="_blank">rimotehands Global Ltd.</Link></p>
      </div>
    </footer>
  )
}
