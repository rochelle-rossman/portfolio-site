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
				'relative inline-block px-2 py-1 transition-transform duration-200 hover:scale-115',
				'after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:rounded-xl after:shadow-2xl',
				'after:origin-left after:scale-x-0 after:transition-transform after:duration-300',
				'after:bg-gradient-to-r after:from-[var(--color-gold)] after:via-[var(--color-teal)] after:to-[var(--color-coral)]',
				'hover:after:scale-x-100',
				isActive && 'font-semibold',
				className
			)}
		>
			{children}
		</Link>
	)
}
