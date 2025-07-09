import { carouselScreenshots, productselectionpluginScreenshots } from './screenshot-data'

export const projects = [
	{
		title: 'Modular Carousel Component with Custom Gutenberg Blocks',
		role: 'Web Developer',
		company: 'TechnologyAdvice',
		techStack: 'JavaScript, React, PHP, Splide.js, SCSS',
		overview:
			'At TechnologyAdvice, I led the development of a modular, accessible carousel component as a custom Gutenberg block for deployment across a large portfolio of full-site editing (FSE) WordPress properties with distinct brands. Designed to be theme-agnostic and highly configurable, it empowered content creators to add and customize carousels without developer support—while ensuring code maintainability, optimal performance, and a consistent user experience.',
		keyFeatures: [
			{ title: 'Modular architecture', description: 'The carousel block was built as a reusable, extensible Gutenberg component, compatible across all FSE-enabled themes in the company web portfolio.' },
			{ title: 'Custom controls', description: 'Set pagination, slides per page, spacing, breakpoints, and custom styling directly in the block editor.' },
			{ title: 'Accessibility first', description: 'Leveraged Splide.js for ARIA support and keyboard nav, aligned to WCAG 2.1.' },
			{ title: 'Performance conscious', description: 'Conditionally enqueued scripts and styles, keeping bundle size minimal.' },
			{ title: 'Flexible content', description: 'Slides support images, text, buttons, or nested custom blocks.' },
		],
		challenges: [
			{ title: 'Cross-theme consistency', description: 'Used scoped styles, CSS variables, and a config-driven approach to respect each theme’s design system.' },
			{ title: 'Plugin bloat', description: 'Built custom controls in React to negate multiple third-party carousel plugins.' },
		],
		impact: [
			{ title: 'Streamlined editorial workflow', description: 'Content teams can build interactive carousels without developer help.' },
			{ title: 'Reduced maintenance overhead', description: 'Consolidated several site-specific implementations into one unified block suite.' },
			{ title: 'Improved UX metrics', description: 'Enhanced load times and accessibility scores on key landing pages.' },
		],
		screenshots: carouselScreenshots,
	},
	{
		title: "Product Selection Plugin Revamp",
		role: "Frontend Developer",
		company: "TechnologyAdvice",
		techStack: "Vue.js, WordPress, PHP, REST APIs, SCSS",
		overview:
			"Led a front-end refactor of a custom WordPress plugin that rendered real-time, filterable product listings and reviews across multiple site contexts. The plugin powered dynamic product selectors in blog content, browsable software categories, and individual product pages—built with Vue.js and integrated with internal SaaS APIs.",
		keyFeatures: [
			{
				title: "Vue.js-Powered Product UI",
				description:
					"Delivered a responsive, accessible front-end experience for filtering, searching, and viewing software listings."
			},
			{
				title: "Shortcode-Driven Embeds",
				description:
					"Enabled editors to drop product selectors into blog posts and landing pages using customizable shortcodes."
			},
			{
				title: "Multi-Use Flexibility",
				description:
					"The plugin powered three primary use cases: filterable selectors in editorial posts, a dynamic software category index, and fully detailed individual product pages."
			},
			{
				title: "Live Data from Internal SaaS",
				description:
					"Fetched structured data like reviews, features, and partner offers from an internal API for real-time display."
			}
		],
		challenges: [
			{
				title: "Unifying Multiple Use Cases",
				description:
					"Designed a modular architecture that supported different page types (blog post, category index, product page) without code duplication."
			},
			{
				title: "Legacy Code Refactor",
				description:
					"Rewrote a brittle, outdated plugin codebase into a modular, component-based Vue.js app while maintaining backward compatibility with existing shortcodes."
			},
			{
				title: "Dynamic Filtering Logic",
				description:
					"Built flexible filtering and sorting logic that adapted to varying product datasets, while maintaining fast response times."
			}
		],
		impact: [
			{
				title: "Improved User Experience",
				description:
					"Delivered a more engaging and interactive experience for site visitors exploring product recommendations."
			},
			{
				title: "Empowered Editorial Teams",
				description:
					"Provided content creators with a powerful but easy-to-use tool that improved content value and increased conversion opportunities."
			}
		],
		screenshots: productselectionpluginScreenshots,
	}

]
