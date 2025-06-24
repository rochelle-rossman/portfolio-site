import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import Navbar from '@/components/nav'
import Footer from '@/components/footer'
import { geistSans, geistMono } from '@/lib/font'
import Image from 'next/image'

export const metadata: Metadata = {
	title: 'Rochelle Rossman',
	metadataBase: new URL('https://rochellerossman.dev/'),
	description:
		'Portfolio of Rochelle Rossman, a software engineer specializing in web and front-end development.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className={` ${geistSans.variable} ${geistMono.variable}`}
		>
			<body className='antialiased relative bg-gradient-radial bg-gradient-radial-animated bg-radial-blur bg-radial-blend min-h-screen flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-12 overflow-hidden'>
				<div className='absolute top-[10%] left-[5%] z-0 opacity-70'>
					<Image
						src='/twinkle.png'
						alt=''
						width={80}
						height={80}
						className='object-contain'
					/>
				</div>
				<div className='absolute top-[60%] right-[-5%] z-0 opacity-70'>
					<Image
						src='/cloud.png'
						alt=''
						width={150}
						height={150}
						className='object-contain'
					/>
				</div>
				<div className='absolute bottom-[20%] left-[10%] z-0 opacity-50'>
					<Image
						src='/cloud.png'
						alt=''
						width={250}
						height={250}
						className='object-contain'
					/>
				</div>

				<main className='relative z-10 flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-4xl w-full'>
					<Navbar />
					{children}
					<Footer />
				</main>
				<SpeedInsights />
			</body>
		</html>
	)
}
