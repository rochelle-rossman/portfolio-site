import About from '@/components/about'
import StyledHeadshot from '@/components/headshot'
import Image from 'next/image'

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
						className='font-headline text-3xl sm:text-5xl md:text-6xl text-center drop-shadow-md
							absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
							px-4'
					>
						Rochelle Rossman
					</h1>
				</div>

				<div className='flex flex-col gap-4 items-center md:items-start md:flex-row'>
					<StyledHeadshot />
					{/* <div className='relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80'>
						<Image
							priority
							src='/headshot.png'
							alt='A headshot of Rochelle Rossman'
							fill
							className='object-top object-cover shrink-0 rounded-full shadow-2xl ring-2 ring-opacity-30 filter grayscale contrast-110 brightness-105'
						/>
					</div> */}
					<div className='flex flex-col gap-4 items-center'>
						<About />
						<div className='relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80'>
							<Image
								src='/lightbulb-screen.png'
								alt='A colorful laptop with a glowing lightbulb'
								fill
								className='object-contain'
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
