// import BrowserContainer from '@/components/browser-container'
import ContactForm from '@/components/contact-form'

export default function ContactPage() {
	return (
		<div className='min-h-dvh'>
			<h1>Contact</h1>
			{/* <BrowserContainer className='mb-12 motion-safe:animate-fade-up'>
				<h2 className='text-center'>
					Let&apos;s Chat About Your Next Project
				</h2>
				<p className='text-center mb-4'>
					Interested in transforming your ideas into accessible and
					responsive web experiences? Reach out to discuss custom web
					development solutions tailored to your needs.
				</p> */}
				<ContactForm />
			{/* </BrowserContainer> */}
		</div>
	)
}
