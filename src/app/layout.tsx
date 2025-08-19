import BackgroundDecor from '@/components/background'
import Footer from '@/components/footer'
import Navbar from '@/components/nav'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Erica_One, Quicksand } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
	title: 'Rochelle Rossman | Web Developer',
	metadataBase: new URL('https://rochellerossman.dev/'),
	description:
		'Portfolio of Rochelle Rossman, a web developer specializing in accessible, performant, and creative front-end solutions.',
}

const erica_one = Erica_One({
	variable: '--font-erica-one',
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
})

const quicksand = Quicksand({
	variable: '--font-quicksand',
	subsets: ['latin'],
	display: 'swap',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className={`${erica_one.variable} ${quicksand.variable} antialiased`}
			suppressHydrationWarning
		>
			<body className='relative bg-gradient-radial bg-radial-blur bg-radial-blend flex flex-col items-center justify-center mb-12'>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
				>
					<main
						className='relative z-10 min-h-screen px-4 max-w-5xl w-full'
						role='main'
					>
						<Navbar />
						{children}
						<Footer />
					</main>
				</ThemeProvider>
				<SpeedInsights />
				<Analytics />
				<BackgroundDecor />
			</body>
		</html>
	)
}
