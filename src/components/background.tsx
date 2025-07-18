import React from 'react'
import Image from 'next/image'

const twinkles = [
	{ top: '10%', left: '5%', size: 80 },
	{ top: '22%', left: '87%', size: 60, flip: true },
	{ top: '60%', left: '8%', size: 70 },
	{ top: '75%', left: '80%', size: 55, flip: true },
	{ top: '8%', left: '85%', size: 35 },
	{ top: '90%', left: '90%', size: 55 }
]

const clouds = [
	{ top: '60%', left: '80%', size: 160 },
	{ top: '20%', left: '5%', size: 120 },
	{ top: '75%', left: '10%', size: 250 },
	{ top: '44%', left: '15%', size: 190 },
	{ top: '30%', left: '75%', size: 125 }
]

export default function BackgroundDecor() {
	return (
		<div
			className='absolute inset-0 z-0 overflow-hidden pointer-events-none'
			aria-hidden='true'
		>
			{twinkles.map((twinkle, i) => (
				<div
					key={`twinkle-${i}`}
					className={`absolute`}
					style={{
						top: twinkle.top,
						left: twinkle.left,
						width: `${twinkle.size}px`,
						height: `${twinkle.size}px`,
					}}
				>
					<Image
						src='/twinkle.png'
						alt=''
						fill
						className={[
							'object-contain opacity-40',
							twinkle.flip ? '-scale-x-100' : '',
						].join(' ')}
						priority={i === 0}
					/>
				</div>
			))}
			{clouds.map((cloud, i) => (
				<div
					key={`cloud-${i}`}
					className='absolute'
					style={{
						top: cloud.top,
						left: cloud.left,
						width: `${cloud.size}px`,
						height: `${cloud.size}px`,
					}}
				>
					<Image
						src='/cloud.png'
						alt=''
						fill
						className='object-contain opacity-40'
					/>
				</div>
			))}
		</div>
	)
}
