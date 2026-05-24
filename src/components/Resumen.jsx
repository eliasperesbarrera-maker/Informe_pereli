import React from 'react';
import ReactMarkdown from 'react-markdown';
import contenidoResumen from '../../doc_pereli/01_resumen_informe_pereli.md?raw';
const Resumen = () => {
const Resumen = () => {
  console.log("Contenido que está leyendo React:", contenidoResumen);

  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <div className="prose prose-blue max-w-none">
        <ReactMarkdown>{contenidoResumen}</ReactMarkdown>
      </div>
    </section>
  );
};
  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <div className="prose prose-blue max-w-none">
        <ReactMarkdown>{contenidoResumen}</ReactMarkdown>
      </div>
    </section>
  );
};

export default Resumen;