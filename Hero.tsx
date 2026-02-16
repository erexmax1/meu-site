
import React from 'react';
import { ShieldCheck, ArrowRight, Flame, Star, CheckCircle } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-zinc-950">
      {/* Padrão Hexagonal de Fundo (Combinando com o rótulo) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cpath fill='%23ef4444' fill-opacity='0.4' d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.32v12.68l10.99 6.34 11-6.34V17.32l-11-6.34L3 17.32z'/%3E%3C/svg%3E")`,
        backgroundSize: '40px'
      }} />

      {/* Luzes de Fundo Dinâmicas - Intensificadas para compensar a falta de foto */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/30 rounded-full blur-[140px] -z-10 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left z-20">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg text-xs font-black uppercase mb-8 shadow-[0_10px_30px_rgba(220,38,38,0.4)]">
            <Flame className="w-4 h-4" /> 
            PRODUTO ORIGINAL - FÓRMULA EXCLUSIVA
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black leading-[0.8] mb-6 uppercase tracking-tighter italic">
            <span className="text-white">EREX</span><span className="text-red-600 underline decoration-blue-600/50">MAX</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-zinc-300 font-bold mb-12 max-w-xl leading-tight">
            Recupere sua masculinidade hoje. Ereções rígidas, libido explosiva e disposição infinita.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
            <button 
              onClick={onCtaClick}
              className="bg-red-600 hover:bg-red-700 text-white font-black py-7 px-12 rounded-2xl text-2xl uppercase shadow-[0_20px_50px_rgba(220,38,38,0.5)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-4 group"
            >
              ATIVAR MINHA POTÊNCIA <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="flex flex-wrap gap-8 justify-center lg:justify-start items-center">
            <div className="flex items-center gap-2 text-sm font-black text-green-500 uppercase">
              <ShieldCheck className="w-6 h-6" /> 100% Seguro e Discreto
            </div>
            <div className="flex items-center gap-2 text-sm font-black text-zinc-400 uppercase">
              <Star className="w-6 h-6 text-yellow-500 fill-current" /> Nota 4.9/5
            </div>
          </div>
        </div>

        <div className="flex-1 relative mt-12 lg:mt-0 w-full flex justify-center items-center">
          <div className="relative z-10 w-full max-w-lg flex justify-center items-center min-h-[400px]">
            
            {/* SELO RESULTADO GARANTIDO CENTRALIZADO (Substituindo a imagem) */}
            <div className="relative group">
              <div className="absolute inset-0 bg-red-600/20 blur-[100px] rounded-full group-hover:bg-red-600/40 transition-colors duration-1000" />
              
              <div className="relative bg-white p-10 md:p-14 rounded-full shadow-[0_40px_100px_rgba(220,38,38,0.5)] z-40 transform rotate-6 border-[12px] border-blue-600 animate-bounce-slow flex flex-col items-center justify-center text-center">
                <CheckCircle className="w-20 h-20 text-green-500 mb-3 drop-shadow-lg" />
                <div className="text-zinc-950 text-sm font-black uppercase tracking-[0.2em] leading-none mb-2">Eficácia Científica</div>
                <div className="text-5xl font-black text-red-600 leading-none tracking-tighter">RESULTADO</div>
                <div className="text-4xl font-black text-zinc-900 leading-none uppercase tracking-tighter">GARANTIDO</div>
                <div className="mt-4 h-3 w-full bg-red-600 rounded-full" />
                <div className="mt-2 text-zinc-500 font-bold text-xs uppercase">Ou seu dinheiro de volta</div>
              </div>

              {/* Elementos decorativos de fundo para preencher o espaço */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-red-600/20 rounded-full animate-ping opacity-20" />
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-blue-600/10 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(6deg) scale(1); }
          50% { transform: translateY(-25px) rotate(10deg) scale(1.05); }
        }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
