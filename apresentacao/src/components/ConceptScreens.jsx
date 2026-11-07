import { BrandMark } from './Brand';
import { Icon } from './Icon';

const orderRows = [
  { table: 'Mesa 04', detail: 'Pedido em andamento', state: 'Em preparo', tone: 'sage' },
  { table: 'Novo pedido', detail: 'Aguardando operação', state: 'Recebido', tone: 'amber' },
  { table: 'Mesa 07', detail: 'Atendimento em curso', state: 'Em atendimento', tone: 'clay' },
];

export function DashboardSketch({ compact = false }) {
  return (
    <div className={`dashboard-sketch${compact ? ' dashboard-sketch--compact' : ''}`} aria-hidden="true">
      <div className="dashboard-sketch__topbar">
        <div className="dashboard-sketch__brand"><BrandMark size={22} /><span>QRAdmin</span></div>
        <span className="dashboard-sketch__top-label">ESTUDO DE INTERFACE</span>
        <div className="dashboard-sketch__window-dots"><i /><i /><i /></div>
      </div>
      <div className="dashboard-sketch__layout">
        <aside className="dashboard-sketch__rail">
          <span className="dashboard-sketch__rail-mark"><Icon name="grid" size={15} /></span>
          <span><Icon name="table" size={15} /></span>
          <span><Icon name="receipt" size={15} /></span>
          <span><Icon name="wallet" size={15} /></span>
          <span className="dashboard-sketch__rail-bottom"><Icon name="users" size={15} /></span>
        </aside>
        <div className="dashboard-sketch__content">
          <div className="dashboard-sketch__crumb">OPERAÇÃO <span>/</span> VISÃO DO SALÃO</div>
          <div className="dashboard-sketch__heading">
            <div>
              <p>Rotina do estabelecimento</p>
              <h3>Acompanhar o serviço</h3>
            </div>
            <span className="dashboard-sketch__date">VISUAL CONCEITUAL</span>
          </div>
          <div className="dashboard-sketch__overview">
            <div className="dashboard-sketch__overview-copy">
              <span className="dashboard-sketch__mini-label">PERCURSO DO PEDIDO</span>
              <strong>Do salão à cozinha</strong>
              <span className="dashboard-sketch__overview-line"><i /><i /><i /><i /></span>
              <span className="dashboard-sketch__overview-foot">Atendimento <b>→</b> preparo <b>→</b> entrega</span>
            </div>
            <div className="dashboard-sketch__table-map">
              <div className="dashboard-sketch__map-head"><span>Salão</span><span><i /> exemplo</span></div>
              <div className="dashboard-sketch__tables">
                <span className="table-chip table-chip--active">04</span>
                <span className="table-chip">06</span>
                <span className="table-chip table-chip--waiting">07</span>
                <span className="table-chip">08</span>
              </div>
            </div>
          </div>
          <div className="dashboard-sketch__list-head"><span>ACOMPANHAMENTO</span><span>STATUS</span></div>
          <div className="dashboard-sketch__orders">
            {orderRows.slice(0, compact ? 2 : 3).map((row) => (
              <div className="dashboard-sketch__order" key={row.table}>
                <span className={`dashboard-sketch__order-mark dashboard-sketch__order-mark--${row.tone}`}><Icon name="receipt" size={13} /></span>
                <span className="dashboard-sketch__order-name"><strong>{row.table}</strong><small>{row.detail}</small></span>
                <span className={`dashboard-sketch__status dashboard-sketch__status--${row.tone}`}>{row.state}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const menuItems = [
  { title: 'Sanduíche da casa', detail: 'Pão, folhas frescas e molho da casa', mark: '01' },
  { title: 'Batatas rústicas', detail: 'Porção para compartilhar', mark: '02' },
  { title: 'Suco do dia', detail: 'Feito na hora', mark: '03' },
];

export function MenuPhoneSketch() {
  return (
    <div className="menu-phone-sketch" aria-hidden="true">
      <div className="menu-phone-sketch__speaker" />
      <div className="menu-phone-sketch__screen">
        <div className="menu-phone-sketch__status"><span>QRADMIN · EXEMPLO</span><span>•••</span></div>
        <div className="menu-phone-sketch__cover">
          <span className="menu-phone-sketch__cover-mark"><Icon name="utensils" size={16} /></span>
          <span className="menu-phone-sketch__cover-kicker">CARDÁPIO DIGITAL</span>
          <strong>Escolha com calma.</strong>
          <span className="menu-phone-sketch__cover-line" />
        </div>
        <div className="menu-phone-sketch__body">
          <div className="menu-phone-sketch__section-head"><span>Para começar</span><span>Ver itens <Icon name="arrow-right" size={11} /></span></div>
          {menuItems.map((item) => (
            <div className="menu-phone-sketch__item" key={item.mark}>
              <span className={`menu-phone-sketch__food menu-phone-sketch__food--${item.mark}`}><i /><i /><i /></span>
              <span className="menu-phone-sketch__item-copy"><strong>{item.title}</strong><small>{item.detail}</small></span>
              <span className="menu-phone-sketch__add"><Icon name="plus" size={12} /></span>
            </div>
          ))}
          <div className="menu-phone-sketch__cart"><span>Pedido de exemplo</span><span>Continuar <Icon name="arrow-right" size={13} /></span></div>
        </div>
      </div>
    </div>
  );
}
