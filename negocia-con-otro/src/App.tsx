import SetupForm from '../components/SetupForm'

function App() {
  const handleStart = (config: any) => {
    console.log('Iniciando con:', config);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
      {/* Logo ORASI Lab */}
      <div className="mb-8 text-center">
        <h1 class="text-4xl font-bold text-white mb-2">🏛️ ORASI Lab</h1>
        <p class="text-slate-400 uppercase tracking-widest text-sm">Laboratorio de Negociación</p>
      </div>
      
      <SetupForm onStart={handleStart} />
    </div>
  )
}

export default App
