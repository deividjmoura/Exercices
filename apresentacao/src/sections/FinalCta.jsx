import { AccessLink } from '../components/Links';
import { Icon } from '../components/Icon';

export function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="page-shell final-cta__inner">
        <div className="final-cta__copy">
          <p className="eyebrow eyebrow--light"><span className="eyebrow-rule" />QRADMIN · GESTÃO PARA ALIMENTAÇÃO</p>
          <h2 id="final-cta-title">Mais contexto para servir. <em>Mais clareza para gerir.</em></h2>
          <p>Conheça o fluxo descrito para o QRAdmin e avalie como ele se conecta à realidade da sua operação.</p>
          <div className="final-cta__actions">
            <a className="button button--paper" href="#funcionalidades"><span>Explorar os módulos</span><Icon name="arrow-right" size={17} /></a>
            <AccessLink className="final-cta__access" />
          </div>
        </div>
        <div className="final-cta__motif" aria-hidden="true">
          <span className="final-cta__motif-ring final-cta__motif-ring--outer" />
          <span className="final-cta__motif-ring final-cta__motif-ring--inner" />
          <span className="final-cta__motif-core"><Icon name="qr" size={36} /></span>
          <span className="final-cta__motif-caption">PEDIDO<br />EM FLUXO</span>
        </div>
        <span className="final-cta__index" aria-hidden="true">QR / 06</span>
      </div>
    </section>
  );
}
