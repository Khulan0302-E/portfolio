export default function Me({ onClick }) {
  return (
    <button type="button" className="me" onClick={onClick} aria-label="Хулантай ярилцах">
      <span className="me__bubble">Сайн байна уу, надтай ярилцахыг хүсвэл над дээр дараарай</span>
      <svg viewBox="0 0 60 120" aria-hidden="true">
        <path d="M15 30 C 12 9, 48 9, 45 30 L 48 66 C 40 70, 20 70, 12 66 Z" fill="#2b1d16" />
        <path d="M25 96 L25 113 M35 96 L35 113" stroke="#1c1917" strokeWidth="3" strokeLinecap="round" />
        <path d="M22 114 L27 114 M33 114 L38 114" stroke="#1c1917" strokeWidth="4" strokeLinecap="round" />
        <path d="M17 82 L43 82 L45 97 L15 97 Z" fill="#374151" stroke="#1c1917" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18 49 Q30 45 42 49 L44 84 L16 84 Z" fill="#a8a29e" stroke="#1c1917" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="30" cy="58" r="1.2" fill="#1c1917" />
        <circle cx="30" cy="66" r="1.2" fill="#1c1917" />
        <circle cx="30" cy="74" r="1.2" fill="#1c1917" />
        <path d="M18 51 C 13 62, 13 72, 15 80" fill="none" stroke="#1c1917" strokeWidth="2" strokeLinecap="round" />
        <g className="me__wave">
          <path d="M42 51 C 48 46, 51 40, 52 34" fill="none" stroke="#1c1917" strokeWidth="2" strokeLinecap="round" />
          <circle cx="52" cy="32" r="2.5" fill="#f3d3b8" stroke="#1c1917" strokeWidth="1.2" />
        </g>
        <ellipse cx="30" cy="30" rx="12.5" ry="14.5" fill="#f3d3b8" stroke="#1c1917" strokeWidth="1.5" />
        <path d="M17 28 C 17 14, 43 14, 43 28 C 39 21, 34 19, 30 19 C 26 19, 21 21, 17 28 Z" fill="#2b1d16" />
        <circle cx="24.5" cy="31" r="4.6" fill="none" stroke="#111" strokeWidth="1.6" />
        <circle cx="35.5" cy="31" r="4.6" fill="none" stroke="#111" strokeWidth="1.6" />
        <path d="M29 31 L31 31" stroke="#111" strokeWidth="1.6" />
        <circle cx="24.5" cy="31.5" r="1.2" fill="#111" />
        <circle cx="35.5" cy="31.5" r="1.2" fill="#111" />
        <path d="M26 38.5 Q30 42 34 38.5" fill="none" stroke="#1c1917" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  )
}
