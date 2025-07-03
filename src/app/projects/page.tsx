'use client'
import Carousel from '@/components/carousel'
import { carouselScreenshots } from '@/lib/screenshot-data'

export default function Projects() {
	return (
		<section>
			<h1>Project Samples</h1>
			<div className='flex flex-col gap-4'>
				<article className='bg-muted/70 rounded-lg shadow-xl p-6'>
					<header className='mb-4'>
						<h2>
							Modular Carousel Component with Custom Gutenberg
							Blocks
						</h2>
						<dl className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm'>
							<div>
								<dt className='text-muted-foreground font-medium'>
									Role
								</dt>
								<dd>Web Developer</dd>
							</div>
							<div>
								<dt className='text-muted-foreground font-medium'>
									Company
								</dt>
								<dd>TechnologyAdvice</dd>
							</div>
							<div>
								<dt className='text-muted-foreground font-medium'>
									Tech Stack
								</dt>
								<dd>JavaScript, React, PHP, Splide.js, SCSS</dd>
							</div>
						</dl>
					</header>

					<section className='mb-4'>
						<h3>Overview</h3>
						<p>
							At TechnologyAdvice, I led the development of a
							modular, accessible carousel component as a custom
							Gutenberg block for deployment across a large
							portfolio of full-site editing (FSE) WordPress
							properties with distinct brands. Designed to be
							theme-agnostic and highly configurable, it empowered
							content creators to add and customize carousels
							without developer support—while ensuring code
							maintainability, optimal performance, and a
							consistent user experience.
						</p>
					</section>

					<section className='mb-6'>
						<h3>Key Features</h3>
						<ul>
							<li>
								<strong>Modular architecture:</strong> The
								carousel block was built as a reusable,
								extensible Gutenberg component, compatible
								across all FSE-enabled themes in the company web
								portfolio.
							</li>
							<li>
								<strong>Custom controls:</strong> Set
								pagination, slides per page, spacing,
								breakpoints, and custom styling directly in the
								block editor.
							</li>
							<li>
								<strong>Accessibility first:</strong> Leveraged
								Splide.js for ARIA support and keyboard nav,
								aligned to WCAG 2.1.
							</li>
							<li>
								<strong>Performance conscious:</strong>{' '}
								Conditionally enqueued scripts and styles,
								keeping bundle size minimal.
							</li>
							<li>
								<strong>Flexible content:</strong> Slides
								support images, text, buttons, or nested custom
								blocks.
							</li>
						</ul>
					</section>

					<section className='mb-6'>
						<h3>Challenges &amp; Solutions</h3>
						<ul>
							<li>
								<strong>Cross-theme consistency:</strong> Used
								scoped styles, CSS variables, and a
								config-driven approach to respect each theme’s
								design system.
							</li>
							<li>
								<strong>Plugin bloat:</strong> Built custom
								controls in React to negate multiple third-party
								carousel plugins.
							</li>
						</ul>
					</section>

					<section className='mb-6'>
						<h3>Impact</h3>
						<ul>
							<li>
								<strong>Streamlined editorial workflow:</strong>{' '}
								Content teams can build interactive carousels
								without developer help.
							</li>
							<li>
								<strong>Reduced maintenance overhead:</strong>{' '}
								Consolidated several site-specific
								implementations into one unified block suite.
							</li>
							<li>
								<strong>Improved UX metrics:</strong> Enhanced
								load times and accessibility scores on key
								landing pages.
							</li>
						</ul>
					</section>
					<section>
						<h3>Sample Screenshots</h3>
						<div className='px-2'>
							<Carousel images={carouselScreenshots} />
						</div>
						<p className='mt-2 text-sm text-center text-muted-foreground'>
							This project reflects work I contributed to while
							employed at TechnologyAdvice. Screenshots shown are
							of publicly available content and are shared solely
							for demonstration purposes.
						</p>
					</section>
				</article>

				<div className='bg-muted/70 rounded-lg w-full shadow-xl p-6 mb-10'>
					<h2>More to come...</h2>
					<p className='text-2xl'>
						🚧 This site is still in progress—I&apos;m currently
						refining how I present the projects I’ve worked on
						professionally.{' '}
					</p>
				</div>
			</div>
		</section>
	)
}
