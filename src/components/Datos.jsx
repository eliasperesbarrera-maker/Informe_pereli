import React from 'react';
import ReactMarkdown from 'react-markdown';
import contenidoDatos from '../../doc_pereli/06_datos_informe_pereli.md?raw';

const Datos = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <div className="prose prose-blue max-w-none">
        <ReactMarkdown>{contenidoDatos}</ReactMarkdown>
      </div>
    </section>
  );
};

export default Datos;