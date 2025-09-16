'use client'

import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { TbMailFilled } from 'react-icons/tb'

const YEAR = new Date().getFullYear()

const socialLinks = [
	{ href: 'https://github.com/rochelle-rossman', icon: FaGithub, label: 'GitHub' },
	{ href: 'https://www.linkedin.com/in/rochelle-rossman/', icon: FaLinkedinIn, label: 'LinkedIn' },
	{ href: 'mailto:rochelle.rossman@gmail.com', icon: TbMailFilled, label: 'Email' },
]

type SocialLinkProps = {
	href: string
	icon: React.ComponentType
	ariaLabel: string
}

function SocialLink({ href, icon: Icon, ariaLabel }: SocialLinkProps) {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			aria-label={ariaLabel}
		>
			<Icon />
		</a>
	)
}

function SocialLinks() {
	return (
		<div className='flex text-2xl gap-4'>
			{socialLinks.map((link, index) => (
				<SocialLink
					key={index}
					href={link.href}
					icon={link.icon}
					ariaLabel={link.label}
				/>
			))}
		</div>
	)
}

export default function Footer() {
	return (
		<footer className='flex justify-center mt-12 w-full z-50'>
			<div className='px-4 py-8 max-w-5xl flex items-center justify-between w-full'>
				<small>
					<time>© {YEAR}</time> Rochelle Rossman
				</small>
				<SocialLinks />
			</div>
		</footer>
	)
}
