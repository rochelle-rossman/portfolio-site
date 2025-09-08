import StyledHeadshot from '@/components/headshot'
import TextType from '@/components/typing-text'
import Link from 'next/link'
import Card from '@/components/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
	return (
		<Card>
			<div className='flex flex-col gap-4 md:gap-6'>
				<h1 className='uppercase m-0 min-xs:text-6xl lg:text-7xl'>
					Rochelle Rossman
				</h1>
				<section className='relative mx-auto flex flex-col-reverse items-center gap-4  md:flex-row md:justify-between'>
					{/* Left side */}
					<div className='flex-1 '>
						<div className='flex text-center md:text-left text-3xl md:text-4xl mb-4 w-full min-h-[4.5rem]'>
							<Image
								src={'/wave-emoji.png'}
								height={25}
								width={25}
								alt=''
								className='wave w-8 h-8 mt-1 mr-2'
							/>
							<TextType
								text={[
									'I’m Rochelle —',
									'I build inclusive web experiences',
									'I build accessible web experiences',
								]}
							/>
						</div>{' '}
						<p className='text-lg md:text-xl mb-6'>
							A web software developer crafting accessible,
							responsive, and thoughtfully designed digital experiences.
						</p>
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
					<div className='flex-1 flex justify-center md:justify-end'>
						<span className='px-6'>
							<StyledHeadshot />
						</span>
					</div>
				</section>
			</div>
		</Card>
	)
}
