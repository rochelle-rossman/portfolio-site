import ContactForm from '@/components/contact-form'

export default function ContactPage() {
	return (
		<div className='mx-auto p-6 space-y-6 min-h-dvh'>
			<h1>Contact</h1>
			<section className='bg-background rounded-lg shadow-xl p-6 mb-12 motion-safe:animate-fade-up'>
				<h2 className='text-center'>
					Let&apos;s Chat About Your Next Project
				</h2>
				<p className='text-center'>
					Interested in transforming your ideas into accessible and
					responsive web experiences? Reach out to discuss custom web
					development solutions tailored to your needs.
				</p>
				<ContactForm />
			</section>
		</div>
	)
}
