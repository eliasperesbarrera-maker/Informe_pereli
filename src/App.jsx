import React, { useState } from 'react';
import { 
  Shield, FileText, Database, Code, Terminal, 
  Table, AlertTriangle, ShieldCheck, RefreshCw, Brain, 
  User, Layers, CheckCircle, Menu, X 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('resumen');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Matriz de riesgo base para el mapa de calor e interactividad
  const riesgos = [
    { id: 'RSK-01', nombre: 'Robo masivo del padrón de socios', vuln: 'Inyección SQL', p: 5, i: 4, r: 20, cat: 'Crítico' },
    { id: 'RSK-02', nombre: 'Exfiltración de fichas de salud e IMC', vuln: 'Inyección SQL', p: 5, i: 5, r: 25, cat: 'Crítico' },
    { id: 'RSK-03', nombre: 'Secuestro de sesiones de entrenadores', vuln: 'XSS Reflejado', p: 4, i: 3, r: 12, cat: 'Medio' },
    { id: 'RSK-04', nombre: 'Ransomware y toma del servidor Linux', vuln: 'Inyección de Comandos', p: 4, i: 5, r: 20, cat: 'Crítico' },
  ];

  const menuItems = [
    { id: 'header1', text: 'INFORME A: VULNERABILIDADES', isHeader: true },
    { id: 'resumen', text: 'Resumen Ejecutivo', icon: <FileText className="w-5 h-5" /> },
    { id: 'sqli', text: 'Inyección SQL', icon: <Database className="w-5 h-5" /> },
    { id: 'xss', text: 'XSS Reflejado', icon: <Code className="w-5 h-5" /> },
    { id: 'comandos', text: 'Inyección de Comandos', icon: <Terminal className="w-5 h-5" /> },
    { id: 'header2', text: 'INFORME B: MATRIZ DE RIESGO', isHeader: true },
    { id: 'activos', text: 'Inventario de Activos', icon: <Layers className="w-5 h-5" /> },
    { id: 'matriz', text: 'Matriz y Mapa de Calor', icon: <Table className="w-5 h-5" /> },
    { id: 'controles', text: 'Controles de Mitigación', icon: <ShieldCheck className="w-5 h-5" /> },
    { id: 'recuperacion', text: 'Plan de Continuidad (DRP)', icon: <RefreshCw className="w-5 h-5" /> },
    { id: 'bitacora', text: 'Bitácora de IA', icon: <Brain className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans flex">
      
      {/* SIDEBAR */}
      <aside className={`bg-slate-950 border-r border-slate-800 w-72 fixed h-full transition-transform duration-300 z-50 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 flex flex-col`}>
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-emerald-950/20">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-emerald-400 animate-pulse" />
            <div>
              <h1 className="font-bold text-lg tracking-wide text-slate-50">AUDITORÍA TI</h1>
              <p className="text-xs text-emerald-400 font-mono">pereli_security v3.1</p>
            </div>
          </div>
          <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {menuItems.map((item) => {
            if (item.isHeader) {
              return (
                <div key={item.id} className="text-xs font-semibold text-slate-500 tracking-wider pt-4 pb-1 pl-2 font-mono">
                  {item.text}
                </div>
              );
            }
            const isSelected = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); md: setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isSelected 
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/10 font-semibold' 
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-100'
                }`}
              >
                {item.icon}
                {item.text}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800 bg-slate-950/50">
          <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-900/50">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">
              EP
            </div>
            <div className="truncate">
              <p className="text-xs font-semibold text-slate-300 truncate">Elías Pérez B.</p>
              <p className="text-[10px] text-slate-500 font-mono truncate">Partner: Pedro Perreira</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT CONTAINER */}
      <div className="flex-1 md:pl-72 flex flex-col min-h-screen">
        
        {/* TOPBAR */}
        <header className="bg-slate-950/80 backdrop-blur border-b border-slate-800 h-16 flex items-center justify-between px-6 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
            <div className="text-sm font-mono text-slate-400">
              Caso Asignado: <span className="text-emerald-400 font-bold">FitZone S.A. (E19)</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Ambiente DVWA: Low Security
          </div>
        </header>

        {/* COMPONENT ROUTER VIEW */}
        <main className="flex-1 p-6 md:p-8 max-w-6xl w-full mx-auto space-y-6">
          
          {/* TABS CONTROLLER */}
          {activeTab === 'resumen' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-gradient-to-r from-emerald-900/20 to-slate-900 border border-emerald-500/20 p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-extrabold text-slate-100 flex items-center gap-3 mb-4">
                  <FileText className="text-emerald-400" /> Resumen Ejecutivo de Auditoría
                </h2>
                <div className="space-y-4 text-slate-300 leading-relaxed text-base">
                  <p>
                    El presente informe técnico detalla el análisis de ciberseguridad estructural realizado sobre el portal web de autogestión de la cadena de gimnasios <strong>FitZone S.A.</strong> El alcance comprendió la evaluación de la intranet de socios, módulos de reserva de clases y pasarelas de control transaccional en un entorno controlado (DVWA).
                  </p>
                  <p>
                    A través de pruebas de penetración web (Pentesting), se detectaron múltiples vectores de compromiso críticos que exponen la confidencialidad e integridad del negocio. Debido al rubro de la organización, los datos afectados no solo abarcan información comercial o financiera de pago recurrente, sino también parámetros médicos de los clientes (fichas de evaluación física, IMC, lesiones e historiales de salud).
                  </p>
                  <p>
                    Bajo el marco jurídico chileno actual, este tipo de registros médicos tienen la categoría jurídica de <strong>Datos Sensibles</strong> según lo tipificado en la <strong>Ley 19.628</strong> sobre Protección de la Vida Privada. Por ende, la ausencia de capas de validación técnica eleva drásticamente el riesgo de demandas civiles por negligencia en la custodia de datos y severas multas regulatorias.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sqli' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-4">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-50 flex items-center gap-2">
                      <Database className="text-red-400" /> Hallazgo Técnico 01: Inyección SQL (SQLi)
                    </h2>
                    <p className="text-slate-400 text-sm font-mono mt-1">Ubicación: Consulta de ID de Socio en Portal Web</p>
                  </div>
                  <div className="bg-red-500/10 text-red-400 px-3 py-1.5 rounded-lg border border-red-500/20 text-xs font-mono">
                    Gravedad: CRÍTICA (9.8 CVSS)
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl font-mono text-xs text-red-300">
                  Vector: CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-slate-200">1. Mecánica del Ataque & Evidencia</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Al ingresar el payload <code className="bg-slate-900 px-1.5 py-0.5 rounded text-amber-400 font-mono text-xs">' OR '1'='1</code> dentro del parámetro de búsqueda de socios, la aplicación web anuló las restricciones lógicas de la consulta estructurada en el servidor, devolviendo en pantalla la base de datos íntegra con nombres, RUTs y hashes de contraseñas de todos los clientes de FitZone.
                    </p>
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
                      <p className="text-slate-500">// Query Vulnerable Ejecutada por el Backend:</p>
                      <p className="text-red-400">SELECT first_name, last_name FROM users WHERE user_id = '' OR '1'='1';</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-slate-200">2. Control de Mitigación Defensivo</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Se prohíbe de forma estricta la concatenación de variables en sentencias de base de datos. Se exige la migración inmediata hacia <strong>Consultas Parametrizadas (Prepared Statements)</strong> con tipado estricto de variables a nivel de controlador backend.
                    </p>
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
                      <p className="text-emerald-500">// Implementación Segura Propuesta (PHP/PDO):</p>
                      <p>$stmt = $pdo-&gt;prepare('SELECT name FROM socios WHERE id = :id');</p>
                      <p>$stmt-&gt;execute(['id' =&gt; $userId]);</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-900">
                  <h3 className="font-semibold text-slate-200 mb-2">3. Impacto de Negocio</h3>
                  <p className="text-sm text-slate-400">
                    Vulnera directamente el derecho de custodia y confidencialidad corporativa. Permite la exfiltración masiva del activo más crítico del negocio, exponiendo a FitZone a demandas colectivas fundamentadas en la Ley 19.628 por filtración de datos sensibles financieros y personales.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'xss' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-4">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-50 flex items-center gap-2">
                      <Code className="text-amber-400" /> Hallazgo Técnico 02: Cross-Site Scripting Reflejado (XSS)
                    </h2>
                    <p className="text-slate-400 text-sm font-mono mt-1">Ubicación: Buscador de Planes y Sucursales</p>
                  </div>
                  <div className="bg-amber-500/10 text-amber-400 px-3 py-1.5 rounded-lg border border-amber-500/20 text-xs font-mono">
                    Gravedad: MEDIA (6.1 CVSS)
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl font-mono text-xs text-amber-300">
                  Vector: CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-slate-200">1. Mecánica del Ataque</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      El buscador web refleja los términos consultados por pantalla sin codificar caracteres contextuales. Al ingresar el payload <code className="bg-slate-900 px-1.5 py-0.5 rounded text-amber-400 font-mono text-xs">&lt;script&gt;alert(document.cookie)&lt;/script&gt;</code>, el navegador web interpreta el código malicioso como estructural, gatillando scripts arbitrarios en la sesión de la víctima.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-slate-200">2. Control de Mitigación Defensivo</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Implementar codificación de entidades HTML (HTML Entity Encoding) antes de renderizar entradas dinámicas del lado del cliente. Adicionalmente, forzar la bandera <code className="bg-slate-900 px-1 text-slate-300">HttpOnly</code> en todas las cookies de sesión para impedir su lectura vía JavaScript.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-900">
                  <h3 className="font-semibold text-slate-200 mb-2">3. Impacto de Negocio</h3>
                  <p className="text-sm text-slate-400">
                    Un atacante puede generar URLs maliciosas personalizadas dirigidas al staff administrativo o entrenadores del gimnasio. Si estos hacen clic, el atacante secuestra sus tokens de sesión activa, ganando accesos ilegítimos para alterar fichas médicas corporativas o robar identidades del personal.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'comandos' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-4">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-50 flex items-center gap-2">
                      <Terminal className="text-red-500" /> Hallazgo Técnico 03: Inyección de Comandos (Command Injection)
                    </h2>
                    <p className="text-slate-400 text-sm font-mono mt-1">Ubicación: Panel Interno de Conectividad de Sucursales</p>
                  </div>
                  <div className="bg-red-500/10 text-red-400 px-3 py-1.5 rounded-lg border border-red-500/20 text-xs font-mono">
                    Gravedad: CRÍTICA (9.8 CVSS)
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl font-mono text-xs text-red-300">
                  Vector: CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-slate-200">1. Mecánica del Ataque</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      El backend utiliza la función insegura de sistema de ejecución para realizar pruebas lógicas de red (Ping) a las sucursales del gimnasio. Al añadir un operador secuencial Unix <code className="bg-slate-900 px-1.5 py-0.5 rounded text-amber-400 font-mono text-xs">; cat /etc/passwd</code>, el servidor procesó de manera encadenada la segunda instrucción, volcando las cuentas del sistema operativo en la interfaz web.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-slate-200">2. Control de Mitigación Defensivo</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Erradicar el uso de funciones web que invoquen la terminal del sistema operativo (<code className="bg-slate-900 px-1 text-red-400">shell_exec</code> o equivalentes). Reemplazar por bibliotecas nativas encapsuladas y forzar validación estricta de parámetros mediante expresiones regulares (Regex) de tipo lista blanca.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-900">
                  <h3 className="font-semibold text-slate-200 mb-2">3. Impacto de Negocio</h3>
                  <p className="text-sm text-slate-400">
                    Compromiso total de la infraestructura tecnológica. Actores maliciosos pueden orquestar un escalado de privilegios internos, desplegar campañas de ransomware que cifren los servidores locales de FitZone y sabotear la continuidad operacional impidiendo físicamente el ingreso de socios a las sucursales por los torniquetes automatizados.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'activos' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl">
                <h2 className="text-2xl font-bold text-slate-50 mb-4 flex items-center gap-2">
                  <Layers className="text-emerald-400" /> Clasificación e Inventario de Activos Críticos
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-2">
                    <div className="text-xs font-mono text-emerald-400 font-bold">ACT-01 // ALTO VALOR</div>
                    <h3 className="text-lg font-bold text-slate-200">Base de Datos de Socios</h3>
                    <p className="text-sm text-slate-400">
                      Almacena registros de identificación civil (RUT), datos de geolocalización, correos y contraseñas de la base de clientes activos.
                    </p>
                  </div>
                  <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-2">
                    <div className="text-xs font-mono text-red-400 font-bold">ACT-02 // DATOS SENSIBLES</div>
                    <h3 className="text-lg font-bold text-slate-200">Fichas Médicas y de Salud</h3>
                    <p className="text-sm text-slate-400">
                      Evaluaciones de composición antropométrica (IMC), patologías base crónicas, contraindicaciones e historiales de entrenamiento físico.
                    </p>
                  </div>
                  <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-2">
                    <div className="text-xs font-mono text-emerald-400 font-bold">ACT-03 // TRANSACCIONAL</div>
                    <h3 className="text-lg font-bold text-slate-200">Pasarela de Pagos Recurrentes</h3>
                    <p className="text-sm text-slate-400">
                      Tokens transaccionales cifrados vinculados a tarjetas de crédito bancarias para facturación automatizada mensual de membresías.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'matriz' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid lg:grid-cols-3 gap-6">
                
                {/* MATRIZ DE RIESGO */}
                <div className="lg:col-span-2 bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-4">
                  <h2 className="text-xl font-bold text-slate-50 flex items-center gap-2">
                    <Table className="text-emerald-400" /> Matriz de Riesgo Operacional (Metodología 5x5)
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-300">
                      <thead className="bg-slate-900 text-xs font-mono text-slate-400 uppercase">
                        <tr>
                          <th className="p-3">ID</th>
                          <th className="p-3">Riesgo / Amenaza</th>
                          <th className="p-3 text-center">P</th>
                          <th className="p-3 text-center">I</th>
                          <th className="p-3 text-center">Total</th>
                          <th className="p-3">Criticidad</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800">
                        {riesgos.map((r) => (
                          <tr key={r.id} className="hover:bg-slate-900/50">
                            <td className="p-3 font-mono text-xs text-emerald-400">{r.id}</td>
                            <td className="p-3">
                              <p className="font-medium text-slate-200">{r.nombre}</p>
                              <p className="text-xs text-slate-500 font-mono">Origen: {r.vuln}</p>
                            </td>
                            <td className="p-3 text-center font-mono">{r.p}</td>
                            <td className="p-3 text-center font-mono">{r.i}</td>
                            <td className="p-3 text-center font-mono font-bold text-amber-400">{r.r}</td>
                            <td className="p-3">
                              <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                                r.cat === 'Crítico' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                              }`}>
                                {r.cat}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* MAPA DE CALOR */}
                <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-50 mb-2 flex items-center gap-2">
                      <AlertTriangle className="text-amber-400" /> Mapa de Calor
                    </h2>
                    <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                      Distribución visual de los riesgos analizados en base a la matriz cruzada de Probabilidad vs Impacto.
                    </p>
                  </div>
                  
                  {/* GRID 5X5 */}
                  <div className="space-y-1">
                    <div className="text-[10px] text-slate-500 font-mono text-right pr-2">IMPACTO →</div>
                    {[5, 4, 3, 2, 1].map((pVal) => (
                      <div key={pVal} className="flex items-center gap-1">
                        <div className="w-4 text-[10px] font-mono text-slate-500 text-center">{pVal}</div>
                        <div className="flex-1 grid grid-cols-5 gap-1">
                          {[1, 2, 3, 4, 5].map((iVal) => {
                            const score = pVal * iVal;
                            let bgColor = 'bg-emerald-500/10 border-emerald-500/20'; // Bajo
                            if (score >= 8 && score <= 12) bgColor = 'bg-amber-500/20 border-amber-500/40 text-amber-300'; // Medio
                            if (score >= 15) bgColor = 'bg-red-500/30 border-red-500/50 text-red-200 font-bold'; // Critico

                            // Verificar si calza con algún riesgo real para poner una marca visual
                            const tieneRiesgo = riesgos.some(r => r.p === pVal && r.i === iVal);

                            return (
                              <div 
                                key={iVal} 
                                className={`aspect-square rounded border flex flex-col items-center justify-center text-[10px] relative transition-all hover:scale-105 ${bgColor}`}
                                title={`P: ${pVal} | I: ${iVal} = score: ${score}`}
                              >
                                {score}
                                {tieneRiesgo && (
                                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full border border-slate-900 animate-ping"></span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                    <div className="grid grid-cols-5 gap-1 pl-5 pt-1 text-[10px] font-mono text-slate-500 text-center">
                      <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-500 font-mono mt-4 border-t border-slate-900 pt-3">
                    * Los puntos con alerta representan las amenazas críticas de FitZone.
                  </div>
                </div>

              </div>
            </div>
          )}

          {activeTab === 'controles' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-6">
                <h2 className="text-2xl font-bold text-slate-50 flex items-center gap-2">
                  <ShieldCheck className="text-emerald-400" /> Plan de Mitigación y Controles de Seguridad
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-3">
                    <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" /> Controles Preventivos
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside leading-relaxed">
                      <li><strong>Implementación de WAF:</strong> Despliegue perimetral de un Web Application Firewall para filtrar payloads maliciosos e inyecciones lógicas antes de tocar la capa del servidor.</li>
                      <li><strong>SSDLC (Desarrollo Seguro):</strong> Forzar validación automatizada estática en los repositorios de GitHub para impedir la mezcla de ramas que utilicen concatenaciones lógicas de variables.</li>
                    </ul>
                  </div>

                  <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-3">
                    <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" /> Controles de Ingeniería
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside leading-relaxed">
                      <li><strong>Principio de Mínimo Privilegio:</strong> Retirar privilegios administrativos globales (<code className="bg-slate-950 px-1 text-amber-400">root/sa</code>) al usuario web de conexión de base de datos.</li>
                      <li><strong>Sanitización Contextual:</strong> Incorporación obligatoria de middleware de escape tipificado de variables en todas las pasarelas de interacción del cliente.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'recuperacion' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-4">
                <h2 className="text-2xl font-bold text-slate-50 flex items-center gap-2">
                  <RefreshCw className="text-emerald-400" /> Plan de Continuidad y Recuperación ante Desastres (DRP)
                </h2>
                <p className="text-sm text-slate-400">
                  Estrategia operativa diseñada para asegurar la resiliencia operativa de las sucursales de FitZone frente a un secuestro de infraestructura tecnológica o destrucción de registros históricos.
                </p>
                <div className="border-l-2 border-emerald-500 pl-4 py-2 space-y-3 text-sm text-slate-300">
                  <p>
                    <strong>1. Respaldo Cifrado e Inmutable:</strong> Configuración automatizada de backups lógicos de la base de datos de socios y evaluaciones de salud cada 6 horas. El almacenamiento se realiza de forma aislada en repositorios inmutables en la nube (AWS S3 con políticas WORM), blindando la información de ataques de Ransomware locales.
                  </p>
                  <p>
                    <strong>2. Protocolo de Contingencia en Sucursales:</strong> Ante la caída o secuestro total del portal web centralizado, los sistemas de acceso físico (torniquetes automáticos) pasarán de inmediato a un modo de contingencia local desconectado (Offline), permitiendo el ingreso controlado de los clientes mediante listas físicas auxiliares y validación manual por el staff de FitZone.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bitacora' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-4">
                <h2 className="text-2xl font-bold text-slate-50 flex items-center gap-2">
                  <Brain className="text-emerald-400" /> Bitácora de Uso de Inteligencia Artificial
                </h2>
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-xs font-mono text-emerald-400 font-bold">PROMPT BASE UTILIZADO:</div>
                  <p className="text-sm text-slate-300 font-mono italic">
                    "Actúa como auditor senior de ciberseguridad. Genera los análisis CVSS 3.1, impactos de negocio y planes defensivos adaptados al caso de una cadena de gimnasios llamada FitZone que procesa datos de membresías, tarjetas de crédito y fichas médicas que constituyen legalmente datos sensibles bajo la ley chilena..."
                  </p>
                </div>
                <div className="space-y-2 text-sm text-slate-300 leading-relaxed">
                  <h3 className="font-semibold text-slate-100">Validación Crítica del Estudiante y Ajustes:</h3>
                  <p>
                    La herramienta generó inicialmente respuestas genéricas orientadas al comercio electrónico estándar (e-commerce). Se debió reestructurar manualmente la lógica del impacto de negocio con mi compañero Pedro Perreira para reflejar la realidad del rubro de gimnasios: orientando el daño legal a la filtración de <strong>fichas de salud corporativas</strong> (Ley 19.628 de Chile) y la parálisis física de torniquetes.
                  </p>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

    </div>
  );
}