export default function Process() {
  return (
    <section id="process">
      <div className="label reveal">El proceso</div>
      <h2 className="section-title reveal reveal-delay-1">
        Tres pasos hacia<br />tu sistema <em>preciso.</em>
      </h2>
      <p className="section-desc reveal reveal-delay-2">Sin complicaciones. Sin curva de aprendizaje. Solo claridad.</p>

      <div className="process-steps">
        <div className="process-step reveal">
          <div className="process-num">01</div>
          <h3>Responde el diagnóstico</h3>
          <p>Un cuestionario de 8–12 minutos diseñado con principios de psicología cognitiva. No hay respuestas correctas o incorrectas.</p>
        </div>
        <div className="process-connector reveal reveal-delay-1">
          <div className="process-connector-line"></div>
        </div>
        <div className="process-step reveal reveal-delay-2">
          <div className="process-num">02</div>
          <h3>La IA analiza tu perfil</h3>
          <p>Nuestro modelo procesa 40+ variables: estilo cognitivo, patrones de retención, triggers emocionales y disponibilidad real.</p>
        </div>
        <div className="process-connector reveal reveal-delay-3">
          <div className="process-connector-line" style={{ background: 'linear-gradient(to right, transparent, var(--gold-border))' }}></div>
        </div>
        <div className="process-step reveal reveal-delay-4">
          <div className="process-num">03</div>
          <h3>Recibes tu sistema</h3>
          <p>PDF personalizado, plan de 30 días, workspace Notion, AI Companion y acceso completo. En menos de 24 horas.</p>
        </div>
      </div>
    </section>
  )
}
