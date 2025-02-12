import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaExpandAlt, FaCompressAlt, FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { HomeBackground } from '../backgrounds/HomeBackground'

// Terminal aprimorado com mais linhas de código
const CodeTerminal = () => {
  const [text, setText] = useState('')
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [shouldRestart, setShouldRestart] = useState(false)
  const codeLines = [
    '╭─────────── ⋆⋅☆⋅⋆ ───────────╮',
    '│    Terminal do Johnny Willy   │',
    '╰─────────── ⋆⋅☆⋅⋆ ───────────╯',
    '',
    '$ whoami',
    'Johnny Willy - Desenvolvedor Fullstack',
    '',
    '$ cat perfil.json',
    '{',
    '  "nome": "Johnny Willy",',
    '  "idade": 28,',
    '  "cidade": "Juazeiro",',
    '  "país": "Brasil"',
    '}',
    '',
    '$ ls ./stack',
    '╭─ frontend/',
    '├─➤ react.js',
    '├─➤ next.js',
    '╰─➤ tailwind.css',
    '╭─ backend/',
    '├─➤ node.js',
    '├─➤ express.js',
    '╰─➤ postgresql',
    '',
    '$ echo "Bem-vindo ao meu portfólio! ✨"'
  ]

  useEffect(() => {
    let currentLine = 0
    let currentChar = 0
    let timeoutId: NodeJS.Timeout

    const type = () => {
      if (currentLine >= codeLines.length) return

      const line = codeLines[currentLine]
      
      if (currentChar < line.length) {
        setText(prev => prev + line[currentChar])
        currentChar++
        timeoutId = setTimeout(type, Math.random() * 50 + 30)
      } else {
        setText(prev => prev + '\n')
        currentLine++
        currentChar = 0
        timeoutId = setTimeout(type, 100)
      }
    }

    if (shouldRestart) {
      setText('')
      timeoutId = setTimeout(type, 1000)
      setShouldRestart(false)
    } else if (text === '') {
      timeoutId = setTimeout(type, 1000)
    }

    return () => clearTimeout(timeoutId)
  }, [shouldRestart])

  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShouldRestart(true)
  }

  return (
    <motion.div
      className={`relative w-full mx-auto transform transition-all duration-300 ${
        isMaximized ? 'max-w-none scale-100' : 
        isExpanded ? 'max-w-4xl scale-100 rotate-0' : 
        'max-w-4xl -rotate-2'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{
        position: isMaximized ? 'fixed' : 'relative',
        inset: isMaximized ? '0' : 'auto',
        margin: isMaximized ? '0' : 'auto',
        zIndex: isMaximized ? 50 : 10,
      }}
    >
      <AnimatePresence>
        <motion.div
          className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg rounded-[2rem] border-4 border-dashed border-pastel-purple/50 dark:border-neon-purple/50 shadow-lg overflow-hidden"
          animate={{
            height: isMinimized ? '3rem' : 'auto',
            rotate: [-0.5, 0.5, -0.5]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Padrão de bolinhas animadas */}
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

          {/* Barra de título do terminal */}
          <div className="bg-white/50 dark:bg-slate-800/50 px-4 py-3 flex items-center justify-between border-b-4 border-dashed border-pastel-purple/30 dark:border-neon-purple/30">
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ED8796]" />
                <div className="w-3 h-3 rounded-full bg-[#EED49F]" />
                <div className="w-3 h-3 rounded-full bg-[#A6DA95]" />
              </div>
              <span className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-mono ml-2">✦ johnny@portfolio:~ ✦</span>
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
            <div className="p-6 sm:p-10 font-mono text-xs sm:text-sm md:text-base overflow-x-auto relative bg-white/80 dark:bg-slate-900/80">
              <motion.div
                className="text-slate-700 dark:text-slate-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <pre className="whitespace-pre-wrap">
                  {text}
                  <motion.span
                    className="inline-block w-2 h-4 bg-slate-700 dark:bg-slate-300 ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </pre>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Elementos decorativos ao redor do terminal */}
      {!isMaximized && !isMinimized && !isExpanded && (
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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fundo animado */}
      <HomeBackground />
      
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