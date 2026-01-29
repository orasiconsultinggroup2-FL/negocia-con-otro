import React, { useState } from 'react';
import { SetupForm } from './components/SetupForm';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Header oficial ORASI Lab - Fondo Oscuro */}
      <header className="bg-[#0f172a] border-b border-slate-800 py-6 px-8 sticky top-0 z-20 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-col items-start">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <span className="text-white font-bold text-xl">🏛️</span>
            </div>
            <div className="flex items-baseline">
              <span className="text-2xl font-black text-white tracking-tighter uppercase">ORASI</span>
              <span className="text-2xl font-light text-[#00AEEF] tracking-tighter ml-1 uppercase">LAB</span>
            </div>
          </div>
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-400 mt-1 pl-1">
            Negocia con otro
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-8">
        {!started ? (
          <div className="space-y-12 animate-in fade-in duration-500">
            <div className="text-center space-y-3 mt-8">
              <h1 className="text-5xl font-black text-slate-900 tracking-tight uppercase">
                Domina la Negociación
              </h1>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light italic">
                Simulador Senior de ORASI Lab. Entrena con autoridad.
              </p>
            </div>
            {/* Formulario con los campos que quieres */}
            <SetupForm onStart={() => setStarted(true)} />
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 uppercase">Protocolo Iniciado</h2>
            <p className="text-slate-500 mt-2 italic">El negociador senior está analizando tu caso...</p>
          </div>
        )}
      </main>

      <footer className="py-8 text-center text-slate-300 text-[10px] uppercase tracking-[0.5em] border-t border-slate-100 mt-auto">
        © 2026 ORASI LAB. DESARROLLO DE HABILIDADES DE NEGOCIACIÓN.
      </footer>
    </div>
  );
}

export default App;
