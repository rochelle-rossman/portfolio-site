import BrowserContainer from '@/components/browser-container'
import Card from '@/components/card'
import {
	Braces,
	PersonStanding,
	Proportions,
	ArrowBigUpDash,
	ArrowRight,
	HandHelping,
	AppWindow,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

export default function Offerings() {
	const offerings = [
		{
			icon: Braces,
			title: 'Custom Development',
			desc: 'Build tailored websites and web apps with clean, scalable code that performs reliably.',
		},
		{
			icon: Proportions,
			title: 'Responsive Design',
			desc: 'Ensure your site looks and works beautifully on all devices, from desktop to mobile.',
			color: 'bg-blue-100 dark:bg-blue-900',
		},
		{
			icon: PersonStanding,
			title: 'Accessibility',
			desc: 'Create inclusive, WCAG-compliant websites that work for all users.',
		},
		{
			icon: ArrowBigUpDash,
			title: 'Performance & SEO',
			desc: 'Optimize speed, smooth interactions, and search engine visibility for better user engagement.',
		},
		{
			icon: HandHelping,
			title: 'Collaboration',
			desc: 'Maintain clear communication, reliable delivery, and ongoing support throughout your project.',
		},
	]

	return (
		<BrowserContainer id='offerings'>
			<h2 className='mb-8 text-3xl font-semibold text-center md:text-left'>
				What I Offer
			</h2>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{offerings.map((item, idx) => {
					const Icon = item.icon
					return (
						<Card key={idx}>
							<div className='flex items-center justify-center w-12 h-12 text-2xl mx-auto'>
								<Icon aria-label={item.title + ' icon'} />
							</div>
							<h3 className='text-center'>{item.title}</h3>
							<p className='text-center'>{item.desc}</p>
						</Card>
					)
				})}

				{/* CTA Card */}
				<Card>
					<div className='flex items-center justify-center w-12 h-12 text-2xl mx-auto'>
						<AppWindow />
					</div>

					<h3 className='text-center'>Need a web developer?</h3>
					<p className='text-center'>
						Let&apos;s discuss your project and bring your vision to
						life.
					</p>
					<div className='w-full'>
						<Link
							href='/contact'
							className='w-full'
						>
							<Button
								variant='branded'
								className='w-full'
							>
								Get in Touch
								<ArrowRight />
							</Button>
						</Link>
					</div>
				</Card>
			</div>
		</BrowserContainer>
	)
}
