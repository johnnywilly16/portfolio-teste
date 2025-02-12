import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiAngular } from 'react-icons/si'
import { Terminal } from '../Terminal'
import { FloatingClouds } from '../FloatingClouds'
import { FloatingBubbles } from '../FloatingBubbles'
import { ProjectsBackground } from '../backgrounds/ProjectsBackground'

const projects = [
  {
    title: 'Sistema de E-commerce',
    description: 'Uma loja virtual completa onde você pode comprar produtos, adicionar ao carrinho e fazer pagamentos. Inclui painel administrativo para gerenciar produtos e vendas.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    projectUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/johnnywilly/ecommerce',
    category: 'Loja Virtual',
    emoji: '🛍️'
  },
  {
    title: 'Dashboard Analytics',
    description: 'Painel visual que mostra gráficos e relatórios de dados em tempo real. Perfeito para acompanhar métricas importantes do seu negócio.',
    technologies: ['React', 'D3.js', 'Express', 'MongoDB'],
    projectUrl: 'https://dashboard-demo.com',
    githubUrl: 'https://github.com/johnnywilly/dashboard',
    category: 'Análise de Dados',
    emoji: '📊'
  },
  {
    title: 'App de Gestão de Tarefas',
    description: 'Aplicativo para organizar suas tarefas diárias e projetos. Você pode criar listas, definir prazos e compartilhar tarefas com sua equipe.',
    technologies: ['React Native', 'Firebase', 'TypeScript'],
    projectUrl: 'https://tasks-demo.com',
    githubUrl: 'https://github.com/johnnywilly/tasks',
    category: 'Produtividade',
    emoji: '📱'
  },
  {
    title: 'Sistema de Gestão de Clientes',
    description: 'Sistema para gerenciar informações de clientes, contratos e atendimentos. Ideal para empresas que precisam manter um histórico organizado de interações com clientes.',
    technologies: ['Angular', 'TypeScript', 'NestJS', 'PostgreSQL'],
    projectUrl: 'https://crm-demo.com',
    githubUrl: 'https://github.com/johnnywilly/crm',
    category: 'Gestão Empresarial',
    emoji: '👥',
    icon: SiAngular
  }
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="min-h-screen py-20 relative">
      {/* Fundo animado */}
      <ProjectsBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <Terminal 
          title="projetos@portfolio:~" 
          className="mb-12"
          showEmoji="📂"
        >
          <div className="text-slate-700 dark:text-slate-300">
            <p className="mb-4 text-lg">Bem-vindo(a) à seção de projetos! 👋</p>
            <p className="mb-6">Aqui você encontra alguns dos principais projetos que desenvolvi. Cada projeto tem uma demonstração ao vivo e o código fonte disponível para explorar.</p>
            
            <p className="mb-4">$ ls ./projetos</p>
            <div className="pl-4 border-l-2 border-pastel-purple/20 dark:border-neon-purple/20">
              {projects.map((project, index) => (
                <div key={project.title} className="flex items-center gap-2 mb-2">
                  <span>{project.emoji}</span>
                  <span className="text-pastel-purple dark:text-neon-purple">{project.title}</span>
                  <span className="text-slate-500 dark:text-slate-400">// {project.category}</span>
                </div>
              ))}
            </div>
            <p className="mt-4">$ cat ./projetos/*</p>
          </div>
        </Terminal>

        <div className="max-w-4xl mx-auto grid gap-8">
          {projects.map((project, index) => (
            <Terminal
              key={project.title}
              title={`${project.title.toLowerCase()}@portfolio:~`}
              showEmoji={project.emoji}
            >
              <div className="space-y-4">
                <pre className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap break-words">
{`// Detalhes do Projeto
const ${project.title.toLowerCase().replace(/\s+/g, '_')} = {
  nome: "${project.title}",
  categoria: "${project.category}",
  descrição: \`${project.description}\`,
  tecnologias: [
    ${project.technologies.map(tech => `"${tech}"`).join(',\n    ')}
  ],
  ${project.projectUrl ? `demo: "${project.projectUrl}",` : ''}
  ${project.githubUrl ? `código: "${project.githubUrl}"` : ''}
}

// Executando projeto...
iniciarProjeto(${project.title.toLowerCase().replace(/\s+/g, '_')})`}
                </pre>
                
                <div className="flex flex-wrap gap-4 pt-4 border-t border-pastel-purple/20 dark:border-neon-purple/20">
                  {project.projectUrl && (
                    <motion.a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 border border-pastel-purple/30 dark:border-neon-purple/30 rounded-md hover:bg-pastel-purple/10 dark:hover:bg-neon-purple/10 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                      Ver Demo
                    </motion.a>
                  )}
                  
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 border border-pastel-purple/30 dark:border-neon-purple/30 rounded-md hover:bg-pastel-purple/10 dark:hover:bg-neon-purple/10 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                      Ver Código
                    </motion.a>
                  )}
                </div>
              </div>
            </Terminal>
          ))}
        </div>
      </div>
    </section>
  )
} 