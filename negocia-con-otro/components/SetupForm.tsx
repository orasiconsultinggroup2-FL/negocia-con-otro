import React, { useState } from 'react';

export const SetupForm = ({ onStart }) => {
  const [config, setConfig] = useState({
    oponente: '',
    conflicto: '',
    objetivo: '',
    limite: ''
  });

  return (
    <div className="max-w-2xl mx-auto bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 text-left">
      <div className="flex items-center gap-3 mb-8 border-b pb-6">
        <span className="text-2xl">⚙️</span>
        <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">Configuración de Protocolo</h2>
      </div>

      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onStart(config); }}>
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Oponente (Cargo/Entidad)</label>
          <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 px-6 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ej: Director Comercial" onChange={(e) => setConfig({...config, oponente: e.target.value})} />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Materia del Conflicto</label>
          <textarea required className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 px-6 text-slate-900 h-24 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Describe el tema..." onChange={(e) => setConfig({...config, conflicto: e.target.value})} />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Objetivo Ideal</label>
            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 px-6 text-slate-900" onChange={(e) => setConfig({...config, objetivo: e.target.value})} />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Límite Aceptable</label>
            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 px-6 text-slate-900" onChange={(e) => setConfig({...config, limite: e.target.value})} />
          </div>
        </div>

        <button type="submit" className="w-full bg-[#0f172a] text-white font-black py-5 rounded-2xl hover:bg-blue-600 transition-all shadow-xl uppercase tracking-[0.3em] text-xs">
          Iniciar Negociación
        </button>
      </form>
    </div>
  );
};
