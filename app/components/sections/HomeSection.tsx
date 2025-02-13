import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

// Terminal aprimorado com mais linhas de código
const CodeTerminal = () => {
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)
  
  const codeText = `$ johnny portfolio

const desenvolvedor = {
    nome: "Johnny",
    idade: 28,
    funções: [
        "Desenvolvedor Fullstack",
        "Designer UX/UI"
    ],
    criarCoisasIncríveis() {
        while(true) {
            this.programar()
            this.desenhar()
            this.inovar()
            this.tomarCafé("☕")
        }
    }
}

desenvolvedor.criarCoisasIncríveis() // ✨`

  useEffect(() => {
    let currentIndex = 0
    let typingInterval: NodeJS.Timeout

    const typeText = () => {
      setIsTyping(true)
      
      typingInterval = setInterval(() => {
        if (currentIndex < codeText.length) {
          setText(prev => prev + codeText[currentIndex])
          currentIndex++
          
          if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight
          }
        } else {
          clearInterval(typingInterval)
          setIsTyping(false)
        }
      }, 50) // Velocidade da digitação
    }

    typeText()

    // Cursor piscante
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [codeText])

  const handleRestart = () => {
    if (!isTyping) {
      setText('')
      setIsTyping(true)
      let currentIndex = 0
      
      const typingInterval = setInterval(() => {
        if (currentIndex < codeText.length) {
          setText(prev => prev + codeText[currentIndex])
          currentIndex++
          
          if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight
          }
        } else {
          clearInterval(typingInterval)
          setIsTyping(false)
        }
      }, 50)
    }
  }

  return (
    <motion.div
      className="relative w-full mx-auto max-w-4xl -rotate-2"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1] // Curva de animação suave
      }}
    >
      <motion.div
        ref={terminalRef}
        className="bg-light-card dark:bg-slate-800 rounded-xl border-4 border-dashed border-pastel-purple/30 dark:border-dark-purple/30 overflow-hidden shadow-xl transform-gpu hover:shadow-2xl hover:scale-[1.01] transition-all duration-300"
      >
        {/* Barra de título do terminal */}
        <div className="bg-gradient-to-r from-pastel-purple/10 to-pastel-pink/10 dark:from-dark-purple/20 dark:to-dark-pink/20 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <span className="text-pastel-purple/50 dark:text-white/50 text-xs sm:text-sm font-mono ml-2">johnny@portfolio:~</span>
          </div>
          <button
            onClick={handleRestart}
            className="text-pastel-purple/50 dark:text-white/50 hover:text-pastel-purple dark:hover:text-white transition-colors p-1"
            title="Recomeçar animação"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Conteúdo do terminal */}
        <div className="p-6 sm:p-8 font-mono text-sm sm:text-base">
          <div className="mt-6 whitespace-pre">
            <span className="text-pastel-pink dark:text-purple-400">$</span>
            <span className="text-pastel-purple dark:text-emerald-300"> johnny portfolio</span>
            <div className="text-pastel-purple dark:text-emerald-300 mt-4">
              {text.substring(text.indexOf('const'))}
              {isTyping && (
                <motion.span 
                  className="inline-block w-2 h-5 bg-pastel-purple/70 dark:bg-white/70 ml-1 align-middle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              {!isTyping && showCursor && (
                <motion.span 
                  className="inline-block w-2 h-5 bg-pastel-purple/70 dark:bg-white/70 ml-1 align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Componente de nuvens flutuantes
const FloatingClouds = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-white/40 dark:bg-white/10 rounded-full filter blur-xl will-change-transform"
        style={{
          width: Math.random() * 300 + 100,
          height: Math.random() * 200 + 100,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          transform: 'translate3d(0,0,0)'
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
          ease: "linear"
        }}
      />
    ))}
  </div>
)

// Componente de bolhas flutuantes
const FloatingBubbles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-gradient-to-br from-pastel-purple/20 to-pastel-pink/20 dark:from-dark-purple/20 dark:to-dark-pink/20 will-change-transform"
        style={{
          width: Math.random() * 60 + 20,
          height: Math.random() * 60 + 20,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          transform: 'translate3d(0,0,0)'
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
          ease: "linear"
        }}
      />
    ))}
  </div>
)

interface TerminalTitleProps {
  title: string
  isActive: boolean
}

export function TerminalTitle({ title, isActive }: TerminalTitleProps) {
  return (
    <motion.div
      className="relative w-full max-w-3xl mx-auto px-4 sm:px-0"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="relative overflow-hidden rounded-[2rem] border-4 border-dashed border-pastel-purple/30 dark:border-dark-purple/30 bg-light-card dark:bg-dark-surface/90 backdrop-blur-lg"
        animate={{
          rotate: [-0.5, 0.5, -0.5]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Barra de título do terminal */}
        <div className="bg-gradient-to-r from-pastel-purple/10 to-pastel-pink/10 dark:from-dark-purple/20 dark:to-dark-pink/20 h-8 flex items-center px-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
        </div>

        {/* Título */}
        <div className="px-8 py-6 relative">
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-cartoon font-bold bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink text-transparent bg-clip-text text-center">
              {title}
            </h2>

            {/* Cursor piscante */}
            {isActive && (
              <motion.div
                className="w-[3px] h-8 bg-pastel-purple dark:bg-dark-purple"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </div>
        </div>

        {/* Efeito de brilho */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-pastel-purple/5 to-pastel-pink/5 dark:from-dark-purple/5 dark:to-dark-pink/5"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  )
}

export function HomeSection() {
  const [showScroll, setShowScroll] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const threshold = window.innerHeight * 0.3 // 30% da altura da viewport

      setShowScroll(scrollPosition < threshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-light-surface via-pastel-purple/5 to-light-surface dark:from-dark-surface dark:via-dark-purple/5 dark:to-dark-surface pt-16 lg:pt-48">
      {/* Elementos de fundo */}
      <FloatingClouds />
      <FloatingBubbles />

      <div className="w-full h-full flex items-center justify-center relative z-10">
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center min-h-screen">
          {/* Terminal Grande como foco principal */}
          <div className="w-full max-w-[92vw] sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-4xl mt-8 lg:mt-0 transform-gpu">
            <CodeTerminal />
          </div>

          {/* Scroll Indicator */}
          <AnimatePresence>
            {showScroll && (
              <motion.div
                className="fixed bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-8 h-12 border-3 border-pastel-purple dark:border-dark-purple rounded-full p-2"
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
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
} 