import { useState } from 'react'
import Icon from './Icon'

const links = [
  { href: '#about', label: 'Миний тухай' },
  { href: '#certificates', label: 'Батламж' },
  { href: '#skills', label: 'Ур чадвар' },
  { href: '#projects', label: 'Бүтээлүүд' },
  { href: '#contact', label: 'Холбоо барих' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="glass nav__bar">
        <a href="#about" className="nav__logo">
          <img src="/logo.png" alt="" className="nav__logo-img" />
          <span>Хулан</span>
        </a>
        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Цайвар горим' : 'Бараан горим'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <button
            type="button"
            className="icon-btn nav__burger"
            onClick={() => setOpen(!open)}
            aria-label="Цэс"
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  )
}
