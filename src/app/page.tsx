import Hero from '@/components/hero'
import Offerings from '@/components/offerings'
import ToolsMarquee from '@/components/tools'
import About from '@/components/about'

export default function Home() {
	return (
		<section className='flex flex-col gap-8 md:gap-10 items-center mx-auto motion-safe:animate-fade-up'>
			<Hero />
			<ToolsMarquee />
			<Offerings />
			<About />
		</section>
	)
}
