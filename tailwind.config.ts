import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        cartoon: ['var(--font-cartoon)', 'cursive'],
        handwriting: ['var(--font-handwriting)', 'cursive'],
      },
      colors: {
        // Cores para o tema claro (tons pastéis)
        pastel: {
          purple: '#B39DDB', // Roxo suave
          pink: '#F8BBD0',   // Rosa suave
          blue: '#90CAF9',   // Azul suave
          yellow: '#FFE082', // Amarelo suave
          green: '#A5D6A7',  // Verde suave
          bg: '#F3E5F5',     // Fundo roxo bem claro
        },
        // Cores para o tema escuro (tons neon mais vibrantes)
        neon: {
          purple: '#A855F7', // Roxo neon mais vibrante
          pink: '#EC4899',   // Rosa neon mais vibrante
          blue: '#3B82F6',   // Azul neon mais vibrante
          yellow: '#EAB308', // Amarelo neon mais vibrante
          green: '#22C55E',  // Verde neon mais vibrante
          bg: '#6D28D9',     // Fundo roxo escuro mais vibrante
        },
        paper: {
          light: '#F3E5F5',  // Fundo roxo claro
          DEFAULT: '#E1BEE7', // Fundo roxo médio
          dark: '#CE93D8',    // Fundo roxo escuro
        }
      },
      backgroundImage: {
        'notebook-lines': "repeating-linear-gradient(transparent, transparent 27px, rgba(179, 157, 219, 0.3) 28px)",
        'doodle-pattern': "url('/patterns/doodle-bg.png')",
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      boxShadow: {
        'crayon': '4px 4px 0 rgba(179, 157, 219, 0.4)',
        'paper': '8px 8px 0 rgba(179, 157, 219, 0.2)',
      }
    },
  },
  plugins: [],
}

export default config;
