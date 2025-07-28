// import Carousel from '@/components/carousel'
import Image from 'next/image'
import Link from 'next/link'

// import { cn } from '@/lib/utils'

type ProjectData = {
	title: string
	featuredImage?: {
		src: string
		alt: string
		caption?: string
	}
	role: string
	company: string
	techStack: string
	overview: string
}

export default function ProjectCard({
	title,
	featuredImage,
	role,
	company,
	techStack,
	overview,
}: ProjectData) {
	return (
		<Link
			href={`/projects/${title.toLowerCase().replace(/\s+/g, '-')}`}
			className='group'
		>
			<article className='relative bg-muted/70 rounded-lg shadow-xl p-6 dark:border lg:group-hover:scale-105 transition-transform duration-300'>
				<span className='absolute inset-0 rounded-t-lg h-2 bg-gradient-to-r  opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
				<header>
					<h2>{title}</h2>
				</header>
				<div className='flex flex-col-reverse md:flex-row gap-6'>
					{featuredImage && (
						<div className='md:w-1/3 w-full p-4 flex items-center bg-muted/70 dark:bg-border/40 rounded-lg shadow-xl'>
							<figure className=''>
								<Image
									src={featuredImage.src}
									alt={featuredImage.alt}
									width={600}
									height={400}
									className='object-cover rounded-lg w-full h-auto'
								/>
								{featuredImage.caption && (
									<figcaption className='text-xs text-muted-foreground mt-4'>
										{featuredImage.caption}
									</figcaption>
								)}
							</figure>
						</div>
					)}
					<div className='flex-1'>
						<section>
							<dl className='grid grid-cols-1 lg:grid-cols-2 gap-2 text-sm'>
								<div>
									<dt className='text-muted-foreground font-medium'>
										Role
									</dt>
									<dd>{role}</dd>
								</div>
								<div>
									<dt className='text-muted-foreground font-medium'>
										Company
									</dt>
									<dd>{company}</dd>
								</div>
								<div>
									<dt className='text-muted-foreground font-medium'>
										Tech Stack
									</dt>
									<dd>{techStack}</dd>
								</div>
							</dl>
							<h3 className='mt-4'>Overview</h3>
							<p className='line-clamp-4'>{overview}</p>
						</section>
					</div>
				</div>
			</article>
		</Link>
	)
}
