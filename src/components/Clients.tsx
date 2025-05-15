import { motion } from 'framer-motion';

const clientLogos = [
  { logo: '/perfor.png', name: ' 1' },
  { logo: '/gomes.png', name: ' 2' },
  { logo: '/perola.png', name: ' 3' },
  { logo: '/principios.png', name: ' 4' },
  { logo: '/tasse.png', name: ' 5' },
  { logo: '/uzi.png', name: 'Uzi' },
];

export function ClientGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-6">
      {clientLogos.map((client, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
        >
          <img
            src={client.logo}
            alt={client.name}
            className="h-16 object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
}
