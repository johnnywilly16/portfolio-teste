import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'

interface TerminalProps {
  title?: string
  children: React.ReactNode
  className?: string
  defaultMinimized?: boolean
  showRestart?: boolean
  onRestart?: () => void
  showBubbles?: boolean
  showEmoji?: string
}

export function Terminal({ 
  title = 'johnny@portfolio:~', 
  children, 
  className = '',
  defaultMinimized = false,
  showRestart = false,
  onRestart,
  showBubbles = true,
  showEmoji
}: TerminalProps) {
  const [isMinimized, setIsMinimized] = useState(defaultMinimized)

  return (
    <motion.div
      className={`relative w-full transform transition-all duration-300 overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg rounded-[2rem] border-4 border-dashed border-pastel-purple/50 dark:border-neon-purple/50 shadow-lg overflow-hidden"
        animate={{
          height: isMinimized ? '3rem' : 'auto',
          rotate: [-0.5, 0.5, -0.5]
        }}
        style={{
          transformOrigin: 'center center'
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Padrão de bolinhas animadas */}
        {showBubbles && (
          <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-12 h-12 rounded-full bg-pastel-purple/30 dark:bg-neon-purple/20"
                style={{
                  left: `${i * 20}%`,
                  top: Math.random() * 100 + '%'
                }}
                animate={{
                  y: [-20, 20],
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        )}

        {/* Barra de título do terminal */}
        <div className="bg-white/50 dark:bg-slate-800/50 px-4 py-3 flex items-center justify-between border-b-4 border-dashed border-pastel-purple/30 dark:border-neon-purple/30">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <button 
                className="w-3 h-3 rounded-full bg-[#ED8796] hover:bg-[#ED8796]/80 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsMinimized(!isMinimized)
                }}
              />
              <div className="w-3 h-3 rounded-full bg-[#EED49F]" />
              <div className="w-3 h-3 rounded-full bg-[#A6DA95]" />
            </div>
            <span className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-mono ml-2">
              {showEmoji && <span className="mr-2">{showEmoji}</span>}
              ✦ {title} ✦
            </span>
          </div>
          <div className="flex items-center gap-2">
            {showRestart && (
              <button
                onClick={onRestart}
                className="text-slate-600 dark:text-slate-300 hover:text-pastel-purple dark:hover:text-neon-purple transition-colors p-1 cursor-pointer hidden sm:block"
                title="Recomeçar animação"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
              </button>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsMinimized(!isMinimized)
              }}
              className="text-slate-600 dark:text-slate-300 hover:text-pastel-purple dark:hover:text-neon-purple transition-colors p-1 cursor-pointer hidden sm:block"
              title={isMinimized ? "Expandir" : "Minimizar"}
            >
              {isMinimized ? <FaAngleUp size={12} /> : <FaAngleDown size={12} />}
            </button>
          </div>
        </div>

        {/* Conteúdo do terminal */}
        <motion.div
          className="overflow-hidden"
          animate={{
            height: isMinimized ? 0 : 'auto',
            opacity: isMinimized ? 0 : 1
          }}
        >
          <div className="p-4 sm:p-6 lg:p-10 font-mono text-xs sm:text-sm md:text-base relative bg-white/80 dark:bg-slate-900/80 break-words">
            <motion.div
              className="text-slate-700 dark:text-slate-300 break-all whitespace-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {children}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Elementos decorativos ao redor do terminal */}
      {!isMinimized && showEmoji && (
        <>
          <motion.div
            className="absolute bottom-0 left-0 sm:-bottom-8 sm:-left-8 text-2xl sm:text-4xl lg:text-6xl"
            animate={{ rotate: [-5, 5], scale: [1, 1.1, 1] }}
            style={{
              transformOrigin: 'center center'
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {showEmoji}
          </motion.div>
          <motion.div
            className="absolute top-0 right-0 sm:-top-8 sm:-right-8 text-2xl sm:text-4xl lg:text-6xl"
            animate={{ rotate: [0, 180], scale: [1, 1.2, 1] }}
            style={{
              transformOrigin: 'center center'
            }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            ✨
          </motion.div>
        </>
      )}
    </motion.div>
  )
} 