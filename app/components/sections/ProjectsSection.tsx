import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ProjectModal } from '../ProjectModal'

const projects = [
  {
    title: 'Sistema de E-commerce',
    description: 'Plataforma completa de e-commerce com integração de pagamentos, gestão de estoque e painel administrativo.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    projectUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/johnnywilly/ecommerce',
    category: 'Fullstack'
  },
  {
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo para análise de dados em tempo real com gráficos e relatórios personalizados.',
    technologies: ['React', 'D3.js', 'Express', 'MongoDB'],
    projectUrl: 'https://dashboard-demo.com',
    githubUrl: 'https://github.com/johnnywilly/dashboard',
    category: 'Frontend'
  },
  {
    title: 'App de Gestão de Tarefas',
    description: 'Aplicativo mobile-first para gestão de tarefas e projetos com funcionalidades colaborativas.',
    technologies: ['React Native', 'Firebase', 'TypeScript'],
    projectUrl: 'https://tasks-demo.com',
    githubUrl: 'https://github.com/johnnywilly/tasks',
    category: 'Mobile'
  }
]

// Componente de estrela flutuante
const FloatingStar = ({ delay = 0, size = 20, top, left }: { delay: number, size?: number, top: string, left: string }) => (
  <motion.div
    className="absolute text-pastel-yellow dark:text-dark-yellow"
    style={{ top, left, fontSize: size }}
    initial={{ opacity: 0.3, scale: 0.5 }}
    animate={{ 
      opacity: [0.3, 1, 0.3],
      scale: [0.5, 1, 0.5],
      rotate: 360
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    ⭐
  </motion.div>
)

// Componente de planeta flutuante
const FloatingPlanet = ({ emoji, delay = 0, top, left }: { emoji: string, delay: number, top: string, left: string }) => (
  <motion.div
    className="absolute text-4xl"
    style={{ top, left }}
    initial={{ y: 0 }}
    animate={{ 
      y: [-20, 20, -20],
      rotate: 360,
      scale: [1, 1.2, 1]
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {emoji}
  </motion.div>
)

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [stars, setStars] = useState<{ id: number, top: string, left: string, delay: number }[]>([])

  // Gerar estrelas aleatórias
  useEffect(() => {
    const newStars = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2
    }))
    setStars(newStars)
  }, [])

  return (
    <section id="projetos" className="min-h-screen py-20 bg-gradient-to-b from-pastel-purple/5 via-white/80 to-pastel-purple/10 dark:from-dark-purple/5 dark:via-dark-surface/80 dark:to-dark-purple/10 backdrop-blur-sm relative overflow-hidden">
      {/* Background com estrelas */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <FloatingStar key={star.id} delay={star.delay} top={star.top} left={star.left} />
        ))}
      </div>

      {/* Planetas decorativos */}
      <FloatingPlanet emoji="🌍" delay={0} top="10%" left="5%" />
      <FloatingPlanet emoji="🌠" delay={1} top="20%" left="90%" />
      <FloatingPlanet emoji="🚀" delay={2} top="70%" left="85%" />
      <FloatingPlanet emoji="🌙" delay={3} top="80%" left="10%" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho com animação de scroll */}
        <motion.div 
          className="text-center mb-16 relative w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex justify-center">
            <motion.h2 
              className="text-6xl font-cartoon font-bold relative inline-block px-12 py-6"
              whileHover={{ scale: 1.02 }}
            >
              <motion.span 
                className="bg-gradient-to-r from-pastel-purple via-pastel-pink to-pastel-purple dark:from-dark-purple dark:via-dark-pink dark:to-dark-purple text-transparent bg-clip-text whitespace-nowrap relative"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(179, 157, 219, 0.5)",
                    "0 0 20px rgba(179, 157, 219, 0.7)",
                    "0 0 10px rgba(179, 157, 219, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Projetos em Destaque
              </motion.span>
              
              {/* Estrelas decorativas animadas */}
              <motion.div
                className="absolute -top-8 -right-8 text-3xl text-pastel-yellow dark:text-dark-yellow"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1],
                  filter: [
                    "drop-shadow(0 0 5px rgba(255, 224, 130, 0.5))",
                    "drop-shadow(0 0 10px rgba(255, 224, 130, 0.7))",
                    "drop-shadow(0 0 5px rgba(255, 224, 130, 0.5))"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 text-3xl text-pastel-pink dark:text-dark-pink transform -rotate-12"
                animate={{ 
                  rotate: [-12, 12, -12],
                  filter: [
                    "drop-shadow(0 0 5px rgba(248, 187, 208, 0.5))",
                    "drop-shadow(0 0 10px rgba(248, 187, 208, 0.7))",
                    "drop-shadow(0 0 5px rgba(248, 187, 208, 0.5))"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⭐
              </motion.div>
            </motion.h2>
          </div>
        </motion.div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 relative">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card bg-white/90 dark:bg-dark-surface/90 shadow-xl group hover:shadow-2xl transition-all duration-300 backdrop-blur-sm rounded-3xl border-4 border-dashed border-pastel-purple/30 dark:border-dark-purple/30 overflow-hidden cursor-pointer relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: index * 0.2 }
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              onClick={() => setSelectedProject(project)}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-pastel-purple/10 via-transparent to-pastel-pink/10 dark:from-dark-purple/10 dark:to-dark-pink/10"
                animate={{
                  background: [
                    "radial-gradient(circle at 0% 0%, rgba(179, 157, 219, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 100%, rgba(248, 187, 208, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 0%, rgba(179, 157, 219, 0.1) 0%, transparent 50%)"
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              <div className="relative overflow-hidden p-4 sm:p-8">
                {/* Fundo com padrão de estrelas */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }} />
                </div>

                <div className="h-32 sm:h-40 flex items-center justify-center rounded-2xl bg-gradient-to-br from-pastel-purple/10 via-pastel-pink/20 to-pastel-purple/10 dark:from-dark-purple/10 dark:via-dark-pink/20 dark:to-dark-purple/10 mb-6 border-2 border-dashed border-pastel-purple/20 dark:border-dark-purple/20 group-hover:border-pastel-pink/30 dark:group-hover:border-dark-pink/30 transition-colors">
                  <motion.span 
                    className="text-6xl sm:text-7xl font-cartoon font-bold bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink text-transparent bg-clip-text relative"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    {project.title.charAt(0)}
                    {/* Estrelinhas ao redor da letra */}
                    <motion.div
                      className="absolute -top-3 -right-3 text-2xl text-pastel-yellow dark:text-dark-yellow"
                      animate={{ 
                        rotate: 360, 
                        scale: [1, 1.2, 1],
                        filter: [
                          "drop-shadow(0 0 2px rgba(255, 224, 130, 0.5))",
                          "drop-shadow(0 0 4px rgba(255, 224, 130, 0.7))",
                          "drop-shadow(0 0 2px rgba(255, 224, 130, 0.5))"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ✨
                    </motion.div>
                  </motion.span>
                </div>
                
                <motion.div className="relative">
                  <motion.h3 
                    className="text-xl sm:text-2xl font-cartoon font-bold text-center bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink text-transparent bg-clip-text border-b-4 border-dashed border-pastel-purple/30 dark:border-dark-purple/30 pb-4 mb-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  {/* Estrelinhas decorativas ao redor do título */}
                  <motion.div
                    className="absolute -top-2 -right-2 text-lg text-pastel-yellow dark:text-dark-yellow"
                    animate={{ 
                      rotate: 360, 
                      scale: [1, 1.2, 1],
                      filter: "drop-shadow(0 0 5px rgba(255, 224, 130, 0.5))"
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✨
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-2 -left-2 text-lg text-pastel-pink dark:text-dark-pink"
                    animate={{ 
                      rotate: [-12, 12, -12],
                      filter: "drop-shadow(0 0 5px rgba(248, 187, 208, 0.5))"
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ⭐
                  </motion.div>
                </motion.div>

                {/* Indicador de clique */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pastel-purple/10 to-transparent dark:from-dark-purple/10 py-4 px-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div 
                    className="flex items-center justify-center gap-2 text-pastel-purple dark:text-dark-purple font-cartoon text-sm sm:text-base font-bold"
                    initial={{ opacity: 0.7 }}
                    animate={{ 
                      y: [0, -5, 0],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span>Clique para ver detalhes</span>
                    <motion.div
                      className="text-xl sm:text-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      👆
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Efeito de brilho no hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject || projects[0]}
        />
      </div>
    </section>
  )
} 