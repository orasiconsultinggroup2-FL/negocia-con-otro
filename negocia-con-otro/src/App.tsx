import React, { useState } from 'react';
import SetupForm from '../components/SetupForm';

function App() {
  const [config, setConfig] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con Logo ORASI Lab */}
      <header className="bg-white border-b p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <span className="text-white font-bold text-xl">🏛️</span>
          </div>
          <div>
            <h1 className="font-bold text-gray-900 leading-none">ORASI Lab</h1>
            <p className="text-xs text-gray-500 uppercase tracking-tighter">Laboratorio de Negociación</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-4">
        {!config ? (
          <SetupForm onStart={(data) => setConfig(data)} />
        ) : (
          <div className="bg-white p-8 rounded-xl shadow-sm border text-center">
            <h2 className="text-2xl font-bold text-gray-800">Protocolo Iniciado</h2>
            <p className="text-gray-600 mt-2">Conectando con el simulador de IA...</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
