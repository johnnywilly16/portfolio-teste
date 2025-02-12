import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

// Componente de bolhas flutuantes
const FloatingBubbles = ({ color }: { color: string }) => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${color}, transparent)`,
          width: `${Math.random() * 100 + 50}px`,
          height: `${Math.random() * 100 + 50}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        initial={{ opacity: 0.3, scale: 0.8 }}
        animate={{
          y: [-20, 20],
          x: [-10, 10],
          scale: [0.8, 1.2],
          opacity: [0.3, 0.6],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          repeatType: "reverse",
          delay: i * 0.3,
        }}
      />
    ))}
  </div>
)

// Componente de estrelas decorativas aprimorado
const Stars = () => (
  <>
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-yellow-300/30 dark:text-yellow-300/20"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          fontSize: `${Math.random() * 20 + 10}px`,
        }}
        initial={{ opacity: 0.2, scale: 0.8 }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 360],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          delay: i * 0.2,
        }}
      >
        ✨
      </motion.div>
    ))}
  </>
)

// Componente de círculos decorativos
const BackgroundCircles = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-gradient-to-br from-pastel-purple/5 to-pastel-pink/5 dark:from-dark-purple/5 dark:to-dark-pink/5"
        style={{
          width: `${Math.random() * 300 + 200}px`,
          height: `${Math.random() * 300 + 200}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          x: [0, 30, 0],
          y: [0, 30, 0],
          scale: [0.8, 1, 0.8],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
)

export function ContactSection() {
  return (
    <section id="contato" className="min-h-screen py-20 bg-gradient-to-br from-white via-pastel-purple/5 to-white dark:from-dark-surface dark:via-dark-purple/5 dark:to-dark-surface backdrop-blur-sm relative z-10 overflow-hidden">
      {/* Fundo com círculos e estrelas */}
      <BackgroundCircles />
      <Stars />

      <div className="container mx-auto px-4 relative">
        {/* Título */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-cartoon font-bold relative inline-block px-6 sm:px-12 py-4 sm:py-6"
            whileHover={{ scale: 1.02 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-pastel-purple via-pastel-pink to-pastel-purple dark:from-dark-purple dark:via-dark-pink dark:to-dark-purple text-transparent bg-clip-text break-words sm:whitespace-nowrap relative"
              animate={{
                textShadow: [
                  "0 0 10px rgba(179, 157, 219, 0.5)",
                  "0 0 20px rgba(179, 157, 219, 0.7)",
                  "0 0 10px rgba(179, 157, 219, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Entre em Contato
            </motion.span>
            
            {/* Decorações do título */}
            <motion.div
              className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 text-2xl sm:text-4xl"
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              🌟
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 text-2xl sm:text-4xl"
              animate={{ rotate: [-10, 10], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✨
            </motion.div>
          </motion.h2>
        </motion.div>

        {/* Grid de contatos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-[#25D366] rounded-[2.5rem] rotate-2 scale-105 opacity-20 group-hover:rotate-3 transition-transform duration-300" />
            <div className="absolute inset-0 bg-[#25D366] rounded-[2.5rem] -rotate-2 scale-105 opacity-20 group-hover:-rotate-3 transition-transform duration-300" />
            
            <div className="relative bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-[2rem] p-8 h-full flex flex-col items-center justify-center gap-6 shadow-xl border-4 border-white/30">
              <FloatingBubbles color="#25D366" />
              
              <motion.div
                className="relative text-7xl text-white drop-shadow-lg"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaWhatsapp />
                <motion.div
                  className="absolute -top-2 -right-2 text-2xl"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ✨
                </motion.div>
              </motion.div>

              <div className="relative text-center z-10">
                <motion.h3 
                  className="text-3xl font-cartoon font-bold text-white mb-3 drop-shadow-lg"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  WhatsApp
                </motion.h3>
                <p className="text-xl text-white/90 font-cartoon mb-2">(11) 99999-9999</p>
                <motion.span 
                  className="inline-block text-sm text-white/80 font-cartoon px-4 py-2 bg-white/20 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  Vamos conversar! 💬
                </motion.span>
              </div>

              {/* Elementos decorativos */}
              <motion.div
                className="absolute -bottom-3 -right-3 text-4xl"
                animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                💭
              </motion.div>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/johnnywilly"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-[#0077B5] rounded-[2.5rem] rotate-2 scale-105 opacity-20 group-hover:rotate-3 transition-transform duration-300" />
            <div className="absolute inset-0 bg-[#0077B5] rounded-[2.5rem] -rotate-2 scale-105 opacity-20 group-hover:-rotate-3 transition-transform duration-300" />
            
            <div className="relative bg-gradient-to-br from-[#0077B5] to-[#00A0DC] rounded-[2rem] p-8 h-full flex flex-col items-center justify-center gap-6 shadow-xl border-4 border-white/30">
              <FloatingBubbles color="#0077B5" />
              
              <motion.div
                className="relative text-7xl text-white drop-shadow-lg"
                animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaLinkedin />
                <motion.div
                  className="absolute -top-2 -right-2 text-2xl"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ✨
                </motion.div>
              </motion.div>

              <div className="relative text-center z-10">
                <motion.h3 
                  className="text-3xl font-cartoon font-bold text-white mb-3 drop-shadow-lg"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  LinkedIn
                </motion.h3>
                <p className="text-xl text-white/90 font-cartoon mb-2">@johnnywilly</p>
                <motion.span 
                  className="inline-block text-sm text-white/80 font-cartoon px-4 py-2 bg-white/20 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  Vamos conectar! 🤝
                </motion.span>
              </div>

              {/* Elementos decorativos */}
              <motion.div
                className="absolute -bottom-3 -left-3 text-4xl"
                animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                🌐
              </motion.div>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:contato@johnny.dev"
            className="group relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-pastel-purple rounded-[2.5rem] rotate-2 scale-105 opacity-20 group-hover:rotate-3 transition-transform duration-300" />
            <div className="absolute inset-0 bg-pastel-pink rounded-[2.5rem] -rotate-2 scale-105 opacity-20 group-hover:-rotate-3 transition-transform duration-300" />
            
            <div className="relative bg-gradient-to-br from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink rounded-[2rem] p-8 h-full flex flex-col items-center justify-center gap-6 shadow-xl border-4 border-white/30">
              <FloatingBubbles color="#B39DDB" />
              
              <motion.div
                className="relative text-7xl text-white drop-shadow-lg"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaEnvelope />
                <motion.div
                  className="absolute -top-2 -right-2 text-2xl"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ✨
                </motion.div>
              </motion.div>

              <div className="relative text-center z-10">
                <motion.h3 
                  className="text-3xl font-cartoon font-bold text-white mb-3 drop-shadow-lg"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Email
                </motion.h3>
                <p className="text-xl text-white/90 font-cartoon mb-2">contato@johnny.dev</p>
                <motion.span 
                  className="inline-block text-sm text-white/80 font-cartoon px-4 py-2 bg-white/20 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  Manda um email! ✉️
                </motion.span>
              </div>

              {/* Elementos decorativos */}
              <motion.div
                className="absolute -bottom-3 -right-3 text-4xl"
                animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                📨
              </motion.div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
} 