import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type ProjectData = {
	title: string
	featuredImage?: {
		src: string
		alt: string
	}
	role: string
	company: string
	techStack: string[]
}

export default function ProjectCard({
	title,
	featuredImage,
	role,
	company,
	techStack,
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
					</section>
					<footer className='mt-4'>
						<Link
							href={`/projects/${title
								.toLowerCase()
								.replace(/\s+/g, '-')}`}
						>
							<Button
								className='w-full'
								variant='branded'
								role='link'
							>
								View More
								<ArrowRight />
							</Button>
						</Link>
					</footer>
				</div>
			</div>
		</article>
	)
}
