import Image from 'next/image'
import About from '@/components/about'

export default function Home() {
	return (
		<main className='min-h-screen text-gray-900 flex justify-center max-w-4xl w-full'>
			<section className='flex flex-col items-center mx-auto'>
				<div className='relative max-w-[600px] max-h-[300px]'>
					<Image
						src='/browser-window.png'
						alt=''
						aria-hidden='true'
						width={600}
						height={300}
						className='object-contain'
						priority
					/>
					<h1
						className='font-climate-crisis  text-3xl sm:text-5xl md:text-6xl text-center drop-shadow-md
							absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
							px-4'
					>
						Rochelle Rossman
					</h1>
				</div>

				<div className='flex flex-col-reverse md:flex-row'>
					<Image
						src='/lightbulb-screen.png'
						alt='A colorful laptop with a glowing lightbulb'
						width={220}
						height={220}
						className='w-40 sm:w-52 md:w-60 object-contain shrink-0'
						priority
					/>
					<About />
				</div>
			</section>
		</main>
	)
}
