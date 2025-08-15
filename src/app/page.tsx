import About from '@/components/about'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
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
				<h1 className='motion-safe:animate-fade-down absolute dark:text-background drop-shadow-gold/70 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
					Rochelle Rossman
				</h1>
			</div>

			<div className='flex flex-col gap-4 items-center bg-background/80 rounded-lg shadow-xl p-6'>
				<About />
				<div className='w-full flex flex-col items-center justify-center sm:flex-row gap-4'>
					<Link
						href='/projects'
						className='w-full'
					>
						<Button
							className='cursor-pointer w-full underline-offset-4 hover:underline hover:bg-primary'
							role='link'
						>
							View My Work
							<ChevronRight />
						</Button>
					</Link>
					<Link
						href='/resume'
						className='w-full'
					>
						<Button
							className='cursor-pointer w-full underline-offset-4 hover:underline hover:bg-primary'
							role='link'
						>
							View My Résumé
							<ChevronRight />
						</Button>
					</Link>
				</div>
				<div className='relative w-80 h-80'>
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
