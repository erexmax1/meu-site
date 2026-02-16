
import React from 'react';
import { AlertCircle, Brain, BatteryLow, HeartCrack } from 'lucide-react';

const PainPoints: React.FC = () => {
  const pains = [
    {
      icon: <HeartCrack className="w-10 h-10 text-red-600" />,
      title: "Medo de falhar?",
      desc: "Aquela ansiedade de 'não conseguir' estraga o clima e acaba com seu psicológico."
    },
    {
      icon: <Brain className="w-10 h-10 text-red-600" />,
      title: "Cansaço Mental",
      desc: "O estresse do dia a dia mata sua libido. Você chega em casa e só quer dormir."
    },
    {
      icon: <BatteryLow className="w-10 h-10 text-red-600" />,
      title: "Falta de Rigidez",
      desc: "Ereções meia-bomba que não satisfazem você e muito menos a sua parceira."
    }
  ];

  return (
    <section className="py-24 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">Você se sente assim?</h2>
          <div className="h-1.5 w-24 bg-red-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((pain, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-red-600 transition-colors group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform">
                {pain.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase">{pain.title}</h3>
              <p className="text-zinc-400 font-medium leading-relaxed">
                {pain.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
