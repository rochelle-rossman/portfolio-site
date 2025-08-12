import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

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
		<article className='relative bg-background/80 dark:bg-background/90 rounded-lg shadow-xl p-6 lg:group-hover:scale-105 transition-transform duration-300'>
			<div className='flex flex-col-reverse md:flex-row gap-6'>
				{featuredImage && (
					<div className='md:w-1/3 w-full p-4 flex items-center bg-accent/70  rounded-lg shadow-xl'>
						<figure className=''>
							<Image
								src={featuredImage.src}
								alt={featuredImage.alt}
								width={600}
								height={400}
								className='object-cover rounded-lg w-full h-auto'
							/>
						</figure>
					</div>
				)}
				<div className='flex-1'>
					<header>
						<h2>{title}</h2>
					</header>
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
					<footer className='mt-4'>
						<Link
							href={`/projects/${title
								.toLowerCase()
								.replace(/\s+/g, '-')}`}
						>
							<Button
								className='cursor-pointer w-full underline-offset-4 hover:underline hover:bg-primary'
								role='link'
							>
								View More
								<ChevronRight />
							</Button>
						</Link>
					</footer>
				</div>
			</div>
		</article>
	)
}
