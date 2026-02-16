
import React from 'react';
import { Zap, Target, Flame, Heart, Sparkles, Battery } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Ereções 3x mais potentes",
      desc: "Fluxo sanguíneo cavernoso otimizado para rigidez máxima."
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: "Libido Explosiva",
      desc: "Recupere o apetite sexual que você tinha na adolescência."
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Energia Infinita",
      desc: "Disposição para aguentar noites inteiras sem cansar."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Controle Total",
      desc: "Domine o tempo e acabe com a ejaculação precoce."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Mais Confiança",
      desc: "Sinta-se um macho alfa novamente em qualquer situação."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Saúde Vascular",
      desc: "Fórmula natural que ajuda na circulação e vigor físico."
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-zinc-900/50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-red-600 rounded-full blur-[120px] opacity-10" />
            <img 
              src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=2000&auto=format&fit=crop" 
              alt="Lifestyle Masculino" 
              className="relative rounded-3xl grayscale brightness-50 contrast-125 border-4 border-zinc-800"
            />
            <div className="absolute -top-10 -left-10 bg-red-600 p-8 rounded-full border-8 border-black font-black text-3xl rotate-12">
              100%<br/><span className="text-xl">NATURAL</span>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              A FÓRMULA QUE VAI <span className="text-red-600 underline">REVOLUCIONAR</span> SUA VIDA
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-red-600 p-3 rounded-xl h-fit shadow-lg shadow-red-600/20">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-1">{benefit.title}</h4>
                    <p className="text-sm text-zinc-400 leading-snug">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
