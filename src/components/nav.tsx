import NavLink from "./nav-link"

// const navItems = {
// 	'/': { name: 'About' },
// 	'/projects': { name: 'Projects'},
// 	'/resume': { name: 'Résumé' },
// }

export default function Navbar() {
	return (
		<nav className='p-6 mb-6'>
			<div className='flex text-lg md:text-xl font-medium justify-center gap-2 md:gap-6 items-center'>
				<NavLink href='/'>About</NavLink>
				<NavLink href='/projects'>Projects</NavLink>
				<NavLink href='/resume'>Résumé</NavLink>
			</div>
		</nav>
	)
}
