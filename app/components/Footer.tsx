'use client'

import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

export function Footer() {
  return (
    <motion.footer 
      className="w-full bg-light-card/50 dark:bg-dark-surface/80 backdrop-blur-lg border-t border-pastel-purple/10 dark:border-dark-purple/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div 
            className="text-slate-600 dark:text-slate-300 text-sm font-cartoon"
            whileHover={{ scale: 1.02 }}
          >
            © 2025 Johnny Willy. Todos os direitos reservados.
          </motion.div>

          <motion.div 
            className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm font-cartoon order-first md:order-none"
            whileHover={{ scale: 1.02 }}
          >
            Feito com <FaHeart className="text-pastel-purple dark:text-dark-purple" /> usando Next.js e Tailwind
          </motion.div>

          <motion.a
            href="#inicio"
            className="text-slate-600 hover:text-pastel-purple dark:text-slate-300 dark:hover:text-dark-purple transition-colors text-sm font-cartoon flex items-center gap-2"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Voltar ao topo
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.footer>
  )
} 