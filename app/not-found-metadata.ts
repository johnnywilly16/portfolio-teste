import type { Viewport } from 'next'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F3FF' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1625' }
  ]
} 