'use client'
import { useState } from 'react'
import { ModeToggle } from '@/components/mode-toggle'
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet'
import { DialogTitle } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { Menu } from 'lucide-react'
import NavLink from '@/components/nav-link'

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleLinkClick = () => {
		setIsOpen(false);
	};

	return (
		<nav className='p-6 px-0 mb-6'>
			<ModeToggle />
			{/* Desktop Nav */}
			<div className='hidden sm:flex sm:text-lg md:text-xl justify-center gap-8 items-center'>
				<NavLink href='/'>About</NavLink>
				<NavLink href='/projects'>Projects</NavLink>
				<NavLink href='/resume'>Résumé</NavLink>
				<NavLink href='/contact'>Contact</NavLink>
			</div>

			{/* Mobile Nav (Sheet) */}
			<div className='flex sm:hidden items-center'>
				<div />
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
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
							<NavLink onClick={handleLinkClick} href='/'>About</NavLink>
							<Separator />
							<NavLink onClick={handleLinkClick} href='/projects'>Projects</NavLink>
							<Separator />
							<NavLink onClick={handleLinkClick} href='/resume'>Résumé</NavLink>
							<Separator />
							<NavLink onClick={handleLinkClick} href='/contact'>Contact</NavLink>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	)
}
