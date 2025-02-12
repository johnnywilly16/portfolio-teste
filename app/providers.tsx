'use client'

import { ThemeProvider } from 'next-themes'
import { Flowbite } from 'flowbite-react'

const flowbiteTheme = {
  card: {
    root: {
      base: "flex rounded-lg border border-gray-700 bg-gray-800 shadow-md dark:border-gray-700 dark:bg-gray-800",
      children: "flex h-full flex-col justify-center gap-4 p-6"
    }
  },
  button: {
    color: {
      primary: "bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700"
    }
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Flowbite theme={{ theme: flowbiteTheme }}>
        {children}
      </Flowbite>
    </ThemeProvider>
  )
} 