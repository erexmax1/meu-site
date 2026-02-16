
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: "O EREXMAX tem contraindicações?",
      a: "Não. Por ser um suplemento 100% natural com ingredientes selecionados, não apresenta efeitos colaterais. No entanto, recomendamos que pessoas com doenças pré-existentes ou que tomam medicação controlada consultem um médico."
    },
    {
      q: "Em quanto tempo verei os resultados?",
      a: "A maioria dos homens relata aumento na disposição já na primeira semana. Para resultados sólidos em rigidez e libido, recomendamos o uso contínuo de pelo menos 3 meses."
    },
    {
      q: "A entrega é discreta?",
      a: "Sim, 100%. A embalagem é parda, sem logos ou nomes que indiquem o conteúdo. Nem o porteiro saberá o que você comprou."
    },
    {
      q: "Como devo tomar?",
      a: "Recomenda-se a ingestão de 2 cápsulas ao dia, preferencialmente 30 minutos antes das principais refeições."
    },
    {
      q: "Qual o prazo de entrega?",
      a: "O prazo médio é de 5 a 12 dias úteis, variando de acordo com a sua região."
    }
  ];

  return (
    <section className="py-24 bg-black px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16 uppercase italic">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
              <button 
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-zinc-800/50 transition-colors"
              >
                <span className="font-black text-lg">{faq.q}</span>
                {open === idx ? <ChevronUp className="text-red-600" /> : <ChevronDown className="text-zinc-600" />}
              </button>
              {open === idx && (
                <div className="px-6 pb-6 text-zinc-400 font-medium leading-relaxed animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default FAQ;
