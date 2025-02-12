'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { useState } from 'react'

export function MobileMenu() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  const menuVariants = {
    closed: {
      scale: 0,
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop
      window.scrollTo({
        top: offsetTop - 100,
        behavior: 'smooth'
      })
      setActiveSection(sectionId)
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Botão de tema separado - apenas mobile */}
      <motion.button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed top-4 left-4 lg:hidden z-50 p-4 rounded-full bg-white/90 dark:bg-dark-surface/90 backdrop-blur-lg border-4 border-dashed border-pastel-purple/50 dark:border-dark-purple/50 shadow-lg"
        whileHover={{ 
          scale: 1.1,
          rotate: 180,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.9 }}
      >
        {theme === 'dark' ? (
          <FaSun className="text-dark-yellow w-6 h-6" />
        ) : (
          <FaMoon className="text-pastel-purple w-6 h-6" />
        )}
      </motion.button>

      <div className="lg:hidden fixed top-0 right-0 z-50 p-4">
        {/* Botão do menu animado */}
        <motion.button
          className="relative z-50 p-4 bg-white/90 dark:bg-dark-surface/90 rounded-full backdrop-blur-lg border-4 border-dashed border-pastel-purple/50 dark:border-dark-purple/50 shadow-lg w-16 h-16 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="relative w-6 h-6">
            <AnimatePresence mode="wait">
              {!isOpen ? (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaBars className="text-pastel-purple dark:text-dark-purple w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -180 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaTimes className="text-pastel-purple dark:text-dark-purple w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.button>

        {/* Menu em formato quadrado com bordas arredondadas */}
        <motion.div
          className="absolute top-4 right-4 w-80 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-lg rounded-xl border-4 border-dashed border-pastel-purple/50 dark:border-dark-purple/50 p-6 origin-top-right shadow-lg"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          {/* Links de navegação em grid */}
          <motion.nav className="grid grid-cols-1 gap-4 mb-6">
            {[
              { id: 'inicio', label: 'Início' },
              { id: 'projetos', label: 'Projetos' },
              { id: 'sobre', label: 'Sobre' },
              { id: 'contato', label: 'Contato' }
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className={`relative overflow-hidden rounded-xl transition-all duration-500 ${
                    activeSection === item.id 
                      ? 'bg-white dark:bg-slate-800 border-2 border-pastel-purple dark:border-dark-purple shadow-lg' 
                      : 'border-2 border-transparent'
                  }`}
                  layout
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
                  <motion.div 
                    className={`relative z-10 px-4 py-3 flex items-center justify-between ${
                      activeSection === item.id 
                        ? 'text-pastel-purple dark:text-emerald-400' 
                        : 'text-pastel-purple/70 dark:text-dark-purple/70'
                    }`}
                    layout
                  >
                    <span className="flex items-center gap-2 font-bold">
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
                    </span>

                    {/* Cursor piscante */}
                    {activeSection === item.id && (
                      <motion.div
                        className="w-1.5 h-4 bg-pastel-purple dark:bg-emerald-400"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: [1, 0], scale: 1 }}
                        transition={{ 
                          opacity: { duration: 0.8, repeat: Infinity },
                          scale: { duration: 0.2 }
                        }}
                      />
                    )}
                  </motion.div>

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
          </motion.nav>

          {/* Links sociais */}
          <motion.div className="grid grid-cols-3 gap-4" variants={itemVariants}>
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
                className={`p-4 flex items-center justify-center bg-gradient-to-r from-pastel-${item.color}/10 to-pastel-purple/10 dark:from-dark-${item.color}/10 dark:to-dark-purple/10 rounded-xl border-2 border-dashed border-pastel-${item.color}/30 dark:border-dark-${item.color}/30`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <item.icon 
                  className={`w-6 h-6 text-pastel-${item.color} dark:text-dark-${item.color}`}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  )
} 