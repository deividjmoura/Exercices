import { Icon } from '../components/Icon';
import { SectionIntro } from '../components/SectionIntro';

const steps = [
  { number: '01', title: 'Acessar', description: 'O cliente abre o cardápio digital pelo QR Code.', icon: 'qr', group: 'NA MESA' },
  { number: '02', title: 'Escolher', description: 'Consulta os itens e prepara o pedido.', icon: 'grid', group: 'NA MESA' },
  { number: '03', title: 'Encaminhar', description: 'O pedido segue para o fluxo de atendimento.', icon: 'receipt', group: 'NA OPERAÇÃO' },
  { number: '04', title: 'Preparar', description: 'A equipe acompanha preparo e entrega.', icon: 'utensils', group: 'NA OPERAÇÃO' },
  { number: '05', title: 'Fechar', description: 'O estabelecimento registra o pagamento e encerra a conta.', icon: 'wallet', group: 'NO CAIXA' },
  { number: '06', title: 'Acompanhar', description: 'A administração consulta histórico e informações gerenciais.', icon: 'chart', group: 'NA GESTÃO' },
];

export function FlowSection() {
  return (
    <section className="flow-section" id="como-funciona" aria-labelledby="flow-title">
      <div className="page-shell">
        <div className="flow-section__heading">
          <SectionIntro eyebrow="UM FLUXO, DIFERENTES PONTOS DE CONTATO" title="Da escolha ao fechamento, etapa por etapa." id="flow-title">
            <p>Esta é a jornada descrita para o QRAdmin. A sequência ajuda a visualizar como os contextos poderiam se encontrar durante um serviço.</p>
          </SectionIntro>
          <p className="flow-section__stamp"><span>01 — 06</span><br />FLUXO CONCEITUAL<br />DO PRODUTO</p>
        </div>

        <ol className="flow-track">
          {steps.map((step) => (
            <li className="flow-step" key={step.number}>
              <span className="flow-step__group">{step.group}</span>
              <span className="flow-step__marker"><span>{step.number}</span><Icon name={step.icon} size={19} /></span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="flow-section__foot">
          <span className="flow-section__foot-line" />
          <p><strong>Importante:</strong> o fluxo acima traduz o escopo fornecido para esta apresentação; não confirma a implementação ou disponibilidade de cada etapa.</p>
        </div>
      </div>
    </section>
  );
}
