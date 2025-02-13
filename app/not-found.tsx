'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-light-surface via-pastel-purple/5 to-light-surface dark:from-dark-surface dark:via-dark-purple/5 dark:to-dark-surface">
      <div className="text-center space-y-8">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-9xl font-cartoon"
        >
          404
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-2xl font-cartoon font-bold bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink text-transparent bg-clip-text">
            Página não encontrada
          </h1>
          
          <p className="text-slate-600 dark:text-slate-300 font-cartoon">
            Ops! Parece que você se perdeu no caminho.
          </p>

          <Link href="/">
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink text-white rounded-xl font-cartoon font-bold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voltar para o início
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 