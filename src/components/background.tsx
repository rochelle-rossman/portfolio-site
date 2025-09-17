// 'use client'
import Image from 'next/image'

const twinkles = [
	{ top: '15%', left: '5%', size: 30 },
	{ top: '22%', left: '90%', size: 40, flip: true },
	{ top: '60%', left: '8%', size: 60 },
	{ top: '75%', left: '80%', size: 25, flip: true },
	{ top: '85%', left: '40%', size: 30 },
]

const clouds = [
	{ top: '15%', left: '-5%', size: 240 },
	{ top: '30%', left: '50%', size: 220 },
	{ top: '75%', left: '15%', size: 205 },
]

export default function BackgroundDecor() {
	return (
		<div
			className='fixed inset-0 z-0 pointer-events-none moving-background'
			aria-hidden='true'
		>
			{twinkles.map((twinkle, i) => (
				<div
					key={`twinkle-${i}`}
					className='absolute scale-75 lg:scale-100 twinkle'
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
						sizes='(max-width: 640px) 32px, (max-width: 768px) 40px, (max-width: 1024px) 48px, 56px'
						className={[
							'object-contain',
							twinkle.flip ? '-scale-x-100' : '',
						].join(' ')}
						priority={i === 0}
					/>
				</div>
			))}
			{clouds.map((cloud, i) => (
				<div
					key={`cloud-${i}`}
					className='absolute scale-75 lg:scale-100 floating'
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
						className='object-contain opacity-90'
						sizes='(max-width: 640px) 180px, (max-width: 768px) 260px, (max-width: 1024px) 320px, 350px'
					/>
				</div>
			))}
		</div>
	)
}
