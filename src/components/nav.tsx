import NavLink from "./nav-link"
import { ModeToggle } from '@/components/mode-toggle'

export default function Navbar() {
	return (
		<nav className='p-6 mb-6'>
			<div className='flex sm:text-lg md:text-xl justify-center gap-2 md:gap-6 items-center'>
				<NavLink href='/'>About</NavLink>
				<NavLink href='/projects'>Projects</NavLink>
				<NavLink href='/resume'>Résumé</NavLink>
				<ModeToggle />
			</div>
		</nav>
	)
}
