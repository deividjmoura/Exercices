import { QRADMIN_APP_URL } from '../config';
import { Icon } from './Icon';

export function AccessLink({ children = 'Acessar o sistema', className = '', onClick, showIcon = true }) {
  return (
    <a
      className={className}
      href={QRADMIN_APP_URL ?? '#acesso'}
      onClick={onClick}
      {...(QRADMIN_APP_URL ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span>{children}</span>
      {showIcon && <Icon name={QRADMIN_APP_URL ? 'arrow-up-right' : 'arrow-right'} size={17} />}
    </a>
  );
}
