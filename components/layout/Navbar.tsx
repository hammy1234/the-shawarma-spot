"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/shared/Logo";
import { SITE, ORDER_ONLINE_URL } from "@/data/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container as="div">
        <div className="flex h-20 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden md:flex md:items-center md:gap-8" aria-label="Main">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex md:items-center md:gap-3">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors"
            >
              {SITE.phone}
            </a>
            <Button href={ORDER_ONLINE_URL} variant="primary" size="md">
              Order Online
            </Button>
          </div>

          {/* Mobile: hamburger + call */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm shrink-0"
              aria-label="Call now"
            >
              Call
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground hover:bg-muted-bg"
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Menu</span>
              {mobileOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[44px] items-center py-2.5 px-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted-bg rounded-lg"
                >
                  {label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-border">
                <Button
                  href={ORDER_ONLINE_URL}
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Order Online
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
