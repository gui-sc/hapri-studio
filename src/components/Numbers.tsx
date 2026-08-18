import React, { useEffect, useRef, useState } from 'react';
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

function StatItem({
  stat,
  index,
}: {
  stat: typeof stats[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05 }}
      className='text-center text-[#1d1d1d] pb-2 rounded-lg'
    >
      <p className='text-3xl font-bold'>
        <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} isVisible={isInView} />
      </p>
      <p className='text-lg'>{stat.label}</p>
    </motion.div>
  );
}

export function Numbers() {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-8 p-8'>
      {stats.map((stat, index) => <StatItem key={stat.label} stat={stat} index={index} />)}
    </div>
  );
}
