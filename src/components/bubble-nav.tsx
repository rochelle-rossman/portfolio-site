'use client'
import { Button } from '@/components/ui/button'
import { gsap } from 'gsap'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ThemeToggle } from './theme-toggle'

export default function BubbleNav() {
	const items = [
		{
			label: 'home',
			href: '/',
			ariaLabel: 'Home',
			rotation: -8,
			hoverStyles: {
				bgColor: 'var(--color-gold)',
				textColor: 'var(--color-navy)',
			},
		},
		{
			label: 'about',
			href: '/about',
			ariaLabel: 'About',
			rotation: 8,
			hoverStyles: {
				bgColor: 'var(--color-teal)',
				textColor: 'var(--color-navy)',
			},
		},
		{
			label: 'projects',
			href: '/projects',
			ariaLabel: 'Projects',
			rotation: 8,
			hoverStyles: { bgColor: 'var(--color-coral)', textColor: '#fff' },
		},
		{
			label: 'résumé',
			href: '/resume',
			ariaLabel: 'Résumé',
			rotation: -8,
			hoverStyles: {
				bgColor: 'var(--color-orange)',
				textColor: 'var(--color-navy)',
			},
		},
		{
			label: 'contact',
			href: '/contact',
			ariaLabel: 'Contact',
			rotation: -8,
			hoverStyles: { bgColor: 'var(--color-purple)' },
		},
	]

	type MenuItem = {
		label: string
		href: string
		ariaLabel?: string
		rotation?: number
		hoverStyles?: {
			bgColor?: string
			textColor?: string
		}
	}

	type MenuBubbleProps = {
		item: MenuItem
		idx: number
		isHovered: boolean
		setHoveredIdx: (idx: number | null) => void
		setIsMenuOpen: (open: boolean) => void
		bubblesRef: React.RefObject<HTMLAnchorElement[]>
		labelRefs: React.RefObject<HTMLSpanElement[]>
	}

	const MenuBubble = ({
		item,
		idx,
		isHovered,
		setHoveredIdx,
		setIsMenuOpen,
		bubblesRef,
		labelRefs,
	}: MenuBubbleProps) => {
		const bgColor = isHovered
			? item.hoverStyles?.bgColor
			: 'var(--color-background)'
		const textColor = isHovered
			? item.hoverStyles?.textColor
			: 'var(--color-text)'
		return (
			<div role='none'>
				<Link
					role='menuitem'
					href={item.href}
					aria-label={item.ariaLabel || item.label}
					tabIndex={0}
					className={[
						'w-full rounded-full shadow-xl flex items-center justify-center relative bg-background ring-2 ring-border ring-inset border-purple dark:border-border border-r-3 border-b-3',
						'transition-[background,color,transform] duration-300 ease-in-out box-border whitespace-nowrap overflow-hidden',
					].join(' ')}
					style={
						{
							background: bgColor,
							color: textColor,
							transform: `rotate(${item.rotation ?? 0}deg)`,
							padding: 'clamp(1.5rem, 3vw, 8rem)',
							fontSize: 'clamp(1.5rem, 4vw, 4rem)',
						} as React.CSSProperties
					}
					ref={(el) => {
						if (el) bubblesRef.current[idx] = el
					}}
					onMouseEnter={() => setHoveredIdx(idx)}
					onMouseLeave={() => setHoveredIdx(null)}
					onClick={() => setIsMenuOpen(false)}
				>
					<span
						className='inline-block'
						ref={(el) => {
							if (el) labelRefs.current[idx] = el
						}}
					>
						{item.label}
					</span>
				</Link>
			</div>
		)
	}

	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [showMenu, setShowMenu] = useState(false)
	const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
	const bubblesRef = useRef<HTMLAnchorElement[]>([])
	const labelRefs = useRef<HTMLSpanElement[]>([])
	const prevMenuOpen = useRef(false)
	const menuContainerRef = useRef<HTMLDivElement>(null)
	const toggleButtonRef = useRef<HTMLButtonElement>(null)
	const [isReducedMotion, setIsReducedMotion] = useState(false)

	const handleToggle = () => {
		setIsMenuOpen((open) => !open)
	}

	// Focus management and scroll lock
	useEffect(() => {
		if (showMenu) {
			setTimeout(() => {
				bubblesRef.current[0]?.focus()
			}, 10)
			document.body.style.overflow = 'hidden'
		} else {
			toggleButtonRef.current?.focus()
			document.body.style.overflow = ''
		}
	}, [showMenu])

	// Focus trap, Escape, and arrow key navigation
	useEffect(() => {
		if (!showMenu) return
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setIsMenuOpen(false)
			// Focus trap
			if (e.key === 'Tab') {
				const focusable = bubblesRef.current.filter(Boolean)
				if (!focusable.length) return
				const first = focusable[0]
				const last = focusable[focusable.length - 1]
				if (e.shiftKey) {
					if (document.activeElement === first) {
						e.preventDefault()
						last.focus()
					}
				} else {
					if (document.activeElement === last) {
						e.preventDefault()
						first.focus()
					}
				}
			}
			// Arrow key navigation
			if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
				e.preventDefault()
				const active = document.activeElement
				const focusable = bubblesRef.current.filter(Boolean)
				const idx = focusable.indexOf(active as HTMLAnchorElement)
				const next = (idx + 1) % items.length
				focusable[next]?.focus()
			}
			if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
				e.preventDefault()
				const active = document.activeElement
				const focusable = bubblesRef.current.filter(Boolean)
				const idx = focusable.indexOf(active as HTMLAnchorElement)
				const prev = (idx - 1 + items.length) % items.length
				focusable[prev]?.focus()
			}
		}
		document.addEventListener('keydown', handleKeyDown)
		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [showMenu, items.length])

	// Show menu when opening
	useEffect(() => {
		if (isMenuOpen) setShowMenu(true)
	}, [isMenuOpen])

	// motion preference
	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
		setIsReducedMotion(mediaQuery.matches)

		const handler = () => setIsReducedMotion(mediaQuery.matches)
		mediaQuery.addEventListener('change', handler)
		return () => mediaQuery.removeEventListener('change', handler)
	}, [])

	// Animate open
	useEffect(() => {
		const bubbles = bubblesRef.current.filter(Boolean)
		const labels = labelRefs.current.filter(Boolean)
		if (!isReducedMotion) {
			if (isMenuOpen && showMenu) {
				gsap.killTweensOf([...bubbles, ...labels])
				gsap.set(bubbles, { scale: 0, transformOrigin: '50% 50%' })
				gsap.set(labels, { y: 24, autoAlpha: 0 })
				bubbles.forEach((bubble, i) => {
					const delay = i * 0.12 + gsap.utils.random(-0.05, 0.05)
					const tl = gsap.timeline({ delay })
					tl.to(bubble, {
						scale: 1,
						duration: 0.5,
						ease: 'back.out(1.5)',
					})
					if (labels[i]) {
						tl.to(
							labels[i],
							{
								y: 0,
								autoAlpha: 1,
								duration: 0.5,
								ease: 'power3.out',
							},
							'-=0.45'
						)
					}
				})
			}
			// Animate close
			if (!isMenuOpen && prevMenuOpen.current && showMenu) {
				gsap.killTweensOf([...bubbles, ...labels])
				bubbles.forEach((bubble, i) => {
					const delay = (bubbles.length - 1 - i) * 0.08
					const tl = gsap.timeline({ delay })
					tl.to(bubble, {
						scale: 0,
						duration: 0.3,
						ease: 'back.in(1.5)',
					})
					if (labels[i]) {
						tl.to(
							labels[i],
							{
								y: 24,
								autoAlpha: 0,
								duration: 0.3,
								ease: 'power3.in',
							},
							'-=0.25'
						)
					}
				})
				// Hide after animation
				setTimeout(() => setShowMenu(false), 350 + bubbles.length * 80)
			}
		}
		prevMenuOpen.current = isMenuOpen
	}, [isMenuOpen, showMenu, isReducedMotion])

	return (
		<nav
			className='py-4 px-0 flex items-center justify-between'
			aria-label='Main navigation'
		>
			<Link
				href='/'
				title='Home'
			>
				<Image
					src='/lightbulb-screen.png'
					width={200}
					height={200}
					alt=''
					className='h-16 w-16 md:h-24 md:w-24 object-contain'
				/>
			</Link>
			<div className='flex gap-4 items-center'>
				<ThemeToggle />
				<Button
					ref={toggleButtonRef}
					variant='branded'
					onClick={handleToggle}
					aria-label='Toggle navigation menu'
					title='Toggle navigation menu'
				>
					<Menu className='w-6 h-6' />
				</Button>
				{showMenu && (
					<div
						ref={menuContainerRef}
						className='fixed inset-0 flex items-center bg-background/80 justify-center pointer-events-none z-[1000]'
						aria-hidden={!isMenuOpen}
						role='dialog'
						aria-modal='true'
					>
						<Button
							variant='branded'
							onClick={handleToggle}
							className='absolute top-6 right-6 pointer-events-auto z-50'
							aria-label='Close navigation menu'
							title='Close navigation menu'
						>
							<X className='w-6 h-6' />
						</Button>
						<div
							className='absolute top-6 p-6  mx-auto w-full pointer-events-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
							role='menu'
							aria-label='Menu links'
						>
							{items.map((item, idx) => (
								<MenuBubble
									key={item.label}
									item={item}
									idx={idx}
									isHovered={hoveredIdx === idx}
									setHoveredIdx={setHoveredIdx}
									setIsMenuOpen={setIsMenuOpen}
									bubblesRef={bubblesRef}
									labelRefs={labelRefs}
								/>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	)
}
