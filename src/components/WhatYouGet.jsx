const features = [
  {
    title: 'Diagnóstico psicológico',
    desc: 'Análisis profundo de tu perfil cognitivo, estilo de aprendizaje y patrones de retención basado en más de 40 variables.',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4l2 2" />
      </svg>
    ),
    delay: '',
  },
  {
    title: 'PDF personalizado',
    desc: 'Reporte visual completo con tus métricas cognitivas, fortalezas identificadas y áreas de desarrollo prioritarias.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    delay: 'reveal-delay-1',
  },
  {
    title: 'Plan de 30 / 60 / 90 días',
    desc: 'Hoja de ruta diaria estructurada por semanas, adaptada a tu nivel, meta y tiempo disponible real. Ordenado por impacto.',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    delay: 'reveal-delay-2',
  },
  {
    title: 'AI Companion',
    desc: 'Asistente inteligente entrenado con tu perfil. Responde dudas, ajusta el plan y te acompaña durante todo tu proceso.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    delay: 'reveal-delay-3',
  },
  {
    title: 'Sistema anti-abandono',
    desc: 'Protocolo de reactivación para los momentos de baja motivación. Basado en principios de psicología conductual.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    delay: 'reveal-delay-4',
  },
  {
    title: 'Notion workspace',
    desc: 'Espacio de trabajo visual listo para usar. Organiza recursos, vocabulario, progreso y notas en un solo lugar.',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    delay: 'reveal-delay-5',
  },
]

export default function WhatYouGet() {
  return (
    <section id="receive">
      <div className="label reveal">Lo que recibes</div>
      <h2 className="section-title reveal reveal-delay-1">
        Un sistema completo,<br />diseñado <em>para ti.</em>
      </h2>
      <p className="section-desc reveal reveal-delay-2">
        No es un test genérico. Es una radiografía de tu aprendizaje — con plan de acción inmediato.
      </p>

      <div className="receive-grid">
        {features.map((f) => (
          <div key={f.title} className={`receive-card reveal ${f.delay}`}>
            <div className="receive-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <span className="receive-tag">Incluido</span>
          </div>
        ))}
      </div>
    </section>
  )
}
