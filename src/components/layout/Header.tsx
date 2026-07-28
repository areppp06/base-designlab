import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import logoHeader from '@/assets/logo-header.png'

const navLinks = [
  { label: 'Home', type: 'route' as const, to: '/' },
  { label: 'Services', type: 'hash' as const, id: 'services' },
  { label: 'Gallery', type: 'route' as const, to: '/gallery' },
  { label: 'About', type: 'hash' as const, id: 'about' },
  { label: 'Contact', type: 'hash' as const, id: 'contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const goHomeSection = (id: string) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate({ pathname: '/', hash: id })
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleNav = (link: (typeof navLinks)[number]) => {
    setOpen(false)
    if (link.type === 'route') {
      navigate(link.to)
      if (link.to === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    goHomeSection(link.id)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 md:h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          onClick={() => {
            setOpen(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-2"
          aria-label="BASE DESIGN LAB home"
        >
          <img
            src={logoHeader}
            alt="BASE DESIGN LAB"
            className="h-9 md:h-11 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleNav(link)}
              className={cn(
                'text-[11px] font-medium uppercase tracking-[0.2em] transition-colors',
                link.type === 'route' && location.pathname === link.to
                  ? 'text-[var(--color-accent)]'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-foreground)]',
              )}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goHomeSection('contact')}
            className="text-[11px] font-semibold uppercase tracking-[0.2em] border border-[var(--color-foreground)] px-4 py-2 hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors"
          >
            Get in touch
          </button>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-[var(--color-foreground)]"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          'md:hidden border-t border-[var(--color-border)] bg-[var(--color-background)] overflow-hidden transition-all duration-300',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="flex flex-col px-4 py-3 gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleNav(link)}
              className="text-left py-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-foreground)]"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goHomeSection('contact')}
            className="mt-2 mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] border border-[var(--color-foreground)] px-4 py-3"
          >
            Get in touch
          </button>
        </nav>
      </div>
    </header>
  )
}
