
import React from 'react';
import { Truck, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      pots: 1,
      title: "Experimentar",
      price: "197,90",
      monthly: "12x de 19,78",
      discount: "0%",
      badge: "Iniciante",
      shipping: "Frete Pago",
      popular: false
    },
    {
      pots: 5,
      title: "Tratamento Máximo",
      price: "497,90",
      monthly: "12x de 49,90",
      discount: "50%",
      badge: "MAIS VENDIDO",
      shipping: "FRETE GRÁTIS",
      popular: true
    },
    {
      pots: 3,
      title: "Recomendado",
      price: "347,90",
      monthly: "12x de 34,90",
      discount: "35%",
      badge: "Melhor Custo",
      shipping: "FRETE GRÁTIS",
      popular: false
    }
  ];

  return (
    <section id="ofertas" className="py-24 bg-zinc-950 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-red-600/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter italic">
            ESCOLHA SEU <span className="text-red-600">COMBO</span> ABAIXO
          </h2>
          <p className="text-zinc-400 font-bold uppercase tracking-widest text-sm">
            PROMOÇÃO VÁLIDA SOMENTE ENQUANTO DURAREM OS ESTOQUES
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-end">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-zinc-900 border-2 rounded-[2rem] p-8 transition-all hover:scale-[1.02] ${plan.popular ? 'border-red-600 shadow-[0_20px_60px_rgba(220,38,38,0.2)] md:scale-110 z-10 bg-gradient-to-b from-zinc-900 to-black' : 'border-zinc-800 shadow-xl'}`}
            >
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest ${plan.popular ? 'bg-red-600 text-white animate-pulse' : 'bg-zinc-800 text-zinc-400'}`}>
                  {plan.badge}
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-black mb-2 uppercase">{plan.title}</h3>
                <div className="text-4xl font-black text-red-600 mb-1">{plan.pots} {plan.pots === 1 ? 'POTE' : 'POTES'}</div>
                <div className="text-zinc-500 text-sm font-bold uppercase">{plan.discount} DE DESCONTO</div>
              </div>

              <div className="space-y-4 mb-10">
                {[
                  "Ereções Instantâneas", 
                  "Libido Renovada", 
                  "Energia e Foco", 
                  "Formula 100% Natural",
                  plan.shipping
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-bold">
                    <CheckCircle2 className={`w-5 h-5 ${plan.popular ? 'text-red-600' : 'text-zinc-600'}`} />
                    <span className={item.includes("GRÁTIS") ? "text-green-500" : "text-zinc-400"}>{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center border-t border-zinc-800 pt-8">
                <div className="text-zinc-500 line-through text-sm font-bold mb-1">R$ {(parseFloat(plan.price) * 1.5).toFixed(2)}</div>
                <div className="text-zinc-400 text-sm font-bold uppercase">POR APENAS</div>
                <div className="text-5xl font-black mb-4 tracking-tighter">R$ {plan.price}</div>
                <div className="text-red-600 font-black mb-8 italic">{plan.monthly}</div>

                <button className={`w-full py-5 rounded-2xl font-black uppercase text-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 ${plan.popular ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-white text-black hover:bg-zinc-200'}`}>
                  COMPRAR AGORA <Zap className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-10 opacity-50 grayscale">
          <div className="flex flex-col items-center gap-2">
            <Truck className="w-10 h-10" />
            <span className="text-xs font-black uppercase">Entrega Discreta</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="w-10 h-10" />
            <span className="text-xs font-black uppercase">Pagamento Seguro</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CheckCircle2 className="w-10 h-10" />
            <span className="text-xs font-black uppercase">Garantia de 30 dias</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
