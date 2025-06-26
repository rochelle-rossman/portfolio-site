import { Montserrat, Climate_Crisis } from 'next/font/google'
import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import Navbar from '@/components/nav'
import Footer from '@/components/footer'
// import Image from 'next/image'
import BackgroundDecor from '@/components/background'

export const metadata: Metadata = {
	title: 'Rochelle Rossman | Web Developer',
	metadataBase: new URL('https://rochellerossman.dev/'),
	description:
		'Portfolio of Rochelle Rossman, a web developer specializing in accessible, performant, and creative front-end solutions.',
}

export const montserrat = Montserrat({
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
		>
			<body className='relative bg-gradient-radial bg-radial-blur bg-radial-blend flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-12'>
				<BackgroundDecor />
				<main
					className='relative z-10 flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-4xl w-full'
					role='main'
				>
					<Navbar />
					{children}
					<Footer />
				</main>
				<SpeedInsights />
			</body>
		</html>
	)
}
