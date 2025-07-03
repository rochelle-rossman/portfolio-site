import { carouselScreenshots } from './screenshot-data'

export const projects = [
	{
		title: 'Modular Carousel Component with Custom Gutenberg Blocks',
		role: 'Web Developer',
		company: 'TechnologyAdvice',
		techStack: 'JavaScript, React, PHP, Splide.js, SCSS',
		overview:
			'At TechnologyAdvice, I led the development of a modular, accessible carousel component as a custom Gutenberg block for deployment across a large portfolio of full-site editing (FSE) WordPress properties with distinct brands...',
		keyFeatures: [
			'Modular architecture: The carousel block was built as a reusable, extensible Gutenberg component...',
			'Custom controls: Set pagination, slides per page, spacing, breakpoints, and custom styling...',
			'Accessibility first: Leveraged Splide.js for ARIA support and keyboard nav...',
			'Performance conscious: Conditionally enqueued scripts and styles...',
			'Flexible content: Slides support images, text, buttons, or nested custom blocks.',
		],
		challenges: [
			'Cross-theme consistency: Used scoped styles, CSS variables, and a config-driven approach...',
			'Plugin bloat: Built custom controls in React to negate multiple third-party carousel plugins.',
		],
		impact: [
			'Streamlined editorial workflow: Content teams can build interactive carousels without developer help.',
			'Reduced maintenance overhead: Consolidated several site-specific implementations into one unified block suite.',
			'Improved UX metrics: Enhanced load times and accessibility scores on key landing pages.',
		],
		screenshots: carouselScreenshots,
		disclaimer:
			'This project reflects work I contributed to while employed at TechnologyAdvice. Screenshots shown are of publicly available content and are shared solely for demonstration purposes.',
	},
]
