'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = ['inicio', 'projetos', 'sobre', 'contato']
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop
      window.scrollTo({
        top: offsetTop - 100,
        behavior: 'smooth'
      })
    }
  }

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
              {/* Logo limpo */}
              <div className="relative text-5xl font-handwriting font-bold">
                <span className="bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink text-transparent bg-clip-text">
                  
                </span>
              </div>

              {/* Menu de navegação */}
              <nav className="flex items-center gap-4">
                {[
                  { id: 'inicio', label: 'Início' },
                  { id: 'projetos', label: 'Projetos' },
                  { id: 'sobre', label: 'Sobre' },
                  { id: 'contato', label: 'Contato' }
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="relative px-4 py-2 text-lg font-bold group"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Container do Terminal */}
                    <motion.div 
                      className={`relative overflow-hidden rounded-xl transition-all duration-500 ${
                        activeSection === item.id 
                          ? 'bg-white dark:bg-slate-800 border-2 border-pastel-purple dark:border-dark-purple shadow-lg' 
                          : 'border-2 border-transparent'
                      }`}
                      layout
                      animate={{
                        scale: activeSection === item.id ? 1.05 : 1,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Barra de título do terminal */}
                      {activeSection === item.id && (
                        <motion.div 
                          className="absolute top-0 left-0 right-0 h-2 bg-slate-100 dark:bg-slate-700 flex items-center px-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex gap-1">
                            <div className="w-1 h-1 rounded-full bg-red-500" />
                            <div className="w-1 h-1 rounded-full bg-yellow-500" />
                            <div className="w-1 h-1 rounded-full bg-green-500" />
                          </div>
                        </motion.div>
                      )}
                      
                      {/* Texto do menu */}
                      <motion.span 
                        className={`relative z-10 px-4 py-2 block transition-colors duration-300 ${
                          activeSection === item.id 
                            ? 'text-pastel-purple dark:text-emerald-400' 
                            : 'text-pastel-purple/70 dark:text-dark-purple/70'
                        }`}
                        layout
                      >
                        <div className="flex items-center gap-2">
                          {activeSection === item.id && (
                            <motion.span 
                              className="text-pastel-purple dark:text-purple-400"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              $
                            </motion.span>
                          )}
                          {item.label}
                          {/* Cursor piscante */}
                          {activeSection === item.id && (
                            <motion.div
                              className="w-1.5 h-4 bg-pastel-purple dark:bg-emerald-400 ml-2"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: [1, 0], scale: 1 }}
                              transition={{ 
                                opacity: { duration: 0.8, repeat: Infinity },
                                scale: { duration: 0.2 }
                              }}
                            />
                          )}
                        </div>
                      </motion.span>

                      {/* Efeito de brilho */}
                      {activeSection === item.id && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-pastel-purple/10 to-pastel-pink/10 dark:from-dark-purple/10 dark:to-dark-pink/10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0.5, 0.8, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                  </motion.button>
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