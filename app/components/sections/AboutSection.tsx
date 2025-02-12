import { motion } from 'framer-motion'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiPostgresql, SiMongodb, SiDocker,
  SiGit, SiAmazonwebservices, SiFirebase, SiPrisma,
  SiAngular
} from 'react-icons/si'
import { Terminal } from '../Terminal'

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

const skills = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Angular'],
  backend: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB'],
  tools: ['Git', 'Docker', 'AWS', 'Jest', 'CI/CD'],
  languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL']
}

const experiences = [
  {
    company: 'TechCorp',
    role: 'Desenvolvedor Full Stack Senior',
    period: '2021 - Presente',
    description: 'Desenvolvimento de soluções web escaláveis usando React, Node.js e AWS.'
  },
  {
    company: 'StartupXYZ',
    role: 'Desenvolvedor Frontend',
    period: '2019 - 2021',
    description: 'Criação de interfaces responsivas e otimização de performance.'
  }
]

export function AboutSection() {
  return (
    <section id="sobre" className="min-h-screen py-20 bg-slate-900/95 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <Terminal title="sobre@portfolio:~" className="mb-12">
          <div className="text-emerald-400/90 dark:text-emerald-300/90">
            <p>$ whoami</p>
            <div className="pl-4 mt-2 mb-6 border-l-2 border-emerald-500/20">
              <p className="whitespace-pre-wrap">
                Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e escaláveis.
                Com experiência em desenvolvimento web moderno e práticas ágeis.
                Sempre buscando aprender novas tecnologias e compartilhar conhecimento.
              </p>
            </div>

            <p>$ ls ./habilidades</p>
            <div className="pl-4 mt-2 mb-6 border-l-2 border-emerald-500/20">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="mb-4">
                  <p className="text-emerald-500/50 mb-2">// {category}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map(skill => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm border border-emerald-500/30 rounded-md hover:bg-emerald-500/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p>$ cat ./experiencia.json</p>
            <pre className="pl-4 mt-2 border-l-2 border-emerald-500/20">
{`{
  "experiencias": [
${experiences.map(exp => `    {
      "empresa": "${exp.company}",
      "cargo": "${exp.role}",
      "periodo": "${exp.period}",
      "descricao": "${exp.description}"
    }`).join(',\n')}
  ]
}`}
            </pre>
          </div>
        </Terminal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Terminal title="educacao@portfolio:~">
            <div className="text-emerald-400/90 dark:text-emerald-300/90">
              <p>$ cat ./formacao.txt</p>
              <div className="pl-4 mt-2 border-l-2 border-emerald-500/20">
                <p className="mb-2">📚 Bacharelado em Ciência da Computação</p>
                <p className="text-emerald-500/50">Universidade Federal do Brasil</p>
                <p className="text-emerald-500/50">2015 - 2019</p>
              </div>
            </div>
          </Terminal>

          <Terminal title="certificados@portfolio:~">
            <div className="text-emerald-400/90 dark:text-emerald-300/90">
              <p>$ ls ./certificacoes</p>
              <div className="pl-4 mt-2 border-l-2 border-emerald-500/20">
                <p>🏆 AWS Certified Developer Associate</p>
                <p>🏆 MongoDB Certified Developer</p>
                <p>🏆 React Advanced Patterns</p>
                <p>🏆 TypeScript Professional</p>
              </div>
            </div>
          </Terminal>
        </div>
      </div>
    </section>
  )
} 