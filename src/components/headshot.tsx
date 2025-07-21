import Image from 'next/image'

export default function StyledHeadshot() {
	return (
		<div className='relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 float-slow'>
			<div className='absolute inset-0 p-[3px] rounded-full bg-gradient-to-tr from-color-teal to-color-coral'>
				<div className='relative w-full h-full rounded-full overflow-hidden shadow-xl ring-2 ring-color-gold/30'>
					<div className='absolute inset-0 rounded-full bg-color-gold opacity-20 blur-2xl -z-10' />
					<Image
						src='/headshot.png'
						alt='A headshot of Rochelle Rossman'
						fill
						className='object-top object-cover filter brightness-120 contrast-110'
					/>
				</div>
			</div>
		</div>
	)
}
