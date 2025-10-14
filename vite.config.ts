import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Manual chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // React core libraries
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Animation library
          'vendor-animations': ['framer-motion'],
          // Icons library
          'vendor-icons': ['react-icons'],
        }
      }
    },
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        // Remove console.log in production
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      }
    },
    // Adjust chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
  }
})