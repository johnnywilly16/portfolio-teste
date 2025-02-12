import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    technologies: string[]
    projectUrl?: string
    githubUrl?: string
  }
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay com blur otimizado */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-[2px] sm:backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-8 overflow-y-auto overflow-x-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <div className="bg-white/90 dark:bg-dark-surface/90 backdrop-blur-md rounded-2xl sm:rounded-3xl border-4 border-dashed border-pastel-purple/30 dark:border-dark-purple/30 p-4 sm:p-10 w-[95%] sm:w-full max-w-4xl my-auto relative">
              {/* Container do conteúdo com scroll */}
              <div className="max-h-[80vh] overflow-y-auto overflow-x-hidden px-2 pb-2 scrollbar-thin scrollbar-thumb-pastel-purple/20 scrollbar-track-transparent">
                {/* Conteúdo */}
                <div className="space-y-6 sm:space-y-8 text-center">
                  <div className="relative inline-block mt-2 sm:mt-4">
                    <motion.h2 
                      className="text-2xl sm:text-4xl font-cartoon font-bold bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink text-transparent bg-clip-text px-6 sm:px-12"
                      initial={{ y: -20 }}
                      animate={{ y: 0 }}
                    >
                      {project.title}
                    </motion.h2>
                    {/* Estrelinhas decorativas */}
                    <motion.div
                      className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 text-xl sm:text-2xl text-pastel-yellow dark:text-dark-yellow"
                      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ✨
                    </motion.div>
                    <motion.div
                      className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 text-xl sm:text-2xl text-pastel-pink dark:text-dark-pink"
                      animate={{ rotate: [-12, 12, -12] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ⭐
                    </motion.div>
                  </div>

                  <motion.p 
                    className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 font-cartoon max-w-3xl mx-auto leading-relaxed px-4 sm:px-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div 
                    className="flex flex-wrap gap-2 justify-center px-4 sm:px-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="badge font-cartoon bg-pastel-purple/10 dark:bg-dark-purple/10 text-pastel-purple dark:text-dark-purple border-2 border-dashed border-pastel-purple/30 dark:border-dark-purple/30 p-2 sm:p-3 rounded-xl text-xs sm:text-sm"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div 
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-xl mx-auto px-4 sm:px-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.projectUrl && (
                      <motion.a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn font-cartoon bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink text-white border-none relative overflow-hidden group rounded-2xl py-4 w-full sm:w-auto min-w-[200px]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="flex items-center justify-center w-full gap-2">
                          <FaExternalLinkAlt className="text-lg" />
                          <span className="text-base font-bold">Visualizar Projeto</span>
                        </div>
                      </motion.a>
                    )}
                    
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline font-cartoon border-2 border-dashed border-pastel-purple dark:border-dark-purple text-pastel-purple dark:text-dark-purple hover:bg-pastel-purple/10 dark:hover:bg-dark-purple/10 rounded-2xl py-4 w-full sm:w-auto min-w-[200px]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="flex items-center justify-center w-full gap-2">
                          <FaGithub className="text-lg" />
                          <span className="text-base font-bold">Ver Repositório</span>
                        </div>
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </div>

              {/* Botão de fechar */}
              <motion.button
                className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 bg-gradient-to-br from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink text-white p-3 sm:p-4 rounded-full shadow-lg z-10 border-4 border-white dark:border-dark-surface"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
              >
                <FaTimes size={20} className="drop-shadow-lg" />
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 