import { useState } from 'react';
import { BrandMark } from '../components/Brand';
import { Icon } from '../components/Icon';
import { SectionIntro } from '../components/SectionIntro';

const capabilities = [
  {
    id: 'atendimento',
    label: 'Atendimento',
    kicker: '01 / SALÃO',
    title: 'Do QR à mesa.',
    description: 'O escopo informado reúne cardápio digital, produtos, categorias, mesas, sessões de atendimento e pedidos.',
    items: ['Cardápio digital e QR Code', 'Mesas e sessões', 'Pedidos'],
    rows: [
      { icon: 'qr', title: 'Cardápio do cliente', detail: 'Acesso pelo QR Code' },
      { icon: 'table', title: 'Mesa e sessão', detail: 'Contexto do atendimento' },
      { icon: 'receipt', title: 'Pedido', detail: 'Itens e observações' },
    ],
    connected: ['Cardápio', 'Mesa', 'Pedido'],
  },
  {
    id: 'operacao',
    label: 'Operação',
    kicker: '02 / SERVIÇO',
    title: 'Do pedido à entrega.',
    description: 'A rotina prevista aproxima acompanhamento de pedidos, preparação, entrega e atuação dos garçons.',
    items: ['Acompanhamento de pedidos', 'Preparação e entrega', 'Equipe de salão'],
    rows: [
      { icon: 'receipt', title: 'Pedido recebido', detail: 'Entrada no fluxo de serviço' },
      { icon: 'utensils', title: 'Preparação', detail: 'Acompanhamento da cozinha' },
      { icon: 'check', title: 'Entrega', detail: 'Conclusão do atendimento' },
    ],
    connected: ['Atendimento', 'Cozinha', 'Entrega'],
  },
  {
    id: 'financeiro',
    label: 'Financeiro',
    kicker: '03 / FECHAMENTO',
    title: 'Uma conta que fecha com contexto.',
    description: 'Caixa, fechamento de contas, pagamentos via Pix ou outras formas, comprovantes e histórico de vendas fazem parte do escopo descrito.',
    items: ['Caixa e fechamento', 'Pix e outras formas de pagamento', 'Histórico e comprovantes'],
    rows: [
      { icon: 'wallet', title: 'Fechamento da conta', detail: 'Registro por forma de pagamento' },
      { icon: 'card', title: 'Pix ou outra forma', detail: 'Pagamento informado pela equipe' },
      { icon: 'receipt', title: 'Histórico de vendas', detail: 'Consulta e comprovantes' },
    ],
    connected: ['Conta', 'Pagamento', 'Histórico'],
  },
  {
    id: 'gestao',
    label: 'Administração',
    kicker: '04 / GESTÃO',
    title: 'Cadastros para organizar a casa.',
    description: 'Produtos, categorias, funcionários, gestão administrativa e indicadores aparecem entre os recursos descritos para a plataforma.',
    items: ['Produtos e categorias', 'Funcionários e administração', 'Indicadores gerenciais'],
    rows: [
      { icon: 'box', title: 'Catálogo', detail: 'Produtos, categorias e descrições' },
      { icon: 'users', title: 'Equipe', detail: 'Funcionários e permissões administrativas' },
      { icon: 'chart', title: 'Informações de gestão', detail: 'Indicadores e histórico da operação' },
    ],
    connected: ['Catálogo', 'Equipe', 'Gestão'],
  },
];

function FeatureStage({ capability }) {
  return (
    <div className="feature-stage" aria-live="polite" aria-atomic="true">
      <div className="feature-stage__topline">
        <span><BrandMark size={22} /> QRADMIN / ESCOPO INFORMADO</span>
        <span className="feature-stage__concept"><i /> ESTUDO DE INTERFACE</span>
      </div>
      <div className="feature-stage__heading">
        <div><span className="feature-stage__kicker">{capability.kicker}</span><h3>{capability.title}</h3></div>
        <span className="feature-stage__index">0{capabilities.findIndex((item) => item.id === capability.id) + 1}</span>
      </div>
      <div className="feature-stage__body">
        <div className="feature-stage__rows">
          {capability.rows.map((row) => (
            <div className="feature-stage__row" key={row.title}>
              <span className="feature-stage__row-icon"><Icon name={row.icon} size={17} /></span>
              <span className="feature-stage__row-copy"><strong>{row.title}</strong><small>{row.detail}</small></span>
              <Icon className="feature-stage__row-arrow" name="arrow-up-right" size={15} />
            </div>
          ))}
        </div>
        <div className="feature-stage__connections">
          <span className="feature-stage__connections-label">PONTOS RELACIONADOS</span>
          {capability.connected.map((item, index) => (
            <div className="feature-stage__connection" key={item}>
              <span className="feature-stage__connection-number">0{index + 1}</span>
              <span>{item}</span>
              {index < capability.connected.length - 1 && <span className="feature-stage__connection-line" />}
            </div>
          ))}
          <span className="feature-stage__connections-foot">Representação de escopo,<br />não de tela funcional.</span>
        </div>
      </div>
      <div className="feature-stage__bottom"><span>QRADMIN · VISÃO ILUSTRATIVA</span><span>SEM DADOS REAIS</span></div>
    </div>
  );
}

export function FeaturesSection() {
  const [activeId, setActiveId] = useState(capabilities[0].id);
  const activeCapability = capabilities.find((item) => item.id === activeId) ?? capabilities[0];

  return (
    <section className="features-section" id="funcionalidades" aria-labelledby="features-title">
      <div className="page-shell">
        <div className="features-section__heading">
          <SectionIntro eyebrow="RECURSOS POR CONTEXTO DE TRABALHO" title="Não são módulos soltos. São momentos da mesma operação." id="features-title">
            <p>Explore os grupos de recursos descritos para o QRAdmin, da chegada do cliente à visão administrativa.</p>
          </SectionIntro>
          <div className="scope-notice" role="note">
            <Icon name="info" size={19} />
            <div><strong>Escopo informado · disponibilidade não verificada</strong><p>O código da aplicação QRAdmin não está neste repositório. Os módulos abaixo refletem o contexto fornecido e precisam ser confirmados no produto antes de uma publicação comercial.</p></div>
          </div>
        </div>

        <div className="feature-explorer">
          <div className="feature-explorer__menu" aria-label="Escolha um contexto operacional">
            <p className="feature-explorer__menu-label">EXPLORE POR CONTEXTO</p>
            {capabilities.map((capability) => (
              <button
                className={`feature-picker${activeId === capability.id ? ' feature-picker--active' : ''}`}
                type="button"
                key={capability.id}
                aria-pressed={activeId === capability.id}
                aria-controls="feature-stage"
                onClick={() => setActiveId(capability.id)}
              >
                <span className="feature-picker__index">{capability.kicker}</span>
                <span className="feature-picker__main"><strong>{capability.label}</strong><Icon name="arrow-up-right" size={16} /></span>
                <span className="feature-picker__summary">{capability.title}</span>
              </button>
            ))}
            <p className="feature-explorer__menu-foot">Selecione um momento da rotina para ver o escopo relacionado.</p>
          </div>

          <div id="feature-stage" className="feature-explorer__stage">
            <FeatureStage capability={activeCapability} />
          </div>
        </div>

        <div className="features-section__list-note"><span className="features-section__list-rule" /><p>Os nomes e descrições acima são derivados do escopo informado; não representam uma auditoria de disponibilidade ou uma demonstração do sistema ativo.</p></div>
      </div>
    </section>
  );
}
