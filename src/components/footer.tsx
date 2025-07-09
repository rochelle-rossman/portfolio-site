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
		<div className='flex text-xl gap-3.5 float-right'>
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
		<footer className='lg:mt-24 mt-16'>
			<small>
				<time>© {YEAR}</time> Rochelle Rossman. <SocialLinks />
			</small>
		</footer>
	)
}
