/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vedic-black': '#1a1412', // Deep brown-black (Blank Brown)
        'vedic-saffron': '#FF9933', // Saffron/Orange
        'vedic-saffron-dark': '#CC7A00',
        'vedic-saffron-light': '#FFB366',
        'vedic-gold': '#D4AF37', // Gold accents
        'vedic-white': '#F5F5F0', // Off-white/Parchment
        'vedic-brown': '#3E2723', // Rich brown
        'vedic-brown-light': '#5D4037',
        'vedic-cream': '#FFF8E7',
        // Modern Purple/Blue accents
        'brand-purple': '#8B5CF6',
        'brand-purple-dark': '#6D28D9',
        'brand-purple-light': '#A78BFA',
        'brand-blue': '#3B82F6',
        'brand-blue-dark': '#2563EB',
        'brand-blue-light': '#60A5FA',
        'brand-pink': '#EC4899',
        'brand-dark': '#0F172A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], // Elegant serif for headings
        sans: ['"Inter"', '"Space Grotesk"', 'sans-serif'], // Clean sans for body
        sanskrit: ['"Noto Sans Devanagari"', '"Poppins"', 'sans-serif'], // For Sanskrit text
        modern: ['"Space Grotesk"', '"Inter"', 'sans-serif'], // Modern sans-serif
      },
      backgroundImage: {
        'vedic-pattern': "url('/path/to/pattern.png')",
        'gradient-vedic': 'linear-gradient(135deg, #FF9933 0%, #D4AF37 100%)',
        'gradient-brown': 'linear-gradient(135deg, #3E2723 0%, #1a1412 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-in': 'slideIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'sanskrit-rotate': 'sanskritRotate 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 153, 51, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 153, 51, 0.8), 0 0 30px rgba(255, 153, 51, 0.4)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        sanskritRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
