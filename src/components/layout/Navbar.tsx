
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center -ml-2">
            <Image 
              src="/images/secondary-logo.png" 
              alt="Gotcha Plumbing & Gas" 
              width={250} 
              height={80} 
              className="h-16 w-auto object-contain" 
              priority 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors ${isActive
                      ? "text-brand-orange"
                      : "text-slate-600 hover:text-brand-blue"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:0428592610"
              className="hidden sm:flex items-center gap-2 bg-brand-orange hover:bg-orange-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-[0_4px_20px_rgba(234,88,12,0.3)]"
            >
              <Phone className="w-4 h-4" />
              <span>0428 592 610</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-brand-blue"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-semibold ${isActive
                      ? "text-brand-orange bg-orange-50"
                      : "text-slate-600 hover:bg-slate-50 hover:text-brand-blue"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <a
              href="tel:0428592610"
              className="mt-4 flex items-center justify-center gap-2 bg-brand-orange text-white px-5 py-3 rounded-lg text-base font-bold"
            >
              <Phone className="w-5 h-5" />
              <span>Call 0428 592 610</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
