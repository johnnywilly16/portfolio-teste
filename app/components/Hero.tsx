'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import anime from 'animejs'

export function Hero() {
  const doodlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!doodlesRef.current) return;

    // Limpa doodles existentes
    while (doodlesRef.current.firstChild) {
      doodlesRef.current.removeChild(doodlesRef.current.firstChild);
    }

    const doodleTypes = [
      "star", "circle", "squiggle", "cloud", "heart", "sun"
    ];
    const container = doodlesRef.current;
    const containerRect = container.getBoundingClientRect();

    // Cria 50 doodles
    for (let i = 0; i < 50; i++) {
      const doodleType = doodleTypes[Math.floor(Math.random() * doodleTypes.length)];
      const img = document.createElement("img");
      img.src = `/doodles/${doodleType}.svg`;
      img.className = "doodle";
      
      // Posição aleatória
      const x = Math.random() * (containerRect.width - 60);
      const y = Math.random() * (containerRect.height - 60);
      
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;
      
      container.appendChild(img);
    }

    // Anima os doodles com mais variação
    anime({
      targets: ".doodle",
      rotate: [
        { value: () => anime.random(-15, 15), duration: 3000, easing: "easeInOutSine" },
        { value: () => anime.random(-15, 15), duration: 3000, easing: "easeInOutSine" }
      ],
      scale: [
        { value: () => anime.random(0.8, 1.2), duration: 2000, easing: "easeInOutQuad" },
        { value: () => anime.random(0.8, 1.2), duration: 2000, easing: "easeInOutQuad" }
      ],
      opacity: [
        { value: () => anime.random(0.4, 1), duration: 2000, easing: "easeInOutQuad" },
        { value: () => anime.random(0.4, 1), duration: 2000, easing: "easeInOutQuad" }
      ],
      translateY: [
        { value: () => anime.random(-20, 20), duration: 3000, easing: "easeInOutQuad" },
        { value: () => anime.random(-20, 20), duration: 3000, easing: "easeInOutQuad" }
      ],
      translateX: [
        { value: () => anime.random(-20, 20), duration: 3000, easing: "easeInOutQuad" },
        { value: () => anime.random(-20, 20), duration: 3000, easing: "easeInOutQuad" }
      ],
      loop: true,
      direction: "alternate",
      delay: anime.stagger(100)
    });
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-dark-surface notebook-bg paper-texture">
      {/* Fundo animado com gradiente */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-pastel-purple/5 via-pastel-pink/5 to-pastel-yellow/5 dark:from-dark-purple/5 dark:via-dark-pink/5 dark:to-dark-yellow/5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundSize: '200% 200%'
        }}
      />

      {/* Container dos doodles com máscara de opacidade nas bordas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-dark-surface dark:to-dark-surface pointer-events-none z-10" />
        <div ref={doodlesRef} className="absolute inset-0 z-0" />
      </div>

      {/* Mini Terminal */}
      <motion.div 
        className="terminal-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {/* Monitor */}
        <motion.div 
          className="terminal-window"
          animate={{
            y: [-2, 2, -2],
            rotate: [-1, 1, -1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Tela */}
          <div className="terminal-screen">
            {/* Terminal */}
            <div className="overflow-hidden rounded-md">
              <div className="terminal-header">
                <div className="terminal-button bg-pastel-pink/50" />
                <div className="terminal-button bg-pastel-yellow/50" />
                <div className="terminal-button bg-pastel-purple/50" />
              </div>
              <div className="terminal-content">
                <motion.div
                  className="terminal-text"
                  animate={{
                    x: ["0%", "-50%"]
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                >
                  console.log("Hello World!"); npm install; git commit -m "feat: ✨" &nbsp;&nbsp;&nbsp;&nbsp;
                  console.log("Hello World!"); npm install; git commit -m "feat: ✨"
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Base do Monitor */}
        <motion.div 
          className="w-8 h-8 bg-gradient-to-b from-pastel-purple/20 to-pastel-pink/20 mx-auto -mt-1 rounded-lg"
          animate={{
            scaleX: [1, 1.1, 1],
            y: [0, -1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-12 h-2 bg-pastel-purple/30 mx-auto mt-1 rounded-lg" />
        </motion.div>
      </motion.div>

      {/* Conteúdo Principal */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="space-y-6 md:space-y-8">
          {/* Nome JOHNNY com efeitos */}
          <motion.div className="flex justify-center space-x-2 md:space-x-4 mb-4 md:mb-8">
            {['J', 'O', 'H', 'N', 'N', 'Y'].map((letter, index) => (
              <motion.div
                key={letter + index}
                className="relative"
                initial={{ y: 50, opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 200 }}
              >
                {/* Efeito de glow base */}
                <motion.div
                  className="absolute inset-0 bg-pastel-purple/20 dark:bg-dark-purple/30 blur-2xl rounded-full"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                />
                
                {/* Letra com sombra e efeitos */}
                <motion.span
                  className="title-cartoon text-7xl md:text-8xl lg:text-9xl font-bold text-pastel-purple dark:text-dark-purple relative inline-block"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: index % 2 === 0 ? -10 : 10,
                    transition: { duration: 0.3 }
                  }}
                  drag 
                  dragConstraints={{ top: -10, right: 10, bottom: 10, left: -10 }}
                >
                  {letter}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>

          {/* Container do título */}
          <div className="relative inline-block bg-white/10 backdrop-blur-sm rounded-xl px-4 md:px-6 py-2 md:py-3 border-2 border-dashed border-pastel-purple/50 hover:border-pastel-pink/50 transition-colors duration-300">
            {/* Palavra "Desenvolvedor" */}
            <span className="relative font-bold text-lg md:text-xl lg:text-3xl bg-gradient-to-r from-pastel-purple via-pastel-pink to-pastel-purple text-transparent bg-clip-text">
              Desenvolvedor
            </span>
            
            {/* Espaço animado */}
            <motion.span
              className="inline-block mx-1 md:mx-2 text-xl md:text-2xl"
              animate={{ 
                rotate: [0, 180]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              ⚡
            </motion.span>

            {/* Palavra "Fullstack" */}
            <span className="relative font-bold text-lg md:text-xl lg:text-3xl bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-pink text-transparent bg-clip-text">
              Fullstack
            </span>
          </div>
        </div>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* Botão Ver Projetos */}
          <motion.a 
            href="#projetos" 
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Efeito de sombra */}
            <div className="absolute inset-0 bg-pastel-pink/30 rounded-xl transform translate-x-2 translate-y-2" />
            
            {/* Botão principal */}
            <div className="relative px-8 py-4 bg-gradient-to-r from-pastel-purple to-pastel-pink rounded-xl overflow-hidden">
              {/* Partículas flutuantes */}
              <motion.div
                className="absolute inset-0"
                initial="initial"
                animate="animate"
                variants={{
                  animate: {
                    transition: {
                      staggerChildren: 0.3
                    }
                  }
                }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: '50%'
                    }}
                    animate={{
                      y: [-20, 20],
                      opacity: [0.2, 0.5, 0.2],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>

              {/* Texto e ícone */}
              <div className="relative flex items-center justify-center">
                <span className="font-cartoon text-xl text-white group-hover:text-pastel-yellow transition-colors">
                  Ver Projetos
                </span>
                
                {/* Ícone de seta animado */}
                <motion.div
                  className="ml-2 text-white group-hover:text-pastel-yellow"
                  animate={{
                    x: [0, 5, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  →
                </motion.div>
              </div>

              {/* Efeito de brilho no hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                animate={{
                  x: ['0%', '200%']
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 0.5
                }}
              />
            </div>
          </motion.a>
          
          {/* Botão Contato */}
          <motion.a 
            href="#contato"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Efeito de sombra */}
            <div className="absolute inset-0 bg-pastel-purple/30 rounded-xl transform translate-x-2 translate-y-2" />
            
            {/* Botão principal */}
            <div className="relative px-8 py-4 bg-pastel-purple rounded-xl">
              <span className="font-cartoon text-xl text-white group-hover:text-pastel-yellow transition-colors">
                Contato
              </span>
            </div>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-3 border-pastel-purple rounded-full p-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-2 h-2 bg-pastel-purple rounded-full mx-auto" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
} 