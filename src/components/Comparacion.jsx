import React from 'react';
import ReactMarkdown from 'react-markdown';
import contenidoComparacion from '../../docs_pereli/04_comparacion_informe_pereli.md?raw';

const Comparacion = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <div className="prose prose-blue max-w-none">
        <ReactMarkdown>{contenidoComparacion}</ReactMarkdown>
      </div>
    </section>
  );
};

export default Comparacion;