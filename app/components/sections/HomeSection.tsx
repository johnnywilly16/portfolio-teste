import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Terminal aprimorado com mais linhas de código
const CodeTerminal = () => {
  const [isMinimized, setIsMinimized] = useState(false)
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  const text = `const desenvolvedor = {
  nome: "Johnny",
  idade: 28,
  funções: [
    "Desenvolvedor Fullstack",
    "Designer UX/UI"
  ],
  habilidades: {
    linguagens: ["TypeScript", "Python", "JavaScript"],
    frontend: ["React", "Next.js", "Angular", "Tailwind"],
    backend: ["Node.js", "Express", "NestJS"],
    design: ["Figma", "Adobe XD", "UI/UX"],
    bancosDeDados: ["PostgreSQL", "MongoDB"]
  },

  criarCoisasIncríveis() {
    while(true) {
      this.programar()
      this.desenhar()
      this.inovar()
      this.tomarCafé("☕")
    }
  }
}

desenvolvedor.criarCoisasIncríveis() // Iniciando a mágica... ✨`

  useEffect(() => {
    if (!isTyping) return

    let index = 0
    const interval = setInterval(() => {
      if (index <= text.length) {
        setCurrentText(text.slice(0, index))
        index++
      } else {
        setIsTyping(false)
        clearInterval(interval)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isTyping, text])

  const handleRestart = () => {
    setCurrentText('')
    setIsTyping(true)
  }

  return (
    <motion.div
      className="relative w-full mx-auto transform transition-all duration-300 max-w-4xl -rotate-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div className="bg-slate-800 rounded-xl border-4 border-dashed border-pastel-purple/30 dark:border-dark-purple/30 overflow-hidden shadow-2xl">
        {/* Barra de título do terminal */}
        <div className="bg-slate-700 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <button 
                className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors"
                onClick={() => setIsMinimized(!isMinimized)}
              />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <span className="text-white/50 text-xs sm:text-sm font-mono ml-2">johnny@portfolio:~</span>
          </div>
          <button
            onClick={handleRestart}
            className="text-white/50 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Conteúdo do terminal */}
        <motion.div
          className="overflow-hidden"
          animate={{
            height: isMinimized ? '0px' : 'auto',
            opacity: isMinimized ? 0 : 1
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="p-6 sm:p-10 font-mono text-xs sm:text-sm md:text-base">
            <div className="text-emerald-400">
              <span className="text-purple-400">$</span> node portfolio.js
            </div>
            <pre className="mt-4 text-emerald-300 whitespace-pre-wrap">
              {currentText}
              <motion.span
                className="inline-block w-2 h-4 bg-white/70 ml-1 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </pre>
          </div>
        </motion.div>
      </motion.div>

      {/* Elementos decorativos */}
      {!isMinimized && (
        <>
          <motion.div
            className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 text-2xl sm:text-4xl lg:text-6xl"
            animate={{ rotate: [-10, 10], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            💻
          </motion.div>
          <motion.div
            className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 text-2xl sm:text-4xl lg:text-6xl"
            animate={{ rotate: [10, -10], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            🚀
          </motion.div>
          <motion.div
            className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 text-2xl sm:text-4xl lg:text-6xl"
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            ✨
          </motion.div>
        </>
      )}
    </motion.div>
  )
}

// Componente de nuvens flutuantes
const FloatingClouds = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-white/40 dark:bg-white/10 rounded-full filter blur-xl"
        style={{
          width: Math.random() * 300 + 100,
          height: Math.random() * 200 + 100,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [-20, 20],
          y: [-10, 10],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    ))}
  </div>
)

// Componente de bolhas flutuantes
const FloatingBubbles = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-gradient-to-br from-pastel-purple/20 to-pastel-pink/20 dark:from-dark-purple/20 dark:to-dark-pink/20"
        style={{
          width: Math.random() * 60 + 20,
          height: Math.random() * 60 + 20,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [-50, 50],
          x: [-30, 30],
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: Math.random() * 8 + 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    ))}
  </div>
)

export function HomeSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-pastel-purple/5 to-white dark:from-dark-surface dark:via-dark-purple/5 dark:to-dark-surface">
      {/* Elementos de fundo */}
      <FloatingClouds />
      <FloatingBubbles />

      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen pt-32 sm:pt-40 pb-20">
          {/* Terminal Grande como foco principal */}
          <div className="w-full max-w-[99vw] sm:max-w-[97vw] md:max-w-[95vw] lg:max-w-6xl">
            <CodeTerminal />
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { delay: 2 },
              y: { duration: 1.5, repeat: Infinity }
            }}
          >
            <motion.div
              className="w-8 h-12 border-3 border-pastel-purple dark:border-dark-purple rounded-full p-2"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.div
                className="w-3 h-3 bg-pastel-purple dark:bg-dark-purple rounded-full mx-auto"
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 