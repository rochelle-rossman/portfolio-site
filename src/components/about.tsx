import BrowserContainer from '@/components/browser-container'
import Image from 'next/image'

export default function About() {
	return (
		<BrowserContainer
			id='about'
			className='scroll-mt-24'
		>
			<section className='mx-auto'>
				<div className='flex flex-col items-center text-center md:block md:text-left'>
					<span className='float-circle'>
						<div className='w-72 h-72 lg:w-80 lg:h-80 rounded-full shadow-xl border-2 border-b-4 border-r-4 overflow-clip'>
							<div className='relative w-full h-full drop-shadow-[5px_-5px_var(--color-purple)] dark:drop-shadow-[-5px_5px_var(--color-indigo)]'>
								<Image
									src='/headshot-3.png'
									alt='A headshot of Rochelle Rossman'
									title='A headshot of Rochelle Rossman'
									fill
									className='object-contain contrast-110 brightness-105 dark:brightness-90'
								/>
							</div>
						</div>
					</span>
					<div className='text-2xl sm:text-3xl mb-2 w-full'>
						<span className='inline-flex'>
							<Image
								src={'/wave-emoji.png'}
								height={25}
								width={25}
								alt='waving hand emoji'
								className='motion-safe:animate-[wave_2s_ease-in-out_infinite] w-6 h-6 sm:w-8 sm:h-8 mt-1 mr-1 md:mr-2'
							/>
							<span className='font-semibold'>
								I’m Rochelle Rossman —
							</span>{' '}
						</span>
					</div>
				</div>{' '}
				<p className='md:text-lg mb-4'>
					As a web developer, I love turning ideas into accessible,
					responsive, and thoughtfully crafted web experiences. I
					bring a <strong>creative</strong>and{' '}
					<strong>detail-oriented eye</strong>, a{' '}
					<strong>growth mindset</strong>, and a strong sense of{' '}
					<strong>curiosity</strong> to every project I touch.
				</p>
				<p className='md:text-lg mb-4'>
					Prior to tech work, I worked in management, leadership, and
					customer service positions in grocery stores and restaurants
					for more than 15 years. My people-first values—
					<strong>
						clear communication, deep empathy, and creative
						problem-solving
					</strong>
					—were molded by that chapter. I changed my career path to
					web development in order to create inclusive, accessible,
					and truly helpful tools and experiences.
				</p>
				<p className='md:text-lg mb-4'>
					I’m based in 📍 Kingston, NY and I&apos;m open to remote or
					hybrid roles in the NYC area. I’m really attracted to
					mission-driven organizations that focus on equity and making
					a positive impact—teams where clean code and inclusive
					collaboration come together with meaningful work.
				</p>
				<p className='md:text-lg mb-4'>
					I’m also available for freelance and contract work — I’d
					love to partner with small businesses, nonprofits, creators,
					and individuals on projects like new website builds,
					redesigns, personal portfolios, WordPress migrations and
					custom block work, headless CMS setups, accessibility
					audits, performance tuning, and ongoing site maintenance. I
					enjoy working across both short-term projects and
					longer-term collaborations.
				</p>
				<p className='md:text-lg mb-4'>
					Toolkit highlights: JavaScript, TypeScript, React, Next.js,
					Vue, WordPress (custom Gutenberg blocks), and containerized
					deployments (AWS, ArgoCD). Whether I’m engineering a
					scalable design system or implementing accessibility best
					practices, I strive to produce careful, maintainable work
					that benefits teams and users.
				</p>
				<p className='md:text-lg mb-4'>
					Outside of web development, I’m a hobbyist woodworker with a
					love for interior design, a good TV binge, and immersive,
					story-rich video games. I live with my wife and our two
					dogs, Astrid and Ty, and I’m always on the hunt for the best
					sandwiches.
				</p>
			</section>
		</BrowserContainer>
	)
}
