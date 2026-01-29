import SetupForm from './components/SetupForm'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <SetupForm onStart={(config) => console.log(config)} />
    </div>
  )
}

export default App
