import React from 'react';
import ReactMarkdown from 'react-markdown';
import contenidoMarco from '../../doc_pereli/02_marco_informe_pereli.md?raw';

const Marco = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <div className="prose prose-blue max-w-none">
        <ReactMarkdown>{contenidoMarco}</ReactMarkdown>
      </div>
    </section>
  );
};

export default Marco;