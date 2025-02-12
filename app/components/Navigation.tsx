'use client'

import { Button } from 'flowbite-react'

interface NavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const sections = ['sobre', 'projetos', 'habilidades', 'contato']

  return (
    <div className="mb-10 text-center">
      <nav className="flex justify-center gap-2">
        {sections.map((section) => (
          <Button
            key={section}
            color={activeSection === section ? 'blue' : 'gray'}
            onClick={() => onSectionChange(section)}
            className="capitalize"
          >
            {section}
          </Button>
        ))}
      </nav>
    </div>
  )
} 