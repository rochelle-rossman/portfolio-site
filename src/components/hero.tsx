import BrowserContainer from '@/components/browser-container'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
	return (
		<BrowserContainer>
			<div className='flex flex-col gap-4'>
				<h1 className='uppercase m-0 min-xs:text-6xl lg:text-7xl'>
					Rochelle Rossman
				</h1>

				<section className='relative mx-auto flex flex-col-reverse gap-4 items-center md:flex-row md:justify-between'>
					{/* Left side */}
					<div className='flex-1 flex flex-col justify-center gap-4 md:gap-6'>
						<div>
							<p className='text-lg md:text-xl'>
								A web software developer crafting accessible,
								responsive, and thoughtfully designed digital
								experiences. Whether you’re looking for a
								long-term teammate or a freelance partner,{' '}
								<strong>
									let’s build something meaningful together.
								</strong>
							</p>
						</div>
						<div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
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
					{/* Right side */}
					<div className='flex-1 flex justify-center md:justify-end max-w-fit'>
						<span className='px-4'>
							<div className='w-64 h-64 md:w-72 md:h-72 rounded-full shadow-xl border-2 border-b-4 border-r-4 overflow-clip'>
								<div className='relative w-full h-full drop-shadow-[5px_-5px_var(--color-purple)] dark:drop-shadow-[-5px_5px_var(--color-indigo)]'>
									<Image
										src='/headshot-2.png'
										alt='A headshot of Rochelle Rossman'
										title='A headshot of Rochelle Rossman'
										fill
										sizes='( max-width: 768px ) 18rem, ( max-width: 1024px ) 20rem, 20rem'
										className='object-cover object-top hue-rotate-30 contrast-110 brightness-105 dark:brightness-90'
									/>
								</div>
							</div>
						</span>
					</div>
				</section>
			</div>
		</BrowserContainer>
	)
}
