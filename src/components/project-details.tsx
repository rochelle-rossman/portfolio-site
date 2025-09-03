import Carousel from '@/components/carousel'
import { Badge } from '@/components/ui/badge'
import Card from '@/components/card'

type ProjectData = {
	title: string
	role: string
	company: string
	techStack: string[]
	overview: string
	keyFeatures: { title: string; description: string }[]
	challenges: { title: string; description: string }[]
	impact: { title: string; description: string }[]
	screenshots?: { src: string; alt: string }[]
	links?: { title: string; url: string }[]
}

export default function ProjectDetails({
	title,
	role,
	company,
	techStack,
	overview,
	keyFeatures,
	challenges,
	impact,
	screenshots,
	links,
}: ProjectData) {
	return (
		<div className='space-y-8'>
			<article>
				<header>
					<h1 className='text-3xl md:text-4xl'>{title}</h1>
				</header>
				<div className='flex flex-col gap-6 motion-safe:animate-fade-up bg-background dark:bg-background/90 rounded-lg shadow-xl p-6'>
					<section>
						<h2>Project Overview</h2>
						<dl className='flex flex-col gap-4 text-sm font-semibold mb-6'>
							<div className='grid grid-cols-2 gap-4'>
								<div>
									<dt className='text-muted-foreground'>
										Role
									</dt>
									<dd>{role}</dd>
								</div>
								<div>
									<dt className='text-muted-foreground'>
										Company
									</dt>
									<dd>{company}</dd>
								</div>
							</div>
							<div>
								<dt className='text-muted-foreground'>
									Tech Stack
								</dt>
								<dd className='flex flex-wrap gap-2 mt-1'>
									{techStack.map((tech) => (
										<Badge
											key={tech}
											variant='outline'
										>
											{tech}
										</Badge>
									))}
								</dd>
							</div>
						</dl>
						<p>{overview}</p>
					</section>

					<section>
						<h3>Key Features</h3>
						<ul>
							{keyFeatures.map((feature, i) => (
								<li key={i}>
									<strong>{feature.title}: </strong>
									{''}
									{feature.description}
								</li>
							))}
						</ul>
					</section>

					<section>
						<h3>Challenges &amp; Solutions</h3>
						<ul>
							{challenges.map((challenge, i) => (
								<li key={i}>
									<strong>{challenge.title}: </strong>
									{''}
									{challenge.description}
								</li>
							))}
						</ul>
					</section>

					<section>
						<h3>Impact</h3>
						<ul>
							{impact.map((item, i) => (
								<li key={i}>
									<strong>{item.title}: </strong>
									{''}
									{item.description}
								</li>
							))}
						</ul>
					</section>

					{links && links.length > 0 && (
						<section>
							<h3>Related Links</h3>
							<ul>
								{links.map((link, i) => (
									<li key={i}>
										<a
											className='text-purple underline'
											href={link.url}
											target='_blank'
											rel='noopener noreferrer'
										>
											{link.title}
										</a>
									</li>
								))}
							</ul>
						</section>
					)}

					{screenshots && (
						<section>
							<h3>Sample Screenshots</h3>
							<Card>
								<Carousel images={screenshots} />
							</Card>

							{company === 'TechnologyAdvice' && (
								<p className='mt-2 text-xs text-center text-muted-foreground italic'>
									This project reflects work I contributed to
									while employed at TechnologyAdvice.
									Screenshots shown are of publicly available
									content and are shared solely for
									demonstration purposes.
								</p>
							)}
						</section>
					)}
				</div>
			</article>
		</div>
	)
}
