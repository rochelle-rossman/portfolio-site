import { Montserrat, Climate_Crisis } from 'next/font/google'
import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/nav'
import Footer from '@/components/footer'
import BackgroundDecor from '@/components/background'

export const metadata: Metadata = {
	title: 'Rochelle Rossman | Web Developer',
	metadataBase: new URL('https://rochellerossman.dev/'),
	description:
		'Portfolio of Rochelle Rossman, a web developer specializing in accessible, performant, and creative front-end solutions.',
}

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
	display: 'swap',
})

const climate_crisis = Climate_Crisis({
	variable: '--font-climate-crisis',
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
			className={`${climate_crisis.variable} ${montserrat.variable} antialiased`}
			suppressHydrationWarning
		>
			
			<body className='relative bg-gradient-radial bg-radial-blur bg-radial-blend flex flex-col items-center justify-center mb-12'>
				<ThemeProvider attribute='class' defaultTheme='system'>
					<main
						className='relative z-10 min-h-screen px-4 max-w-4xl w-full'
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
