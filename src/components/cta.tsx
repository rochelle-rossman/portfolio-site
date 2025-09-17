import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import BrowserContainer from '@/components/browser-container'
import Image from 'next/image'

export default function CallToAction() {
	return (
		<BrowserContainer>
			<div className='flex flex-col sm:flex-row gap-6 items-center'>
				<div className='flex flex-col items-center gap-4 text-center'>
					<h2 className='text-2xl md:text-3xl font-bold'>
						Ready to collaborate?
					</h2>

					<p className='text-base md:text-lg mb-4 max-w-2xl'>
						Whether you’re seeking a dedicated full-time web
						developer or a creative freelance partner, let’s connect
						and build something meaningful together.
					</p>
					<div className='flex flex-col md:flex-row gap-4 w-full'>
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
						<Link
							href='/contact'
							className='w-full'
						>
							<Button
								className='w-full'
								variant={'branded'}
							>
								Start Your Project
								<ArrowRight />
							</Button>
						</Link>
					</div>
				</div>
				<div>
					<Image
						src='/lightbulb-screen.png'
						alt=''
						width={300}
						height={300}
						className='object-scale-down'
					/>
				</div>
			</div>
		</BrowserContainer>
	)
}
