import { useState, useEffect, useRef } from 'react'

const faqs = [
  {
    q: '¿Cuánto tiempo tarda en llegar mi diagnóstico?',
    a: 'Generalmente entre 2 y 6 horas. El máximo es 24 horas. Recibirás un correo en cuanto esté listo.',
  },
  {
    q: '¿Para qué idiomas funciona?',
    a: 'Input360 funciona con más de 100 idiomas. La IA se adapta automáticamente a cualquier idioma que quieras aprender — desde los más populares como inglés, mandarín, francés y portugués, hasta idiomas menos comunes. Si existe el idioma, Input360 puede crear tu diagnóstico para él.',
  },
  {
    q: '¿Funciona si soy principiante?',
    a: 'Sí. El diagnóstico se adapta a todos los niveles, desde A1 hasta C1. El plan que recibes es diferente en cada caso.',
  },
  {
    q: '¿Qué pasa si no me sirve?',
    a: 'Tienes 7 días para pedir reembolso completo. Sin formularios complicados, sin excusas. Solo escríbenos.',
  },
  {
    q: '¿Necesito instalar algo?',
    a: 'No. Todo funciona desde el navegador. El diagnóstico se hace en línea y el reporte te llega por correo en PDF.',
  },
]

const delays = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4']

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const [revealed, setRevealed] = useState(() => new Set())
  const itemRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return
          const idx = Number(e.target.dataset.idx)
          setRevealed(prev => {
            if (prev.has(idx)) return prev
            const next = new Set(prev)
            next.add(idx)
            return next
          })
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    itemRefs.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const toggle = i => setOpenIndex(prev => prev === i ? null : i)

  return (
    <section id="faq">
      <div className="label reveal">FAQ</div>
      <h2 className="section-title reveal reveal-delay-1"><em>Preguntas</em> frecuentes</h2>

      <div className="faq-list">
        {faqs.map((item, i) => {
          const isRevealed = revealed.has(i)
          const isOpen = openIndex === i
          const cls = ['faq-item', 'reveal', delays[i], isRevealed && 'visible', isOpen && 'open']
            .filter(Boolean).join(' ')

          return (
            <div
              key={i}
              ref={el => { itemRefs.current[i] = el }}
              data-idx={i}
              className={cls}
              onClick={() => toggle(i)}
            >
              <div className="faq-q">
                {item.q}
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-a">{item.a}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
