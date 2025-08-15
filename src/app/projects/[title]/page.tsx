'use client';
import { use } from 'react'
import ProjectDetails from '@/components/project-details';
import { projects } from "@/lib/project-data";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';

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
			<div className='flex justify-between flex-wrap w-full'>
				<div>
					<Link href='/projects'>
						<Button
							variant={'ghost'}
							className='cursor-pointer hover:scale-105'
						>
							<ChevronLeft />
							Back to Projects
						</Button>
					</Link>
				</div>
				<div className='flex flex-col'>
					{projectIndex > 0 && (
						<Link href={`/projects/${prevProjectSlug}`}>
							<Button
								variant={'ghost'}
								className='cursor-pointer hover:scale-105'
							>
								<ChevronLeft />
								<span className='truncate max-w-80 lg:max-w-full'>{projects[prevIndex].title}</span>
							</Button>
						</Link>
					)}
					{projectIndex < projects.length - 1 && (
						<Link href={`/projects/${nextProjectSlug}`}>
							<Button
								variant={'ghost'}
								className='cursor-pointer hover:scale-105'
							>
								<span className='truncate max-w-80 lg:max-w-full'>{projects[nextIndex].title}</span>
								<ChevronRight />
							</Button>
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}
