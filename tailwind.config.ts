
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
                campusorange: {
                    50: '#f8f8f8',   // Lightest black
                    100: '#e8e8e8',  // Very light black
                    200: '#d3d3d3',  // Light black
                    300: '#a9a9a9',  // Soft black
                    400: '#666666',  // Medium light black
                    500: '#333333',  // Primary black
                    600: '#222222',  // Dark medium black
                    700: '#1a1a1a',  // Dark black
                    800: '#0f0f0f',  // Deeper black
                    900: '#000000',  // Darkest black
                },
                sunshine: {
                    50: '#FFFDF7',
                    100: '#FFF8E1',
                    200: '#FFECB3',
                    300: '#FFE082',
                    400: '#FFD54F',
                    500: '#FFCA28',
                    600: '#FFC107',
                    700: '#FFB300',
                    800: '#FFA000',
                    900: '#FF8F00',
                },
                coral: {
                    50: '#FFF0ED',
                    100: '#FFE0DA',
                    200: '#FFC2B6',
                    300: '#FFA391',
                    400: '#FF856D',
                    500: '#FF6648',
                    600: '#FF4824',
                    700: '#FF2900',
                    800: '#CC2100',
                    900: '#991800',
                },
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                'pulse-gentle': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.8 }
                },
                'wave': {
                    '0%': { transform: 'rotate(0.0deg)' },
                    '10%': { transform: 'rotate(14.0deg)' },
                    '20%': { transform: 'rotate(-8.0deg)' },
                    '30%': { transform: 'rotate(14.0deg)' },
                    '40%': { transform: 'rotate(-4.0deg)' },
                    '50%': { transform: 'rotate(10.0deg)' },
                    '60%': { transform: 'rotate(0.0deg)' },
                    '100%': { transform: 'rotate(0.0deg)' }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'pulse-gentle': 'pulse-gentle 3s ease-in-out infinite',
                'wave': 'wave 2.5s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
