import { AccessLink } from '../components/Links';
import { Brand } from '../components/Brand';
import { Icon } from '../components/Icon';
import { QRADMIN_APP_URL } from '../config';

const footerLinks = [
  { href: '#proposta', label: 'Proposta' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#funcionalidades', label: 'Módulos' },
  { href: '#para-quem', label: 'Para quem é' },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Brand inverted />
            <p>Uma proposta de gestão para aproximar cardápio, atendimento e administração em negócios de alimentação.</p>
          </div>
          <div className="site-footer__nav-wrap">
            <p className="site-footer__label">NAVEGAÇÃO</p>
            <nav className="site-footer__nav" aria-label="Navegação do rodapé">
              {footerLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
            </nav>
          </div>
          <div className="site-footer__access" id="acesso">
            <p className="site-footer__label">ACESSO AO SISTEMA</p>
            {QRADMIN_APP_URL ? (
              <AccessLink className="site-footer__access-link">Acessar QRAdmin</AccessLink>
            ) : (
              <>
                <p>O endereço oficial do sistema não foi incluído no repositório.</p>
                <code>VITE_QRADMIN_APP_URL</code>
                <span className="site-footer__access-hint">Configure a variável de ambiente para ativar o acesso.</span>
              </>
            )}
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} QRAdmin. Todos os direitos reservados.</span>
          <span className="site-footer__bottom-note"><Icon name="info" size={14} />Identidade e interface ilustrativas, pendentes de validação com os materiais oficiais.</span>
          <a href="#inicio" className="site-footer__back-top">Voltar ao início <Icon name="arrow-up-right" size={15} /></a>
        </div>
      </div>
    </footer>
  );
}
