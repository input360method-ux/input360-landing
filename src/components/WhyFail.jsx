const cards = [
  {
    num: '01 ——',
    title: 'Sobrecarga cognitiva',
    text: 'El cerebro procesa idiomas en capas. Cuando acumulas demasiado sin consolidar, las capas colapsan y el olvido se vuelve inevitable.',
    bars: [
      { label: 'Retención',   width: '22%', delay: '0.2s' },
      { label: 'Saturación',  width: '91%', delay: '0.4s' },
      { label: 'Recall',      width: '18%', delay: '0.6s' },
    ],
    delay: '',
  },
  {
    num: '02 ——',
    title: 'Inconsistencia sistémica',
    text: 'No es que seas inconsistente. Es que tu sistema requiere más fuerza de voluntad de la que ningún humano puede mantener indefinidamente.',
    bars: [
      { label: 'Semana 1', width: '95%', delay: '0.2s' },
      { label: 'Semana 2', width: '60%', delay: '0.35s' },
      { label: 'Semana 3', width: '28%', delay: '0.5s' },
      { label: 'Semana 4', width: '8%',  delay: '0.65s' },
    ],
    delay: 'reveal-delay-1',
  },
  {
    num: '03 ——',
    title: 'Exceso de métodos',
    text: 'Duolingo, Anki, clases, YouTube, podcasts. Cada método activa rutas neuronales distintas. Sin integración, el conocimiento queda fragmentado.',
    bars: [
      { label: 'Apps',        width: '40%', delay: '0.2s' },
      { label: 'Clases',      width: '55%', delay: '0.35s' },
      { label: 'Integración', width: '5%',  delay: '0.5s' },
    ],
    delay: 'reveal-delay-2',
  },
  {
    num: '04 ——',
    title: 'Motivación externa',
    text: 'La motivación intrínseca conecta el aprendizaje con la identidad. Cuando dependes de motivación externa, el primer obstáculo lo borra todo.',
    bars: [
      { label: 'Externa',    width: '82%', delay: '0.2s' },
      { label: 'Intrínseca', width: '14%', delay: '0.4s' },
    ],
    delay: 'reveal-delay-3',
  },
  {
    num: '05 ——',
    title: 'Estudiar sin sistema',
    text: 'Tu cerebro necesita un mapa, no una lista. Sin arquitectura de aprendizaje, cada sesión empieza de cero y la acumulación nunca ocurre.',
    bars: [
      { label: 'Sin sistema', width: '12%', delay: '0.2s' },
      { label: 'Con sistema', width: '88%', delay: '0.4s' },
    ],
    delay: 'reveal-delay-4',
  },
  {
    num: '06 ——',
    title: 'Feedback inexistente',
    text: 'Sin retroalimentación clara, tu cerebro no sabe qué consolidar. Estudias pero nunca sabes si realmente estás avanzando o solo acumulando tiempo.',
    bars: [
      { label: 'Sin feedback', width: '8%',  delay: '0.2s' },
      { label: 'Con feedback', width: '91%', delay: '0.4s' },
    ],
    delay: 'reveal-delay-5',
  },
]

export default function WhyFail() {
  return (
    <section id="why" className="full-width">
      <div className="section-inner">
        <div className="label reveal">Por qué fallamos</div>
        <h2 className="section-title reveal reveal-delay-1">
          Cinco razones por las que<br />los idiomas <em>no se quedan.</em>
        </h2>
        <p className="section-desc reveal reveal-delay-2">
          No es falta de capacidad ni de tiempo. Son patrones cognitivos predecibles que nadie te explicó.
        </p>
      </div>

      <div className="section-inner">
        <div className="fail-grid">
          {cards.map((card) => (
            <div key={card.num} className={`fail-card reveal ${card.delay}`}>
              <div className="fail-number">{card.num}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <div className="fail-diagram">
                {card.bars.map((bar) => (
                  <div className="fail-bar-row" key={bar.label}>
                    <span className="fail-bar-label">{bar.label}</span>
                    <div className="fail-bar-track">
                      <div
                        className="fail-bar-fill"
                        style={{ width: bar.width, animationDelay: bar.delay }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="quote-block reveal">
          <blockquote>
            "El problema no es el idioma. Es que nunca te dieron el sistema correcto para tu mente específica."
          </blockquote>
        </div>
      </div>
    </section>
  )
}
