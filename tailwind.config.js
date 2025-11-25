/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ===== COLORS =====
      colors: {
        // PRIMARY BRAND COLORS
        primary: '#000000',
        secondary: '#18181b',
        accent: '#4ade80',
        'accent-hover': '#22c55e',
        muted: '#d4d4d8',
        border: '#27272a',

        // SECONDARY ACCENTS
        cyan: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c3d66',
          bright: '#22d3ee',
        },
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          royal: '#c084fc',
        },

        // SEMANTIC COLORS
        success: '#4ade80',
        warning: '#fbbf24',
        error: '#f87171',
        info: '#60a5fa',

        // PROTOCOL COLORS
        'protocol-primary': '#06b6d4',
        'protocol-secondary': '#8b5cf6',
        'protocol-accent': '#14b8a6',
      },

      // ===== TYPOGRAPHY =====
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Display sizes (fluid)
        'display-xl': 'clamp(3.5rem, 8vw, 6rem)',
        'display-lg': 'clamp(3rem, 6vw, 4.5rem)',
        'display-md': 'clamp(2.5rem, 5vw, 3.75rem)',
        'display-sm': 'clamp(2rem, 4vw, 3rem)',
        // Headings (fluid)
        'h1': 'clamp(2.25rem, 4vw, 3rem)',
        'h2': 'clamp(1.875rem, 3vw, 2.25rem)',
        'h3': 'clamp(1.5rem, 2.5vw, 1.875rem)',
        'h4': 'clamp(1.25rem, 2vw, 1.5rem)',
        'h5': 'clamp(1.125rem, 1.5vw, 1.25rem)',
        'h6': 'clamp(1rem, 1.25vw, 1.125rem)',
      },

      // ===== SPACING =====
      spacing: {
        18: '4.5rem',
        88: '22rem',
        112: '28rem',
        128: '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },

      // ===== ANIMATIONS =====
      animation: {
        // Existing
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'gradient': 'gradient 3s ease infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        // NEW: Modern animations
        'fade-up': 'fadeUp 0.4s ease-out forwards',
        'fade-down': 'fadeDown 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'protocol-glow': 'protocolGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'aurora': 'aurora 15s ease infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        // Existing
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(74, 222, 128, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(74, 222, 128, 0.6)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        // NEW: Modern keyframes
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(74, 222, 128, 0.2)',
            borderColor: 'rgba(74, 222, 128, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(74, 222, 128, 0.4)',
            borderColor: 'rgba(74, 222, 128, 0.6)',
          },
        },
        protocolGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(6, 182, 212, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)',
          },
        },
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },

      // ===== GRADIENTS =====
      backgroundImage: {
        'gradient-green': 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%)',
        'gradient-purple': 'linear-gradient(135deg, #c084fc 0%, #a855f7 100%)',
        'gradient-success': 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
        'gradient-warning': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        'gradient-error': 'linear-gradient(135deg, #f87171 0%, #ef4444 100%)',
        'gradient-info': 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
        'gradient-protocol': 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
        'gradient-protocol-reverse': 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
        'gradient-teal': 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #4ade80 0%, #22d3ee 50%, #a855f7 100%)',
        // Radial gradients
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-radial-at-t': 'radial-gradient(circle at top, var(--tw-gradient-stops))',
        'gradient-radial-at-b': 'radial-gradient(circle at bottom, var(--tw-gradient-stops))',
        // Mesh gradients
        'mesh-gradient': 'radial-gradient(at 40% 20%, #4ade80 0px, transparent 50%), radial-gradient(at 80% 0%, #22d3ee 0px, transparent 50%), radial-gradient(at 0% 50%, #a855f7 0px, transparent 50%)',
      },

      // ===== BACKDROP BLUR =====
      backdropBlur: {
        xs: '2px',
        sm: '8px',
        md: '12px',
        lg: '20px',
        xl: '32px',
        '2xl': '40px',
        '3xl': '64px',
      },

      // ===== BOX SHADOWS =====
      boxShadow: {
        'glow-sm': '0 0 10px rgba(74, 222, 128, 0.2)',
        'glow-md': '0 0 20px rgba(74, 222, 128, 0.3)',
        'glow-lg': '0 0 30px rgba(74, 222, 128, 0.4)',
        'glow-xl': '0 0 40px rgba(74, 222, 128, 0.5)',
        'protocol-glow': '0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)',
        'card': '0 8px 25px -5px rgba(74, 222, 128, 0.15), 0 4px 10px -5px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 35px -10px rgba(0, 0, 0, 0.2), 0 0 30px -5px rgba(74, 222, 128, 0.2)',
        'inner-glow': 'inset 0 0 20px rgba(74, 222, 128, 0.1)',
      },

      // ===== BORDER RADIUS =====
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      // ===== TRANSITIONS =====
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'elastic': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
