'use client'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function ResumePage() {
	return (
		<section className='flex flex-col items-center mx-auto'>
			<h1 className='text-6xl font-headline text-center mb-10 text-foreground drop-shadow-sm'>
				Résumé
			</h1>

			<div className='flex flex-col md:flex-row md:items-center md:justify-between mb-10'>
				<div>
					<h2 className='text-4xl font-bold'>Rochelle Rossman</h2>
					<p className='text-lg'>
						Web Developer • Kingston, NY •
						rochelle.rossman@gmail.com •{' '}
						<a
							href='https://github.com/rochelle-rossman'
							className='text-primary underline hover:opacity-80'
						>
							github.com/rochelle-rossman
						</a>
					</p>
				</div>

				<div className='mt-4 md:mt-0'>
					<Button>
						<a
							href='/RochelleRossman.pdf'
							target='_blank'
							rel='noopener noreferrer'
						>
							View / Download PDF
						</a>
					</Button>
				</div>
			</div>

			<section className='space-y-12'>
				<div>
					<h2 className='text-2xl font-semibold mb-2'>Summary</h2>
					<p className='text-lg'>
						Innovative and results-driven Web Software Developer
						with expertise in building scalable, high-performance
						web applications. Combining technical proficiency with
						over 15 years of leadership in customer-facing roles,
						excels at bridging the gap between development and user
						needs. Passionate about optimizing web performance,
						enhancing user experience, and driving strategic digital
						initiatives.
					</p>
				</div>

				<div className='bg-muted/30 rounded-lg p-6'>
					<h2 className='text-2xl font-semibold mb-2'>Skills</h2>
					<div className='space-y-6'>
						<div className='flex flex-wrap gap-2'>
							{[
								'Amazon Web Services (AWS)',
								'Astro',
								'CSS',
								'Docker',
								'Figma',
								'Git',
								'Github',
								'HTML',
								'JavaScript',
								'Jira',
								'Kubernetes',
								'MySQL',
								'Next.js',
								'PHP',
								'React',
								'Responsive Web Design',
								'SASS',
								'Scrum & Agile Methodologies',
								'TailwindCSS',
								'TypeScript',
								'Vue.js',
								'Wordpress',
							].map((skill, i) => (
								<Badge
									key={i}
									variant='outline'
								>
									{skill}
								</Badge>
							))}
						</div>
					</div>
				</div>

				<div className='bg-muted/30 rounded-lg p-6'>
					<h2 className='text-2xl font-semibold text-primary mb-4'>
						Experience
					</h2>

					<div className='mb-6'>
						<h3 className='text-xl '>TechnologyAdvice</h3>
						<p className='italic mb-2'>
							Web Developer • May 2023 – Jan 2025
						</p>
						<ul className='list-disc list-inside space-y-1'>
							<li>
								Migrated 20+ legacy WordPress sites to AWS
								containers, reducing costs by 35% and deployment
								time by 66%.
							</li>
							<li>
								Rebuilt marketing site from Figma, improving
								performance and user engagement.
							</li>
							<li>
								Improved PageSpeed score by 42% through
								performance, SEO, and accessibility
								optimizations.
							</li>
							<li>
								Helped migrate legacy multi-site to headless CMS
								stack, yielding strategic and cost benefits.
							</li>
							<li>
								Converted 6 WordPress sites to Full Site
								Editing, enhancing editorial flexibility.
							</li>
							<li>
								Developed Vue-based WP plugin features powered
								by internal SaaS APIs.
							</li>
							<li>
								Created localization solution for 1M+ monthly
								user site, enabling German market launch in 3
								weeks.
							</li>
							<li>
								Maintained 99.89% uptime across 50+ high-traffic
								sites using Fastly, Signal Sciences, Datadog,
								and Argo CD.
							</li>
						</ul>
					</div>

					<div>
						<h3 className='text-xl '>Trader Joe’s</h3>
						<p className='italic mb-2'>
							Lead Sign Artist & Crew Member • Nov 2013 – Jul 2022
						</p>
						<ul className='list-disc list-inside space-y-1'>
							<li>
								Designed custom signage to increase product
								visibility and customer engagement.
							</li>
							<li>
								Led a 4-person signage team and ensured quality
								output under tight timelines.
							</li>
							<li>
								Collaborated cross-functionally to align store
								ops with company vision.
							</li>
						</ul>
					</div>
				</div>

				<div className='bg-muted/30 rounded-lg p-6'>
					<h2 className='text-2xl font-semibold text-primary mb-2'>
						Education
					</h2>
					<p>
						<strong>
							Certificate in Full Stack Web Development
						</strong>
						, Nashville Software School — Apr 2022 – Mar 2023
					</p>
				</div>

				<div className='bg-muted/30 rounded-lg p-6'>
					<h2 className='text-2xl font-semibold text-primary mb-2'>
						Links
					</h2>
					<ul className='list-none space-y-1'>
						<li>
							<a
								href='https://www.linkedin.com/in/rochelle-rossman'
								className='text-primary underline hover:opacity-80'
							>
								linkedin.com/in/rochelle-rossman
							</a>
						</li>
						<li>
							<a
								href='https://github.com/rochelle-rossman'
								className='text-primary underline hover:opacity-80'
							>
								github.com/rochelle-rossman
							</a>
						</li>
					</ul>
				</div>
			</section>
		</section>
	)
}
