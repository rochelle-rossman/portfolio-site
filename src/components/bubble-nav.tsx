"use client"


	// Keyboard navigation for menu
	
import BubbleNavItem from '@/components/nav-link'
import { Button } from '@/components/ui/button'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ThemeToggle } from './theme-toggle'

// Navigations links
const items = [
	{
		label: 'home',
		href: '/',
		ariaLabel: 'Home',
		className:
			'-rotate-2 md:-rotate-6 lg:-rotate-8 hover:bg-gold hover:text-navy',
	},
	{
		label: 'projects',
		href: '/projects',
		ariaLabel: 'Projects',
		className:
			'rotate-2 md:rotate-6 lg:rotate-8 hover:bg-coral hover:text-navy',
	},
	{
		label: 'résumé',
		href: '/resume',
		ariaLabel: 'Résumé',
		className:
			'-rotate-2 md:-rotate-6 lg:-rotate-8 hover:bg-orange hover:text-navy',
	},
	{
		label: 'contact',
		href: '/contact',
		ariaLabel: 'Contact',
		className:
			'rotate-2 md:rotate-6 lg:rotate-8 hover:bg-teal hover:text-navy',
	},
]

export default function BubbleNav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [showMenu, setShowMenu] = useState(false)
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
	const bubblesRef = useRef<HTMLAnchorElement[]>([])
	const labelRefs = useRef<HTMLSpanElement[]>([])
	const menuRef = useRef<HTMLDivElement>(null)
	const toggleButtonRef = useRef<HTMLButtonElement>(null)
	const prevMenuOpen = useRef(false)
	
	// Focus management for accessibility (WCAG)
	useEffect(() => {
		if (isMenuOpen && showMenu) {
			const firstMenuItem = bubblesRef.current[0]
			if (firstMenuItem) firstMenuItem.focus()
		} else if (!isMenuOpen && prevMenuOpen.current) {
			if (toggleButtonRef.current) toggleButtonRef.current.focus()
		}
	}, [isMenuOpen, showMenu])

	// Keyboard navigation for menu
	const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (!isMenuOpen) return
		const bubbles = bubblesRef.current.filter(Boolean)
		const currentIndex = bubbles.findIndex((el: HTMLAnchorElement) => el === document.activeElement)
		if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
			e.preventDefault()
			const nextIndex = (currentIndex + 1) % bubbles.length
			bubbles[nextIndex]?.focus()
		} else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
			e.preventDefault()
			const prevIndex = (currentIndex - 1 + bubbles.length) % bubbles.length
			bubbles[prevIndex]?.focus()
		} else if (e.key === 'Escape') {
			e.preventDefault()
			setIsMenuOpen(false)
		}
	}

	// Detect prefers-reduced-motion
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const media = window.matchMedia('(prefers-reduced-motion: reduce)')
			setPrefersReducedMotion(media.matches)
			const handler = () => setPrefersReducedMotion(media.matches)
			media.addEventListener('change', handler)
			return () => media.removeEventListener('change', handler)
		}
	}, [])

	const handleToggle = () => {
		setIsMenuOpen((open) => !open)
	}
	// Show/hide menu instantly if prefers reduced motion
	useEffect(() => {
		if (prefersReducedMotion) {
			setShowMenu(isMenuOpen)
			prevMenuOpen.current = isMenuOpen
			return
		}
		// Show menu when opening
		if (isMenuOpen) setShowMenu(true)
	}, [isMenuOpen, prefersReducedMotion])

	// Animate open/close if not prefers reduced motion
	useGSAP(
		() => {
			if (prefersReducedMotion) return
			const bubbles = bubblesRef.current.filter(Boolean)
			const labels = labelRefs.current.filter(Boolean)
			if (isMenuOpen && showMenu) {
				gsap.set(bubbles, { scale: 0, transformOrigin: '50% 50%' })
				gsap.set(labels, { y: 24, autoAlpha: 0 })
				bubbles.forEach((bubble, i) => {
					// const delay = i * 0.12 + gsap.utils.random(-0.05, 0.05)
					const tl = gsap.timeline()
					tl.to(bubble, {
						scale: 1,
						duration: 0.8,
						ease: 'back.out(1.5)',
						onComplete: () => {
							gsap.set(bubble, { clearProps: 'transform' })
						},
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
				bubbles.forEach((bubble, i) => {
					const tl = gsap.timeline()
					tl.to(bubble, {
						scale: 0,
						duration: 0.3,
						ease: 'back.in(1.5)',
						onComplete: () => {
							gsap.set(bubble, { clearProps: 'transform' })
						},
					})
					if (labels[i]) {
						tl.to(labels[i], {
							y: 24,
							autoAlpha: 0,
							duration: 0.3,
							ease: 'power3.in',
						})
					}
				})
				// Hide after animation
				setTimeout(() => setShowMenu(false), 350 + bubbles.length * 80)
			}
			prevMenuOpen.current = isMenuOpen
		},
		{
			dependencies: [isMenuOpen, showMenu, prefersReducedMotion],
			scope: menuRef,
		}
	)

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
					variant='branded'
					onClick={handleToggle}
					aria-label='Toggle navigation menu'
					title='Toggle navigation menu'
					ref={toggleButtonRef}
				>
					<Menu className='w-6 h-6' />
				</Button>
				{showMenu && (
					<div
						className='fixed inset-0 flex items-center bg-background/80 justify-center pointer-events-none z-[1000]'
						// inert={!isMenuOpen}
						ref={menuRef}
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
										className='absolute top-6 p-6  mx-auto w-full pointer-events-auto grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
										role='menu'
										aria-label='Menu links'
										onKeyDown={handleMenuKeyDown}
										tabIndex={-1}
									>
										{items.map((item, i) => (
														<BubbleNavItem
															key={item.href}
															href={item.href}
															label={item.label}
															ariaLabel={item.ariaLabel}
															className={item.className}
															ref={(el: HTMLAnchorElement | null) => {
															bubblesRef.current[i] = el!
															}}
															labelRef={(el: HTMLSpanElement | null) => {
															labelRefs.current[i] = el!
															}}
															onClick={() => setIsMenuOpen(false)}
														/>
										))}
									</div>
					</div>
				)}
			</div>
		</nav>
	)
}
