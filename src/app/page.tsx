import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
// import Image from 'next/image'

export default function Home() {
	return (
		<main className='min-h-screen bg-white text-gray-900 p-6'>
			<section className='max-w-4xl mx-auto text-center py-12'>
				<h1 className='text-4xl md:text-6xl font-bold mb-4'>
					Rochelle Rossman
				</h1>
				<p className='text-lg md:text-xl text-gray-600 mb-6'>
					Front-End Developer | React, WordPress, Tailwind | Lover of
					clean code & good UI
				</p>
				<Button asChild>
					<Link href='/projects'>View My Work</Link>
				</Button>
			</section>

			<section className='max-w-4xl mx-auto py-8 grid gap-6'>
				<Card>
					<CardContent className='p-4'>
						<h2 className='text-2xl font-semibold mb-2'>
							Custom Gutenberg Carousel
						</h2>
						<p className='text-gray-700 mb-2'>
							At TechnologyAdvice, I built a lightweight carousel
							block using Splide.js to replace a bloated
							third-party plugin, improving page load times and
							editing experience.
						</p>
						<Link
							href='/projects/custom-carousel'
							className='text-blue-600 underline'
						>
							Read Case Study →
						</Link>
					</CardContent>
				</Card>

				<Card>
					<CardContent className='p-4'>
						<h2 className='text-2xl font-semibold mb-2'>
							Multisite Headless Migration
						</h2>
						<p className='text-gray-700 mb-2'>
							Helped migrate a legacy WordPress multisite into a
							headless setup using a shared composable
							architecture and API-driven content.
						</p>
						<Link
							href='/projects/headless-migration'
							className='text-blue-600 underline'
						>
							Read Case Study →
						</Link>
					</CardContent>
				</Card>
			</section>
		</main>
	)
}
