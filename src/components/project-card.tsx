// import Carousel from '@/components/carousel'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

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
			<article className='bg-muted/70 rounded-lg shadow-xl p-6'>
				<header>
					<h2
						className={cn(
							'relative inline-block transition-transform duration-200 w-full',
							'before:absolute before:left-0 before:-top-2 before:h-[3px]  before:w-full before:rounded-xl ',
							'before:origin-center before:scale-x-0 before:transition-transform before:duration-300',
							'before:bg-gradient-to-r before:from-[var(--color-gold)] before:via-[var(--color-teal)] before:to-[var(--color-coral)]',
							'group-hover:before:scale-x-100 group-focus:before:scale-x-100 group-active:before:scale-x-100'
						)}
					>
						{title}
					</h2>
				</header>
				<div className='flex flex-col-reverse md:flex-row gap-6'>
					{featuredImage && (
						<div className='md:w-1/3 w-full p-4 flex items-center bg-muted/70 rounded-lg shadow-xl'>
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
