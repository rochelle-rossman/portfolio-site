import Image from 'next/image'

export default function StyledHeadshot() {
	return (
		<div className='relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80'>
			<div className='absolute inset-0 p-[3px] rounded-full'>
				<div className='relative w-full h-full rounded-full overflow-hidden shadow-xl ring-2 ring-color-gold/30'>
					<Image
						src='/headshot.png'
						alt='A headshot of Rochelle Rossman'
						fill
						className='object-cover object-top brightness-110 contrast-105'
					/>
				</div>
			</div>
		</div>
	)
}
