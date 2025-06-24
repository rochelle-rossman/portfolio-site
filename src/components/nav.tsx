import Link from 'next/link'

const navItems = {
	'/about': { name: 'About' },
	'/projects': { name: 'Projects' },
	'/resume': { name: 'My Résumé' },
}

export default function Navbar() {
	return (
		<nav className='lg:mb-16 mb-12 p-6'>
			<div className='flex justify-center gap-4 mt-6 md:mt-0 md:ml-auto items-center'>
				{Object.entries(navItems).map(([path, { name }]) => (
					<Link
						key={path}
						href={path}
						className=' flex align-middle relative'
					>
						{name}
					</Link>
				))}
			</div>
		</nav>
	)
}
