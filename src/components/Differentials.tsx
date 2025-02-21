import React from 'react';
import { Layers, Lightbulb, Brain, LineChart } from 'lucide-react';

const differentials = [
  {
    icon: <Brain size={40} />,
    title: 'Estratégia Personalizada',
    description: 'Desenvolvimento de estratégias de social media sob medida, alinhadas com os objetivos e necessidades específicas de cada cliente.'
  },
  {
    icon: <Lightbulb size={40} />,
    title: 'Criatividade e inovação',
    description: 'Capacidade de trazer novas ideias e abordagens criativas para o conteúdo, mantendo a marca em destaque nas redes sociais.'
  },
  {
    icon: <LineChart size={40} />,
    title: 'Análise de métricas e insights',
    description: 'Profunda compreensão das métricas de desempenho nas redes sociais, permitindo análises precisas e ajustes estratégicos.'
  },
  {
    icon: <Layers size={40} />,
    title: 'Acompanhamento das tendências',
    description: 'Acompanhamento das últimas tendências e mudanças, aplicando-as de forma oportuna para maximizar seu impacto online.'
  },
];

export function Differentials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {differentials.map((differential, index) => (
        <div
          key={index}
          className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="text-purple-600 mb-4">{differential.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{differential.title}</h3>
          <p className="text-gray-600">{differential.description}</p>
        </div>
      ))}
    </div>
  );
}