'use client'

import ProjectCard from '@/components/project-card'
import { projects } from '@/lib/project-data'

export default function Projects() {
	return (
		<section>
			<h1>
				Project Samples
			</h1>
			<div className='flex flex-col gap-8 motion-safe:animate-fade-up'>
				{projects.map((project, i) => (
					<ProjectCard
						key={i}
						title={project.title}
						featuredImage={project.featuredImage}
						role={project.role}
						company={project.company}
						techStack={project.techStack}
						overview={project.overview}
					/>
				))}
			</div>
		</section>
	)
}
