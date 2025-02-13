import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiNodedotjs, 
  SiPostgresql, 
  SiStripe, 
  SiReact, 
  SiExpress, 
  SiMongodb, 
  SiFirebase, 
  SiTypescript, 
  SiAngular,
  SiD3Dotjs
} from 'react-icons/si'
import { TerminalTitle } from './HomeSection'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Sistema de E-commerce',
    description: 'Plataforma completa de e-commerce com integração de pagamentos, gestão de estoque e painel administrativo.',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Stripe', icon: SiStripe }
    ],
    projectUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/johnnywilly/ecommerce',
    category: 'Fullstack',
    emoji: '🛍️'
  },
  {
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo para análise de dados em tempo real com gráficos e relatórios personalizados.',
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'D3.js', icon: SiD3Dotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb }
    ],
    projectUrl: 'https://dashboard-demo.com',
    githubUrl: 'https://github.com/johnnywilly/dashboard',
    category: 'Frontend',
    emoji: '📊'
  },
  {
    title: 'App de Gestão de Tarefas',
    description: 'Aplicativo mobile-first para gestão de tarefas e projetos com funcionalidades colaborativas.',
    technologies: [
      { name: 'React Native', icon: SiReact },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'TypeScript', icon: SiTypescript }
    ],
    projectUrl: 'https://tasks-demo.com',
    githubUrl: 'https://github.com/johnnywilly/tasks',
    category: 'Mobile',
    emoji: '📱'
  },
  {
    title: 'Sistema de Gestão de Clientes',
    description: 'Aplicação web moderna para gestão de clientes, contratos e atendimentos com dashboard em tempo real.',
    technologies: [
      { name: 'Angular', icon: SiAngular },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'PostgreSQL', icon: SiPostgresql }
    ],
    projectUrl: 'https://crm-demo.com',
    githubUrl: 'https://github.com/johnnywilly/crm',
    category: 'Fullstack',
    emoji: '👥'
  }
]

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: index * 0.1,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
}

// Componente de estrela de fundo
const BackgroundStar = ({ delay = 0, size = 20, top, left }: { delay: number, size?: number, top: string, left: string }) => (
  <motion.div
    className="absolute text-pastel-yellow dark:text-dark-yellow pointer-events-none -z-10"
    style={{ 
      top, 
      left, 
      fontSize: size
    }}
    animate={{ 
      rotate: 360,
      scale: [1, 1.2, 1],
      opacity: [0.6, 0.8, 0.6]
    }}
    transition={{
      rotate: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      },
      scale: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay
      },
      opacity: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay
      }
    }}
  >
    ⭐
  </motion.div>
)

// Card de Projeto
const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true,
        margin: "-50px",
        amount: 0.3
      }}
      custom={index}
      className="relative bg-white/90 dark:bg-dark-surface/90 rounded-[2rem] border-4 border-dashed border-pastel-purple/30 dark:border-dark-purple/30 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] will-change-transform"
    >
      <motion.div 
        className="p-6 sm:p-8 space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ 
          opacity: 1,
          transition: {
            duration: 0.3,
            delay: index * 0.1
          }
        }}
        viewport={{ once: true }}
      >
        {/* Cabeçalho */}
        <div className="flex items-center gap-4">
          <motion.div 
            className="relative text-4xl sm:text-5xl"
            animate={{ 
              rotate: [-5, 5],
              y: [-2, 2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            {project.emoji}
            <motion.div 
              className="absolute -top-2 -right-2 text-xl text-yellow-400"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              ✨
            </motion.div>
          </motion.div>
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                transition: {
                  duration: 0.3,
                  delay: index * 0.1 + 0.1
                }
              }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-cartoon font-bold bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink text-transparent bg-clip-text cursor-default"
            >
              {project.title}
            </motion.h3>
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                transition: {
                  duration: 0.3,
                  delay: index * 0.1 + 0.15
                }
              }}
              viewport={{ once: true }}
              className="inline-flex px-3 py-1 rounded-full bg-pastel-purple/10 dark:bg-dark-purple/10 text-pastel-purple dark:text-dark-purple font-cartoon text-sm border-2 border-dashed border-pastel-purple/30 dark:border-dark-purple/30 cursor-default"
            >
              {project.category}
            </motion.span>
          </div>
        </div>

        {/* Descrição */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: 1,
            transition: {
              duration: 0.3,
              delay: index * 0.1 + 0.2
            }
          }}
          viewport={{ once: true }}
          className="text-slate-600 dark:text-slate-300 font-cartoon leading-relaxed"
        >
          {project.description}
        </motion.p>

        {/* Tecnologias */}
        <motion.div 
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: 1,
            transition: {
              duration: 0.3,
              delay: index * 0.1 + 0.25
            }
          }}
          viewport={{ once: true }}
        >
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                transition: {
                  duration: 0.2,
                  delay: (index * 0.1) + (techIndex * 0.05) + 0.25
                }
              }}
              viewport={{ once: true }}
              className="px-3 py-1.5 rounded-full bg-pastel-purple/10 dark:bg-dark-purple/10 text-pastel-purple dark:text-dark-purple font-cartoon text-sm border-2 border-dashed border-pastel-purple/30 dark:border-dark-purple/30 flex items-center gap-2 hover:bg-pastel-purple/20 dark:hover:bg-dark-purple/20 transition-colors cursor-default"
            >
              <tech.icon className="w-4 h-4" />
              {tech.name}
            </motion.span>
          ))}
        </motion.div>

        {/* Links */}
        <motion.div 
          className="flex flex-wrap gap-4 pt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.3,
              delay: index * 0.1 + 0.3
            }
          }}
          viewport={{ once: true }}
        >
          {project.projectUrl && (
            <motion.a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="z-50 inline-flex items-center gap-2 px-5 py-2.5 font-cartoon font-bold text-white rounded-xl bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink hover:opacity-90 transform hover:scale-105 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="text-sm" />
              <span>Ver Projeto</span>
            </motion.a>
          )}
          
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="z-50 inline-flex items-center gap-2 px-5 py-2.5 font-cartoon font-bold text-pastel-purple dark:text-dark-purple rounded-xl border-2 border-dashed border-pastel-purple/30 dark:border-dark-purple/30 hover:bg-pastel-purple/10 dark:hover:bg-dark-purple/10 transform hover:scale-105 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub className="text-sm" />
              <span>Ver Código</span>
            </motion.a>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const stars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 2
  }))

  return (
    <section 
      id="projetos" 
      className="relative min-h-screen py-20 bg-gradient-to-b from-pastel-purple/5 via-white/80 to-pastel-purple/10 dark:from-dark-purple/5 dark:via-dark-surface/80 dark:to-dark-purple/10 backdrop-blur-sm"
    >
      {/* Background com estrelas */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {stars.map((star) => (
          <BackgroundStar 
            key={star.id} 
            delay={star.delay} 
            top={star.top} 
            left={star.left} 
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Título */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.5,
              ease: "easeOut"
            }
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <TerminalTitle title="Meus Projetos" isActive={true} />
        </motion.div>

        {/* Lista de Projetos */}
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div key={project.title} className="relative">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 