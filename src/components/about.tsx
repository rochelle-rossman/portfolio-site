import StyledHeadshot from './headshot'

export default function About() {
	return (
		<section className='mx-auto'>
			<span className='float-circle'>
				<StyledHeadshot />
			</span>
			<div className='text-4xl mb-2 font-bold'>
				<span
					className='inline-block mr-2'
					role='img'
					aria-label='Waving hand'
				>
					👋
				</span>
				I’m Rochelle...
			</div>{' '}
			<p className='text-lg mb-4'>
				{' '}
				a web software developer who loves turning ideas into
				accessible, responsive, and thoughtfully crafted web
				experiences.{' '}
				<strong>
					I bring a creative and detail-oriented eye, a growth
					mindset, and a strong sense of curiosity to every project I
					touch.
				</strong>
			</p>
			<p className='text-lg mb-4'>
				I’m currently based in 📍 Kingston, NY and open to remote or
				NYC-area hybrid roles. I’m especially drawn to mission-driven
				organizations that prioritize equity and public impact—teams
				where clean code and inclusive collaboration go hand-in-hand
				with purposeful work.
			</p>
			<p className='text-lg mb-4'>
				My journey into tech followed more than 15 years in leadership,
				management, and customer-facing roles in restaurants and
				grocery. That chapter of my career shaped my commitment to
				people-first values:{' '}
				<strong>
					clear communication, deep empathy, and creative
					problem-solving.
				</strong>{' '}
				I made the pivot into web development with a vision of building
				tools and experiences that are truly useful, accessible, and
				rooted in inclusion.
			</p>
			<p className='text-lg mb-4'>
				My technical toolkit includes JavaScript, TypeScript, React,
				Next.js, Vue, and WordPress (including custom Gutenberg block
				development). I also have experience deploying and monitoring
				containerized sites using tools like AWS and ArgoCD. Whether I’m
				engineering scalable design systems or implementing
				accessibility best practices, I aim to build thoughtful,
				maintainable solutions that reflect care for both users and
				teams.
			</p>
			<p className='text-lg mb-4'>
				Outside of tech, I’m a hobbyist woodworker with a love for
				interior design, a good TV binge, and immersive, story-rich
				video games. I live with my wife and our two dogs, Astrid and
				Ty, and I’m always hunting for the best sandwiches.
			</p>
			<p className='text-lg mb-4'>
				<strong>Let’s build something meaningful together.</strong>
			</p>
		</section>
	)
}
