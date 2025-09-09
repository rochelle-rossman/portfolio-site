import Image from 'next/image'

export default function StyledHeadshot() {
	return (
		<div className='w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full shadow-xl border-2 overflow-clip'>
			<div className='w-full h-full drop-shadow-[5px_-5px_var(--color-purple)] dark:drop-shadow-[-5px_5px_var(--color-indigo)]'>
				<Image
					src='/headshot-2.png'
					alt='A headshot of Rochelle Rossman'
					title='A headshot of Rochelle Rossman'
					fill
					className='object-cover object-top hue-rotate-30 contrast-110 brightness-105 dark:brightness-90'
				/>
			</div>
		</div>
	)
}
