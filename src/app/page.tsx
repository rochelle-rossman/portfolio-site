import About from '@/components/about'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<section className='flex flex-col items-center mx-auto'>
			<div className='w-full max-w-3xl mb-10 border-2 border-navy rounded-xl shadow-xl overflow-clip'>
				<div className='bg-gold dark:bg-gray-600 border-b-2 border-navy px-3 py-2 rounded-t-xl flex'>
					<span className='block w-4 h-4 border-2 border-navy bg-red-400 rounded-full' />
					<span className='block w-4 h-4 border-2 border-navy bg-yellow-300 rounded-full mx-1' />
					<span className='block w-4 h-4 border-2 border-navy bg-green-400 rounded-full' />
				</div>
				<div className='p-6 bg-background dark:bg-gray-800'>
					<h1 className='uppercase mb-4'>Rochelle Rossman</h1>
				</div>
			</div>

			<div className='flex flex-col gap-4 items-center bg-background rounded-lg shadow-xl p-4 sm:p-6'>
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
