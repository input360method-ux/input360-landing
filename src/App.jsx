import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import WhyFail from './components/WhyFail'
import WhatYouGet from './components/WhatYouGet'
import Dashboard from './components/Dashboard'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    reveals.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    if (!cursor || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0, rafId

    const onMove = e => {
      mx = e.clientX; my = e.clientY
      cursor.style.left = mx - 4 + 'px'
      cursor.style.top  = my - 4 + 'px'
    }

    const animRing = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx - 16 + 'px'
      ring.style.top  = ry - 16 + 'px'
      rafId = requestAnimationFrame(animRing)
    }

    document.addEventListener('mousemove', onMove)
    animRing()

    const hoverEls = document.querySelectorAll('a, button, .fail-card, .receive-card, .testi, .faq-item, .stat')
    const onEnter = () => {
      ring.style.width = '56px'; ring.style.height = '56px'
      ring.style.marginLeft = '-8px'; ring.style.marginTop = '-8px'
      ring.style.opacity = '0.5'
      cursor.style.transform = 'scale(0.5)'
    }
    const onLeave = () => {
      ring.style.width = '32px'; ring.style.height = '32px'
      ring.style.marginLeft = '0'; ring.style.marginTop = '0'
      ring.style.opacity = '1'
      cursor.style.transform = 'scale(1)'
    }
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-ring"></div>
      <Nav />
      <Hero />
      <hr className="divider" />
      <WhyFail />
      <hr className="divider" />
      <WhatYouGet />
      <hr className="divider" />
      <Dashboard />
      <hr className="divider" />
      <Process />
      <hr className="divider" />
      <Testimonials />
      <hr className="divider" />
      <Pricing />
      <hr className="divider" />
      <FAQ />
      <CTAFinal />
      <Footer />
    </>
  )
}
