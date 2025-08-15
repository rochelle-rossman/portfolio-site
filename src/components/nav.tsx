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
	return (
		<nav className='p-6 px-0 mb-6'>
			<ModeToggle />
			{/* Desktop Nav */}
			<div className='hidden sm:flex sm:text-lg md:text-xl justify-center gap-2 md:gap-6 items-center'>
				<NavLink href='/'>About</NavLink>
				<NavLink href='/projects'>Projects</NavLink>
				<NavLink href='/resume'>Résumé</NavLink>
				<NavLink href='/contact'>Contact</NavLink>
			</div>

			{/* Mobile Nav (Sheet) */}
			<div className='flex sm:hidden items-center'>
				<div />
				<Sheet>
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
							<NavLink href='/'>About</NavLink>
							<Separator />
							<NavLink href='/projects'>Projects</NavLink>
							<Separator />
							<NavLink href='/resume'>Résumé</NavLink>
							<Separator />
							<NavLink href='/contact'>Contact</NavLink>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	)
}
