
import React from 'react';
import { Lock } from 'lucide-react';

interface HeaderProps {
  onCtaClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-0 group cursor-pointer">
        <span className="text-2xl font-black tracking-tighter text-white">EREX</span>
        <span className="text-2xl font-black tracking-tighter text-red-600 group-hover:translate-x-0.5 transition-transform italic">MAX</span>
      </div>
      
      <nav className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-zinc-400">
        <a href="#beneficios" className="hover:text-red-500 transition-colors">Benefícios</a>
        <a href="#depoimentos" className="hover:text-red-500 transition-colors">Resultados</a>
        <a href="#ofertas" className="hover:text-red-500 transition-colors">Preços</a>
      </nav>

      <button 
        onClick={onCtaClick}
        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-bold text-sm uppercase transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(220,38,38,0.3)]"
      >
        <Lock className="w-4 h-4" /> Comprar
      </button>
    </header>
  );
};

export default Header;
