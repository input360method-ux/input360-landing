const testimonials = [
  {
    initials: 'MR',
    name: 'Mariana Reyes',
    role: 'Diseñadora · Guadalajara',
    text: '"Llevaba 3 años con el inglés estancado en B1. En 6 semanas con el plan de Input360 llegué a B2. El diagnóstico encontró exactamente lo que me bloqueaba."',
    delay: '',
  },
  {
    initials: 'CA',
    name: 'Carlos Arteaga',
    role: 'Dev · Ciudad de México',
    text: '"Pensé que era algo caro para lo que era. Me equivoqué totalmente. El reporte tiene más valor que 3 meses de clases con tutor."',
    delay: 'reveal-delay-1',
  },
  {
    initials: 'LP',
    name: 'Luisa Patiño',
    role: 'Médica · Bogotá',
    text: '"La sección de recursos curados sola ya vale el precio. Dejé de perder tiempo en apps que no me servían y me enfoqué en lo que realmente funciona para mí."',
    delay: 'reveal-delay-2',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="label reveal">Lo que dicen</div>
      <h2 className="section-title reveal reveal-delay-1">
        Personas reales. <em>Resultados reales.</em>
      </h2>
      <p className="section-desc reveal reveal-delay-2">No somos los primeros en decirlo — ellos sí.</p>

      <div className="testimonials">
        {testimonials.map((t) => (
          <div key={t.initials} className={`testi reveal ${t.delay}`}>
            <div className="testi-stars">★★★★★</div>
            <p>{t.text}</p>
            <div className="testi-author">
              <div className="avatar">{t.initials}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
