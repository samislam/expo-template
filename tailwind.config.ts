import type { Config } from 'tailwindcss'

const nativewindPreset = require('nativewind/preset')

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  presets: [nativewindPreset],
  plugins: [],
} satisfies Config
