import Carousel from '@/components/carousel'

type ProjectData = {
	title: string
	role: string
	company: string
	techStack: string
	overview: string
	keyFeatures: { title: string; description: string }[]
	challenges: { title: string; description: string }[]
	impact: { title: string; description: string }[]
	screenshots?: { src: string; alt: string }[]
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
}: ProjectData) {
	return (
		<article>
			<header>
				<h1 className='text-3xl md:text-4xl'>{title}</h1>
			</header>
			<div className='flex flex-col gap-6'>
				<section className='bg-muted/70 rounded-lg shadow-xl p-6'>
					<h2>Overview</h2>
					<dl className='grid grid-cols-1 gap-2 text-sm font-semibold mb-4'>
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
						<div>
							<dt className='text-muted-foreground'>
								Tech Stack
							</dt>
							<dd>{techStack}</dd>
						</div>
					</dl>
					<p className='text-lg'>{overview}</p>
				</section>

				<section className='bg-muted/70 rounded-lg shadow-xl p-6'>
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

				<section className='bg-muted/70 rounded-lg shadow-xl p-6'>
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

				<section className='bg-muted/70 rounded-lg shadow-xl p-6'>
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

				{screenshots && (
					<section className='bg-muted/70 rounded-lg shadow-xl p-6'>
						<h3>Sample Screenshots</h3>
						<div className='px-2'>
							<Carousel images={screenshots} />
						</div>

						<p className='mt-2 text-xs text-center text-muted-foreground'>
							This project reflects work I contributed to while
							employed at TechnologyAdvice. Screenshots shown are
							of publicly available content and are shared solely
							for demonstration purposes.
						</p>
					</section>
				)}
			</div>
		</article>
	)
}
