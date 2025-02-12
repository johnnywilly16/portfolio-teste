'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { useState } from 'react'

export function MobileMenu() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
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
    <div className="lg:hidden fixed top-0 right-0 w-full z-50 p-4 flex justify-end">
      {/* Botão do Terminal */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-white dark:bg-slate-800 text-pastel-purple dark:text-emerald-400 rounded-xl border-2 border-dashed border-pastel-purple/30 dark:border-dark-purple/30 px-4 py-2 font-mono text-sm flex items-center gap-2 backdrop-blur-sm shadow-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-pastel-pink dark:text-purple-400">$</span>
        {isOpen ? 'exit' : './menu.sh'}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="w-2 h-4 bg-pastel-purple dark:bg-emerald-400"
        />
      </motion.button>

      {/* Menu Terminal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-20 right-4 w-64 bg-white dark:bg-slate-800 rounded-xl border-2 border-dashed border-pastel-purple/30 dark:border-dark-purple/30 overflow-hidden backdrop-blur-sm shadow-lg"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Barra de título do terminal */}
            <div className="bg-white dark:bg-slate-700 px-4 py-2 flex items-center justify-between border-b-2 border-dashed border-pastel-purple/30 dark:border-dark-purple/30">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <span className="text-pastel-purple/50 dark:text-white/50 text-xs font-mono">terminal</span>
              </div>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-pastel-purple/50 dark:text-white/50 hover:text-pastel-purple dark:hover:text-white"
              >
                {theme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
              </button>
            </div>

            {/* Conteúdo do Terminal */}
            <div className="p-4 font-mono text-sm space-y-2">
              {[
                { id: 'inicio', command: 'cd ~' },
                { id: 'projetos', command: 'cd ~/projetos' },
                { id: 'sobre', command: 'cd ~/sobre' },
                { id: 'contato', command: 'cd ~/contato' }
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center gap-2 text-pastel-purple dark:text-emerald-400">
                    <span className="text-pastel-pink dark:text-purple-400">$</span>
                    <span>{item.command}</span>
                    {activeSection === item.id && (
                      <motion.span
                        className="w-2 h-4 bg-pastel-purple dark:bg-emerald-400 ml-2"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                    )}
                  </div>
                </motion.button>
              ))}

              {/* Links Sociais */}
              <div className="pt-4 border-t border-pastel-purple/20 dark:border-slate-700 mt-4">
                <div className="text-pastel-purple/70 dark:text-emerald-300/70 mb-2">$ ls ~/social</div>
                <div className="flex gap-4">
                  {[
                    { icon: FaGithub, href: 'https://github.com/johnny' },
                    { icon: FaLinkedin, href: 'https://linkedin.com/in/johnny' },
                    { icon: FaEnvelope, href: 'mailto:contato@johnny.dev' }
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pastel-purple hover:text-pastel-pink dark:text-emerald-400 dark:hover:text-emerald-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <item.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 