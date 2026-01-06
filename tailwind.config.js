/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vedic-black': '#0F172A', // Slate 900
        'vedic-saffron': '#3B82F6', // Blue 500
        'vedic-saffron-dark': '#2563EB', // Blue 600
        'vedic-saffron-light': '#60A5FA', // Blue 400
        'vedic-gold': '#3B82F6', // Blue 500
        'vedic-white': '#FFFFFF', // Pure White
        'vedic-brown': '#0F172A', // Slate 900 (Replacing Brown)
        'vedic-brown-light': '#1E293B', // Slate 800 (Replacing Light Brown)
        'vedic-cream': '#F8FAFC', // Slate 50 (Replacing Cream)
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], // Elegant serif for headings
        sans: ['"Inter"', '"Space Grotesk"', 'sans-serif'], // Clean sans for body
        sanskrit: ['"Noto Sans Devanagari"', '"Poppins"', 'sans-serif'], // For Sanskrit text
        modern: ['"Space Grotesk"', '"Inter"', 'sans-serif'], // Modern sans-serif
        rozha: ['"Rozha One"', 'serif'], // High contrast serif for brand
      },
      backgroundImage: {
        'vedic-pattern': "url('/path/to/pattern.png')",
        'gradient-vedic': 'linear-gradient(135deg, #3B82F6 0%, #0F172A 100%)', // Blue to Slate
        'gradient-brown': 'linear-gradient(135deg, #0F172A 0%, #020617 100%)', // Slate to Darker Slate
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
