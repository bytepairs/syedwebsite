/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
          950: '#0f172a',
        },
        surface: {
          canvas: '#F5EFE1',
          base: '#ffffff',
          warm: '#FAF6ED',
          muted: '#EFE7D6',
          subtle: '#EDE5D4',
          border: '#DFD3BD',
          borderSubtle: '#ECE3D2',
          borderStrong: '#C8B89C',
        },
        sand: {
          50: '#FDFBF7',
          100: '#FAF6ED',
          200: '#F5EFE1', // Primary Theme Color
          300: '#EFE7D6',
          400: '#EDE5D4',
          500: '#DFD3BD',
          600: '#C8B89C',
          700: '#9E8E74',
          800: '#6E624E',
          900: '#3D362B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(44, 38, 28, 0.05)',
        'card': '0 1px 3px 0 rgba(44, 38, 28, 0.07), 0 1px 2px -1px rgba(44, 38, 28, 0.05)',
        'card-hover': '0 12px 30px -10px rgba(44, 38, 28, 0.09), 0 4px 12px -2px rgba(44, 38, 28, 0.04)',
        'elevated': '0 20px 40px -15px rgba(44, 38, 28, 0.10)',
        'modal': '0 25px 50px -12px rgba(44, 38, 28, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
