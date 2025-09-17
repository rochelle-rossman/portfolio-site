'use client'
import {
	Marquee,
	MarqueeContent,
	MarqueeFade,
	MarqueeItem,
} from '@/components/ui/marquee'
import Image from 'next/image'

import BrowserContainer from '@/components/browser-container'

const tools = [
	{ name: 'Astro', image: '/tools/astro.svg' },
	{ name: 'AWS', image: '/tools/aws.svg' },
	{ name: 'CSS3', image: '/tools/css3.svg' },
	{ name: 'Docker', image: '/tools/docker.svg' },
	{ name: 'Figma', image: '/tools/figma.svg' },
	{ name: 'GitHub', image: '/tools/github.svg' },
	{ name: 'HTML5', image: '/tools/html5.svg' },
	{ name: 'JavaScript', image: '/tools/javascript.svg' },
	{ name: 'MySQL', image: '/tools/mysql.svg' },
	{ name: 'Next.js', image: '/tools/nextjs.svg' },
	{ name: 'PHP', image: '/tools/php.svg' },
	{ name: 'React', image: '/tools/react.svg' },
	{ name: 'Sass', image: '/tools/sass.svg' },
	{ name: 'Tailwind CSS', image: '/tools/tailwindcss.svg' },
	{ name: 'TypeScript', image: '/tools/typescript.svg' },
	{ name: 'Vercel', image: '/tools/vercel.svg' },
	{ name: 'VS Code', image: '/tools/vscode.svg' },
	{ name: 'Vue.js', image: '/tools/vuejs.svg' },
	{ name: 'WordPress', image: '/tools/wordpress.svg' },
]

const ToolsMarquee = () => (
	<BrowserContainer>
		<h2>Skills & Tools</h2>
		<Marquee>
			<MarqueeFade side='left' />
			<MarqueeFade side='right' />
			<MarqueeContent speed={35} >
				{tools.map((tool, index) => (
					<MarqueeItem
						key={index}
						className='border-2 p-4 md:p-6 mx-1 sm:mx-2 md:mx-3 rounded-full dark:bg-foreground/90'
					>
						<Image
							alt={tool.name}
							title={tool.name}
							className='h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16'
							src={tool.image}
							width={128}
							height={128}
						/>
					</MarqueeItem>
				))}
			</MarqueeContent>
		</Marquee>
	</BrowserContainer>
)
export default ToolsMarquee
