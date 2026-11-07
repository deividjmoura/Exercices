export function SectionIntro({ eyebrow, title, children, className = '', light = false, id }) {
  return (
    <div className={`section-intro${light ? ' section-intro--light' : ''} ${className}`}>
      {eyebrow && <p className="eyebrow"><span className="eyebrow-rule" />{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {children && <div className="section-intro__body">{children}</div>}
    </div>
  );
}

export function SectionIndex({ children, light = false }) {
  return <p className={`section-index${light ? ' section-index--light' : ''}`}>{children}</p>;
}
