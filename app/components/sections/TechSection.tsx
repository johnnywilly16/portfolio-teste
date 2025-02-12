import { Terminal } from '../Terminal'
import { FloatingClouds } from '../FloatingClouds'
import { FloatingBubbles } from '../FloatingBubbles'
import { motion } from 'framer-motion'
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript,
  SiNodedotjs, SiExpress, SiPrisma, SiPostgresql,
  SiGit, SiDocker, SiAmazonaws, SiLinux
} from 'react-icons/si'

const technologies = {
  frontend: [
    { name: 'React', icon: SiReact, color: 'text-[#61DAFB]' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-[#000000] dark:text-white' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
  ],
  backend: [
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]' },
    { name: 'Express', icon: SiExpress, color: 'text-[#000000] dark:text-white' },
    { name: 'Prisma', icon: SiPrisma, color: 'text-[#2D3748]' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#4169E1]' },
  ],
  devops: [
    { name: 'Git', icon: SiGit, color: 'text-[#F05032]' },
    { name: 'Docker', icon: SiDocker, color: 'text-[#2496ED]' },
    { name: 'AWS', icon: SiAmazonaws, color: 'text-[#FF9900]' },
    { name: 'Linux', icon: SiLinux, color: 'text-[#FCC624]' },
  ]
}

// Componente de fundo animado para a seção de tecnologias
const TechBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Hexágonos flutuantes */}
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      >
        <svg
          className="w-16 h-16 text-pastel-purple/10 dark:text-neon-purple/10"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l10 6v8l-10 6-10-6V8z" />
        </svg>
      </motion.div>
    ))}

    {/* Partículas de código */}
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={`particle-${i}`}
        className="absolute text-xs font-mono text-pastel-purple/20 dark:text-neon-purple/20"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
          y: [-20, 20],
          x: [-10, 10],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: Math.random() * 5,
        }}
      >
        {['</', '{}', '()', '=>', '[]'][Math.floor(Math.random() * 5)]}
      </motion.div>
    ))}

    {/* Ondas de gradiente */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={`wave-${i}`}
        className="absolute h-64 w-full bg-gradient-to-r from-pastel-purple/0 via-pastel-purple/5 to-pastel-purple/0 dark:from-neon-purple/0 dark:via-neon-purple/5 dark:to-neon-purple/0"
        style={{
          top: `${i * 30}%`,
        }}
        animate={{
          x: [-100, 100],
          y: [-20, 20],
        }}
        transition={{
          duration: 15 + i * 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    ))}
  </div>
)

export function TechSection() {
  return (
    <section id="tecnologias" className="min-h-screen py-20 bg-gradient-to-br from-white via-pastel-purple/5 to-white dark:from-dark-surface dark:via-dark-purple/5 dark:to-dark-surface relative overflow-hidden">
      {/* Fundo animado */}
      <TechBackground />

      {/* Elementos de fundo */}
      <FloatingClouds />
      <FloatingBubbles />

      <div className="container mx-auto px-4 relative z-10">
        <Terminal 
          title="stack@portfolio:~" 
          showEmoji="🛠️"
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-6 text-slate-700 dark:text-slate-300">
            <p>$ ls ./stack</p>
            
            <div className="pl-4 border-l-2 border-pastel-purple/20 dark:border-neon-purple/20">
              <div className="space-y-8">
                {/* Frontend */}
                <div>
                  <p className="text-pastel-purple dark:text-neon-purple mb-4">╭─ frontend/</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {technologies.frontend.map((tech) => {
                      const Icon = tech.icon
                      return (
                        <motion.div
                          key={tech.name}
                          className="flex flex-col items-center gap-2 p-4 rounded-lg border border-pastel-purple/20 dark:border-neon-purple/20 hover:bg-pastel-purple/5 dark:hover:bg-neon-purple/5 transition-colors"
                          whileHover={{ y: -5 }}
                        >
                          <Icon className={`text-3xl ${tech.color}`} />
                          <span className="text-sm">{tech.name}</span>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <p className="text-pastel-purple dark:text-neon-purple mb-4">╭─ backend/</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {technologies.backend.map((tech) => {
                      const Icon = tech.icon
                      return (
                        <motion.div
                          key={tech.name}
                          className="flex flex-col items-center gap-2 p-4 rounded-lg border border-pastel-purple/20 dark:border-neon-purple/20 hover:bg-pastel-purple/5 dark:hover:bg-neon-purple/5 transition-colors"
                          whileHover={{ y: -5 }}
                        >
                          <Icon className={`text-3xl ${tech.color}`} />
                          <span className="text-sm">{tech.name}</span>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* DevOps */}
                <div>
                  <p className="text-pastel-purple dark:text-neon-purple mb-4">╭─ devops/</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {technologies.devops.map((tech) => {
                      const Icon = tech.icon
                      return (
                        <motion.div
                          key={tech.name}
                          className="flex flex-col items-center gap-2 p-4 rounded-lg border border-pastel-purple/20 dark:border-neon-purple/20 hover:bg-pastel-purple/5 dark:hover:bg-neon-purple/5 transition-colors"
                          whileHover={{ y: -5 }}
                        >
                          <Icon className={`text-3xl ${tech.color}`} />
                          <span className="text-sm">{tech.name}</span>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <p>$ cat ./stack/info.txt</p>
            <div className="pl-4 border-l-2 border-pastel-purple/20 dark:border-neon-purple/20">
              <p className="italic">
                "Estas são as principais tecnologias que utilizo no meu dia a dia. Estou sempre aprendendo e experimentando novas ferramentas para criar soluções cada vez melhores! ✨"
              </p>
            </div>
          </div>
        </Terminal>
      </div>
    </section>
  )
} 