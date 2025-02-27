import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { label: 'anos de experiência', value: 4, suffix: '', prefix: '+ de ' },
  { label: 'em visualizações', value: 3, suffix: 'mi', prefix: '+ de ' },
  { label: 'campanhas produzidas', value: 100, suffix: '', prefix: '+ de ' },
  { label: 'clientes atendidos', value: 30, suffix: '', prefix: '+ ' },
];

const AnimatedNumber = ({ value, prefix, suffix, isVisible }: { 
  value: number;
  prefix: string;
  suffix: string;
  isVisible: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return; // Só inicia a animação se estiver visível

    let start = 0;
    const end = value;
    const duration = 1500;
    const stepTime = Math.max(20, Math.floor(duration / end)); 

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {prefix}{count}{suffix}
    </motion.span>
  );
};

export function Numbers() {
  return (
    <div className='w-full flex justify-center items-center flex-wrap gap-8 p-8'>
      {stats.map((stat, index) => {
        const ref = React.useRef(null);
        const isInView = useInView(ref, { once: true, margin: "-100px" });

        return (
          <motion.div
            ref={ref}
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.05 }}
            className='text-center text-[#1d1d1d] bg-white p-6 rounded-lg shadow-lg w-64'
          >
            <p className='text-3xl font-bold'>
              <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} isVisible={isInView} />
            </p>
            <p className='text-lg mt-2'>{stat.label}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
