import { carouselScreenshots, productselectionpluginScreenshots, redesignsScreenshots, portfolioScreenshots } from './screenshot-data'

export const projects = [
	{
		title: 'Modular Carousel Component with Custom Gutenberg Blocks',
		featuredImage: {
			src: carouselScreenshots[0].src,
			alt: 'Screenshot of Modular Carousel Component',
			caption: 'A modular carousel component built with flexibility and accessibility in mind.'
		},
		role: 'Web Developer',
		company: 'TechnologyAdvice',
		techStack: ['JavaScript', 'React', 'PHP', 'Splide.js', 'SCSS'],
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
		featuredImage: {
			src: productselectionpluginScreenshots[0].src,
			alt: 'Screenshot of Product Selection Plugin',
			caption: 'A revamped product selection plugin for TechnologyAdvice.'
		},
		role: "Frontend Developer",
		company: "TechnologyAdvice",
		techStack: ["Vue.js", "WordPress", "PHP", "REST APIs", "SCSS"],
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
	},
	{
		title: "FSE Theme and Platform Migrations for Redesign Launches",
		featuredImage: {
			src: redesignsScreenshots[0].src,
			alt: 'Screenshot of FSE Theme and Platform Migration',
			caption: 'A screenshot showcasing a redesigned FSE theme for TechnologyAdvice.'
		},
		role: "Frontend Developer",
		company: "TechnologyAdvice",
		techStack: ["WordPress", "PHP", "HTML", "CSS", "Gutenberg (FSE)", "ACF", "Docker", "AWS", "Argo CD"],
		overview:
			"Led front-end development and platform migration efforts for several WordPress site redesigns. This work included building custom Full Site Editing (FSE) themes and migrating sites from third-party hosts (like WP Engine) to a containerized AWS platform—resulting in faster, more flexible deployments and reduced technical debt across the organization.",
		keyFeatures: [
			{
				title: "Custom FSE Theme Development",
				description:
					"Built full-site editing themes using block-based templates, template parts, global styles, and theme JSON—aligned with new branding systems."
			},
			{
				title: "Infrastructure Migration",
				description:
					"Assisted in migrating sites from external hosts to an internal AWS platform using Docker containers and Argo CD for automated deployments."
			},
			{
				title: "Editor-Centered Design",
				description:
					"Improved the WordPress editing experience through reusable layout blocks, ACF field groups, and consistent design components."
			}
		],
		challenges: [
			{
				title: "Legacy to Modern Codebase",
				description:
					"Refactored legacy themes using PHP templates, widgets, and custom shortcodes into scalable block-based themes while preserving editor workflows."
			},
			{
				title: "Infrastructure Coordination",
				description:
					"Worked closely with DevOps to test and deploy migrated sites into a containerized AWS environment without downtime or content loss."
			}
		],
		impact: [
			{
				title: "Future-Ready Architecture",
				description:
					"Rebuilt sites with modern FSE architecture and deployed to an internal cloud-native platform, reducing reliance on third-party services and plugin bloat."
			},
			{
				title: "Improved Site Performance & Stability",
				description:
					"Containerized hosting and optimized themes resulted in faster load times, fewer outages, and easier rollbacks and QA environments."
			},
			{
				title: "Faster Time to Launch",
				description:
					"Streamlined delivery of site redesigns through automated deployment workflows and component-driven front-end architecture."
			}
		],
		screenshots: redesignsScreenshots,
	},

	{
		title: 'Personal Portfolio Site',
		featuredImage: {
			src: '/lightbulb-screen.png',
			alt: 'A colorful laptop with a glowing lightbulb',
		},
		role: 'Designer & Developer',
		company: 'Personal Project',
		techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Shadcn UI'],
		overview:
			`This portfolio site features a modern, fully responsive design to showcase my work and skills. Built with a focus on accessibility, performance, and maintainability, it features dynamic project pages powered by a custom TypeScript data system. The site uses utility-first styling with Tailwind CSS, leverages Vercel for deployment and analytics, and is structured for easy updates and scalability. Accessibility is prioritized through color contrast, keyboard navigation, and responsive layouts. Continuous integration and deployment are enabled via Vercel for GitHub.`,
		keyFeatures: [
			{ title: 'Dynamic Project Pages', description: 'All projects are managed in a TypeScript data file, making it simple to add, update, or highlight work.' },
			{ title: 'Modern, Accessible Design', description: 'Emphasizes clarity, color contrast, keyboard navigation, and responsive layouts for all users.' },
			{ title: 'Performance Optimized', description: 'Optimized for speed with image optimization, code splitting, and minimal dependencies, deployed on Vercel.' },
			{ title: 'Dark/Light Mode', description: 'Includes a theme toggle for user preference, with smooth transitions.' },
		],
		challenges: [
			{ title: 'Showcasing Diverse Work', description: 'Created a flexible data structure to accommodate a wide range of project types and details.' },
			{ title: 'Balancing Design & Performance', description: 'Maintained a visually engaging UI while ensuring fast load times and accessibility.' },
		],
		impact: [
			{ title: 'Professional Branding', description: 'Established a strong, personal web presence to support career growth and networking.' },
			{ title: 'Easy Content Updates', description: 'Project data and content can be updated without modifying layout code.' }
		],
		screenshots: portfolioScreenshots,
		links: [
			{ title: 'GitHub Repository', url: 'https://github.com/rochelle-rossman/portfolio-site' }
		]
	}
]
