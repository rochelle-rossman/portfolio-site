import ContactForm from "@/components/contact-form";

export default function ContactPage() {
	return (
		<div className='mx-auto p-6 space-y-6 min-h-dvh'>
			<h1>Contact</h1>
			<section className='motion-safe:animate-fade-up'>
				<ContactForm />
			</section>
		</div>
	)
}
