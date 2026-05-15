export default function CTAFinal() {
  return (
    <section id="cta-final" className="full-width">
      <div className="cta-eyebrow">El siguiente paso</div>
      <h2 className="reveal">
        No necesitas más motivación.<br />
        Necesitas un <em>sistema diseñado para ti.</em>
      </h2>
      <p className="reveal reveal-delay-1">
        Tu cerebro ya tiene todo lo que necesita para aprender cualquier idioma. Solo falta el mapa correcto.
      </p>
      <a href="#pricing" className="btn-primary reveal reveal-delay-2" style={{ display: 'inline-flex' }}>
        <span>Comenzar mi diagnóstico ahora</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ position: 'relative', zIndex: 1 }}>
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
      <div className="cta-guarantee reveal reveal-delay-3">
        <span>Garantía de 7 días</span> · Pago único · Sin suscripciones · Resultados en 24h
      </div>
    </section>
  )
}
