import { useState } from 'react'

const radarPoints = [
  { label: 'VISUAL',    cx: 0,   cy: -72, value: 90, lx: 0,   ly: -90, anchor: 'middle' },
  { label: 'MEMORIA',   cx: 58,  cy: -29, value: 81, lx: 82,  ly: -36, anchor: 'start'  },
  { label: 'FOCO',      cx: 48,  cy: 34,  value: 74, lx: 58,  ly: 50,  anchor: 'start'  },
  { label: 'AUDITIVO',  cx: 0,   cy: 56,  value: 70, lx: 0,   ly: 98,  anchor: 'middle' },
  { label: 'EMOCIÓN',   cx: -55, cy: 28,  value: 77, lx: -72, ly: 50,  anchor: 'end'    },
  { label: 'INMERSIÓN', cx: -50, cy: -44, value: 83, lx: -68, ly: -36, anchor: 'end'    },
]

const metrics = [
  { name: 'Visual',      val: 94 },
  { name: 'Auditivo',    val: 61 },
  { name: 'Kinestésico', val: 72 },
  { name: 'Lectivo',     val: 88 },
  { name: 'Foco',        val: 55 },
]

const scoreBoxes = [
  { val: 92, label: 'Inmersión' },
  { val: 68, label: 'Foco'      },
  { val: 81, label: 'Patrón'    },
  { val: 74, label: 'Emoción'   },
]

export default function Dashboard() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="dashboard">
      <div className="label reveal">Tu perfil cognitivo</div>
      <h2 className="section-title reveal reveal-delay-1">
        Métricas que nadie<br />te había mostrado <em>antes.</em>
      </h2>
      <p className="section-desc reveal reveal-delay-2">
        Visualiza exactamente cómo procesa tu cerebro, qué canales aprenden mejor y dónde están tus bloqueos reales.
      </p>

      <div className="dashboard-wrap reveal">
        <div className="dashboard-header">
          <div className="dashboard-dots">
            <div className="dot dot-r"></div>
            <div className="dot dot-y"></div>
            <div className="dot dot-g"></div>
          </div>
          <div className="dashboard-title-bar">Input360 — Perfil Cognitivo · Usuario</div>
          <div style={{ fontSize: '11px', color: 'var(--muted2)', letterSpacing: '0.1em', fontFamily: 'var(--serif)' }}>
            Actualizado hoy
          </div>
        </div>

        <div className="dashboard-body">
          {/* Panel 1 — Retention index */}
          <div className="dash-panel">
            <div className="dash-panel-label">Índice de retención</div>
            <div className="dash-panel-value">78</div>
            <div className="dash-panel-change">↑ +12 esta semana</div>
            <div className="metric-row">
              {metrics.map(m => (
                <div className="metric-item" key={m.name}>
                  <div className="metric-head">
                    <span className="metric-name">{m.name}</span>
                    <span className="metric-val">{m.val}</span>
                  </div>
                  <div className="metric-track">
                    <div className="metric-fill" style={{ width: `${m.val}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Panel 2 — Interactive radar */}
          <div className="dash-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="dash-panel-label" style={{ textAlign: 'center' }}>Perfil multidimensional</div>
            <div className="radar-container">
              <svg className="radar" width="240" height="240" viewBox="-120 -120 240 240">
                {/* Grid */}
                <polygon points="0,-80 69,-40 69,40 0,80 -69,40 -69,-40"  fill="none" stroke="#1E1E1E" strokeWidth="1" />
                <polygon points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30"  fill="none" stroke="#1E1E1E" strokeWidth="1" />
                <polygon points="0,-40 35,-20 35,20 0,40 -35,20 -35,-20"  fill="none" stroke="#1E1E1E" strokeWidth="1" />
                <polygon points="0,-20 17,-10 17,10 0,20 -17,10 -17,-10"  fill="none" stroke="#1E1E1E" strokeWidth="1" />
                {/* Axes */}
                <line x1="0" y1="-80" x2="0"  y2="80"  stroke="#1E1E1E" strokeWidth="1" />
                <line x1="-69" y1="-40" x2="69" y2="40"  stroke="#1E1E1E" strokeWidth="1" />
                <line x1="-69" y1="40"  x2="69" y2="-40" stroke="#1E1E1E" strokeWidth="1" />
                {/* Data shape */}
                <polygon
                  points="0,-72 58,-29 48,34 0,56 -55,28 -50,-44"
                  fill="rgba(232,185,56,0.10)"
                  stroke="#E8B938"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                {/* Interactive points + labels */}
                {radarPoints.map(p => {
                  const isHovered = hovered?.label === p.label
                  const tipY = p.cy < 0 ? p.cy + 8 : p.cy - 24
                  return (
                    <g key={p.label}>
                      <circle
                        cx={p.cx} cy={p.cy}
                        r={isHovered ? 5 : 3}
                        fill="#E8B938"
                        style={{ cursor: 'crosshair', transition: 'r 0.15s' }}
                        onMouseEnter={() => setHovered(p)}
                        onMouseLeave={() => setHovered(null)}
                      />
                      <text
                        x={p.lx} y={p.ly}
                        textAnchor={p.anchor}
                        fontSize="9"
                        fill={isHovered ? '#E8B938' : '#4A4A4A'}
                        fontFamily="Inter"
                        fontWeight="700"
                        letterSpacing="0.1em"
                        style={{ pointerEvents: 'none' }}
                      >
                        {p.label}
                      </text>
                      {/* Tooltip on hover */}
                      {isHovered && (
                        <g style={{ pointerEvents: 'none' }}>
                          <rect
                            x={p.cx - 18} y={tipY}
                            width={36} height={16}
                            rx={3}
                            fill="rgba(17,17,17,0.96)"
                            stroke="rgba(232,185,56,0.45)"
                            strokeWidth={1}
                          />
                          <text
                            x={p.cx} y={tipY + 11}
                            textAnchor="middle"
                            fontSize="9"
                            fill="#E8B938"
                            fontFamily="Inter"
                            fontWeight="800"
                          >
                            {p.value}
                          </text>
                        </g>
                      )}
                    </g>
                  )
                })}
              </svg>
            </div>
          </div>

          {/* Panel 3 — Cognitive scores */}
          <div className="dash-panel">
            <div className="dash-panel-label">Métricas cognitivas</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
              {scoreBoxes.map(s => (
                <div key={s.label} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '6px', padding: '16px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '32px', fontWeight: 800, color: 'var(--gold)', lineHeight: 1, letterSpacing: '-0.03em' }}>{s.val}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '9px', fontWeight: 700, color: 'var(--muted2)', letterSpacing: '0.14em', marginTop: '6px', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ background: 'var(--gold-dim)', border: '1px solid var(--gold-border)', borderRadius: '6px', padding: '16px' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '9px', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '6px' }}>
                Insight
              </div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7 }}>
                Eres un aprendiz visual-lectivo. Maximiza con textos anotados y mapas mentales.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
