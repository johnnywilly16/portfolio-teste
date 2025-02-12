import { motion } from 'framer-motion'

export function ProjectsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid de pontos */}
      {[...Array(48)].map((_, i) => (
        <motion.div
          key={`point-${i}`}
          className="absolute w-2 h-2 rounded-full bg-pastel-purple/20 dark:bg-neon-purple/20"
          style={{
            left: `${(i % 8) * 14 + Math.random() * 4}%`,
            top: `${Math.floor(i / 8) * 20 + Math.random() * 4}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Linhas conectoras */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-[1px] bg-gradient-to-r from-pastel-purple/0 via-pastel-purple/20 to-pastel-purple/0 dark:from-neon-purple/0 dark:via-neon-purple/20 dark:to-neon-purple/0"
          style={{
            width: '40%',
            left: '30%',
            top: `${i * 20}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [-100, 100],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Círculos de gradiente */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`gradient-${i}`}
          className="absolute rounded-full bg-gradient-to-br from-pastel-purple/10 to-pastel-pink/10 dark:from-dark-purple/10 dark:to-dark-pink/10 blur-xl"
          style={{
            width: `${Math.random() * 300 + 200}px`,
            height: `${Math.random() * 300 + 200}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
} 