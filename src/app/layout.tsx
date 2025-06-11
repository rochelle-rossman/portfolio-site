import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar  from "@/components/nav";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-12`}
			>
				<main className='flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[768px] w-full'>
					<Navbar />
					{children}
					<Footer />
					{/* <Analytics /> */}
					{/* <SpeedInsights /> */}
				</main>
			</body>
		</html>
  )
}
