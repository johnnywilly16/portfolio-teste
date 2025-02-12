'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { useState } from 'react'

export function MobileMenu() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

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

  const Path = (props: any) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="currentColor"
      strokeLinecap="round"
      {...props}
    />
  )

  return (
    <>
      {/* Botão de tema separado */}
      <motion.button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed top-4 left-4 lg:top-6 lg:left-6 z-50 p-4 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-4 border-dashed border-pastel-purple/50 dark:border-neon-purple/50 shadow-lg"
        whileHover={{ 
          scale: 1.1,
          rotate: 180,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.9 }}
      >
        {theme === 'dark' ? (
          <FaSun className="text-neon-yellow w-6 h-6" />
        ) : (
          <FaMoon className="text-pastel-purple w-6 h-6" />
        )}
      </motion.button>

      <div className="lg:hidden fixed top-0 right-0 z-50 p-4">
        {/* Botão do menu animado */}
        <motion.button
          className="relative z-50 p-4 bg-white/90 dark:bg-slate-900/90 rounded-full backdrop-blur-lg border-4 border-dashed border-pastel-purple/50 dark:border-neon-purple/50 shadow-lg w-16 h-16 flex items-center justify-center"
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
                  <FaBars className="text-pastel-purple dark:text-neon-purple w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -180 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaTimes className="text-pastel-purple dark:text-neon-purple w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.button>

        {/* Menu em formato quadrado com bordas arredondadas */}
        <motion.div
          className="absolute top-4 right-4 w-80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg rounded-xl border-4 border-dashed border-pastel-purple/50 dark:border-neon-purple/50 p-6 origin-top-right shadow-lg"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          {/* Links de navegação em grid */}
          <motion.nav className="grid grid-cols-2 gap-4 mb-6">
            {['Início', 'Projetos', 'Sobre', 'Contato'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative p-4 text-center font-cartoon font-bold text-pastel-purple dark:text-neon-purple hover:text-pastel-pink dark:hover:text-neon-pink transition-colors bg-white/50 dark:bg-slate-800/50 rounded-xl border-2 border-dashed border-pastel-purple/30 dark:border-neon-purple/30"
                variants={itemVariants}
                onClick={() => setIsOpen(false)}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
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
                className={`p-4 flex items-center justify-center bg-gradient-to-r from-pastel-${item.color}/10 to-pastel-purple/10 dark:from-neon-${item.color}/10 dark:to-neon-purple/10 rounded-xl border-2 border-dashed border-pastel-${item.color}/30 dark:border-neon-${item.color}/30`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <item.icon 
                  className={`w-6 h-6 text-pastel-${item.color} dark:text-neon-${item.color}`}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  )
} 