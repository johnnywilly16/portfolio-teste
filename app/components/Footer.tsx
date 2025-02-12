'use client'

import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

export function Footer() {
  return (
    <motion.footer 
      className="w-full bg-base-300/50 backdrop-blur-lg border-t border-purple-500/10 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div 
            className="text-gray-400 text-sm"
            whileHover={{ scale: 1.02 }}
          >
            © 2024 Johnny Willy. Todos os direitos reservados.
          </motion.div>

          <motion.div 
            className="flex items-center gap-2 text-gray-400 text-sm"
            whileHover={{ scale: 1.02 }}
          >
            Feito com <FaHeart className="text-purple-500" /> usando Next.js e Tailwind
          </motion.div>

          <motion.div className="flex gap-4">
            <motion.a
              href="#inicio"
              className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Voltar ao topo
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
} 