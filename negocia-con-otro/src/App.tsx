import React, { useState } from 'react';
import SetupForm from '../components/SetupForm';

function App() {
  const [config, setConfig] = useState(null);

  const handleStart = (data: any) => {
    console.log('Iniciando protocolo con:', data);
    setConfig(data);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Fondo decorativo para que no sea plano */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-800/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="z-10 w-full max-w-md">
        {/* BLOQUE DE LOGO ORASI LAB */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2rem] shadow-2xl mb-6 border border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <span className="text-white text-4xl">🏛️</span>
          </div>
          <h1 className="text-5xl font-black text-white tracking-tighter mb-2 italic">
            ORASI <span className="text-blue-500 not-italic">Lab</span>
          </h1>
          <p className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.5em] pl-2">
            Laboratorio de Negociación
          </p>
        </div>

        {!config ? (
          <SetupForm onStart={handleStart} />
        ) : (
          <div className="bg-white/5 backdrop-blur-2xl p-12 rounded-[2.5rem] border border-white/10 shadow-2xl text-center">
            <div className="animate-pulse mb-4 flex justify-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mx-1"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full mx-1 opacity-50"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full mx-1 opacity-20"></div>
            </div>
            <h2 className="text-xl font-bold text-white uppercase tracking-widest">Protocolo Iniciado</h2>
            <p className="text-slate-400 text-sm mt-2">Sincronizando con IA de negociación...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
