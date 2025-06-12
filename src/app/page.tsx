// import { Card, CardContent } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'
import Image from 'next/image'
import { climateCrisis } from '@/lib/font'

export default function Home() {
	return (
		<main className='min-h-screen text-gray-900 p-6'>
			<section>
				<div className='flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto py-8'>
					<span>
						<h1
							className={`${climateCrisis.className} text-4xl md:text-6xl mb-4`}
						>
							Rochelle Rossman
						</h1>
						<p className='text-lg md:text-xl text-gray-600 mb-6'>
							Web Developer & Front-end Software Engineer 
						</p>
					</span>
					<Image
						src='/lightbulb-screen.png'
						alt='A colorful illustration of a laptop computer screen with a large lightbulb emerging from it.'
						className='block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5'
						width={240}
						height={240}
						priority
					/>
				</div>
        <div className='text-center max-w-2xl mx-auto mb-8'>
          <p className='text-gray-700 mb-4'>
            I’m a software engineer with a passion for web and
            front-end development. I specialize in building
            accessible, performant, and user-friendly web
            applications.
          </p>
    
        </div>
			</section>

			{/* <section className='max-w-4xl mx-auto py-8 grid gap-6'>
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
			</section> */}
		</main>
	)
}
