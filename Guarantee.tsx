
import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-24 bg-red-600 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-64 h-64 flex-shrink-0 bg-white rounded-full p-4 flex items-center justify-center shadow-2xl rotate-[-10deg]">
          <div className="text-center">
            <div className="text-black font-black text-6xl leading-none">30</div>
            <div className="text-black font-black text-2xl uppercase tracking-tighter">DIAS</div>
            <div className="h-1 bg-red-600 my-1 w-20 mx-auto" />
            <div className="text-black font-bold text-[10px] uppercase leading-none">GARANTIA DE<br/>SATISFAÇÃO</div>
          </div>
        </div>

        <div className="text-center md:text-left text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-tight">
            RISCO ZERO PARA VOCÊ!<br/>SUA POTÊNCIA OU SEU DINHEIRO DE VOLTA
          </h2>
          <p className="text-xl font-medium leading-relaxed opacity-90">
            Estamos tão confiantes na eficácia do EREXMAX que oferecemos um desafio: 
            use o produto por 30 dias seguindo as instruções. Se você não notar uma melhora real na sua 
            disposição e desempenho, nós devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
