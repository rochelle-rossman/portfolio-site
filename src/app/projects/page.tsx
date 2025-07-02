'use client'
import Carousel from '@/components/carousel'

export default function Projects() {
	return (
		<section>
			<h1 className='text-5xl md:text-6xl font-headline text-center mb-10'>
				Project Samples
			</h1>
			<div className='flex flex-col gap-4'>
				<article className='bg-muted/70 rounded-lg shadow-xl p-6'>
					<header className='mb-4'>
						<h2 className='text-2xl md:text-3xl font-semibold mb-1'>
							Modular Carousel Component with Custom Gutenberg
							Blocks
						</h2>
						<dl className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm'>
							<div>
								<dt className='text-muted-foreground font-medium'>
									Role
								</dt>
								<dd>Front-End Developer</dd>
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
						<h2 className='text-xl font-semibold mb-1'>Overview</h2>
						<p>
							At TechnologyAdvice, I built a modular, accessible
							carousel component as a custom Gutenberg block for
							deployment across a large portfolio of full-site
							editing (FSE) WordPress properties with distinct
							brands. Designed to be theme-agnostic and highly
							configurable, it empowered content creators to add
							and customize carousels without developer
							support—while ensuring code maintainability, optimal
							performance, and a consistent user experience.
						</p>
					</section>

					<section className='mb-4'>
						<h2 className='text-xl font-semibold mb-1'>
							Key Features
						</h2>
						<ul>
							<li>
								<strong>Modular architecture:</strong> The
								carousel block was built as a reusable,
								extensible Gutenberg component, compatible
								across all FSE-enabled themes in the company web
								portfolio.
							</li>
							<li>
								<strong>Custom UI controls:</strong> Block
								controls for toggling navigation, pagination,
								autoplay, slide count, spacing, and
								breakpoints—all easily managed from the
								WordPress block editor.
							</li>
							<li>
								<strong>Accessibility-first design:</strong>{' '}
								Splide.js was selected for its lightweight build
								and out-of-the-box accessibility support (ARIA,
								keyboard nav), which aligned with WCAG 2.1
								standards.
							</li>
							<li>
								<strong>Performance conscious:</strong> Avoided
								heavy dependencies and built only what was
								needed. Styles and scripts were enqueued
								conditionally to avoid front-end bloat.
							</li>
							<li>
								<strong>Reusable content structure:</strong>{' '}
								Content inside each slide was made
								flexible—users could insert images, text,
								buttons, or even other custom blocks.
							</li>
						</ul>
					</section>

					<section className='mb-4'>
						<h2 className='text-xl font-semibold mb-1'>
							Challenges &amp; Solutions
						</h2>
						<ul>
							<li>
								<strong>Problem:</strong> Most carousel plugins
								didn’t play nicely with Gutenberg, were lacking
								desired features, and added unnecessary weight.
								<br />
								<strong>Solution:</strong> Built a block suite
								from scratch, leveraging Splide.js only for core
								functionality, and created a modular React-based
								editor interface for flexibility and future
								enhancements.
							</li>
							<li>
								<strong>Problem:</strong> Making the block
								compatible across multiple FSE themes with
								different global styles and layouts.
								<br />
								<strong>Solution:</strong> Used scoped styles,
								CSS variables, and a config-driven approach to
								ensure the block respected theme-specific
								constraints while remaining consistent.
							</li>
						</ul>
					</section>

					<section className='mb-4'>
						<h2 className='text-xl font-semibold mb-1'>Impact</h2>
						<ul>
							<li>
								<strong>Improved editorial workflow:</strong>{' '}
								Empowered content teams to build rich,
								interactive experiences with no developer input
								required.
							</li>
							<li>
								<strong>Reduced plugin bloat:</strong> Replaced
								several site-specific carousel implementations
								with a single unified block, cutting maintenance
								overhead.
							</li>
							<li>
								<strong>Enhanced UX:</strong> Improved mobile
								performance and accessibility metrics across
								several key landing pages where the block was
								deployed.
							</li>
						</ul>
					</section>
					<section>
						<h2 className='text-xl font-semibold mt-6 mb-2'>
							Sample Screenshots
						</h2>

						<Carousel
							images={[
								{
									src: '/screenshots/carousel-example-1.png',
									alt: 'Example 1',
								},
								{
									src: '/screenshots/carousel-example-2.png',
									alt: 'Example 2',
								},
								{
									src: '/screenshots/mobile-carousel-example-1.png',
									alt: 'Mobile Example',
								},
							]}
						/>
						<p className='mt-2 text-sm text-center italic text-muted-foreground'>
							*This project reflects front-end work I contributed
							to while employed at TechnologyAdvice. Screenshots
							shown are of publicly available content and are
							shared solely for demonstration purposes.
						</p>
					</section>
				</article>

				<div className='bg-muted/70 rounded-lg w-full shadow-xl p-6 mb-10'>
					<p className='text-2xl italic'>
						🚧 This site is still in progress—I&apos;m currently
						refining how I present the projects I’ve worked on
						professionally.{' '}
					</p>
				</div>
			</div>
		</section>
	)
}
