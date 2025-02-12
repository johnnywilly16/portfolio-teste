import { motion } from 'framer-motion'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiPostgresql, SiMongodb, SiDocker,
  SiGit, SiAmazonwebservices, SiFirebase, SiPrisma
} from 'react-icons/si'

const frontendTechs = [
  { icon: SiReact, name: 'React' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiTailwindcss, name: 'Tailwind' }
]

const backendTechs = [
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiGit, name: 'Git' },
  { icon: SiAmazonwebservices, name: 'AWS' },
  { icon: SiFirebase, name: 'Firebase' },
  { icon: SiPrisma, name: 'Prisma' }
]

// Componente de giz flutuante
const FloatingChalk = ({ delay = 0, top, left }: { delay: number, top: string, left: string }) => (
  <motion.div
    className="absolute text-white/30 text-2xl"
    style={{ top, left }}
    initial={{ opacity: 0.3, scale: 0.5 }}
    animate={{ 
      opacity: [0.3, 0.6, 0.3],
      scale: [0.8, 1, 0.8],
      x: [-10, 10, -10]
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    ✎
  </motion.div>
)

export function AboutSection() {
  return (
    <section id="sobre" className="min-h-screen py-20 bg-gradient-to-b from-white/80 to-pastel-purple/5 dark:from-dark-surface/80 dark:to-dark-purple/5 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-6xl font-cartoon font-bold relative inline-block px-12 py-6"
            whileHover={{ scale: 1.02 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-pastel-purple via-pastel-pink to-pastel-purple dark:from-dark-purple dark:via-dark-pink dark:to-dark-purple text-transparent bg-clip-text whitespace-nowrap"
              animate={{
                textShadow: [
                  "0 0 10px rgba(179, 157, 219, 0.5)",
                  "0 0 20px rgba(179, 157, 219, 0.7)",
                  "0 0 10px rgba(179, 157, 219, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Sobre Mim
            </motion.span>
            {/* Estrelinhas decorativas */}
            <motion.div
              className="absolute -top-8 -right-8 text-3xl text-pastel-yellow dark:text-dark-yellow"
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -left-6 text-3xl text-pastel-pink dark:text-dark-pink transform -rotate-12"
              animate={{ rotate: [-12, 12, -12] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⭐
            </motion.div>
          </motion.h2>
        </motion.div>

        {/* Conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio animada */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="bg-white/90 dark:bg-dark-surface/90 backdrop-blur-md rounded-3xl border-4 border-dashed border-pastel-purple/30 dark:border-dark-purple/30 p-8 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
            >
              {/* Efeito de brilho no hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000"
              />

              {/* Emoji decorativo */}
              <motion.div
                className="absolute -top-2 -right-2 text-4xl"
                animate={{ 
                  rotate: [-10, 10, -10],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👨‍💻
              </motion.div>

              <div className="space-y-4">
                <motion.p 
                  className="text-lg text-slate-600 dark:text-slate-300 font-cartoon leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Olá! Sou um desenvolvedor fullstack apaixonado por criar experiências digitais incríveis. Com mais de 5 anos de experiência, tenho trabalhado com as tecnologias mais modernas do mercado.
                </motion.p>
                <motion.p 
                  className="text-lg text-slate-600 dark:text-slate-300 font-cartoon leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Minha jornada inclui projetos desafiadores em diversas áreas, desde e-commerce até aplicativos mobile. Estou sempre em busca de novos desafios e aprendizados.
                </motion.p>
              </div>

              {/* Decorações flutuantes */}
              <motion.div
                className="absolute bottom-4 right-4 text-2xl"
                animate={{ 
                  y: [-5, 5, -5],
                  rotate: [-10, 10, -10]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🚀
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Quadro negro com tecnologias */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Quadro Frontend */}
            <motion.div
              className="bg-slate-800 backdrop-blur-md rounded-3xl border-8 border-slate-700 p-8 relative overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
            >
              {/* Título do quadro */}
              <motion.h3 
                className="text-2xl font-cartoon font-bold text-white mb-8 relative inline-block"
                animate={{ x: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Frontend
                <motion.span
                  className="absolute -top-4 -right-4 text-2xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity }}
                >
                  💻
                </motion.span>
              </motion.h3>

              {/* Grid de ícones */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {frontendTechs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="flex flex-col items-center gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: [-5, 5, -5] }}
                  >
                    <tech.icon className="text-4xl text-white/90" />
                    <span className="text-sm text-white/70 font-cartoon">{tech.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* Efeito de giz */}
              {[...Array(3)].map((_, i) => (
                <FloatingChalk
                  key={i}
                  delay={i * 0.5}
                  top={`${20 + i * 30}%`}
                  left={`${10 + i * 40}%`}
                />
              ))}
            </motion.div>

            {/* Quadro Backend */}
            <motion.div
              className="bg-slate-800 backdrop-blur-md rounded-3xl border-8 border-slate-700 p-8 relative overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
            >
              {/* Título do quadro */}
              <motion.h3 
                className="text-2xl font-cartoon font-bold text-white mb-8 relative inline-block"
                animate={{ x: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Backend
                <motion.span
                  className="absolute -top-4 -right-4 text-2xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity }}
                >
                  ⚙️
                </motion.span>
              </motion.h3>

              {/* Grid de ícones */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {backendTechs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="flex flex-col items-center gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: [-5, 5, -5] }}
                  >
                    <tech.icon className="text-4xl text-white/90" />
                    <span className="text-sm text-white/70 font-cartoon">{tech.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* Efeito de giz */}
              {[...Array(3)].map((_, i) => (
                <FloatingChalk
                  key={i}
                  delay={i * 0.5}
                  top={`${20 + i * 30}%`}
                  left={`${10 + i * 40}%`}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 