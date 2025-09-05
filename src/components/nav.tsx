'use client'
import { useState } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { DialogTitle } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { Menu } from 'lucide-react'
import NavLink from '@/components/nav-link'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	const handleLinkClick = () => {
		setIsOpen(false)
	}

	return (
		<nav className='py-4 md:py-6 px-0 mb-6 flex gap-6 items-center justify-between'>
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

			{/* Desktop Nav */}
			<div className='hidden md:flex text-xl gap-8 items-center'>
				{/* TODO: update link when page done */}
				<NavLink href='/'>About</NavLink>
				<NavLink href='/projects'>Projects</NavLink>
				<NavLink href='/resume'>Résumé</NavLink>
				<NavLink href='/contact'>Contact</NavLink>
			</div>
			<div className='flex gap-4'>
				<ThemeToggle />

				{/* Mobile Nav (Sheet) */}
				<div className='flex md:hidden items-center'>
					<div />
					<Sheet
						open={isOpen}
						onOpenChange={setIsOpen}
					>
						<SheetTrigger asChild>
							<Menu
								aria-label='Open menu'
								className='cursor-pointer'
							/>
						</SheetTrigger>
						<SheetContent
							side='left'
							className='w-full bg-background'
						>
							<DialogTitle className='sr-only'>Menu</DialogTitle>
							<nav className='flex flex-col p-6 gap-4 mt-8 text-lg'>
								<NavLink
									onClick={handleLinkClick}
									href='/'
								>
									About
								</NavLink>
								<Separator />
								<NavLink
									onClick={handleLinkClick}
									href='/projects'
								>
									Projects
								</NavLink>
								<Separator />
								<NavLink
									onClick={handleLinkClick}
									href='/resume'
								>
									Résumé
								</NavLink>
								<Separator />
								<NavLink
									onClick={handleLinkClick}
									href='/contact'
								>
									Contact
								</NavLink>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	)
}
