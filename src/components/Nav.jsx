import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo">INPUT<span>360</span></a>
        <div className="nav-links">
          <a href="#why">Por qué fallamos</a>
          <a href="#receive">Qué recibes</a>
          <a href="#process">Proceso</a>
          <a href="#pricing">Precios</a>
          <a href="#cta-final" className="nav-cta">Diagnóstico</a>
        </div>
        <div
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          id="hamburger"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
        <a href="#why" onClick={closeMenu}>Por qué fallamos</a>
        <a href="#receive" onClick={closeMenu}>Qué recibes</a>
        <a href="#process" onClick={closeMenu}>Proceso</a>
        <a href="#pricing" onClick={closeMenu}>Precios</a>
        <a href="#cta-final" className="nav-mobile-cta" onClick={closeMenu}>
          Comenzar diagnóstico
        </a>
      </div>
    </>
  )
}
