
import React from 'react';
import { Star, ThumbsUp, MessageSquare, Heart } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Marcos Oliveira",
      age: 48,
      location: "São Paulo, SP",
      comment: "Cara, minha vida mudou da água pro vinho. Eu tava quase me separando porque não tinha mais vontade de nada. Com 2 semanas de EREXMAX eu virei outro homem. Minha esposa tá impressionada!",
      verified: true
    },
    {
      name: "João Pedro",
      age: 35,
      location: "Curitiba, PR",
      comment: "Achei que era só papo de internet, mas o negócio é bruto mesmo. A rigidez é absurda, parece que eu voltei aos 18 anos. Recomendo pra quem quer performance de verdade.",
      verified: true
    },
    {
      name: "Roberto S.",
      age: 55,
      location: "Salvador, BA",
      comment: "Melhor investimento que já fiz. Além da disposição na cama, me sinto mais focado no trabalho e com muito mais energia no dia a dia. Chega rápido e é bem discreto.",
      verified: true
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase italic tracking-tighter">
            Resultados Reais de Homens <span className="text-red-600 underline">Comuns</span>
          </h2>
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">Baseado em milhares de feedbacks recebidos</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 bg-red-600/10 text-red-600">
                <ThumbsUp className="w-6 h-6" />
              </div>
              
              <div className="flex gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>

              <p className="text-zinc-300 italic mb-8 leading-relaxed font-medium">
                "{item.comment}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center font-black text-xl text-red-600">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-black text-lg">{item.name}, {item.age} anos</h4>
                  <p className="text-xs text-zinc-500 font-bold uppercase">{item.location}</p>
                </div>
              </div>

              {item.verified && (
                <div className="mt-4 inline-flex items-center gap-1.5 text-green-500 text-[10px] font-black uppercase tracking-widest border border-green-500/30 px-2 py-0.5 rounded-full">
                  Compra Verificada
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-zinc-900 rounded-3xl p-8 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i+40}/100/100`} className="w-12 h-12 rounded-full border-4 border-zinc-900" alt="user" />
              ))}
            </div>
            <div>
              <div className="text-xl font-black">4.9/5 Estrelas</div>
              <div className="text-sm text-zinc-500 font-bold">Baseado em 14.802 avaliações</div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-black px-4 py-2 rounded-xl text-xs font-bold border border-zinc-800">
              <MessageSquare className="w-4 h-4 text-red-600" /> +200 Comentários hoje
            </div>
            <div className="flex items-center gap-2 bg-black px-4 py-2 rounded-xl text-xs font-bold border border-zinc-800">
              <Heart className="w-4 h-4 text-red-600" /> 98% de aprovação
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
