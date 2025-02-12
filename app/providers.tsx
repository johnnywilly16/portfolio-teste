'use client'

import { Flowbite } from 'flowbite-react'

const flowbiteTheme = {
  card: {
    root: {
      base: "flex rounded-lg border border-gray-700 bg-gray-800 shadow-md",
      children: "flex h-full flex-col justify-center gap-4 p-6"
    }
  },
  button: {
    color: {
      primary: "bg-primary-700 hover:bg-primary-800"
    }
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Flowbite theme={{ theme: flowbiteTheme }}>
      {children}
    </Flowbite>
  )
} 