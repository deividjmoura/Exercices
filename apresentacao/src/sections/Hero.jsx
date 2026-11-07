import { ArrowLink } from '../components/ArrowLink';
import { Icon } from '../components/Icon';
import { DashboardSketch, MenuPhoneSketch } from '../components/ConceptScreens';

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="page-shell hero__grid">
        <div className="hero__copy">
          <p className="eyebrow"><span className="eyebrow-rule" />GESTÃO PARA OPERAÇÕES DE ALIMENTAÇÃO</p>
          <h1 id="hero-title">Quando o salão acelera, <em>a gestão</em> precisa acompanhar.</h1>
          <p className="hero__lead">
            QRAdmin é uma proposta de gestão para restaurantes, lanchonetes e outras casas de alimentação — pensada para aproximar cardápio, atendimento, pedidos e administração.
          </p>
          <div className="hero__actions">
            <a className="button button--accent" href="#como-funciona">
              <span>Entenda o fluxo</span>
              <Icon name="arrow-right" size={17} />
            </a>
            <ArrowLink href="#produto">Explore a demonstração</ArrowLink>
          </div>
          <div className="hero__footnote">
            <span className="hero__footnote-index">01 <span>/</span> 06</span>
            <span className="hero__footnote-rule" />
            <span>Do cardápio ao fechamento, com contexto em cada etapa.</span>
          </div>
        </div>

        <figure className="hero-art" aria-label="Estudo de interface do QRAdmin, criado para esta apresentação">
          <div className="hero-art__orbit hero-art__orbit--one" aria-hidden="true" />
          <div className="hero-art__orbit hero-art__orbit--two" aria-hidden="true" />
          <div className="hero-art__label"><span className="hero-art__label-dot" />VISUAL CONCEITUAL <span>·</span> NÃO É UMA CAPTURA DO SISTEMA</div>
          <div className="hero-art__dashboard"><DashboardSketch /></div>
          <div className="hero-art__phone"><MenuPhoneSketch /></div>
          <div className="hero-art__annotation" aria-hidden="true">
            <span className="hero-art__annotation-icon"><Icon name="qr" size={17} /></span>
            <span><strong>Uma jornada conectada</strong><small>salão · cozinha · gestão</small></span>
          </div>
          <figcaption className="sr-only">Composição de interface ilustrativa. Não representa uma captura real nem confirma a disponibilidade de funcionalidades no produto.</figcaption>
          <div className="hero-art__caption" aria-hidden="true"><span>ESTUDO VISUAL</span><span>01—02</span></div>
        </figure>
      </div>
      <div className="hero__bottom page-shell" aria-hidden="true">
        <span>UMA VISÃO MAIS CONTÍNUA DA ROTINA</span>
        <span className="hero__bottom-rule" />
        <span>SCROLL PARA EXPLORAR <Icon name="arrow-down" size={14} /></span>
      </div>
    </section>
  );
}
