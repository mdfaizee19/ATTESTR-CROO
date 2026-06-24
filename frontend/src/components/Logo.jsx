export default function Logo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lBg" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#0a1a38"/>
          <stop offset="100%" stopColor="#000306"/>
        </radialGradient>
        <radialGradient id="lIg" cx="50%" cy="38%" r="58%">
          <stop offset="0%" stopColor="#1a40b0" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
        </radialGradient>
        <filter id="lGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="lAg" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#5599ff"/>
          <stop offset="55%" stopColor="#3366ee"/>
          <stop offset="100%" stopColor="#1a44cc"/>
        </linearGradient>
      </defs>
      <rect x="5" y="5" width="190" height="190" rx="42" fill="url(#lBg)"/>
      <rect x="5" y="5" width="190" height="190" rx="42" fill="url(#lIg)"/>
      <rect x="5" y="5" width="190" height="190" rx="42" fill="none" stroke="rgba(255,255,255,0.88)" strokeWidth="7" filter="url(#lGlow)"/>
      <path d="M100 24 L178 174 H148 L100 66 L52 174 H22 Z" fill="url(#lAg)"/>
      <path d="M90 100 L90 84 L110 84 L110 100 L122 100 L100 126 L78 100 Z" fill="#020a18"/>
    </svg>
  )
}
