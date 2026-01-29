import React, { useState } from 'react';
import { SetupForm } from './components/SetupForm';
import { ChatInterface } from './components/ChatInterface';
import { ResultsView } from './components/ResultsView';
import { NegotiationContext, NegotiationResult, AppStage } from './types';
import { createNegotiationChat } from './services/geminiService';
import { Chat } from '@google/genai';

const App: React.FC = () => {
  const [stage, setStage] = useState<AppStage>(AppStage.SETUP);
  const [context, setContext] = useState<NegotiationContext | null>(null);
  const [chat, setChat] = useState<Chat | null>(null);
  const [result, setResult] = useState<NegotiationResult | null>(null);

  const handleStart = (config: NegotiationContext) => {
    setContext(config);
    const newChat = createNegotiationChat(config);
    setChat(newChat);
    setStage(AppStage.SIMULATION);
  };

  const handleFinish = (finalResult: NegotiationResult) => {
    setResult(finalResult);
    setStage(AppStage.RESULTS);
  };

  const handleReset = () => {
    setStage(AppStage.SETUP);
    setContext(null);
    setChat(null);
    setResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header con Branding Orasi Lab - Alineado a la izquierda */}
      <header className="bg-[#0f172a] border-b border-slate-800 py-6 px-8 sticky top-0 z-20 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-col items-start">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="ORASI Lab" className="h-10 w-auto" onerror="this.style.display='none'" />
              <div className="flex items-baseline">
                <span className="text-2xl font-black text-white tracking-tighter">ORASI</span>
                <span className="text-2xl font-light text-[#00AEEF] tracking-tighter ml-1">LAB</span>
              </div>
            </div>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-blue-400 mt-1">
              Negocia con otro
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8">
        {stage === AppStage.SETUP && (
          <div className="space-y-12 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="text-center space-y-3 mt-8">
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight uppercase">
                Domina la Negociación
              </h1>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light italic">
                Simulador Senior de ORASI Lab. Entrena con autoridad.
              </p>
            </div>
            <SetupForm onStart={handleStart} />
          </div>
        )}

        {stage === AppStage.SIMULATION && chat && context && (
          <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
               <div className="lg:col-span-1 space-y-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Expediente</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="font-bold text-slate-800 uppercase text-[10px]">Oponente:</div>
                        <div className="text-slate-600 font-medium">{context.counterpart}</div>
                      </div>
                      <div>
                        <div className="font-bold text-slate-800 uppercase text-[10px]">Tema:</div>
                        <div className="text-slate-600 italic">"{context.topic}"</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* BOTÓN WHATSAPP DE APOYO DURANTE LA SIMULACIÓN */}
                  <div className="bg-blue-600 p-5 rounded-2xl shadow-lg text-white">
                    <p className="text-xs font-bold uppercase mb-2">¿Necesitas ayuda experta?</p>
                    <a href="https://wa.me/51986375900?text=Hola%20ORASI%20Lab,%20necesito%20apoyo%20en%20una%20negociación%20real." 
                       target="_blank" 
                       className="text-[11px] font-black underline flex items-center gap-1">
                       Hablar con un Mentor <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
               </div>
               <div className="lg:col-span-3">
                  <ChatInterface chat={chat} context={context} onFinish={handleFinish} />
               </div>
            </div>
          </div>
        )}

        {stage === AppStage.RESULTS && result && (
          <div className="space-y-8 animate-in fade-in duration-700">
            <ResultsView result={result} onReset={handleReset} />
            
            {/* CTA FINAL DE WHATSAPP AL TERMINAR */}
            <div className="max-w-3xl mx-auto bg-[#0f172a] p-10 rounded-[2rem] text-center border-b-4 border-blue-500 shadow-2xl">
                <h2 className="text-white text-2xl font-black uppercase mb-2">¿Deseas información completa?</h2>
                <p className="text-slate-400 text-sm mb-6">Lleva tus resultados al siguiente nivel con una mentoría personalizada de ORASI Lab.</p>
                <a href="https://wa.me/51986375900?text=Hola%20ORASI%20Lab,%20acabo%20de%20terminar%20el%20simulador%20y%20quiero%20información%20completa." 
                   className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-black py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest">
                    <i className="fab fa-whatsapp text-xl"></i> Solicitar Información
                </a>
            </div>
          </div>
        )}
      </main>

      <footer className="py-8 px-6 text-center text-slate-400 text-[10px] uppercase tracking-widest border-t border-slate-200 bg-white mt-auto">
        &copy; {new Date().getFullYear()} Orasi Lab. Desarrollo de Habilidades de Negociación.
      </footer>
    </div>
  );
};

export default App;
