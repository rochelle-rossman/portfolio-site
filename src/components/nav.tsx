import Link from 'next/link'

const navItems = {
	'/': { name: 'About' },

	'/resume': { name: 'Résumé' },
}

export default function Navbar() {
	return (
		<nav className='p-6'>
			<div className='flex text-xl font-medium justify-center gap-4 mt-6 md:mt-0 md:ml-auto items-center'>
				{Object.entries(navItems).map(([path, { name }]) => (
					<Link
						key={path}
						href={path}
						className='flex align-middle relative'
					>
						{name}
					</Link>
				))}
			</div>
		</nav>
	)
}
