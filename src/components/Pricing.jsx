const plans = [
  {
    name: 'Básico',
    price: '29',
    features: [
      'Diagnóstico psicológico completo',
      'PDF premium personalizado',
      'Plan de 30 días',
      'Stack de recursos curados',
      '100+ idiomas',
    ],
    cta: { label: 'Empezar aquí', className: 'btn-card-outline', href: 'https://buy.stripe.com/5kQbIU2RI5QUblTeol8Zq02' },
    featured: false,
    delay: '',
  },
  {
    name: 'Pro',
    price: '59',
    badge: '⚡ Más popular',
    features: [
      'Todo lo del Básico',
      'Plan de 30 / 60 / 90 días',
      'AI Companion personalizado',
      'Notion workspace listo para usar',
      'Sistema anti-abandono',
      'Soporte email 30 días',
    ],
    cta: { label: 'Quiero el diagnóstico Pro →', className: 'btn-gold', href: 'https://buy.stripe.com/4gMfZagIydjm2Pn3JH8Zq01' },
    featured: true,
    delay: 'reveal-delay-1',
  },
  {
    name: 'Elite',
    price: '97',
    features: [
      'Todo lo del Pro',
      'Sesión Zoom 30 min personalizada',
      'Revisión de tu plan al día 15',
      'Acceso a comunidad privada',
      'Soporte prioritario 60 días',
    ],
    cta: { label: 'Quiero el Elite →', className: 'btn-card-outline', href: 'https://buy.stripe.com/bJefZaboe0wA9dL9418Zq00' },
    featured: false,
    delay: 'reveal-delay-2',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" style={{ textAlign: 'center' }}>
      <div className="label reveal" style={{ justifyContent: 'center' }}>Precios</div>
      <h2 className="section-title reveal reveal-delay-1" style={{ margin: '0 auto 20px' }}>
        Sin suscripciones. <em>Sin trampa.</em>
      </h2>
      <p className="section-desc reveal reveal-delay-2" style={{ margin: '0 auto 72px' }}>
        Un pago, un plan, resultados de por vida.
      </p>

      <div className="pricing-cards">
        {plans.map(plan => (
          <div
            key={plan.name}
            className={`price-card reveal ${plan.delay}${plan.featured ? ' featured' : ''}`}
          >
            {plan.badge && <div className="price-badge">{plan.badge}</div>}
            <div className="price-name">{plan.name}</div>
            <div className="price-amount"><sup>$</sup>{plan.price}</div>
            <div className="price-period">pago único</div>
            <ul className="price-features">
              {plan.features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <a href={plan.cta.href} className={plan.cta.className} target="_blank" rel="noreferrer">{plan.cta.label}</a>
          </div>
        ))}
      </div>

      <div className="guarantee">
        <span className="guarantee-icon">🛡️</span>
        <span>Garantía de 7 días. Si no te es útil, te devolvemos el dinero. Sin preguntas.</span>
      </div>
    </section>
  )
}
