// 'use client'
import Image from 'next/image'

const twinkles = [
	{ top: '12%', left: '5%', size: 30 },
	{ top: '22%', left: '90%', size: 40, flip: true },
	{ top: '60%', left: '8%', size: 70 },
	{ top: '75%', left: '80%', size: 25, flip: true },
	{ top: '90%', left: '90%', size: 35 }
]

const clouds = [
	{ top: '20%', left: '-5%', size: 270 },
	{ top: '40%', left: '80%', size: 225 },
	{ top: '75%', left: '10%', size: 250 }
]

export default function BackgroundDecor() {
	return (
		<div
			className='fixed inset-0 z-0 pointer-events-none animate-[move-background_700s_ease-in-out_infinite]'
			aria-hidden='true'
		>
			{twinkles.map((twinkle, i) => (
				<div
					key={`twinkle-${i}`}
					className='absolute scale-50 md:scale-75 lg:scale-100 motion-safe:animate-[pulse_5s_ease-in-out_infinite]'
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
					className='absolute scale-50 md:scale-75 lg:scale-100 motion-safe:animate-[float_10s_ease-in-out_infinite]'
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
