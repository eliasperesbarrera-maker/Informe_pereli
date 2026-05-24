import React from 'react';
import ReactMarkdown from 'react-markdown';
import contenidoConclusiones from '../../doc_pereli/07_conclusiones_informe_pereli.md?raw';

const Conclusiones = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <div className="prose prose-blue max-w-none">
        <ReactMarkdown>{contenidoConclusiones}</ReactMarkdown>
      </div>
    </section>
  );
};

export default Conclusiones;