import About from '@/components/about'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<section className='flex flex-col items-center mx-auto'>
			<div className='relative'>
				<Image
					src='/browser-window.png'
					alt=''
					aria-hidden='true'
					width={600}
					height={300}
					className='object-contain'
				/>
				<h1 className='uppercase text-4xl xxs:text-5xl xs:text-6xl sm:text-7xl motion-safe:animate-fade-left absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
					Rochelle Rossman
				</h1>
			</div>

			<div className='flex flex-col gap-4 items-center bg-background/80 rounded-lg shadow-xl p-4 sm:p-6'>
				<About />
				<div className='w-full mx-2 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6'>
					<Link
						href='/projects'
						className='w-full'
					>
						<Button
							className='w-full'
							variant={'branded'}
							role='link'
						>
							View My Work
							<ArrowRight />
						</Button>
					</Link>
					<Link
						href='/resume'
						className='w-full'
					>
						<Button
							className='w-full'
							variant={'branded'}
							role='link'
						>
							View My Résumé
							<ArrowRight />
						</Button>
					</Link>
				</div>
				<div className='relative w-60 h-60 md:w-80 md:h-80'>
					<Image
						src='/lightbulb-screen.png'
						alt='A colorful laptop with a glowing lightbulb'
						fill
						className='object-contain'
					/>
				</div>
			</div>
		</section>
	)
}
