import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { TerminalTitle } from './HomeSection'
import { IconType } from 'react-icons'

// Componente de bolhas flutuantes
const FloatingBubbles = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-gradient-to-br from-pastel-purple/20 to-pastel-pink/20 dark:from-dark-purple/20 dark:to-dark-pink/20"
        style={{
          width: Math.random() * 60 + 20,
          height: Math.random() * 60 + 20,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [-50, 50],
          x: [-30, 30],
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: Math.random() * 8 + 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    ))}
  </div>
)

// Componente de Terminal de Contato
const ContactTerminal = ({ 
  icon: Icon, 
  title, 
  value, 
  link, 
  delay = 0,
  command
}: { 
  icon: IconType, 
  title: string, 
  value: string,
  link: string,
  delay?: number,
  command: string
}) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <motion.div
      className="relative bg-white/90 dark:bg-slate-800/90 rounded-xl border-4 border-dashed border-pastel-purple/30 dark:border-dark-purple/30 overflow-hidden shadow-xl transform-gpu hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
      whileHover={{ rotate: [-1, 1] }}
      transition={{ duration: 0.2 }}
    >
      {/* Barra de título do terminal */}
      <div className="bg-gradient-to-r from-pastel-purple/20 to-pastel-pink/20 dark:from-dark-purple/20 dark:to-dark-pink/20 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <span className="text-pastel-purple/50 dark:text-white/50 text-xs sm:text-sm font-mono ml-2">
            contact@terminal ~ {title.toLowerCase()}
          </span>
        </div>
      </div>

      {/* Conteúdo do terminal */}
      <div className="p-6 font-mono space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-pastel-pink dark:text-purple-400">$</span>
          <motion.span 
            className="text-pastel-purple dark:text-emerald-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {command}
          </motion.span>
        </div>

        <motion.div
          className="flex items-center gap-6 pl-6 text-pastel-purple dark:text-emerald-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Icon className="text-4xl" />
          <div className="space-y-1">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm opacity-80">{value}</p>
          </div>
        </motion.div>

        <motion.div
          className="pl-6 pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-pastel-purple/10 dark:bg-dark-purple/10 text-pastel-purple dark:text-emerald-400 text-sm group-hover:bg-pastel-purple/20 dark:group-hover:bg-dark-purple/20 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-pastel-pink dark:text-purple-400">→</span>
            Clique para conectar
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="w-2 h-4 bg-pastel-purple dark:bg-emerald-400 ml-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  </motion.a>
)

export function ContactSection() {
  return (
    <section id="contato" className="min-h-[70vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-pastel-purple/5 to-white dark:from-dark-surface dark:via-dark-purple/5 dark:to-dark-surface py-20">
      {/* Elementos de fundo */}
      <FloatingBubbles />

      <div className="w-full flex items-center justify-center relative z-10">
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
          {/* Título */}
          <div className="text-center mb-12">
            <TerminalTitle title="Entre em Contato" isActive={true} />
          </div>

          {/* Grid de terminais de contato */}
          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            <ContactTerminal
              icon={FaWhatsapp}
              title="WhatsApp"
              value="Clique para conversar"
              link="https://wa.me/5574991382563"
              delay={0}
              command="whatsapp --send-message"
            />

            <ContactTerminal
              icon={FaLinkedin}
              title="LinkedIn"
              value="Conecte-se comigo"
              link="https://www.linkedin.com/in/johnny-willy/"
              delay={0.2}
              command="linkedin --connect"
            />

            <ContactTerminal
              icon={FaEnvelope}
              title="Email"
              value="Envie uma mensagem"
              link="mailto:johnnywilly16@gmail.com"
              delay={0.4}
              command="email --compose"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 