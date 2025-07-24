import About from '@/components/about'
import StyledHeadshot from '@/components/headshot'
import { Button } from '@/components/ui/button'
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
				<h1 className='absolute dark:text-background top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
					Rochelle Rossman
				</h1>
			</div>

			<div className='flex flex-col gap-4 items-center md:items-start md:flex-row'>
				<StyledHeadshot />
				<div className='flex flex-col gap-4 items-center bg-muted/70 rounded-lg shadow-xl p-6'>
					<About />
					<div className='w-full flex flex-col items-center justify-center sm:flex-row gap-4'>
						<Link
							href='/projects'
							className='w-full'
						>
							<Button className='w-full cursor-pointer text-md underline-offset-4 hover:underline'>
								View My Work
							</Button>
						</Link>
						<Link
							href='/resume'
							className='w-full'
						>
							<Button className='w-full cursor-pointer text-md underline-offset-4 hover:underline'>
								View My Résumé
							</Button>
						</Link>
					</div>
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
	)
}
