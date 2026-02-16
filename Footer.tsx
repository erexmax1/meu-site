
import React from 'react';
import { Lock, ShieldCheck, CreditCard } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-red-600 text-white font-black p-1 text-xs rounded">EREX</div>
              <span className="text-2xl font-black tracking-tighter uppercase">MAX</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-md">
              EREXMAX é um suplemento alimentat 100% natural, desenvolvido para homens que buscam 
              melhorar sua qualidade de vida sexual e disposição física. Este produto não é um medicamento 
              e os resultados podem variar de acordo com o metabolismo de cada indivíduo.
            </p>
          </div>

          <div>
            <h4 className="font-black uppercase text-sm mb-6 text-zinc-300">Links Úteis</h4>
            <ul className="space-y-4 text-xs font-bold uppercase text-zinc-500">
              <li><a href="#" className="hover:text-red-600">Políticas de Privacidade</a></li>
              <li><a href="#" className="hover:text-red-600">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-red-600">Rastrear Pedido</a></li>
              <li><a href="#" className="hover:text-red-600">Revenda</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase text-sm mb-6 text-zinc-300">Segurança</h4>
            <div className="flex gap-4">
              <div className="bg-zinc-900 p-2 rounded-lg border border-zinc-800">
                <ShieldCheck className="w-8 h-8 text-green-500" />
              </div>
              <div className="bg-zinc-900 p-2 rounded-lg border border-zinc-800">
                <Lock className="w-8 h-8 text-blue-500" />
              </div>
              <div className="bg-zinc-900 p-2 rounded-lg border border-zinc-800">
                <CreditCard className="w-8 h-8 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900 text-center">
          <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest leading-loose">
            © 2024 EREXMAX - TODOS OS DIREITOS RESERVADOS.<br/>
            PROIBIDA A REPRODUÇÃO TOTAL OU PARCIAL SEM AUTORIZAÇÃO PRÉVIA.<br/>
            EREXMAX LABS - CNPJ: 00.000.000/0000-00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
