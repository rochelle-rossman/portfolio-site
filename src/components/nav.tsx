import { ModeToggle } from '@/components/mode-toggle'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet'
import { DialogTitle } from '@radix-ui/react-dialog'
import { Menu } from 'lucide-react'
import NavLink from './nav-link'

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
						className='w-full bg-background/90'
					>
						<DialogTitle className='sr-only'>Menu</DialogTitle>
						<nav className='flex flex-col p-6 gap-4 mt-8 text-lg'>
							<SheetClose asChild>
								<NavLink href='/'>About</NavLink>
							</SheetClose>
							<SheetClose asChild>
								<NavLink href='/projects'>Projects</NavLink>
							</SheetClose>
							<SheetClose asChild>
								<NavLink href='/resume'>Résumé</NavLink>
							</SheetClose>
							<SheetClose asChild>
								<NavLink href='/contact'>Contact</NavLink>
							</SheetClose>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	)
}
