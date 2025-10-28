'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
]

const serviceItems = [
  { name: '広報デザイン制作', href: '/services/design' },
  { name: 'AI活用術レッスン', href: '/services/teaching' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--line)]">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 text-xl font-bold text-[var(--text)] hover:text-[var(--brand)] transition-colors">
            <div className="relative w-8 h-8">
              <Image
                src="/images/ちゃーさん AI アイコン（透過）.png"
                alt="ちゃーさんのアイコン"
                fill
                className="object-contain"
              />
            </div>
            <span>ちゃーさん</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Service Dropdown */}
            <div 
              className="relative z-50"
              onMouseEnter={() => setServiceMenuOpen(true)}
              onMouseLeave={() => setServiceMenuOpen(false)}
            >
              <button className="text-[var(--text)] hover:text-[var(--brand)] transition-colors font-medium flex items-center gap-1 py-2">
                Service
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {serviceMenuOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-white rounded-lg shadow-lg border border-[var(--line)] py-2">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-[var(--text)] hover:bg-[var(--section)] hover:text-[var(--brand)] transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--text)] hover:text-[var(--brand)] transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-[var(--text)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">メニューを開く</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--line)]">
            <nav className="flex flex-col space-y-4">
              {/* Service Section */}
              <div>
                <div className="text-[var(--text)] font-medium mb-2">Service</div>
                <div className="pl-4 space-y-2">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-[var(--muted)] hover:text-[var(--brand)] transition-colors text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[var(--text)] hover:text-[var(--brand)] transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}
