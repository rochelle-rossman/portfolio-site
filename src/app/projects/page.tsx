'use client'

import ProjectCard from '@/components/project-card'
import { projects } from '@/lib/project-data'

export default function Projects() {
	return (
		<section>
			<h1>Project Samples</h1>
			<div className='flex flex-col gap-4'>
				{projects.map((project, i) => (
					<ProjectCard
						key={i}
						title={project.title}
						role={project.role}
						company={project.company}
						techStack={project.techStack}
						overview={project.overview}
						keyFeatures={project.keyFeatures}
						challenges={project.challenges}
						impact={project.impact}
						screenshots={project.screenshots}
					/>
				))}

				{/* Placeholder for future projects */}

				<div className='bg-muted/70 rounded-lg w-full shadow-xl p-6 mb-10'>
					<h2>More to come...</h2>
					<p className='text-2xl'>
						🚧 This site is still in progress—I&apos;m currently
						refining how I present the projects I’ve worked on
						professionally.{' '}
					</p>
				</div>
			</div>
		</section>
	)
}
