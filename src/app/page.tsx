import Image from 'next/image'

export default function Home() {
	return (
		<main className='min-h-screen text-gray-900 flex justify-center'>
			<section className='flex flex-col items-center gap-12'>
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
						className='font-climate-crisis text-4xl md:text-6xl text-center drop-shadow-md
							absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
							px-4'
					>
						Rochelle Rossman
					</h1>
				</div>

				<div id='about' className='flex flex-col-reverse md:flex-row items-center justify-between gap-8 max-w-4xl w-full'>
					<Image
						src='/lightbulb-screen.png'
						alt='A colorful laptop with a glowing lightbulb'
						width={220}
						height={220}
						className='w-40 sm:w-52 md:w-60 object-contain shrink-0'
						priority
					/>
					<p className='text-lg md:text-xl text-gray-700 max-w-xl text-center md:text-left'>
						Hi, I’m Rochelle 👋 — a front-end-focused web developer
						with a passion for clean code, intuitive interfaces,
						and performance-first thinking.
					</p>
				</div>
			</section>
		</main>
	)
}
