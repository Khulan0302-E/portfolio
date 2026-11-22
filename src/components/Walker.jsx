export default function Walker({ x, duration, walking, facing, bubble }) {
  return (
    <div
      className={`walker ${walking ? 'is-walking' : ''}`}
      style={{ left: `${x}%`, transitionDuration: `${duration}ms` }}
      aria-hidden="true"
    >
      {bubble && !walking && <span className="walker__bubble">{bubble}</span>}
      <svg viewBox="0 0 60 100" className={facing === 'left' ? 'is-left' : ''}>
        <g className="walker__leg walker__leg--a">
          <path d="M27 78 L26 93" stroke="#111" strokeWidth="5" strokeLinecap="round" />
          <path d="M26 93 L31 93" stroke="#111" strokeWidth="5" strokeLinecap="round" />
        </g>
        <g className="walker__leg walker__leg--b">
          <path d="M37 78 L37 93" stroke="#111" strokeWidth="5" strokeLinecap="round" />
          <path d="M37 93 L42 93" stroke="#111" strokeWidth="5" strokeLinecap="round" />
        </g>
        <g className="walker__body">
          <path
            d="M20 30 C 10 44, 11 72, 27 80 C 42 86, 52 72, 48 52 C 45 34, 32 22, 20 30 Z"
            fill="#e9d5ff"
            stroke="#a855f7"
            strokeWidth="2"
          />
          <path d="M17 34 C 13 18, 31 10, 37 22 C 31 19, 24 22, 22 32 Z" fill="#111" />
          <circle cx="36" cy="40" r="1.8" fill="#111" />
          <path d="M30 56 C 27 62, 32 66, 35 61" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  )
}
