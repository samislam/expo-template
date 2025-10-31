const nativewindPreset = require('nativewind/preset')
import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  presets: [nativewindPreset],
  plugins: [],
} satisfies Config
