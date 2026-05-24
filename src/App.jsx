import React from 'react';
import Resumen from './components/Resumen';
import Marco from './components/Marco';
import Delitos from './components/Delitos';
import Comparacion from './components/Comparacion';
import Responsabilidades from './components/Responsabilidades';
import Datos from './components/Datos';
import Conclusiones from './components/Conclusiones';
import Prompts from './components/Prompts';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <header className="max-w-4xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-slate-800">
          Análisis Legal: Caso Copec (2026)
        </h1>
        <p className="text-slate-500 mt-2 font-medium">Fundamentos de Seguridad de la Información</p>
      </header>

      <main className="max-w-4xl mx-auto">
        <Resumen />
        <Marco />
        <Delitos />
        <Comparacion />
        <Responsabilidades />
        <Datos />
        <Conclusiones />
        <Prompts />
      </main>
    </div>
  );
}

export default App;