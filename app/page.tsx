'use client'

import { Header } from './components/Header'
import { MobileMenu } from './components/MobileMenu'
import { Footer } from './components/Footer'
import { HomeSection } from './components/sections/HomeSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
import { AnimatedBackground } from './components/AnimatedBackground'

export default function Home() {
  return (
    <>
      {/* Fundo animado global */}
      <AnimatedBackground />
      
      <Header />
      <MobileMenu />
      
      <main className="relative z-10">
        <HomeSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}

