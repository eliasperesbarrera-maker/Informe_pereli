import React from 'react';
import ReactMarkdown from 'react-markdown';
import contenidoPrompts from '../../doc_pereli/08_prompts_informe_pereli.md?raw';

const Prompts = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <div className="prose prose-blue max-w-none">
        <ReactMarkdown>{contenidoPrompts}</ReactMarkdown>
      </div>
    </section>
  );
};

export default Prompts;