import { motion } from 'framer-motion'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiPostgresql, SiMongodb, SiDocker,
  SiGit, SiAmazonwebservices, SiFirebase, SiPrisma,
  SiAngular
} from 'react-icons/si'
import { TerminalTitle } from './HomeSection'

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

// Componente de estrelas decorativas
const Stars = () => (
  <>
    {[...Array(15)].map((_, i) => (
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

// Componente de nuvem de pensamento
const ThoughtCloud = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    className="relative"
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
  >
    <motion.div
      className="absolute inset-0 bg-white/90 dark:bg-dark-surface/90 rounded-2xl sm:rounded-[3rem] transform rotate-2"
      animate={{ rotate: [2, -2, 2] }}
      transition={{ duration: 6, repeat: Infinity }}
    />
    <div className="relative bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md rounded-xl sm:rounded-[2.5rem] p-4 sm:p-6 border-4 border-dashed border-pastel-purple/30 dark:border-dark-purple/30">
      {children}
    </div>
  </motion.div>
)

// Componente de ícone de tecnologia flutuante
const FloatingTechIcon = ({ 
  Icon, 
  name, 
  delay = 0 
}: { 
  Icon: React.ComponentType<{ className?: string }>, 
  name: string, 
  delay?: number 
}) => (
  <motion.div
    className="group relative flex flex-col items-center justify-center gap-2"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <motion.div
      className="relative p-3 sm:p-4 bg-white/90 dark:bg-dark-surface/90 rounded-xl border-2 border-dashed border-pastel-purple/30 dark:border-dark-purple/30 group-hover:border-pastel-pink/50 dark:group-hover:border-dark-pink/50 transition-all duration-300"
      whileHover={{ scale: 1.1, rotate: [-5, 5, 0], transition: { duration: 0.3 } }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-pastel-purple/20 to-pastel-pink/20 dark:from-dark-purple/20 dark:to-dark-pink/20 rounded-xl blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      <div className="relative">
        <Icon className="text-2xl sm:text-3xl text-pastel-purple dark:text-dark-purple" />
        <motion.div
          className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ✨
        </motion.div>
      </div>
    </motion.div>

    <motion.span
      className="text-xs sm:text-sm font-cartoon text-pastel-purple dark:text-dark-purple opacity-80 group-hover:opacity-100 transition-opacity duration-300 text-center min-h-[1.5rem]"
      initial={{ opacity: 0.8 }}
      whileHover={{ opacity: 1 }}
    >
      {name}
    </motion.span>
  </motion.div>
)

export function AboutSection() {
  return (
    <section id="sobre" className="min-h-screen py-20 bg-gradient-to-b from-pastel-purple/5 via-white/80 to-pastel-purple/10 dark:from-dark-purple/5 dark:via-dark-surface/80 dark:to-dark-purple/10 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Background com estrelas */}
        <Stars />
        
        <div className="container mx-auto px-4 sm:px-6">
          {/* Título */}
          <div className="text-center mb-16">
            <TerminalTitle title="Sobre Mim" isActive={true} />
          </div>

          {/* Conteúdo Principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
            {/* Coluna da Bio */}
            <div className="space-y-6 sm:space-y-8">
              {/* Card do Desenvolvedor */}
              <ThoughtCloud delay={0.2}>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <motion.div
                    className="relative text-4xl sm:text-6xl"
                    animate={{ 
                      rotate: [-10, 10],
                      y: [-5, 5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    👨‍💻
                    <motion.div
                      className="absolute -top-2 -right-2 text-xl sm:text-2xl"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 360]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      ✨
                    </motion.div>
                  </motion.div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-cartoon font-bold bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink text-transparent bg-clip-text">
                      Desenvolvedor Fullstack
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                      +5 anos de experiência
                    </p>
                  </div>
                </div>
                <motion.p 
                  className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-cartoon leading-relaxed text-center sm:text-left"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Olá! Sou um desenvolvedor apaixonado por criar experiências digitais incríveis. 
                  Minha jornada na programação começou com muita curiosidade e hoje se transformou em uma verdadeira aventura! 🚀
                </motion.p>
              </ThoughtCloud>

              {/* Card de Interesses */}
              <ThoughtCloud delay={0.4}>
                <div className="flex items-center gap-6 mb-6">
                  <motion.div
                    className="relative text-6xl"
                    animate={{ 
                      rotate: [10, -10],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🎮
                    <motion.div
                      className="absolute -top-2 -right-2 text-2xl"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 360]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      ✨
                    </motion.div>
                  </motion.div>
                  <h3 className="text-2xl font-cartoon font-bold bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink text-transparent bg-clip-text">
                    Interesses
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { emoji: "🎮", text: "Games" },
                    { emoji: "🎵", text: "Música" },
                    { emoji: "📚", text: "Livros" },
                    { emoji: "✈️", text: "Viagens" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 bg-pastel-purple/10 dark:bg-dark-purple/10 rounded-xl p-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.span
                        animate={{ 
                          rotate: [-10, 10],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {item.emoji}
                      </motion.span>
                      <span className="font-cartoon text-slate-600 dark:text-slate-300">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </ThoughtCloud>

              {/* Card de Objetivos */}
              <ThoughtCloud delay={0.6}>
                <div className="flex items-center gap-6 mb-6">
                  <motion.div
                    className="relative text-6xl"
                    animate={{ 
                      y: [-5, 5],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🎯
                    <motion.div
                      className="absolute -top-2 -right-2 text-2xl"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 360]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      ✨
                    </motion.div>
                  </motion.div>
                  <h3 className="text-2xl font-cartoon font-bold bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink text-transparent bg-clip-text">
                    Objetivos
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { text: "Criar soluções inovadoras", emoji: "💡" },
                    { text: "Aprender novas tecnologias", emoji: "📚" },
                    { text: "Contribuir com a comunidade", emoji: "🤝" }
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <motion.span
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [-10, 10]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {item.emoji}
                      </motion.span>
                      <span className="font-cartoon text-slate-600 dark:text-slate-300">
                        {item.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </ThoughtCloud>
            </div>

            {/* Coluna de Tecnologias */}
            <div className="space-y-6 sm:space-y-8">
              {/* Frontend */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-pastel-purple/10 to-pastel-pink/10 dark:from-dark-purple/10 dark:to-dark-pink/10 backdrop-blur-md rounded-2xl sm:rounded-[2rem] p-4 sm:p-8 border-4 border-dashed border-pastel-purple/30 dark:border-dark-purple/30">
                  <FloatingBubbles color="rgba(179, 157, 219, 0.1)" />
                  
                  <div className="relative">
                    <motion.h3 
                      className="text-2xl sm:text-3xl font-cartoon font-bold mb-6 sm:mb-8 bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink text-transparent bg-clip-text flex items-center gap-4"
                      animate={{ x: [-2, 2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span>Frontend</span>
                      <motion.span
                        className="text-4xl"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity }}
                      >
                        💻
                      </motion.span>
                    </motion.h3>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
                      {[
                        { icon: SiReact, name: 'React' },
                        { icon: SiNextdotjs, name: 'Next.js' },
                        { icon: SiAngular, name: 'Angular' },
                        { icon: SiTypescript, name: 'TypeScript' },
                        { icon: SiTailwindcss, name: 'Tailwind' }
                      ].map((tech, index) => (
                        <FloatingTechIcon
                          key={tech.name}
                          Icon={tech.icon}
                          name={tech.name}
                          delay={index * 0.1}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Backend */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-pastel-purple/10 to-pastel-pink/10 dark:from-dark-purple/10 dark:to-dark-pink/10 backdrop-blur-md rounded-2xl sm:rounded-[2rem] p-4 sm:p-8 border-4 border-dashed border-pastel-purple/30 dark:border-dark-purple/30">
                  <FloatingBubbles color="rgba(179, 157, 219, 0.1)" />
                  
                  <div className="relative">
                    <motion.h3 
                      className="text-2xl sm:text-3xl font-cartoon font-bold mb-6 sm:mb-8 bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink text-transparent bg-clip-text flex items-center gap-4"
                      animate={{ x: [-2, 2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span>Backend</span>
                      <motion.span
                        className="text-4xl"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity }}
                      >
                        ⚙️
                      </motion.span>
                    </motion.h3>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
                      {[
                        { icon: SiNodedotjs, name: 'Node.js' },
                        { icon: SiPostgresql, name: 'PostgreSQL' },
                        { icon: SiMongodb, name: 'MongoDB' },
                        { icon: SiDocker, name: 'Docker' },
                        { icon: SiGit, name: 'Git' },
                        { icon: SiAmazonwebservices, name: 'AWS' },
                        { icon: SiFirebase, name: 'Firebase' },
                        { icon: SiPrisma, name: 'Prisma' }
                      ].map((tech, index) => (
                        <FloatingTechIcon
                          key={tech.name}
                          Icon={tech.icon}
                          name={tech.name}
                          delay={index * 0.1}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 