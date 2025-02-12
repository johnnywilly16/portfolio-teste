'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import anime from 'animejs'

export function Hero() {
  const starsContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (starsContainerRef.current) {
      // Limpar estrelas existentes
      while (starsContainerRef.current.firstChild) {
        starsContainerRef.current.removeChild(starsContainerRef.current.firstChild)
      }

      // Criar diferentes tipos de estrelas
      const createStars = (count: number, className: string) => {
        return Array.from({ length: count }).map(() => {
          const star = document.createElement('div')
          star.className = className
          star.style.left = `${Math.random() * 100}%`
          star.style.top = `${Math.random() * 100}%`
          starsContainerRef.current?.appendChild(star)
          return star
        })
      }

      // Criar três tipos de estrelas com tamanhos diferentes
      const smallStars = createStars(100, 'absolute w-1 h-1 rounded-full bg-white opacity-40')
      const mediumStars = createStars(50, 'absolute w-1.5 h-1.5 rounded-full bg-white opacity-60')
      const largeStars = createStars(20, 'absolute w-2 h-2 rounded-full bg-white opacity-80')

      // Animação para estrelas pequenas
      anime({
        targets: smallStars,
        opacity: [0.4, 0.8],
        scale: [1, 1.2],
        translateY: [-10, 10],
        translateX: [-10, 10],
        duration: () => anime.random(2000, 4000),
        delay: () => anime.random(0, 2000),
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutQuad'
      })

      // Animação para estrelas médias
      anime({
        targets: mediumStars,
        opacity: [0.6, 1],
        scale: [1, 1.4],
        translateY: [-15, 15],
        translateX: [-15, 15],
        boxShadow: [
          '0 0 2px rgba(255,255,255,0.5)',
          '0 0 4px rgba(255,255,255,0.8)',
          '0 0 8px rgba(168,85,247,0.5)'
        ],
        duration: () => anime.random(3000, 5000),
        delay: () => anime.random(0, 3000),
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine'
      })

      // Animação para estrelas grandes
      anime({
        targets: largeStars,
        opacity: [0.8, 1],
        scale: [1, 1.6],
        translateY: [-20, 20],
        translateX: [-20, 20],
        boxShadow: [
          '0 0 4px rgba(255,255,255,0.8)',
          '0 0 8px rgba(255,255,255,1)',
          '0 0 12px rgba(168,85,247,0.8)'
        ],
        duration: () => anime.random(4000, 6000),
        delay: () => anime.random(0, 4000),
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutExpo'
      })
    }
  }, [])

  return (
    <>
      {/* Container de estrelas com fundo gradiente */}
      <div
        ref={starsContainerRef}
        className="fixed inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)'
        }}
      />

      {/* Conteúdo principal */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8">
            <motion.h1 
              className="text-8xl md:text-9xl font-bold tracking-tighter gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              JOHNNY
              <style jsx global>{`
                .gradient-text {
                  background: linear-gradient(
                    45deg,
                    #A855F7,
                    #E9D5FF,
                    #A855F7
                  );
                  background-size: 200% 200%;
                  animation: gradient 8s ease infinite;
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                }

                @keyframes gradient {
                  0% { background-position: 0% 50% }
                  50% { background-position: 100% 50% }
                  100% { background-position: 0% 50% }
                }
              `}</style>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Desenvolvedor Fullstack & UI/UX Designer
            </motion.p>

            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.a
                href="#projetos"
                className="btn bg-purple-500 hover:bg-purple-600 border-none"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Projetos
              </motion.a>
              <motion.a
                href="#contato"
                className="btn btn-outline border-purple-500 text-purple-500 hover:bg-purple-500 hover:border-purple-500"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contato
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="w-6 h-10 border-2 border-purple-500 rounded-full p-1">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce mx-auto" />
          </div>
        </motion.div>
      </motion.section>
    </>
  )
} 