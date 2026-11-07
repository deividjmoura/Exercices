import { Icon } from './Icon';

export function ArrowLink({ href, children, className = '', ...props }) {
  return (
    <a className={`arrow-link ${className}`} href={href} {...props}>
      <span>{children}</span>
      <span className="arrow-link__icon"><Icon name="arrow-right" size={17} /></span>
    </a>
  );
}
