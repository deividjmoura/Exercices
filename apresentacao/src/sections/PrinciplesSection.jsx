import { Icon } from '../components/Icon';
import { SectionIntro } from '../components/SectionIntro';

const principles = [
  { number: '01', icon: 'layers', title: 'Centralizar', text: 'Aproximar atendimento, operação e administração em um só percurso de trabalho.' },
  { number: '02', icon: 'receipt', title: 'Dar continuidade', text: 'Manter o pedido relacionado às etapas que vêm antes e depois da cozinha.' },
  { number: '03', icon: 'wallet', title: 'Organizar o fechamento', text: 'Reunir o registro de pagamentos e o histórico da operação no contexto da gestão.' },
  { number: '04', icon: 'chart', title: 'Enxergar a rotina', text: 'Apoiar a consulta de informações gerenciais com contexto para a tomada de decisão.' }
];

export function PrinciplesSection() {
  return (
    <section className="principles-section" id="diferenciais" aria-labelledby="principles-title">
      <div className="page-shell">
        <div className="principles-section__heading">
          <SectionIntro eyebrow="DIFERENCIAIS PRETENDIDOS" title="Sem cifras de palco. Uma proposta de operação mais conectada." id="principles-title">
            <p>Não há dados verificáveis de clientes, resultados ou depoimentos disponíveis neste repositório. Por isso, os diferenciais são apresentados como princípios do produto — não como resultados comprovados.</p>
          </SectionIntro>
          <span className="principles-section__seal" aria-hidden="true"><span>QR</span><span>ADMIN</span><i /></span>
        </div>
        <div className="principle-list">
          {principles.map((principle) => (
            <article className="principle" key={principle.number}>
              <span className="principle__number">{principle.number}</span>
              <span className="principle__icon"><Icon name={principle.icon} size={20} /></span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
              <span className="principle__mark" aria-hidden="true">+</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
