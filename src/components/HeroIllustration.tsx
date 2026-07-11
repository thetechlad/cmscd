const HeroIllustration = () => (
  <svg viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <defs>
      <linearGradient id="grad-blue" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#DBEAFE" />
        <stop offset="100%" stopColor="#00C4E1" stopOpacity="0.55" />
      </linearGradient>
      <linearGradient id="grad-soft" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#F0F4FF" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="14" floodColor="#0A0A0A" floodOpacity="0.08" />
      </filter>
    </defs>

    {/* soft glow */}
    <circle cx="370" cy="160" r="170" fill="url(#grad-blue)" opacity="0.35" />

    {/* connecting lines */}
    <g stroke="#00C4E1" strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="3 4">
      <path d="M120 200 L260 130 L400 220" />
      <path d="M120 200 L210 340 L400 220" />
      <path d="M210 340 L360 380" />
    </g>

    {/* node 1 - browser-like card */}
    <g filter="url(#shadow)">
      <rect x="60" y="150" width="160" height="110" rx="14" fill="white" stroke="#E5E7EB" />
      <circle cx="78" cy="170" r="3" fill="#FCA5A5" />
      <circle cx="90" cy="170" r="3" fill="#FCD34D" />
      <circle cx="102" cy="170" r="3" fill="#86EFAC" />
      <rect x="74" y="190" width="100" height="6" rx="3" fill="#0A0A0A" />
      <rect x="74" y="204" width="120" height="6" rx="3" fill="#E5E7EB" />
      <rect x="74" y="218" width="80" height="6" rx="3" fill="#E5E7EB" />
      <rect x="74" y="234" width="50" height="14" rx="4" fill="#00C4E1" />
    </g>

    {/* node 2 - code block */}
    <g filter="url(#shadow)">
      <rect x="200" y="80" width="180" height="100" rx="14" fill="url(#grad-soft)" stroke="#E5E7EB" />
      <rect x="216" y="100" width="60" height="6" rx="3" fill="#00C4E1" />
      <rect x="216" y="114" width="120" height="6" rx="3" fill="#0A0A0A" opacity="0.7" />
      <rect x="232" y="128" width="100" height="6" rx="3" fill="#0A0A0A" opacity="0.4" />
      <rect x="232" y="142" width="80" height="6" rx="3" fill="#0A0A0A" opacity="0.4" />
      <rect x="216" y="156" width="60" height="6" rx="3" fill="#0A0A0A" opacity="0.7" />
    </g>

    {/* node 3 - chart card */}
    <g filter="url(#shadow)">
      <rect x="340" y="170" width="140" height="120" rx="14" fill="white" stroke="#E5E7EB" />
      <rect x="356" y="186" width="50" height="6" rx="3" fill="#0A0A0A" />
      <rect x="356" y="198" width="80" height="4" rx="2" fill="#9CA3AF" />
      <polyline points="356,260 380,240 404,250 428,220 452,232 472,210" fill="none" stroke="#00C4E1" strokeWidth="2.5" />
      <circle cx="472" cy="210" r="4" fill="#00C4E1" />
    </g>

    {/* node 4 - small badge */}
    <g filter="url(#shadow)">
      <rect x="160" y="300" width="120" height="68" rx="14" fill="white" stroke="#E5E7EB" />
      <circle cx="184" cy="334" r="12" fill="#F0F4FF" />
      <path d="M179 334 l4 4 l8 -8" stroke="#00C4E1" strokeWidth="2" fill="none" strokeLinecap="round" />
      <rect x="206" y="324" width="56" height="6" rx="3" fill="#0A0A0A" />
      <rect x="206" y="336" width="40" height="5" rx="2.5" fill="#9CA3AF" />
    </g>

    {/* floating dots */}
    <circle cx="80" cy="100" r="4" fill="#00C4E1" opacity="0.3" />
    <circle cx="450" cy="380" r="6" fill="#00C4E1" opacity="0.25" />
    <circle cx="430" cy="120" r="3" fill="#0A0A0A" opacity="0.25" />
  </svg>
);

export default HeroIllustration;
