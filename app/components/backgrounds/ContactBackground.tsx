import { motion } from 'framer-motion'

export function ContactBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Bolhas de mensagem */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <motion.div
            className="w-16 h-12 bg-pastel-purple/20 dark:bg-neon-purple/30 rounded-2xl relative"
            animate={{
              y: [-20, 20],
              rotate: [-5, 5],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="absolute -bottom-2 left-4 w-4 h-4 bg-pastel-purple/20 dark:bg-neon-purple/30 rotate-45" />
          </motion.div>
        </motion.div>
      ))}

      {/* Emojis flutuantes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`emoji-${i}`}
          className="absolute text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-30, 30],
            x: [-20, 20],
            rotate: [-10, 10],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {['💌', '✨', '💬', '🌟', '💜', '✉️', '👋', '🤗', '💻', '🚀'][Math.floor(Math.random() * 10)]}
        </motion.div>
      ))}

      {/* Ondas de comunicação */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute w-[200%] h-[200%] rounded-[40%] border-2 border-pastel-purple/10 dark:border-neon-purple/20"
          style={{
            left: '-50%',
            top: '-50%',
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Círculos decorativos */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full bg-gradient-to-br from-pastel-purple/10 to-pastel-pink/10 dark:from-dark-purple/20 dark:to-dark-pink/20"
          style={{
            width: `${Math.random() * 150 + 50}px`,
            height: `${Math.random() * 150 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  )
} 