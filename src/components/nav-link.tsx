'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavLinkProps {
	href: string
	children: React.ReactNode
	className?: string
}

export default function NavLink({ href, children, className }: NavLinkProps) {
	const pathname = usePathname()
	const isActive = pathname === href

	return (
		<Link
			href={href}
			className={cn(
				'nav-link',
				isActive && 'font-bold',
				className
			)}
		>
			{children}
		</Link>
	)
}
