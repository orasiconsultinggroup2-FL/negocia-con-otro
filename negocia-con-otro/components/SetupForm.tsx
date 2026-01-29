import React, { useState } from 'react';

interface SetupFormProps {
  onStart: (config: { buyerName: string; product: string; budget: number }) => void;
}

const SetupForm: React.FC<SetupFormProps> = ({ onStart }) => {
  const [config, setConfig] = useState({
    buyerName: '',
    product: '',
    budget: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (config.buyerName && config.product && config.budget > 0) {
      onStart(config);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
      <div className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Nombre del Comprador</label>
            <div className="relative">
              <input
                type="text"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="Ej. Fernando"
                onChange={(e) => setConfig({ ...config, buyerName: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Producto a Negociar</label>
            <div className="relative">
              <input
                type="text"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="Ej. Consultoría ORASI"
                onChange={(e) => setConfig({ ...config, product: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Presupuesto Estimado</label>
            <div className="relative">
              <input
                type="number"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="0.00"
                onChange={(e) => setConfig({ ...config, budget: Number(e.target.value) })}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0f172a] text-white font-black py-5 rounded-2xl hover:bg-blue-900 transition-all shadow-2xl uppercase tracking-[0.3em] text-sm transform hover:scale-[1.02] active:scale-95 border border-white/10"
          >
            Iniciar Negociacion
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetupForm;
