"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#contexto", label: "Contexto" },
  { href: "#resolucion", label: "Resolución 40595" },
  { href: "#evaluacion", label: "Evaluación" },
  { href: "#solucion", label: "Solución digital" },
  { href: "#quiz", label: "Evaluar conductores" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    element?.scrollIntoView({ behavior: "smooth", block: "start" })
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0066cc] to-[#004a99] text-white shadow-lg shadow-[#0066cc]/30">
            <span className="text-lg font-bold">P</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground">BOSHMANY</span>
            <span className="text-xs text-muted-foreground">PESV Digital</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => scrollToSection("#solucion")}
            className="hidden rounded-full bg-gradient-to-r from-[#0066cc] to-[#004a99] px-6 shadow-lg shadow-[#0066cc]/30 transition-all hover:shadow-xl hover:shadow-[#0066cc]/40 md:inline-flex"
          >
            Propuesta profesional
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-foreground md:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="rounded-lg px-4 py-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#solucion")}
              className="mt-2 rounded-full bg-gradient-to-r from-[#0066cc] to-[#004a99]"
            >
              Propuesta profesional
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
