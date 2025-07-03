'use client'
import { projects } from '@/lib/project-data'
import ProjectCard from '@/components/project-card'

export default function Projects() {
	return (
		<section>
			<h1>Project Samples</h1>
			<div className='flex flex-col gap-6'>
				{projects.map((project, i) => (
					<ProjectCard
						key={i}
						{...project}
					/>
				))}

				<div className='bg-muted/70 rounded-lg w-full shadow-xl p-6 mb-10'>
					<h2>More to come...</h2>
					<p className='text-2xl'>
						🚧 This site is still in progress—I&apos;m currently
						refining how I present the projects I’ve worked on
						professionally.
					</p>
				</div>
			</div>
		</section>
	)
}
