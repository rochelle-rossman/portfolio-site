import About from '@/components/about'
import BrowserContainer from '@/components/browser-container'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
	return (
		<section className='flex flex-col gap-6 items-center mx-auto motion-safe:animate-fade-up'>
			<BrowserContainer>
				<h1 className='uppercase mb-4 xs:text-6xl'>Rochelle Rossman</h1>
			</BrowserContainer>

			<div className='flex flex-col gap-6 items-center bg-background rounded-xl border-2 border-navy shadow-xl p-4 sm:p-6'>
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
			</div>
		</section>
	)
}
