import type { Metadata } from 'next'
import { Inter, Cal_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const calSans = Cal_Sans({ 
  subsets: ['latin'],
  variable: '--font-cal-sans',
  display: 'swap',
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  title: 'My Premium Blog - Modern SaaS Design',
  description: 'A modern blog website with glassmorphism effects and theme switching. Built for premium SaaS experiences.',
  keywords: ['blog', 'modern design', 'glassmorphism', 'SaaS', 'premium'],
  authors: [{ name: 'Blog Author' }],
  creator: 'Premium Blog',
  publisher: 'Premium Blog',
  metadataBase: new URL('https://yourblog.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourblog.com',
    siteName: 'My Premium Blog',
    title: 'My Premium Blog - Modern SaaS Design',
    description: 'A modern blog website with glassmorphism effects and theme switching',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'My Premium Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourblog',
    creator: '@yourblog',
    title: 'My Premium Blog - Modern SaaS Design',
    description: 'A modern blog website with glassmorphism effects and theme switching',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${calSans.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="blog-theme"
          themes={['light', 'dark']}
        >
          <div className="min-h-screen bg-gradient-to-br from-background via-background to-surface theme-transition">
            {/* Background Glass Effect */}
            <div className="fixed inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-vibrant/5 via-transparent to-highlight/5" />
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vibrant/10 rounded-full blur-3xl opacity-50" />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-highlight/10 rounded-full blur-3xl opacity-50" />
            </div>

            {/* Main Navigation */}
            <nav className="nav-glass sticky top-0 z-50 border-b border-glass-border">
              <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                  {/* Logo */}
                  <div className="flex items-center space-x-2">
                    <div className="glass w-10 h-10 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-vibrant">B</span>
                    </div>
                    <span className="font-display font-semibold text-xl text-primary">
                      Premium Blog
                    </span>
                  </div>

                  {/* Navigation Links */}
                  <div className="hidden md:flex items-center space-x-6">
                    <a href="/" className="text-primary hover:text-vibrant transition-colors">
                      Home
                    </a>
                    <a href="/about" className="text-primary hover:text-vibrant transition-colors">
                      About
                    </a>
                    <a href="/categories" className="text-primary hover:text-vibrant transition-colors">
                      Categories
                    </a>
                    <a href="/contact" className="text-primary hover:text-vibrant transition-colors">
                      Contact
                    </a>
                  </div>

                  {/* Theme Toggle & Mobile Menu */}
                  <div className="flex items-center space-x-4">
                    <ThemeToggle />
                    <button
                      className="md:hidden glass p-2 rounded-lg"
                      aria-label="Open menu"
                    >
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1">
              {children}
            </main>

            {/* Footer */}
            <footer className="glass-subtle border-t border-glass-border mt-20">
              <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Brand Column */}
                  <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="glass w-8 h-8 rounded-md flex items-center justify-center">
                        <span className="text-lg font-bold text-vibrant">B</span>
                      </div>
                      <span className="font-display font-semibold text-lg text-primary">
                        Premium Blog
                      </span>
                    </div>
                    <p className="text-secondary max-w-md mb-6">
                      Discover premium insights and modern perspectives on technology, 
                      design, and innovation. Built with cutting-edge glassmorphism design.
                    </p>
                    <div className="flex space-x-4">
                      <a href="#" className="glass p-2 rounded-lg hover:scale-110 transition-transform">
                        <span className="sr-only">Twitter</span>
                        <svg className="w-5 h-5 text-vibrant" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      <a href="#" className="glass p-2 rounded-lg hover:scale-110 transition-transform">
                        <span className="sr-only">GitHub</span>
                        <svg className="w-5 h-5 text-vibrant" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a href="#" className="glass p-2 rounded-lg hover:scale-110 transition-transform">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-5 h-5 text-vibrant" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h3 className="font-semibold text-primary mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      <li><a href="/about" className="text-secondary hover:text-vibrant transition-colors">About</a></li>
                      <li><a href="/categories" className="text-secondary hover:text-vibrant transition-colors">Categories</a></li>
                      <li><a href="/archive" className="text-secondary hover:text-vibrant transition-colors">Archive</a></li>
                      <li><a href="/contact" className="text-secondary hover:text-vibrant transition-colors">Contact</a></li>
                    </ul>
                  </div>

                  {/* Categories */}
                  <div>
                    <h3 className="font-semibold text-primary mb-4">Categories</h3>
                    <ul className="space-y-2">
                      <li><a href="/tech" className="text-secondary hover:text-vibrant transition-colors">Technology</a></li>
                      <li><a href="/design" className="text-secondary hover:text-vibrant transition-colors">Design</a></li>
                      <li><a href="/innovation" className="text-secondary hover:text-vibrant transition-colors">Innovation</a></li>
                      <li><a href="/tutorials" className="text-secondary hover:text-vibrant transition-colors">Tutorials</a></li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-glass-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                  <p className="text-secondary text-sm">
                    © 2025 Premium Blog. All rights reserved.
                  </p>
                  <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="/privacy" className="text-secondary hover:text-vibrant text-sm transition-colors">
                      Privacy Policy
                    </a>
                    <a href="/terms" className="text-secondary hover:text-vibrant text-sm transition-colors">
                      Terms of Service
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

// Theme Toggle Component
function ThemeToggle() {
  'use client'
  
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="glass w-10 h-10 rounded-lg flex items-center justify-center">
        <div className="w-4 h-4 bg-primary/20 rounded animate-pulse" />
      </div>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="glass p-2 rounded-lg hover:scale-105 transition-all duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <svg
          className="w-5 h-5 text-highlight"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-deep"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  )
}
