import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Terminal } from '../Terminal'
import { FloatingClouds } from '../FloatingClouds'
import { FloatingBubbles } from '../FloatingBubbles'
import { motion } from 'framer-motion'
import { ContactBackground } from '../backgrounds/ContactBackground'

// Componente de fundo animado para a seção de contato
const ContactBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Bolhas de mensagem */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      >
        <svg
          className="w-12 h-12 text-pastel-purple/10 dark:text-neon-purple/10"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
      </motion.div>
    ))}

    {/* Ondas de comunicação */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={`wave-${i}`}
        className="absolute w-[200%] h-[200%] rounded-[40%]"
        style={{
          border: '2px solid',
          borderColor: 'var(--wave-color, rgba(179, 157, 219, 0.1))',
          left: '-50%',
          top: '-50%',
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20 + i * 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}

    {/* Partículas de emoji */}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={`emoji-${i}`}
        className="absolute text-lg"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
          y: [-30, 30],
          x: [-20, 20],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: Math.random() * 6,
        }}
      >
        {['💌', '✨', '💬', '🌟', '💜', '✉️'][Math.floor(Math.random() * 6)]}
      </motion.div>
    ))}
  </div>
)

export function ContactSection() {
  return (
    <section id="contato" className="min-h-screen py-20 relative">
      {/* Fundo animado */}
      <ContactBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <Terminal 
          title="contato@portfolio:~" 
          showEmoji="💌"
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-6 text-slate-700 dark:text-slate-300">
            <p className="text-lg mb-4">Olá! Vamos conversar? 👋</p>
            <p className="mb-6">Estou sempre aberto a novas oportunidades, parcerias e bate-papos sobre tecnologia. Escolha o meio que preferir para entrar em contato!</p>
            
            <div className="pl-4 border-l-2 border-pastel-purple/20 dark:border-neon-purple/20">
              <p className="mb-4">Você pode me encontrar em:</p>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:johnnywilly.dev@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-pastel-purple dark:hover:text-neon-purple transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <FaEnvelope className="text-xl" />
                  <span>johnnywilly.dev@gmail.com</span>
                </motion.a>

                <motion.a
                  href="https://github.com/johnnywilly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-pastel-purple dark:hover:text-neon-purple transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <FaGithub className="text-xl" />
                  <span>github.com/johnnywilly</span>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/johnnywilly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-pastel-purple dark:hover:text-neon-purple transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <FaLinkedin className="text-xl" />
                  <span>linkedin.com/in/johnnywilly</span>
                </motion.a>
              </div>
            </div>

            <p>$ cat ./mensagem.txt</p>
            <div className="pl-4 border-l-2 border-pastel-purple/20 dark:border-neon-purple/20">
              <p className="italic">
                "Estou sempre em busca de novos desafios e oportunidades para criar soluções inovadoras. Se você tem um projeto interessante ou apenas quer trocar ideias sobre tecnologia, ficarei feliz em conversar! Vamos criar algo incrível juntos! ✨"
              </p>
            </div>
          </div>
        </Terminal>
      </div>
    </section>
  )
} 