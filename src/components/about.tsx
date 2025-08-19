import StyledHeadshot from './headshot'

export default function About() {
	return (
		<section className='mx-auto motion-safe:animate-fade-up'>
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
				I’m Rochelle —
			</div>{' '}
			<p className='text-lg leading-loose mb-4'>
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
			<p className='mb-4'>
				I’m currently based in 📍 Kingston, NY and open to remote or
				NYC-area hybrid roles. I’m especially drawn to mission-driven
				organizations that prioritize equity and public impact—teams
				where clean code and inclusive collaboration go hand-in-hand
				with purposeful work.
			</p>
			<p className='mb-4'>
				Before tech I spent 15+ years in leadership, management, and
				customer-facing roles in restaurants and grocery. That chapter
				shaped my people-first values:{' '}
				<strong>
					clear communication, deep empathy, and creative
					problem-solving.
				</strong>{' '}
				I pivoted into web development to build tools and experiences
				that are genuinely useful, accessible, and rooted in inclusion.
			</p>
			<p className='mb-4'>
				Toolkit highlights: JavaScript, TypeScript, React, Next.js, Vue,
				WordPress (custom Gutenberg blocks), and containerized
				deployments (AWS, ArgoCD). Whether I’m engineering a scalable
				design system or implementing accessibility best practices, I
				aim for thoughtful, maintainable work that supports both users
				and teams.
			</p>
			<p className='mb-4'>
				I’m also available for freelance and contract work — I&apos;m
				interested in partnering with small businesses, nonprofits,
				creators, and individuals on projects such as new website
				builds, redesigns, personal portfolios, WordPress migrations and
				custom block work, headless CMS setups, accessibility audits,
				performance tuning, and ongoing site maintenance. I’m
				comfortable with short-term projects and longer retained
				relationships alike.
			</p>
			<p className='mb-4'>
				Outside of web development, I’m a hobbyist woodworker with a
				love for interior design, a good TV binge, and immersive,
				story-rich video games. I live with my wife and our two dogs,
				Astrid and Ty, and I’m always on the hunt for the best
				sandwiches.
			</p>
			<p className='mb-4'>
				Whether you’re looking for a long-term teammate or a freelance
				partner — <br />
				<strong>Let’s build something meaningful together.</strong>
			</p>
		</section>
	)
}
