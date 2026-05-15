import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CredibilityStrip } from './components/CredibilityStrip';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Differentials } from './components/Differentials';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="bg-azimute-bg text-azimute-black font-sans">
      <Header />
      <main>
        <Hero />
        <CredibilityStrip />
        <Services />
        <Process />
        <Differentials />
        <Portfolio />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
