'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavLinkProps {
	href: string
	children: React.ReactNode
	className?: string
	onClick?: () => void
}

export default function NavLink({ href, children, className, onClick }: NavLinkProps) {
	const pathname = usePathname()
	const isActive = pathname === href

	return (
		<Link
			href={href}
			className={cn(
				'hover:italic md:hover:scale-115',
				isActive && 'font-bold',
				className
			)}
			onClick={onClick}
		>
			{children}
		</Link>
	)
}
