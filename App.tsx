
import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Truck, 
  CheckCircle, 
  Star, 
  Flame, 
  Clock, 
  Lock, 
  MessageSquare, 
  ThumbsUp,
  Heart,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    const element = document.getElementById('ofertas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-red-600 selection:text-white">
      <Header onCtaClick={scrollToPricing} />
      
      <main>
        <Hero onCtaClick={scrollToPricing} />
        
        <section className="bg-red-600 py-4 overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee gap-8 items-center text-sm md:text-lg font-black italic tracking-tighter uppercase">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Flame className="w-5 h-5" />
                <span>OFERTA LIMITADA: 47% DE DESCONTO HOJE</span>
                <Flame className="w-5 h-5" />
                <span>RESTAM APENAS 14 UNIDADES</span>
              </div>
            ))}
          </div>
        </section>

        <PainPoints />
        <Benefits />
        
        <div className="bg-gradient-to-b from-zinc-900 to-black py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
              VOCÊ NÃO MERECE UMA VIDA DE <span className="text-red-600 underline">FRUSTRAÇÕES</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-10">
              A falta de libido e o desempenho ruim na cama acabam com a autoestima de qualquer homem. 
              O EREXMAX foi desenvolvido com tecnologia de ponta para restaurar sua confiança masculina.
            </p>
            <button 
              onClick={scrollToPricing}
              className="bg-red-600 hover:bg-red-700 text-white font-black py-5 px-10 rounded-full text-xl uppercase shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all hover:scale-105 flex items-center gap-3 mx-auto"
            >
              Quero Minha Virilidade de Volta <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <Testimonials />
        <Pricing />
        <Guarantee />
        <FAQ />
      </main>

      <Footer />

      {/* Sticky Mobile CTA */}
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-zinc-900/90 backdrop-blur-md border-t border-zinc-800 transition-transform duration-500 z-50 md:hidden ${showStickyCTA ? 'translate-y-0' : 'translate-y-full'}`}>
        <button 
          onClick={scrollToPricing}
          className="w-full bg-red-600 text-white font-black py-4 rounded-lg uppercase shadow-xl active:scale-95 transition-all"
        >
          Aproveitar Desconto Agora
        </button>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
