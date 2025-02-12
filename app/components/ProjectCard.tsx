import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  projectUrl?: string
  githubUrl?: string
}

export function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  projectUrl,
  githubUrl
}: ProjectCardProps) {
  return (
    <motion.div
      className="card bg-white/80 dark:bg-dark-surface/80 shadow-xl group hover:shadow-2xl transition-all duration-300 backdrop-blur-sm rounded-xl overflow-hidden"
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <div className="p-6 space-y-4">
        {imageUrl && (
          <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        
        <h3 className="text-2xl font-bold bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink text-transparent bg-clip-text">
          {title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-300">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              className="px-3 py-1 text-sm rounded-full bg-pastel-purple/10 dark:bg-dark-purple/10 text-pastel-purple dark:text-dark-purple"
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="flex gap-4 pt-4">
          {projectUrl && (
            <motion.a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 font-semibold text-white rounded-lg bg-pastel-purple dark:bg-dark-purple hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt />
              Demo
            </motion.a>
          )}
          
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 font-semibold border-2 rounded-lg border-pastel-purple dark:border-dark-purple text-pastel-purple dark:text-dark-purple hover:bg-pastel-purple/10 dark:hover:bg-dark-purple/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              Código
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
} 