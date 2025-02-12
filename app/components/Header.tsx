'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-50 pt-6 hidden lg:flex">
      <motion.header 
        className="w-[95%] max-w-4xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          {/* Background com estilo cartoon mais divertido */}
          <motion.div 
            className="absolute inset-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg rounded-[2rem] border-4 border-dashed border-pastel-purple/50 dark:border-neon-purple/50 shadow-lg"
            animate={{
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
                    y: [-20, 20, -20],
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
          </motion.div>

          <div className="relative px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo animado */}
              <motion.a
                href="#inicio"
                className="relative text-5xl font-handwriting font-bold"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-neon-purple dark:to-neon-pink text-transparent bg-clip-text">
                  J
                </span>
                {/* Estrelinhas ao redor do logo */}
                <motion.div
                  className="absolute -top-2 -right-2 text-lg text-pastel-yellow dark:text-neon-yellow"
                  animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.div>
              </motion.a>

              {/* Menu de navegação */}
              <nav className="flex items-center gap-4">
                {['Início', 'Projetos', 'Sobre', 'Contato'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative px-4 py-2 text-lg font-bold group"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 300
                    }}
                  >
                    <motion.div 
                      className="absolute -inset-1 rounded-xl border-4 border-dashed border-pastel-purple/50 dark:border-neon-purple/50"
                      initial={{ opacity: 0 }}
                      whileHover={{ 
                        opacity: 1,
                        rotate: [0, 360]
                      }}
                      transition={{
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }
                      }}
                    />
                    
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pastel-purple/20 to-pastel-pink/20 dark:from-neon-purple/20 dark:to-neon-pink/20 rounded-xl -z-10"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    
                    <span className="font-cartoon relative">
                      <span className="relative z-10 text-pastel-purple dark:text-neon-purple group-hover:text-pastel-pink dark:group-hover:text-neon-pink transition-colors">
                        {item}
                      </span>
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-pastel-purple/30 dark:bg-neon-purple/30"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                {/* Toggle de tema */}
                <motion.button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="relative p-3 rounded-xl bg-gradient-to-r from-pastel-yellow/20 to-pastel-purple/20 dark:from-neon-yellow/20 dark:to-neon-purple/20"
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {theme === 'dark' ? (
                    <FaSun className="text-neon-yellow w-5 h-5" />
                  ) : (
                    <FaMoon className="text-pastel-purple w-5 h-5" />
                  )}
                </motion.button>

                {/* Links sociais */}
                {[
                  { icon: FaGithub, href: 'https://github.com/johnny', color: 'purple' },
                  { icon: FaLinkedin, href: 'https://linkedin.com/in/johnny', color: 'blue' },
                  { icon: FaEnvelope, href: 'mailto:contato@johnny.dev', color: 'pink' }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative p-3 group bg-gradient-to-r from-pastel-${item.color}/10 to-pastel-purple/10 dark:from-neon-${item.color}/10 dark:to-neon-purple/10 rounded-xl`}
                    whileHover={{ y: -4, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <item.icon 
                      size={20} 
                      className={`text-pastel-${item.color} dark:text-neon-${item.color} group-hover:text-pastel-purple dark:group-hover:text-neon-purple transition-colors`}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.header>
    </div>
  )
} 