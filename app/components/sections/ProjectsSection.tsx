import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaAngleDown, FaAngleUp } from 'react-icons/fa'

const projects = [
  {
    title: 'Sistema de E-commerce',
    description: 'Plataforma completa de e-commerce com integração de pagamentos, gestão de estoque e painel administrativo.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    projectUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/johnnywilly/ecommerce',
    category: 'Fullstack',
    emoji: '🛍️'
  },
  {
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo para análise de dados em tempo real com gráficos e relatórios personalizados.',
    technologies: ['React', 'D3.js', 'Express', 'MongoDB'],
    projectUrl: 'https://dashboard-demo.com',
    githubUrl: 'https://github.com/johnnywilly/dashboard',
    category: 'Frontend',
    emoji: '📊'
  },
  {
    title: 'App de Gestão de Tarefas',
    description: 'Aplicativo mobile-first para gestão de tarefas e projetos com funcionalidades colaborativas.',
    technologies: ['React Native', 'Firebase', 'TypeScript'],
    projectUrl: 'https://tasks-demo.com',
    githubUrl: 'https://github.com/johnnywilly/tasks',
    category: 'Mobile',
    emoji: '📱'
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

// Card de Projeto Expandível
const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { delay: index * 0.2 }
      }}
      viewport={{ once: true }}
    >
      {/* Card Principal */}
      <motion.div
        className={`bg-white/90 dark:bg-dark-surface/90 rounded-[2rem] border-4 border-dashed border-pastel-purple/30 dark:border-dark-purple/30 overflow-hidden transition-all duration-500 ${isExpanded ? 'shadow-2xl scale-[1.02]' : 'shadow-xl hover:shadow-2xl hover:scale-[1.01]'}`}
      >
        {/* Cabeçalho do Card */}
        <motion.div
          className="p-6 sm:p-8 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <motion.div
                className="relative text-4xl sm:text-5xl"
                animate={{ 
                  rotate: isExpanded ? [0, -10, 10, 0] : 0,
                  scale: isExpanded ? [1, 1.2, 1] : 1
                }}
                transition={{ duration: 0.5 }}
              >
                {project.emoji}
                <motion.div
                  className="absolute -top-2 -right-2 text-xl text-yellow-400"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: 360
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.div>
              </motion.div>
              <div>
                <h3 className="text-xl sm:text-2xl font-cartoon font-bold bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink text-transparent bg-clip-text">
                  {project.title}
                </h3>
                <span className="text-sm text-pastel-purple/70 dark:text-dark-purple/70 font-cartoon">
                  {project.category}
                </span>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="text-pastel-purple dark:text-dark-purple text-2xl"
            >
              {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
            </motion.div>
          </div>

          {/* Descrição Curta */}
          <p className="text-slate-600 dark:text-slate-300 font-cartoon leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Conteúdo Expandido */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0
          }}
          className="overflow-hidden"
        >
          <div className="p-6 sm:p-8 pt-0 space-y-6">
            {/* Linha Decorativa */}
            <div className="border-t-2 border-dashed border-pastel-purple/30 dark:border-dark-purple/30" />

            {/* Tecnologias */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-pastel-purple/10 dark:bg-dark-purple/10 text-pastel-purple dark:text-dark-purple font-cartoon text-sm border-2 border-dashed border-pastel-purple/30 dark:border-dark-purple/30"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.projectUrl && (
                <motion.a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 font-cartoon font-bold text-white rounded-xl bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt />
                  Ver Projeto
                </motion.a>
              )}
              
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 font-cartoon font-bold text-pastel-purple dark:text-dark-purple rounded-xl border-2 border-dashed border-pastel-purple/30 dark:border-dark-purple/30 hover:bg-pastel-purple/10 dark:hover:bg-dark-purple/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                  Ver Código
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Elementos Decorativos */}
      <motion.div
        className="absolute -top-2 -right-2 text-2xl"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        ✨
      </motion.div>
      <motion.div
        className="absolute -bottom-2 -left-2 text-2xl"
        animate={{ 
          rotate: [-10, 10],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ⭐
      </motion.div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const [stars] = useState(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2
    }))
  )

  return (
    <section id="projetos" className="min-h-screen py-20 bg-gradient-to-b from-pastel-purple/5 via-white/80 to-pastel-purple/10 dark:from-dark-purple/5 dark:via-dark-surface/80 dark:to-dark-purple/10 backdrop-blur-sm relative overflow-hidden">
      {/* Background com estrelas */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <FloatingStar key={star.id} delay={star.delay} top={star.top} left={star.left} />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Título */}
        <motion.div 
          className="text-center mb-8 sm:mb-16 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex justify-center">
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
                Projetos em Destaque
              </motion.span>
              
              {/* Estrelas decorativas */}
              <motion.div
                className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 text-2xl sm:text-3xl text-pastel-yellow dark:text-dark-yellow"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 text-2xl sm:text-3xl text-pastel-pink dark:text-dark-pink transform -rotate-12"
                animate={{ 
                  rotate: [-12, 12, -12]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⭐
              </motion.div>
            </motion.h2>
          </div>
        </motion.div>

        {/* Lista de Projetos */}
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
} 