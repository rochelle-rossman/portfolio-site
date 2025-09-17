import Hero from '@/components/hero'
import Offerings from '@/components/offerings'
import ToolsMarquee from '@/components/tools'
import About from '@/components/about'
import CallToAction from '@/components/cta'

export default function Home() {
	return (
		<section className='space-y-18 motion-safe:animate-fade-up'>
			<Hero />
			<ToolsMarquee />
			<Offerings />
			<About />
			<CallToAction />
		</section>
	)
}
