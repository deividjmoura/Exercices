import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { ValueSection } from './sections/ValueSection';
import { FlowSection } from './sections/FlowSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { ProductSection } from './sections/ProductSection';
import { AudienceSection } from './sections/AudienceSection';
import { PrinciplesSection } from './sections/PrinciplesSection';
import { FinalCta } from './sections/FinalCta';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <ValueSection />
        <FlowSection />
        <FeaturesSection />
        <ProductSection />
        <AudienceSection />
        <PrinciplesSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
