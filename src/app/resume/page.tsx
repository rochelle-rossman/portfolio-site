'use client'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function ResumePage() {
	const skills = [
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
	]

	return (
		<section className='flex flex-col items-center mx-auto'>
			<h1 className='dark:drop-shadow-lg/100 dark:drop-shadow-purple-700'>
				Résumé
			</h1>

			<div className='flex flex-col md:flex-row md:items-center md:justify-between bg-muted/70 rounded-lg shadow-xl p-6 w-full mb-10'>
				<div>
					<h2 className='text-4xl text-center md:text-left'>
						Rochelle Rossman
					</h2>
					<p className='text-lg text-center md:text-left'>
						Web Developer • Kingston, NY •
						rochelle.rossman@gmail.com{' '}
					</p>
				</div>

				<div className='mt-4 md:mt-0 flex flex-col gap-4'>
					<Link
						href='/rochelle-rossman-resume.pdf'
						target='_blank'
						rel='noopener noreferrer'
						title='Opens a PDF file in a new tab'
					>
						<Button
							className='cursor-pointer w-full underline-offset-4 hover:underline hover:bg-primary'
							role='link'
						>
							<ExternalLink />
							View PDF
						</Button>
					</Link>
					<Link
						href='/rochelle-rossman-resume.html'
						target='_blank'
						rel='noopener noreferrer'
						title='Opens an HTML file in a new tab'
					>
						<Button
							className='cursor-pointer w-full underline-offset-4 hover:underline hover:bg-primary'
							role='link'
						>
							<ExternalLink />
							View HTML
						</Button>
					</Link>
				</div>
			</div>

			<section className='space-y-12'>
				<div className='bg-muted/70 rounded-lg shadow-xl p-6'>
					<h3>Summary</h3>
					<p className='md:text-lg'>
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

				<div className='bg-muted/70 rounded-lg shadow-xl p-6'>
					<h3>Skills</h3>
					<div className='space-y-6'>
						<div className='flex flex-wrap gap-2'>
							{skills.map((skill, i) => (
								<Badge
									variant='outline'
									key={i}
								>
									{skill}
								</Badge>
							))}
						</div>
					</div>
				</div>

				<div className='bg-muted/70 rounded-lg shadow-xl p-6'>
					<h3>Experience</h3>

					<div className='mb-6'>
						<h3 className='text-xl'>TechnologyAdvice</h3>
						<p className='italic mb-2'>
							Web Developer • May 2023 – Jan 2025
						</p>
						<ul>
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
						<ul>
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

				<div className='bg-muted/70 rounded-lg shadow-xl p-6'>
					<h3>Education</h3>
					<p>
						<strong>
							Certificate in Full Stack Web Development
						</strong>
						, Nashville Software School — Apr 2022 – Mar 2023
					</p>
				</div>
			</section>
		</section>
	)
}
