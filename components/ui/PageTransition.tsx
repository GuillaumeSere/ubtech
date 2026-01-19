'use client';

import { motion } from 'framer-motion';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Commence invisible et un peu plus bas
      animate={{ opacity: 1, y: 0 }}  // Arrive à sa place
      exit={{ opacity: 0, y: -20 }}   // Disparaît vers le haut
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] // Courbe de vitesse "Bézier" très fluide/pro
      }}
    >
      {children}
    </motion.div>
  );
}