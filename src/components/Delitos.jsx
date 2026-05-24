import React from 'react';
import ReactMarkdown from 'react-markdown';
import contenidoDelitos from '../../doc_pereli/03_delitos_informe_pereli.md?raw';

const Delitos = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <div className="prose prose-blue max-w-none">
        <ReactMarkdown>{contenidoDelitos}</ReactMarkdown>
      </div>
    </section>
  );
};

export default Delitos;