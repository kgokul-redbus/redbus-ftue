let uid = 0
const nextId = () => `grad-${++uid}`

// AI "Ray" sparkle — red→purple gradient (from Figma, viewBox 21.6722)
export function Sparkle({ size = 16, style }) {
  const id = nextId()
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21.6722 21.6722"
      fill="none"
      style={{ display: 'block', ...style }}
    >
      <path
        d="M8.30855 3.97462C8.59324 3.20527 9.68139 3.20527 9.96608 3.97462L12.0543 9.61795L17.6976 11.7062C18.467 11.9909 18.467 13.079 17.6976 13.3637L12.0543 15.4519L9.96608 21.0952C9.6814 21.8646 8.59324 21.8646 8.30855 21.0952L6.22034 15.4519L0.577013 13.3637C-0.192337 13.079 -0.192338 11.9909 0.577012 11.7062L6.22034 9.61795L8.30855 3.97462Z"
        fill={`url(#${id})`}
      />
      <path
        d="M17.2058 0.230805C17.3197 -0.0769352 17.7549 -0.0769347 17.8688 0.230805L18.8338 2.83849L21.4414 3.80342C21.7492 3.9173 21.7492 4.35256 21.4414 4.46643L18.8338 5.43136L17.8688 8.03905C17.7549 8.34679 17.3197 8.34679 17.2058 8.03905L16.2409 5.43136L13.6332 4.46643C13.3255 4.35256 13.3255 3.9173 13.6332 3.80342L16.2409 2.83849L17.2058 0.230805Z"
        fill={`url(#${id})`}
      />
      <defs>
        <linearGradient id={id} x1="-2.2427" y1="4.817" x2="22.98" y2="5.975" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D63941" />
          <stop offset="1" stopColor="#7E3AF1" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function Mic({ size = 20, color = '#1D1D1D' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={{ display: 'block' }}>
      <g transform="translate(4.375 1.667)">
        <path
          d="M1.25 6.45833V8.125C1.25 10.5412 3.20875 12.5 5.625 12.5C8.04125 12.5 10 10.5412 10 8.125V6.45833H11.25V8.125C11.25 11.0203 9.06247 13.4049 6.25 13.7158V15.4167H8.54167V16.6667H2.70833V15.4167H5V13.7158C2.18753 13.4049 0 11.0203 0 8.125V6.45833H1.25Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.625 0C7.35089 0 8.75 1.39911 8.75 3.125V8.125C8.75 9.85089 7.35089 11.25 5.625 11.25C3.89911 11.25 2.5 9.85089 2.5 8.125V3.125C2.5 1.39911 3.89911 0 5.625 0ZM5.625 1.25C4.58947 1.25 3.75 2.08947 3.75 3.125V8.125C3.75 9.16053 4.58947 10 5.625 10C6.66053 10 7.5 9.16053 7.5 8.125V3.125C7.5 2.08947 6.66053 1.25 5.625 1.25Z"
          fill={color}
        />
      </g>
    </svg>
  )
}

export function FilterAlt({ size = 24, color = '#1D1D1D' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ display: 'block' }}>
      {/* flipped vertically so the widest bar sits at the top (funnel), per design */}
      <g transform="translate(4 18) scale(1 -1)">
        <path d="M0.75 10.5C0.335787 10.5 0 10.8358 0 11.25C0 11.6642 0.335787 12 0.75 12L15.25 12C15.6642 12 16 11.6642 16 11.25C16 10.8358 15.6642 10.5 15.25 10.5L0.75 10.5Z" fill={color} />
        <path d="M2.875 5.25C2.46079 5.25 2.125 5.58579 2.125 6C2.125 6.41421 2.46079 6.75 2.875 6.75L13.125 6.75C13.5392 6.75 13.875 6.41421 13.875 6C13.875 5.58579 13.5392 5.25 13.125 5.25L2.875 5.25Z" fill={color} />
        <path d="M5.875 0C5.46079 0 5.125 0.335787 5.125 0.75C5.125 1.16421 5.46079 1.5 5.875 1.5L10.125 1.5C10.5392 1.5 10.875 1.16421 10.875 0.75C10.875 0.335787 10.5392 0 10.125 0L5.875 0Z" fill={color} />
      </g>
    </svg>
  )
}

export function Plus({ size = 16, color = '#1D1D1D' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ display: 'block' }}>
      <g transform="translate(2.668 2.668)">
        <path
          d="M5.38281 0.00260417C5.63495 0.0282033 5.83203 0.241112 5.83203 0.5L5.83138 4.83138L10.1634 4.83203C10.4396 4.83203 10.6634 5.05589 10.6634 5.33203C10.6632 5.60802 10.4394 5.83203 10.1634 5.83203L5.83138 5.83138V10.1634C5.83138 10.4396 5.60752 10.6634 5.33138 10.6634C5.05539 10.6632 4.83138 10.4394 4.83138 10.1634V5.83138H0.5C0.223858 5.83138 0 5.60752 0 5.33138C0.000175351 5.05539 0.223966 4.83138 0.5 4.83138H4.83138L4.83203 0.5C4.83203 0.223858 5.05589 0 5.33203 0L5.38281 0.00260417Z"
          fill={color}
        />
      </g>
    </svg>
  )
}

export function ChevronRight({ size = 24, color = '#1D1D1D' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ display: 'block' }}>
      <path d="M9 6l6 6-6 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Star({ size = 12, color = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" style={{ display: 'block' }}>
      <path d="M6 0.8l1.545 3.13 3.455.502-2.5 2.436.59 3.44L6 8.686 2.91 10.31l.59-3.44L1 4.432l3.455-.502L6 0.8Z" fill={color} />
    </svg>
  )
}

export function BackArrow({ size = 24, color = '#1D1D1D' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ display: 'block' }}>
      <path d="M20 12H4M4 12l6-6M4 12l6 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Check({ size = 16, color = '#298639' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ display: 'block' }}>
      <path d="M3 8.5l3.2 3.2L13 5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowUp({ size = 20, color = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={{ display: 'block' }}>
      <path d="M10 15.5V5M10 5l-4.5 4.5M10 5l4.5 4.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Close({ size = 18, color = '#1D1D1D' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" style={{ display: 'block' }}>
      <path d="M4.5 4.5l9 9M13.5 4.5l-9 9" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function Backspace({ size = 24, color = '#1D1D1D' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ display: 'block' }}>
      <path
        d="M8.2 5h11.3A1.5 1.5 0 0 1 21 6.5v11A1.5 1.5 0 0 1 19.5 19H8.2a1.5 1.5 0 0 1-1.14-.52l-4.2-4.9a1 1 0 0 1 0-1.3l4.2-4.76A1.5 1.5 0 0 1 8.2 5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M11 9.5l5 5M16 9.5l-5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function Shift({ size = 22, color = '#1D1D1D', filled = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" style={{ display: 'block' }}>
      <path
        d="M11 3.5l6.5 7H14v5.5H8V10.5H4.5L11 3.5Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill={filled ? color : 'none'}
      />
    </svg>
  )
}
