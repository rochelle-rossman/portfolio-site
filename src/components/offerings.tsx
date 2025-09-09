import BrowserContainer from '@/components/browser-container'
import Card from '@/components/card'
import {
	Braces,
	PersonStanding,
	ScanSearch,
	Proportions,
	ArrowBigUpDash,
} from 'lucide-react'

export default function Offerings() {
	return (
		<BrowserContainer>
			<h2 className='mb-4'>What I Offer</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<Card>
					<Braces />
					<h3>Custom Web Development</h3>
					<p>
						From concept to launch, I create websites and web
						applications tailored to your unique vision. With a
						focus on clean code, scalability, and performance, I
						ensure your digital presence is both impactful and
						reliable.
					</p>
				</Card>

				<Card>
					<Proportions />
					<h3>Responsive Design</h3>
					<p>
						I ensure that your website looks great and functions
						well on all devices, from desktops to mobile phones. By
						following responsive design principles, I create fluid
						layouts that adapt to different screen sizes and
						orientations.
					</p>
				</Card>

				<Card>
					<PersonStanding />
					<h3>Accessibility</h3>
					<p>
						I prioritize accessibility in all my work and I strive to create inclusive digital experiences for all users. I follow WCAG guidelines and best practices to ensure that the websites I build are usable for everyone, regardless of their abilities or devices.
					</p>
				</Card>

				<Card>
					<ArrowBigUpDash />
					<h3>Performance Optimization</h3>
					<p>
						I optimize your website for speed and performance,
						ensuring fast loading times and a smooth user
						experience.
					</p>
				</Card>

				<Card>
					<ScanSearch />
					<h3>SEO Optimization</h3>
					<p>
						I implement SEO best practices to ensure your website is
						optimized for search engines. From keyword research to
						on-page optimization, I help improve your website&#39;s
						visibility and organic traffic.
					</p>
				</Card>
				
			</div>
		</BrowserContainer>
	)
}
