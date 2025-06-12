import type { Metadata } from "next";
import { SpeedInsights } from '@vercel/speed-insights/next'
import "./globals.css";
import Navbar  from "@/components/nav";
import Footer from "@/components/footer";
import { geistSans, geistMono } from "@/lib/font";

export const metadata: Metadata = {
  title: 'Rochelle Rossman',
  metadataBase: new URL('https://rochellerossman.dev/'),
	description:
		'Portfolio of Rochelle Rossman, a software engineer specializing in web and front-end development.',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html
			lang='en'
			className={` ${geistSans.variable} ${geistMono.variable}`}
		>
			<body className='antialiased bg-linear-to-br from-amber-200 via-cyan-200 to-red-300 flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-12'>
				<main className='flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-4xl w-full'>
					<Navbar />
					{children}
					<Footer />
				</main>
				<SpeedInsights />
			</body>
		</html>
  )
}
