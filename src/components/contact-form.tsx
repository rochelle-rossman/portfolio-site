'use client'
import BrowserContainer from '@/components/browser-container'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { House, SendHorizontal } from 'lucide-react'
import Link from 'next/link'
import React, { FormEvent, useRef, useState } from 'react'
import {
	GoogleReCaptchaProvider,
	useGoogleReCaptcha,
} from 'react-google-recaptcha-v3'

// Public API key for Web3Forms - Safe to expose in client-side code
const PUBLIC_ACCESS_KEY = '7b180ee6-5064-448a-b2b5-51ea72d496b4'

function ContactFormInner() {
	const formRef = useRef<HTMLFormElement>(null)
	const [submitted, setSubmitted] = useState(false)
	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	})
	const [error, setError] = useState<string | null>(null)
	const { executeRecaptcha } = useGoogleReCaptcha()

	function handleInputChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const { name, value } = e.target
		setFormValues((prev) => ({ ...prev, [name]: value }))
	}

	const isFieldFilled = (field: keyof typeof formValues) =>
		formValues[field].trim().length > 0

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setError(null)
		if (!executeRecaptcha) {
			setError('reCAPTCHA not yet loaded. Please try again.')
			return
		}
		try {
			const token = await executeRecaptcha('submit')
			if (!token) {
				setError('reCAPTCHA verification failed. Please try again.')
				return
			}
			// Verify reCAPTCHA token with Next.js API route
			const verifyRes = await fetch('/api/verify-recaptcha', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ token }),
			})
			const verifyData = await verifyRes.json()
			if (!verifyData.success || verifyData.score < 0.5) {
				setError(
					'Failed reCAPTCHA verification. Please try again or contact us another way.'
				)
				return
			}
			const form = formRef.current
			if (!form) {
				setError('Form reference error. Please try again.')
				return
			}
			const formData = new FormData(form)
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					access_key: PUBLIC_ACCESS_KEY,
					name: formData.get('name'),
					email: formData.get('email'),
					subject: formData.get('subject'),
					message: formData.get('message'),
					'botcheck': formData.get('botcheck'),
				}),
			})
			const result = await response.json()
			if (result.success) {
				setSubmitted(true)
			}
		} catch (error) {
			setError('An error occurred. Please try again.')
			console.error(error)
		}
	}

	return (
		<div>
			<BrowserContainer className='mb-12 motion-safe:animate-fade-up'>
				{!submitted ? (
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className='flex flex-col gap-4 space-y-4 pb-2'
					>
						<h2 className='text-center'>
							Let&apos;s Chat About Your Next Project
						</h2>
						<p className='text-center mb-4'>
							Interested in transforming your ideas into
							accessible and responsive web experiences? Reach out
							to discuss custom web development solutions tailored
							to your needs.
						</p>
						<div className='space-y-2'>
							<Label htmlFor='name'>
								Name
								{!isFieldFilled('name') && (
									<span className='text-destructive'>*</span>
								)}
							</Label>
							<Input
								type='text'
								name='name'
								id='name'
								required
								placeholder='Enter your name'
								className='bg-background'
								value={formValues.name}
								onChange={handleInputChange}
								aria-required='true'
							/>
						</div>
						<div className='space-y-2'>
							<Label htmlFor='email'>
								Email
								{!isFieldFilled('email') && (
									<span className='text-destructive'>*</span>
								)}
							</Label>
							<Input
								type='email'
								name='email'
								id='email'
								required
								placeholder='Enter your email'
								className='bg-background'
								value={formValues.email}
								onChange={handleInputChange}
							/>
						</div>
						<div className='space-y-2'>
							<Label htmlFor='subject'>
								Subject
								{!isFieldFilled('subject') && (
									<span className='text-destructive'>*</span>
								)}
							</Label>
							<Input
								type='text'
								name='subject'
								id='subject'
								required
								placeholder='Subject'
								className='bg-background'
								value={formValues.subject}
								onChange={handleInputChange}
							/>
						</div>
						<div className='space-y-2'>
							<Label htmlFor='message'>
								Message
								{!isFieldFilled('message') && (
									<span className='text-destructive'>*</span>
								)}
							</Label>
							<Textarea
								name='message'
								id='message'
								required
								placeholder='Enter your message'
								className='bg-background'
								value={formValues.message}
								onChange={handleInputChange}
							/>
						</div>
						{/* reCAPTCHA v3 is invisible and executed on submit */}
						{error && (
							<div className='text-destructive text-sm'>
								{error}
							</div>
						)}
						<Button
							variant='branded'
							type='submit'
						>
							Send <SendHorizontal />
						</Button>
					</form>
				) : (
					<div className='text-center py-10'>
						<h2 className='text-2xl mb-4'>Thank you!</h2>
						<p className='mb-4'>
							Your message has been sent successfully and will be
							reviewed shortly.
						</p>
						<Link href='/'>
							<Button variant='link'>
								<House className='h-4 w-4' />
								Back to Home
							</Button>
						</Link>
					</div>
				)}
			</BrowserContainer>
		</div>
	)
}

export default function ContactForm() {
	return (
		<GoogleReCaptchaProvider
			reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
		>
			<ContactFormInner />
		</GoogleReCaptchaProvider>
	)
}
