import React from 'react';
import { Rocket, Target, Users, Lightbulb, BarChart, Clock } from 'lucide-react';

const differentials = [
  {
    icon: <Rocket size={40} />,
    title: 'Estratégia Personalizada',
    description: 'Desenvolvemos estratégias únicas alinhadas com seus objetivos de negócio'
  },
  {
    icon: <Target size={40} />,
    title: 'Resultados Mensuráveis',
    description: 'Acompanhamento detalhado de métricas e KPIs para otimização contínua'
  },
  {
    icon: <Users size={40} />,
    title: 'Equipe Especializada',
    description: 'Profissionais experientes e dedicados em cada área do marketing digital'
  },
  {
    icon: <Lightbulb size={40} />,
    title: 'Criatividade Inovadora',
    description: 'Soluções criativas que destacam sua marca no mercado'
  },
  {
    icon: <BarChart size={40} />,
    title: 'Analytics Avançado',
    description: 'Análise profunda de dados para tomada de decisões estratégicas'
  },
  {
    icon: <Clock size={40} />,
    title: 'Agilidade',
    description: 'Processos otimizados para entregas rápidas e eficientes'
  }
];

export function Differentials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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