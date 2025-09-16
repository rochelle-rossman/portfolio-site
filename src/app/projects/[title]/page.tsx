'use client'
import ProjectDetails from '@/components/project-details'
import { Button } from '@/components/ui/button'
import { projects } from '@/lib/project-data'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { use } from 'react'

export default function ProjectPage({
	params,
}: {
	params: Promise<{ title: string }>
}) {
	const { title } = use(params)
	const projectIndex = projects.findIndex(
		(p) =>
			p.title.toLowerCase().replace(/\s+/g, '-') === title.toLowerCase()
	)
	const project = projects[projectIndex]

	if (!project) {
		return <p>Project not found</p>
	}

	const nextIndex = (projectIndex + 1) % projects.length
	const nextProjectSlug = projects[nextIndex].title
		.toLowerCase()
		.replace(/\s+/g, '-')

	const prevIndex = (projectIndex - 1 + projects.length) % projects.length
	const prevProjectSlug = projects[prevIndex].title
		.toLowerCase()
		.replace(/\s+/g, '-')

	return (
		<div className='flex flex-col gap-8'>
			<ProjectDetails {...project} />
			<div className='flex justify-between flex-wrap gap-4 w-full'>
				<div>
					<Link href='/projects'>
						<Button
							variant='branded'
						>
							<ArrowLeft />
							Back to Projects
						</Button>
					</Link>
				</div>
				<div className='flex flex-col gap-4'>
					{projectIndex > 0 && (
						<Link href={`/projects/${prevProjectSlug}`}>
							<Button variant='branded'>
								<ArrowLeft />
								<span className='truncate max-w-80 lg:max-w-full'>
									{projects[prevIndex].title}
								</span>
							</Button>
						</Link>
					)}
					{projectIndex < projects.length - 1 && (
						<Link href={`/projects/${nextProjectSlug}`}>
							<Button variant='branded'>
								<span className='truncate max-w-80 lg:max-w-full'>
									{projects[nextIndex].title}
								</span>
								<ArrowRight />
							</Button>
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}
