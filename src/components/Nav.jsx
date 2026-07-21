import { useEffect, useState } from 'react'
import './Nav.css'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#top" className="nav__mark">
        <span className="nav__mark-bracket">[</span>MAA<span className="nav__mark-bracket">]</span>
      </a>

      <nav className="nav__links">
        {LINKS.map((link, i) => (
          <a key={link.href} href={link.href} className="nav__link">
            <span className="mono nav__idx">0{i + 1}</span>
            {link.label}
          </a>
        ))}
      </nav>

      <a href="mailto:banna00747@gmail.com" className="nav__cta">
        Say hello
      </a>

      <button
        className={`nav__toggle ${open ? 'nav__toggle--open' : ''}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
      </button>

      {open && (
        <div className="nav__sheet">
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="nav__sheet-link"
              onClick={() => setOpen(false)}
            >
              <span className="mono nav__idx">0{i + 1}</span>
              {link.label}
            </a>
          ))}
          <a
            href="mailto:banna00747@gmail.com"
            className="nav__sheet-link nav__sheet-link--cta"
            onClick={() => setOpen(false)}
          >
            Say hello
          </a>
        </div>
      )}
    </header>
  )
}
