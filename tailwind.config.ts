import type { Config } from 'tailwindcss'
import { PluginAPI } from 'tailwindcss/types/config'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      neutral: {
        100: '#FFFFFF',
        200: '#F2F5F9',
        300: '#E7EAEE',
        400: '#CDD5E0',
        700: '#677489',
        900: '#111827',
        DEFAULT: '#111827',
      },
      blue: '#A3CBF0',
      pink: '#FEC8E8',
      green: '#00C28A',
    },
    fontFamily: {
      sans: ['var(--font-outfit)'],
    },
    extend: {
      screens: {
        'touch-device': { raw: '(pointer: coarse) and (hover: none)' },
      },
      typography: ({ theme }: { theme: PluginAPI['theme'] }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.neutral[900]'),
            '--tw-prose-headings': theme('colors.neutral[900]'),
            '--tw-prose-lead': theme('colors.neutral[700]'),
            '--tw-prose-links': theme('colors.neutral[900]'),
            '--tw-prose-bold': theme('colors.neutral[900]'),
            '--tw-prose-counters': theme('colors.neutral[700]'),
            '--tw-prose-bullets': theme('colors.neutral[400]'),
            '--tw-prose-hr': theme('colors.neutral[300]'),
            '--tw-prose-quotes': theme('colors.neutral[900]'),
            '--tw-prose-quote-borders': theme('colors.neutral[300]'),
            '--tw-prose-captions': theme('colors.neutral[700]'),
            '--tw-prose-code': theme('colors.neutral[900]'),
            '--tw-prose-pre-code': theme('colors.neutral[200]'),
            '--tw-prose-pre-bg': theme('colors.neutral[900]'),
            '--tw-prose-th-borders': theme('colors.neutral[300]'),
            '--tw-prose-td-borders': theme('colors.neutral[200]'),
            '--tw-prose-invert-body': theme('colors.neutral[200]'),
            '--tw-prose-invert-headings': theme('colors.neutral[100]'),
            '--tw-prose-invert-lead': theme('colors.neutral[300]'),
            '--tw-prose-invert-links': theme('colors.neutral[100]'),
            '--tw-prose-invert-bold': theme('colors.neutral[100]'),
            '--tw-prose-invert-counters': theme('colors.neutral[400]'),
            '--tw-prose-invert-bullets': theme('colors.neutral[700]'),
            '--tw-prose-invert-hr': theme('colors.neutral[700]'),
            '--tw-prose-invert-quotes': theme('colors.neutral[200]'),
            '--tw-prose-invert-quote-borders': theme('colors.neutral[700]'),
            '--tw-prose-invert-captions': theme('colors.neutral[400]'),
            '--tw-prose-invert-code': theme('colors.neutral[100]'),
            '--tw-prose-invert-pre-code': theme('colors.neutral[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.neutral[700]'),
            '--tw-prose-invert-td-borders': theme('colors.neutral[700]'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
  future: {
    hoverOnlyWhenSupported: true,
  },
}

export default config
