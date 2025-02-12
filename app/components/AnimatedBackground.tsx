import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export function AnimatedBackground() {
  const { scrollYProgress } = useScroll()
  const [isMobile, setIsMobile] = useState(false)

  // Detecta se é dispositivo móvel para reduzir a quantidade de elementos
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  // Quantidade de elementos baseada no dispositivo
  const elementsCount = isMobile ? 20 : 40

  // Efeito de parallax nas estrelas
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pastel-purple/5 to-white dark:from-dark-surface dark:via-dark-purple/5 dark:to-dark-surface" />

      {/* Estrelas em diferentes camadas para efeito de parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        {[...Array(elementsCount)].map((_, i) => (
          <motion.div
            key={`star1-${i}`}
            className="absolute w-1 h-1 bg-pastel-purple/30 dark:bg-neon-purple/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute inset-0">
        {[...Array(elementsCount/2)].map((_, i) => (
          <motion.div
            key={`star2-${i}`}
            className="absolute w-2 h-2 bg-pastel-pink/20 dark:bg-dark-pink/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <motion.div style={{ y: y3 }} className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-pastel-purple/5 to-pastel-pink/5 dark:from-dark-purple/5 dark:to-dark-pink/5 blur-xl"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
} 