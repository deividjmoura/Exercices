import { useEffect, useState } from 'react';
import { AccessLink } from '../components/Links';
import { Brand } from '../components/Brand';
import { Icon } from '../components/Icon';

const navigation = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#funcionalidades', label: 'Módulos' },
  { href: '#para-quem', label: 'Para quem é' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner page-shell">
        <Brand />

        <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label="Navegação principal" id="primary-navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <AccessLink className="main-nav__mobile-access" onClick={closeMenu} />
        </nav>

        <div className="site-header__actions">
          <AccessLink className="header-access" />
          <a className="button button--dark button--small" href="#produto">
            <span className="site-header__button-label site-header__button-label--wide">Conhecer o produto</span>
            <span className="site-header__button-label site-header__button-label--compact">Ver produto</span>
            <Icon name="arrow-right" size={16} />
          </a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar navegação' : 'Abrir navegação'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={21} />
        </button>
      </div>
    </header>
  );
}
