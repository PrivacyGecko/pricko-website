/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#171717',       // Dark Charcoal
        // secondary: '#262626',     // Medium Gray
        // accent: '#00C49A',        // Bright Teal
        // 'accent-hover': '#00D6A8', // Lighter Teal
        // muted: '#A3A3A3',         // Silver Gray
        // border: '#404040'          // Light Gray
        //  primary: '#101820',
        // secondary: '#2E4053',
        // accent: '#408EC6',
        // 'accent-hover': '#00ABE4',
        // muted: '#AAB7B8',
        // border: '#3B4B59'
         primary: '#000000',
        secondary: '#18181b',
        accent: '#4ade80',
        'accent-hover': '#22c55e',
        muted: '#d4d4d8', // Updated from #a1a1aa (zinc-400) to #d4d4d8 (zinc-300) for WCAG AA compliance (4.5:1 contrast ratio)
        border: '#27272a'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
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
      },
    },
  },
  plugins: [],
}