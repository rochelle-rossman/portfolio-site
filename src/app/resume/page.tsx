'use client'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

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
		'Wordpress']
	
		const links = [
			{
				href: 'https://www.linkedin.com/in/rochelle-rossman',
				label: 'linkedin.com/in/rochelle-rossman',
			},
			{
				href: 'https://github.com/rochelle-rossman',
				label: 'github.com/rochelle-rossman',
			},
		]
	
	return (
		<section className='flex flex-col items-center mx-auto'>
			<h1>Résumé</h1>

			<div className='flex flex-col md:flex-row md:items-center md:justify-between bg-muted/70 rounded-lg shadow-xl p-6 w-full mb-10'>
				<div>
					<h2>Rochelle Rossman</h2>
					<p className='text-lg'>
						Web Developer • Kingston, NY •
						rochelle.rossman@gmail.com{' '}
					</p>
				</div>

				<div className='mt-4 md:mt-0'>
					<a
						href='/RochelleRossman.pdf'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Button className='cursor-pointer'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								height='24px'
								viewBox='0 -960 960 960'
								width='24px'
								fill='currentColor'
							>
								<path d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z' />
							</svg>
							View / Download PDF
						</Button>
					</a>
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
									variant='secondary'
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

				<div className='bg-muted/70 rounded-lg shadow-xl p-6'>
					<h3>Links</h3>
					<ul>
						{links.map((link, i) => (
							<li key={i}>
								<a
									href={link.href}
									target='_blank'
									rel='noopener noreferrer'
									className='underline'
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</section>
		</section>
	)
}
