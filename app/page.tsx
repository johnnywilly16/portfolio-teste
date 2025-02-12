'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaLayerGroup } from 'react-icons/fa'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import anime from 'animejs'
import { Header } from './components/Header'
import { MobileMenu } from './components/MobileMenu'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

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

export default function Home() {
  const backgroundParticlesRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Criar partículas de fundo
    if (backgroundParticlesRef.current) {
      const particles = Array.from({ length: 30 }).map(() => {
        const particle = document.createElement('div')
        particle.className = 'absolute w-2 h-2 bg-purple-500/20 rounded-full blur-md'
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`
        return particle
      })

      particles.forEach(particle => backgroundParticlesRef.current?.appendChild(particle))

      // Animação contínua das partículas de fundo
      anime({
        targets: particles,
        translateY: () => anime.random(-50, 50),
        translateX: () => anime.random(-50, 50),
        scale: () => anime.random(1, 2),
        opacity: [0.2, 0.5],
        duration: () => anime.random(3000, 5000),
        delay: anime.stagger(200),
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutQuad'
      })

      return () => particles.forEach(particle => particle.remove())
    }
  }, [])

  useEffect(() => {
    // Animações de scroll
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.project-card')
      
      cards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            end: 'top center',
            scrub: 1,
          },
          y: 100,
          opacity: 0,
          scale: 0.8,
          duration: 1,
          ease: 'power2.out'
        })
      })
    }
  }, [])

  return (
    <>
      <Header />
      <MobileMenu />
      
      <main>
        <Hero />

        <section id="projetos">
          {/* Background com partículas */}
          <div className="fixed inset-0 pointer-events-none">
            <motion.div 
              ref={backgroundParticlesRef}
              className="absolute inset-0"
            />
          </div>

          <motion.div 
            ref={containerRef}
            className="min-h-screen py-20 bg-gradient-to-b from-white/80 to-pastel-purple/5 dark:from-dark-surface/80 dark:to-dark-purple/5 backdrop-blur-sm relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <div className="container mx-auto px-4">
              {/* Cabeçalho com animação de scroll */}
              <motion.div 
                className="text-center mb-16 space-y-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-sm font-semibold text-pastel-purple dark:text-dark-purple tracking-wider uppercase">
                    Portfólio
                  </span>
                </motion.div>
                
                <motion.h2 
                  className="text-5xl font-bold bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink text-transparent bg-clip-text"
                  whileHover={{ scale: 1.02 }}
                >
                  Projetos em Destaque
                </motion.h2>

                <motion.div 
                  className="flex justify-center gap-2 flex-wrap"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="badge badge-primary gap-2 bg-pastel-purple/20 dark:bg-dark-purple/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <FaLayerGroup /> Fullstack
                  </motion.div>
                  <motion.div 
                    className="badge badge-secondary gap-2 bg-pastel-pink/20 dark:bg-dark-pink/20"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <FaCode /> Frontend
                  </motion.div>
                  <motion.div 
                    className="badge badge-accent gap-2 bg-pastel-blue/20 dark:bg-dark-blue/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    Mobile
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Grid de Projetos */}
              <div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {projects.map((project) => (
                  <motion.div
                    key={project.title}
                    className="project-card card bg-white/80 dark:bg-dark-surface/80 shadow-xl group hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
                    whileHover={{ 
                      y: -10,
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="card-body relative overflow-hidden">
                      {/* Efeito de partículas no hover */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="particle-container" />
                      </motion.div>

                      <div className="h-32 flex items-center justify-center rounded-xl bg-gradient-to-br from-pastel-purple/10 via-pastel-pink/20 to-pastel-purple/10 dark:from-dark-purple/10 dark:via-dark-pink/20 dark:to-dark-purple/10 mb-4">
                        <motion.span 
                          className="text-6xl font-bold bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink text-transparent bg-clip-text"
                          whileHover={{ 
                            scale: 1.2,
                            rotate: 360,
                            transition: { duration: 0.5 }
                          }}
                        >
                          {project.title.charAt(0)}
                        </motion.span>
                      </div>

                      <motion.div 
                        className="badge badge-primary mb-4 bg-pastel-purple/20 dark:bg-dark-purple/20"
                        whileHover={{ scale: 1.1 }}
                      >
                        {project.category}
                      </motion.div>
                      
                      <motion.h3 
                        className="card-title text-2xl font-bold mb-2 bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink text-transparent bg-clip-text"
                        whileHover={{ scale: 1.02 }}
                      >
                        {project.title}
                      </motion.h3>
                      
                      <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            className="badge badge-outline badge-sm bg-pastel-purple/10 dark:bg-dark-purple/10 text-pastel-purple dark:text-dark-purple"
                            whileHover={{ 
                              scale: 1.1,
                              backgroundColor: 'rgba(168, 85, 247, 0.2)'
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      <div className="card-actions justify-between mt-auto">
                        <motion.a
                          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
                          className="btn bg-purple-500 hover:bg-purple-600 border-none btn-sm flex-1"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt className="mr-2" />
                          Demo
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
                          className="btn btn-outline border-purple-500 text-purple-500 hover:bg-purple-500 hover:border-purple-500 btn-sm flex-1"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)'
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaGithub className="mr-2" />
                          Código
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Botão Ver Mais */}
              <motion.div 
                className="text-center mt-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="https://github.com/johnnywilly"
          target="_blank"
          rel="noopener noreferrer"
                  className="btn btn-outline border-purple-500 text-purple-500 hover:bg-purple-500 hover:border-purple-500 btn-wide"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver mais projetos no GitHub
                  <FaGithub className="ml-2 text-lg" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  )
}

