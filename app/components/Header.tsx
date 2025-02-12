'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export function Header() {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-50 pt-6">
      <motion.header 
        className="w-[95%] max-w-4xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          {/* Background com blur */}
          <div className="absolute inset-0 bg-base-300/40 backdrop-blur-lg rounded-[2rem] border border-purple-500/10 shadow-lg">
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-purple-400/5 to-purple-600/10" />
            </div>
          </div>

          <div className="relative px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.a
                href="#inicio"
                className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-transparent bg-clip-text"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                JW
              </motion.a>

              <nav className="flex items-center gap-2">
                {['Início', 'Projetos', 'Sobre', 'Contato'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative px-4 py-2 group"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Background hover */}
                    <motion.div
                      className="absolute inset-0 bg-purple-500/10 rounded-lg -z-10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="text-gray-300 group-hover:text-purple-400 transition-colors">
                      {item}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                {[
                  { icon: FaGithub, href: 'https://github.com/johnnywilly' },
                  { icon: FaLinkedin, href: 'https://linkedin.com/in/johnnywilly' },
                  { icon: FaEnvelope, href: 'mailto:contato@johnnywilly.com' }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-2 group"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Background hover */}
                    <motion.div
                      className="absolute inset-0 bg-purple-500/10 rounded-lg -z-10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <item.icon 
                      size={18} 
                      className="text-gray-300 group-hover:text-purple-400 transition-colors"
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