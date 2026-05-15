import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const canvas = document.getElementById('particles')
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H
    const particles = []
    let animId

    function resize() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() { this.reset(true) }
      reset(initial) {
        this.x = Math.random() * W
        this.y = initial ? Math.random() * H : H + 10
        this.size = Math.random() * 1.5 + 0.3
        this.speedY = -(Math.random() * 0.4 + 0.1)
        this.speedX = (Math.random() - 0.5) * 0.15
        this.opacity = Math.random() * 0.55 + 0.1
        this.life = 0
        this.maxLife = Math.random() * 300 + 200
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.life++
        if (this.life > this.maxLife || this.y < -10) this.reset(false)
      }
      draw() {
        const progress = this.life / this.maxLife
        const alpha = this.opacity * (1 - Math.abs(progress * 2 - 1))
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232, 185, 56, ${alpha})`
        ctx.fill()
      }
    }

    for (let i = 0; i < 90; i++) particles.push(new Particle())

    function animate() {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => { p.update(); p.draw() })
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div id="hero">
        <canvas id="particles"></canvas>
        <div className="hero-glow"></div>

        <div className="hero-tag">
          <div className="hero-tag-dot"></div>
          Sistema de diagnóstico cognitivo
        </div>

        <h1 className="hero-title">
          Tu problema no es disciplina.<br />
          Es que nunca te enseñaron<br />cómo aprende <em>tu cerebro.</em>
        </h1>

        <p className="hero-sub">
          INPUT360 crea un diagnóstico personalizado que identifica exactamente qué te bloquea — y te da el sistema preciso para aprender idiomas más rápido, con menos frustración.
        </p>

        <a href="#cta-final" className="btn-primary">
          <span>Obtener mi diagnóstico</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <div className="hero-scroll">
          <div className="hero-scroll-line"></div>
          <span>Scroll</span>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat">
          <div className="stat-n">2,400+</div>
          <div className="stat-label">diagnósticos entregados</div>
        </div>
        <div className="stat">
          <div className="stat-n">94%</div>
          <div className="stat-label">reportan progreso en 30 días</div>
        </div>
        <div className="stat">
          <div className="stat-n">100+</div>
          <div className="stat-label">idiomas disponibles</div>
        </div>
        <div className="stat">
          <div className="stat-n">4.9★</div>
          <div className="stat-label">calificación promedio</div>
        </div>
      </div>
    </>
  )
}
