/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vedic-black': '#000000', // Pure Black
        'vedic-saffron': '#FD7503', // The Vibrant Orange from the image
        'vedic-saffron-dark': '#C25A00',
        'vedic-saffron-light': '#FE9E4D',
        'vedic-gold': '#FD7503', // Mapping gold to Saffron to adhere to 5-color limit
        'vedic-white': '#FFFFFF', // Pure White
        'vedic-brown': '#6A3914', // The Dark Brown from the image
        'vedic-brown-light': '#8B4B1B',
        'vedic-cream': '#FFF9F3', // The Off-White/Cream from the image
        
        // Removing extra brand colors to enforce the 5-color palette
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
        'gradient-vedic': 'linear-gradient(135deg, #FD7503 0%, #6A3914 100%)', // Saffron to Brown
        'gradient-brown': 'linear-gradient(135deg, #6A3914 0%, #000000 100%)', // Brown to Black
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
