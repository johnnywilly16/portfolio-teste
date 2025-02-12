import { motion } from 'framer-motion'

export function FloatingBubbles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-pastel-purple/20 dark:bg-neon-purple/20"
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: '100%',
            scale: 0.5 + Math.random() * 0.5
          }}
          animate={{ 
            y: '-10%',
            x: `${Math.random() * 100}%`,
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
} 