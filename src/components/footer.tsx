'use client'

import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { TbMailFilled } from 'react-icons/tb'

const YEAR = new Date().getFullYear()

const socialLinks = {
	github: 'https://github.com/rochelle-rossman',
	linkedin: 'https://www.linkedin.com/in/rochelle-rossman/',
	email: 'mailto:rochelle.rossman@gmail.com',
}

type SocialLinkProps = {
	href: string
	icon: React.ComponentType
}

function SocialLink({ href, icon: Icon }: SocialLinkProps) {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
		>
			<Icon />
		</a>
	)
}

function SocialLinks() {
	return (
		<div className='flex text-xl gap-3.5 float-right'>
			<SocialLink
				href={socialLinks.github}
				icon={FaGithub}
			/>
			<SocialLink
				href={socialLinks.linkedin}
				icon={FaLinkedinIn}
			/>
			<SocialLink
				href={socialLinks.email}
				icon={TbMailFilled}
			/>
		</div>
	)
}

export default function Footer() {
	return (
		<small className='lg:mt-24 mt-16'>
			<time>© {YEAR}</time>{' '}
			Rochelle Rossman.{' '} 
			<SocialLinks />
		</small>
	)
}
