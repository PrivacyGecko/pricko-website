/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // PRIMARY BRAND COLORS (Keep Privacy Gecko Identity)
        primary: '#000000',          // Black background
        secondary: '#18181b',        // Zinc-900 for cards
        accent: '#4ade80',           // Privacy Green (Primary - use liberally)
        'accent-hover': '#22c55e',   // Green hover state
        muted: '#d4d4d8',            // Zinc-300 for WCAG AA compliance (4.5:1 contrast ratio)
        border: '#27272a',           // Zinc-800 for borders

        // NEW: SECONDARY ACCENTS (Professional Variety)
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
          bright: '#22d3ee',         // Electric Cyan - Tech, Innovation, Solana
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
          royal: '#c084fc',           // Royal Purple - Premium, Governance
        },

        // NEW: SEMANTIC COLORS (Professional UI)
        success: '#4ade80',            // Green (same as primary)
        warning: '#fbbf24',            // Yellow - beta badges, important notices
        error: '#f87171',              // Red - errors, destructive actions
        info: '#60a5fa',               // Blue - informational, coming soon
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
      },
      keyframes: {
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
      },
      backgroundImage: {
        'gradient-green': 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%)',
        'gradient-purple': 'linear-gradient(135deg, #c084fc 0%, #a855f7 100%)',
        'gradient-success': 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
        'gradient-warning': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        'gradient-error': 'linear-gradient(135deg, #f87171 0%, #ef4444 100%)',
        'gradient-info': 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
      },
    },
  },
  plugins: [],
}