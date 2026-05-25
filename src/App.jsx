import React, { useState } from 'react';
// Importación de todos tus componentes existentes según tu estructura
import Resumen from './components/Resumen';
import Marco from './components/Marco';
import Delitos from './components/Delitos';
import Comparacion from './components/Comparacion';
import Responsabilidades from './components/Responsabilidades';
import Datos from './components/Datos';
import Prompts from './components/Prompts';
import Conclusiones from './components/Conclusiones';

function App() {
  const [activeTab, setActiveTab] = useState('resumen');

  // Listado de pestañas que calzan con la rúbrica y tus componentes
  const menuItems = [
    { id: 'resumen', label: '📊 Resumen Ejecutivo', component: <Resumen /> },
    { id: 'marco', label: '⚖️ Marco Normativo', component: <Marco /> },
    { id: 'delitos', label: '🛡️ Ley 21.459 (Delitos)', component: <Delitos /> },
    { id: 'comparacion', label: '🔄 Tabla Comparativa', component: <Comparacion /> },
    { id: 'responsabilidades', label: '👥 Responsabilidades', component: <Responsabilidades /> },
    { id: 'datos', label: '🔒 Datos Personales (19.628)', component: <Datos /> },
    { id: 'prompts', label: '🤖 Bitácora de Prompts', component: <Prompts /> },
    { id: 'conclusiones', label: '📝 Conclusiones', component: <Conclusiones /> },
  ];

  const currentSection = menuItems.find(item => item.id === activeTab);

  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 font-sans overflow-hidden">
      
      {/* SIDEBAR / BARRA LATERAL */}
      <aside className="w-72 bg-slate-950 border-r border-slate-800 flex flex-col justify-between shadow-xl">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="h-3 w-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <h1 className="text-lg font-bold tracking-wider text-slate-200">
              AUDIT-DASHBOARD
            </h1>
          </div>
          
          <nav className="space-y-1.5">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-semibold'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Información del Grupo al pie de la barra lateral */}
        <div className="p-4 bg-slate-950/60 border-t border-slate-800 text-xs text-slate-500 space-y-1">
          <p className="font-semibold text-slate-400">Entrega de Evaluación</p>
          <p>Integrantes: E. Pérez & P. Perreira</p>
          <p className="text-emerald-500 font-medium">● Repositorio Listo</p>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 flex flex-col min-w-0 bg-slate-900 overflow-y-auto">
        {/* Header superior */}
        <header className="bg-slate-950/40 backdrop-blur-md border-b border-slate-800/60 px-8 py-5 flex justify-between items-center sticky top-0 z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Informe Técnico</span>
            <h2 className="text-xl font-bold text-white mt-0.5">Análisis de Cumplimiento Legal e Informático</h2>
          </div>
          <div className="bg-slate-800 px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 border border-slate-700">
            Escala Exigencia: 60%
          </div>
        </header>

        {/* Renderizado del componente activo en una tarjeta elegante */}
        <div className="p-8 max-w-6xl w-full mx-auto">
          <div className="bg-slate-950/40 border border-slate-800 rounded-2xl p-8 shadow-md backdrop-blur-sm transition-all duration-300">
            {currentSection ? currentSection.component : <Resumen />}
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;
