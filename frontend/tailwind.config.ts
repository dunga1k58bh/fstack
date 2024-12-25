import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			fontFamily: {
				sans: ['var(--font-sans)'],
				mono: ['var(--font-mono)']
			},
			screens: {
				xl: '1200px',
				xs: '768px'
			},
			fontSize: {
				'12': '12px',
				'32': '32px'
			},
			textColor: {
				'neutral-content-weak': 'var(--color-neutral-content-weak)'
			},
			margin: {
				sm: '0.75rem'
			},
			gap: {
				sm: '0.75rem'
			}
		}
	},
	plugins: [nextui()]
};
export default config;
