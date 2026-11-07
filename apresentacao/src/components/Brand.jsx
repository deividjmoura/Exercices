export function BrandMark({ size = 38, className = '' }) {
  return (
    <span className={`brand-mark ${className}`} style={{ '--mark-size': `${size}px` }} aria-hidden="true">
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M6 15V6h9M25 6h9v9M34 25v9h-9M15 34H6v-9" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
        <path d="M14 14h5v5h-5zM22 14h5v5h-5zM14 22h5v5h-5zM22 22h5v5h-5z" fill="currentColor" />
        <path d="M30 30h4v4h-4z" fill="currentColor" />
      </svg>
    </span>
  );
}

export function Brand({ inverted = false, compact = false, className = '' }) {
  return (
    <a className={`brand${inverted ? ' brand--inverted' : ''}${compact ? ' brand--compact' : ''} ${className}`} href="#inicio" aria-label="QRAdmin — início">
      <BrandMark size={compact ? 31 : 36} />
      <span className="brand-wordmark"><strong>QR</strong><span>Admin</span></span>
    </a>
  );
}
