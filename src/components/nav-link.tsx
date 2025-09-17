'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { forwardRef } from 'react'

interface BubbleNavItemProps {
	href: string
	label: string
	ariaLabel?: string
	className?: string
	onMouseEnter?: () => void
	onMouseLeave?: () => void
	onClick?: () => void
	labelRef?: (el: HTMLSpanElement | null) => void
}




// BubbleNavItem is a styled nav link for the bubble nav
const BubbleNavItem = forwardRef<HTMLAnchorElement, BubbleNavItemProps>(
	(
		{
			href,
			label,
			ariaLabel,
			className,
			onMouseEnter,
			onMouseLeave,
			onClick,
			labelRef,
			...props
		},
		ref
	) => {
		return (
			<Link
				href={href}
				role='menuitem'
				aria-label={ariaLabel || label}
				className={cn(
					'w-full rounded-full shadow-xl flex items-center justify-center relative bg-background ring-2 ring-border drop-shadow-[5px_5px_var(--color-purple)] dark:drop-shadow-[5px_5px_var(--color-indigo)] transition-[background,color,transform] duration-300 ease-in-out box-border whitespace-nowrap overflow-hidden p-[clamp(1.5rem,3vw,8rem)] text-[clamp(1.5rem,4vw,4rem)] focus-visible:ring-4 focus-visible:ring-gold focus-visible:ring-offset-2',
					className
				)}
				ref={ref}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				onClick={onClick}
				{...props}
			>
				<span
					className='inline-block'
					ref={labelRef}
				>
					{label}
				</span>
			</Link>
		)
	}
)

BubbleNavItem.displayName = 'BubbleNavItem'

export default BubbleNavItem
