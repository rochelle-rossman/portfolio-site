import Hero from '@/components/hero'
import Offerings from '@/components/offerings'
import ToolsMarquee from '@/components/tools'

export default function Home() {
	return (
		<section className='flex flex-col gap-6 items-center mx-auto motion-safe:animate-fade-up'>
			<Hero />
			<ToolsMarquee />
			<Offerings />
		</section>
	)
}
