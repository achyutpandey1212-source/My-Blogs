import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  darkMode: 'class',
  
  theme: {
    extend: {
      // Color palettes for both themes
      colors: {
        // Dark Mode Colors
        dark: {
          primary: '#9ec1d1',     // Ice Blue
          secondary: '#463624',   // Dark Brown
          accent: '#a85e60',      // Dusty Rose
          highlight: '#f2758b',   // Coral Pink
          deep: '#431b5d',        // Deep Purple
          vibrant: '#914ac8',     // Purple
        },
        // Light Mode Colors
        light: {
          primary: '#2d4a52',     // Deep Teal
          secondary: '#f5f2ed',   // Warm Cream
          accent: '#d4a574',      // Golden Sand
          highlight: '#87ceeb',   // Sky Blue
          deep: '#8b7355',        // Warm Brown
          vibrant: '#5a9fd4',     // Ocean Blue
        },
        
        // Dynamic theme colors
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        highlight: 'var(--color-highlight)',
        deep: 'var(--color-deep)',
        vibrant: 'var(--color-vibrant)',
        
        // Background variations for glassmorphism
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          medium: 'rgba(255, 255, 255, 0.2)',
          heavy: 'rgba(255, 255, 255, 0.3)',
          dark: 'rgba(0, 0, 0, 0.1)',
          'dark-medium': 'rgba(0, 0, 0, 0.2)',
          'dark-heavy': 'rgba(0, 0, 0, 0.3)',
        },
      },
      
      // Glassmorphism utilities
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      
      // Enhanced box shadows for glass effect
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'glass-xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        'inner-glass': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.1)',
      },
      
      // Border utilities for glass effect
      borderColor: {
        'glass': 'rgba(255, 255, 255, 0.18)',
        'glass-dark': 'rgba(255, 255, 255, 0.1)',
      },
      
      // Custom font family
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      
      // Typography enhancements
      fontSize: {
        'title': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'subtitle': ['clamp(1.25rem, 3vw, 2rem)', { lineHeight: '1.2', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      
      // Animation for smooth theme transitions
      transitionProperty: {
        'theme': 'background-color, border-color, color, fill, stroke, backdrop-filter',
      },
      
      transitionDuration: {
        '400': '400ms',
      },
      
      // Custom gradient backgrounds
      backgroundImage: {
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
        'gradient-glass-dark': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
      },
      
      // Typography plugin configuration
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'var(--color-primary)',
            a: {
              color: 'var(--color-vibrant)',
              textDecoration: 'none',
              '&:hover': {
                color: 'var(--color-highlight)',
              },
            },
            h1: {
              color: 'var(--color-primary)',
            },
            h2: {
              color: 'var(--color-primary)',
            },
            h3: {
              color: 'var(--color-primary)',
            },
            blockquote: {
              color: 'var(--color-accent)',
              borderLeftColor: 'var(--color-vibrant)',
            },
            code: {
              color: 'var(--color-vibrant)',
              backgroundColor: 'var(--color-secondary)',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.375rem',
              fontWeight: '500',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  
  plugins: [
    require('@tailwindcss/typography'),
    
    // Custom glassmorphism utilities with proper TypeScript types
    plugin(function({ addUtilities, theme, addComponents }) {
      const glassUtilities = {
        '.glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        },
        '.glass-dark': {
          background: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        },
        '.glass-heavy': {
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        },
        '.glass-subtle': {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(5px)',
          '-webkit-backdrop-filter': 'blur(5px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.2)',
        },
      }
      
      addUtilities(glassUtilities)
      
      // Custom components for theme-aware glass effects
      const glassComponents = {
        '.glass-card': {
          '@apply glass rounded-xl p-6 transition-all duration-400': {},
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.45)',
          },
        },
        '.glass-nav': {
          '@apply glass-subtle backdrop-blur-md border-glass': {},
        },
      }
      
      addComponents(glassComponents)
    }),
  ],
}

export default config
