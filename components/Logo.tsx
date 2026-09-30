interface LogoProps {
  variant?: 'light' | 'dark'
  showTagline?: boolean
  className?: string
}

export default function Logo({ variant = 'dark', showTagline = false, className = '' }: LogoProps) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#1c3252'
  const iconColor = variant === 'light' ? '#FFFFFF' : '#c0392b'

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Star of Life con heartbeat */}
      <svg width="34" height="34" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g fill={iconColor}>
          <rect x="38" y="8" width="24" height="84" rx="8"/>
          <rect x="8" y="38" width="84" height="24" rx="8"/>
          <rect x="15" y="15" width="70" height="24" rx="8" transform="rotate(60 50 50)"/>
          <rect x="15" y="61" width="70" height="24" rx="8" transform="rotate(-60 50 50)"/>
        </g>
        <polyline
          points="22,50 34,50 40,35 47,65 54,42 60,58 66,50 78,50"
          stroke="white"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      <div className="flex flex-col leading-none">
        <span style={{ color: textColor, opacity: 0.5, fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Fundación
        </span>
        <div style={{ width: '100%', height: '1px', backgroundColor: textColor, opacity: 0.15, margin: '2px 0' }} />
        <span style={{ color: textColor, fontSize: '16px', fontWeight: 800, letterSpacing: '-0.01em' }}>
          Noscuidamos
        </span>
        {showTagline && (
          <span style={{ color: textColor, opacity: 0.45, fontSize: '8.5px', fontWeight: 500, marginTop: '2px' }}>
            Salud para ti, para mí, para todos
          </span>
        )}
      </div>
    </div>
  )
}
