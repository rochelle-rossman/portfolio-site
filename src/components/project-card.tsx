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
		<article className='relative bg-background border-2 border-navy rounded-xl shadow-xl lg:group-hover:scale-105 transition-transform duration-300'>
			<div className='bg-gold dark:bg-gray-700 border-b-2 border-navy px-3 py-2 rounded-t-xl flex'>
				<span className='block w-4 h-4 border-2 border-navy bg-red-400 rounded-full' />
				<span className='block w-4 h-4 border-2 border-navy bg-yellow-300 rounded-full mx-2' />
				<span className='block w-4 h-4 border-2 border-navy bg-green-400 rounded-full' />
			</div>
			<div className='flex flex-col-reverse md:flex-row gap-6 p-6'>
				{featuredImage && (
					<div className='md:w-1/3 w-full'>
						<figure className=''>
							<Image
								src={featuredImage.src}
								alt={featuredImage.alt}
								width={600}
								height={400}
								className='object-cover rounded-lg border-2 border-navy w-full h-auto'
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
