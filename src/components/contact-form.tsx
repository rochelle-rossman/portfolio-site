'use client'
import React, { FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const PUBLIC_ACCESS_KEY = '7b180ee6-5064-448a-b2b5-51ea72d496b4'

export default function ContactForm() {
	const [submitted, setSubmitted] = useState(false)
	if (submitted) {
		return (<div>Thank you for your message!</div>)
	}

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		try {
			const form = e.currentTarget
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
					message: formData.get('message'),
				}),
			})
			const result = await response.json()
			if (result.success) {
				console.log(result)
			}
			setSubmitted(true)
		} catch (error) {
			console.error(error)
		}
	}

    return (
		<form
			onSubmit={handleSubmit}
			className='bg-muted/70 rounded-lg shadow-xl p-6 dark:border space-y-6'
		>
			<div className='space-y-2'>
				<Label htmlFor='name'>Name</Label>
				<Input
					type='text'
					name='name'
					id='name'
					required
					placeholder='Your name'
				/>
			</div>
			<div className='space-y-2'>
				<Label htmlFor='email'>Email</Label>
				<Input
					type='email'
					name='email'
					id='email'
					required
					placeholder='email@example.com'
				/>
			</div>
			<div className='space-y-2'>
				<Label htmlFor='message'>Message</Label>
				<Textarea
					name='message'
					id='message'
					required
					rows={3}
					placeholder='Enter Message'
				/>
			</div>
			<Button type='submit'>Submit Form</Button>
		</form>
	)
}
