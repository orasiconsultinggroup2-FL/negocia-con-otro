
import React from 'react';
import { NegotiationResult } from '../types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface ResultsViewProps {
  result: NegotiationResult;
  onReset: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ result, onReset }) => {
  const chartData = [
    { subject: 'Intereses', A: result.puntuacion_intereses, fullMark: 100 },
    { subject: 'Creatividad', A: result.puntuacion_creatividad, fullMark: 100 },
  ];

  const barData = [
    { name: 'Intereses', score: result.puntuacion_intereses, fill: '#3b82f6' },
    { name: 'Creatividad', score: result.puntuacion_creatividad, fill: '#10b981' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 text-center">
        <div className="inline-block p-4 rounded-full bg-blue-50 text-blue-600 mb-4">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Simulación Finalizada</h2>
        <p className="text-slate-500 max-w-lg mx-auto italic">“En la negociación, la preparación es la diferencia entre un acuerdo y una concesión”</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 flex flex-col items-center justify-center">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Análisis de Desempeño</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="score" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl shadow-lg text-white flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.464 15.657a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zM10 8a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              Feedback Orasi CG
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              {result.analisis_feedback}
            </p>
          </div>
          <div className="pt-6 border-t border-slate-700">
             <div className="text-sm uppercase tracking-widest text-slate-500 mb-2 font-bold">Próximos Pasos</div>
             <p className="text-blue-400 font-bold text-lg mb-4">{result.cta}</p>
             <button 
                onClick={onReset}
                className="w-full py-3 px-4 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-100 transition-colors"
             >
               Nueva Simulación
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
