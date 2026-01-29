import React, { useState } from 'react';
import { NegotiationContext } from '../types';

interface SetupFormProps {
  onStart: (context: NegotiationContext) => void;
}

export const SetupForm: React.FC<SetupFormProps> = ({ onStart }) => {
  const [formData, setFormData] = useState<NegotiationContext>({
    counterpart: '',
    topic: '',
    idealGoal: '',
    redLine: '',
    durationMinutes: 5,
    style: 'competitivo'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStart(formData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-10 rounded-[2rem] shadow-2xl border border-slate-100">
      <div className="flex items-center gap-4 mb-10 border-b border-slate-50 pb-6">
        <div className="bg-[#0f172a] p-3 rounded-xl shadow-lg">
           <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3a10.003 10.003 0 00-6.912 2.753m3.44 2.04l-.054.09A10.003 10.003 0 0112 19.5a10.003 10.003 0 01-6.912-2.753" />
           </svg>
        </div>
        <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">Configuración de Protocolo</h2>
      </div>

      <form onSubmit={handleSubmit} class="space-y-8">
        <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Oponente (Entidad/Cargo)</label>
              <input
                required
                type="text"
                placeholder="Ej: Director Regional de Compras"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-slate-50 placeholder-slate-300"
                value={formData.counterpart}
                onChange={e => setFormData(prev => ({ ...prev, counterpart: e.target.value }))}
              />
            </div>

            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Conflicto / Materia de Negociación</label>
              <textarea
                required
                rows={2}
                placeholder="¿Qué tema crítico se va a decidir?"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-slate-50 placeholder-slate-300"
                value={formData.topic}
                onChange={e => setFormData(prev => ({ ...prev, topic: e.target.value }))}
              />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Tu Objetivo Ideal</label>
            <input
              required
              type="text"
              placeholder="El mejor escenario"
              className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-slate-50 placeholder-slate-300"
              value={formData.idealGoal}
              onChange={e => setFormData(prev => ({ ...prev, idealGoal: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Tu Límite (Línea Roja)</label>
            <input
              required
              type="text"
              placeholder="Punto de abandono"
              className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none transition-all bg-slate-50 placeholder-slate-300 text-red-600 font-medium"
              value={formData.redLine}
              onChange={e => setFormData(prev => ({ ...prev, redLine: e.target.value }))}
            />
          </div>
        </div>

        {/* SECCIÓN DE CAMPOS OSCUROS PREMIUM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-inner">
          <div>
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Estilo del Oponente</label>
            <select
              className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-[#0f172a] text-white font-bold shadow-xl cursor-pointer"
              value={formData.style}
              onChange={e => setFormData(prev => ({ ...prev, style: e.target.value as any }))}
            >
              <option value="competitivo">⚔️ Competitivo (Duro)</option>
              <option value="colaborativo">🤝 Colaborativo (Firme)</option>
              <option value="evitativo">🏃 Evitativo (Evasivo)</option>
              <option value="acomodaticio">🤲 Acomodaticio</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Tiempo Límite</label>
            <select
              className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-[#0f172a] text-white font-bold shadow-xl cursor-pointer"
              value={formData.durationMinutes}
              onChange={e => setFormData(prev => ({ ...prev, durationMinutes: parseInt(e.target.value) }))}
            >
              <option value={2}>⏱️ 2 Minutos (Flash)</option>
              <option value={5}>⏱️ 5 Minutos (Estándar)</option>
              <option value={10}>⏱️ 10 Minutos (Extenso)</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#0f172a] text-white font-black py-5 rounded-2xl hover:bg-blue-900 transition-all shadow-2xl uppercase tracking-[0.3em] text-sm transform hover:scale-[1.02] active:scale-95"
        >
          Iniciar Negociacion
