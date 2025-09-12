import Image from 'next/image'
import BrowserContainer from '@/components/browser-container'

export default function About() {
	return (
		<BrowserContainer id='about'>
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
					responsive, and thoughtfully crafted web experiences.{' '}
					<strong>
						I bring a creative and detail-oriented eye, a growth
						mindset, and a strong sense of curiosity to every
						project I touch.
					</strong>
				</p>
				<p className='md:text-lg mb-4'>
					Before tech I spent 15+ years in leadership, management, and
					customer-facing roles in restaurants and grocery. That
					chapter shaped my people-first values:{' '}
					<strong>
						clear communication, deep empathy, and creative
						problem-solving.
					</strong>{' '}
					I pivoted into web development to build tools and
					experiences that are genuinely useful, accessible, and
					rooted in inclusion.
				</p>
				<p className='md:text-lg mb-4'>
					I’m based in 📍 Kingston, NY and open to remote or NYC-area
					hybrid roles. I’m especially drawn to mission-driven
					organizations that prioritize equity and public impact—teams
					where clean code and inclusive collaboration go hand-in-hand
					with purposeful work.
				</p>
				<p className='md:text-lg mb-4'>
					I’m also available for freelance and contract work —
					I&apos;m interested in partnering with small businesses,
					nonprofits, creators, and individuals on projects such as
					new website builds, redesigns, personal portfolios,
					WordPress migrations and custom block work, headless CMS
					setups, accessibility audits, performance tuning, and
					ongoing site maintenance. I’m comfortable with short-term
					projects and longer retained relationships alike.
				</p>
				<p className='md:text-lg mb-4'>
					Toolkit highlights: JavaScript, TypeScript, React, Next.js,
					Vue, WordPress (custom Gutenberg blocks), and containerized
					deployments (AWS, ArgoCD). Whether I’m engineering a
					scalable design system or implementing accessibility best
					practices, I aim for thoughtful, maintainable work that
					supports both users and teams.
				</p>
				<p className='md:text-lg mb-4'>
					Outside of web development, I’m a hobbyist woodworker with a
					love for interior design, a good TV binge, and immersive,
					story-rich video games. I live with my wife and our two
					dogs, Astrid and Ty, and I’m always on the hunt for the best
					sandwiches.
				</p>
				<p className='md:text-lg mb-4'>
					Whether you’re looking for a long-term teammate or a
					freelance partner — <br />
					<strong className='text-lg md:text-xl inline-block mt-2'>
						Let’s build something meaningful together.
					</strong>
				</p>
			</section>
		</BrowserContainer>
	)
}
