'use client';
import { use } from 'react'
import ProjectDetails from '@/components/project-details';
import { projects } from "@/lib/project-data";

export default function ProjectPage({ params }: { params: Promise<{ title: string }> }) {
	const { title } = use(params);
	const project = projects.find((p) => p.title.toLowerCase().replace(/\s+/g, '-') === title.toLowerCase());

	if (!project) {
		return <p>Project not found</p>;
	}

	return (
		<>
			<ProjectDetails {...project} />
		</>
	);
}
