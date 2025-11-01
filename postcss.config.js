const config = {
  plugins: {
    // Import resolution for CSS modules
    'postcss-import': {
      resolve: (id, basedir) => {
        // Handle theme-aware imports
        if (id.startsWith('@/')) {
          return id.replace('@/', './');
        }
        return id;
      },
    },
    
    // Tailwind CSS processing with theme support
    tailwindcss: {
      config: './tailwind.config.ts',
    },
    
    // Advanced CSS nesting for glassmorphism effects
    'postcss-nesting': {
      edition: '2024-02',
    },
    
    // Custom properties fallbacks for better browser support
    'postcss-custom-properties': {
      preserve: true,
      importFrom: [
        // Theme variable definitions
        './app/globals.css',
      ],
    },
    
    // Optimize backdrop-filter for better performance
    'postcss-preset-env': {
      stage: 1,
      features: {
        'custom-properties': false, // Handled by postcss-custom-properties
        'nesting-rules': false,     // Handled by postcss-nesting
        'backdrop-filter': {
          preserve: true,
        },
      },
      browsers: [
        '>= 0.5%',
        'last 2 major versions',
        'not dead',
        'Chrome >= 60',
        'Firefox >= 60',
        'Safari >= 12',
      ],
    },
    
    // Autoprefixer for vendor prefixes (essential for glassmorphism)
    autoprefixer: {
      flexbox: 'no-2009',
      grid: 'autoplace',
      overrideBrowserslist: [
        '>= 0.5%',
        'last 2 major versions',
        'not dead',
        'Chrome >= 60',
        'Firefox >= 60',
        'Safari >= 12',
        'iOS >= 12',
        'Android >= 8',
      ],
    },
    
    // CSS optimization for production builds
    ...(process.env.NODE_ENV === 'production' && {
      'cssnano': {
        preset: ['advanced', {
          discardComments: {
            removeAll: true,
          },
          reduceIdents: false,
          zindex: false,
          autoprefixer: false,
          // Preserve backdrop-filter and CSS custom properties
          normalizeWhitespace: true,
          colormin: true,
          minifyFontValues: true,
          minifySelectors: true,
          minifyParams: true,
        }],
      },
    }),
  },
};

module.exports = config;
