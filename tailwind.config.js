module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      black: 'var(--color-black)',
      white: 'var(--color-white)',
      primary: {
        100: 'var(--color-primary-100)',
        200: 'var(--color-primary-200)',
        300: 'var(--color-primary-300)',
      },
      orange: {
        100: 'var(--color-orange-100)',
        200: 'var(--color-orange-200)',
      },
      green: {
        100: 'var(--color-green-100)',
        200: 'var(--color-green-200)',
      },
      pink: {
        100: 'var(--color-pink-100)',
        200: 'var(--color-pink-200)',
      },
      slate: {
        100: 'var(--color-slate-100)',
        200: 'var(--color-slate-200)',
        300: 'var(--color-slate-300)',
      },
      gray: {
        100: 'var(--color-gray-100)',
        200: 'var(--color-gray-200)',
        300: 'var(--color-gray-300)',
        400: 'var(--color-gray-400)',
        500: 'var(--color-gray-500)',
        600: 'var(--color-gray-600)',
        700: 'var(--color-gray-700)',
        800: 'var(--color-gray-800)',
      },
    },
  },
  plugins: [],
};
