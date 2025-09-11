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
	{ name: 'React', image: '/tools/react.svg' },
	{ name: 'JavaScript', image: '/tools/javascript.svg' },
	{ name: 'TypeScript', image: '/tools/typescript.svg' },
	{ name: 'Next.js', image: '/tools/nextjs.svg' },
	{ name: 'Sass', image: '/tools/sass.svg' },
	{ name: 'Tailwind CSS', image: '/tools/tailwindcss.svg' },
	{ name: 'GitHub', image: '/tools/github.svg' },
	{ name: 'Figma', image: '/tools/figma.svg' },
	{ name: 'WordPress', image: '/tools/wordpress.svg' },
	{ name: 'Vue.js', image: '/tools/vuejs.svg' },
	{ name: 'PHP', image: '/tools/php.svg' },
]

const ToolsMarquee = () => (
	<BrowserContainer>
		<h2>Skills & Tools</h2>
		<Marquee>
			<MarqueeFade side='left' />
			<MarqueeFade side='right' />
			<MarqueeContent speed={30}>
				{tools.map((tool, index) => (
					<MarqueeItem key={index} className='mx-4 border-2 p-4 rounded-full dark:bg-foreground/90'>
						<Image
							alt={tool.name}
							title={tool.name}
							className='h-10 w-10 md:h-16 md:w-16'
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
