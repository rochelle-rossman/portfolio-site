import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { useState, useEffect, useCallback } from 'react'
import {
	Dialog,
	DialogContent,
	DialogOverlay,
	DialogTitle,
} from '@/components/ui/dialog'

type CarouselImage = {
	src: string
	alt: string
}

type CarouselProps = {
	images: CarouselImage[]
}

const Carousel = ({ images }: CarouselProps) => {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
	const selectedImage =
		selectedIndex !== null ? images[selectedIndex]?.src : null

	const closeLightbox = () => setSelectedIndex(null)

	const showNext = useCallback(() => {
		if (selectedIndex === null) return
		setSelectedIndex((prev) => (prev! + 1) % images.length)
	}, [selectedIndex, images.length])

	const showPrev = useCallback(() => {
		if (selectedIndex === null) return
		setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length)
	}, [selectedIndex, images.length])

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (selectedIndex === null) return
			if (e.key === 'Escape') closeLightbox()
			if (e.key === 'ArrowRight') showNext()
			if (e.key === 'ArrowLeft') showPrev()
		}
		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [selectedIndex, showNext, showPrev])

	return (
		<>
			<Splide
				options={{
					perPage: 1,
					rewind: true,
					gap: '1rem',
					type: 'loop',
					arrows: true,
					pagination: false
				}}
				aria-label='Project Sample Screenshots'
				className='w-full mx-auto'
			>
				{images.map((img, idx) => (
					<SplideSlide
						key={idx}
						className='aspect-video overflow-hidden bg-accent rounded-lg shadow cursor-zoom-in outline-none focus:outline-2 focus:outline-offset-2 focus:outline-[#0bf]'
						tabIndex={selectedIndex ?? 0}
						role='button'
						aria-label={`View image ${idx + 1}`}
						onClick={() => setSelectedIndex(idx)}
						onKeyDown={(e: React.KeyboardEvent) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault()
								setSelectedIndex(idx)
							}
						}}
					>
						<Image
							src={img.src}
							alt={img.alt}
							fill
							className='object-contain p-6'
							priority={idx === 0}
						/>
						
					</SplideSlide>
				))}
			</Splide>

			<Dialog
				open={selectedIndex !== null}
				onOpenChange={closeLightbox}
			>
				<DialogOverlay className=' bg-black/50 backdrop-blur-sm' />
				<DialogContent className='min-h-[80vh] min-w-[70vw] '>
					<DialogTitle className='sr-only'>
						Enlarged project screenshot
					</DialogTitle>
					{selectedImage && (
						<div>
							<Image
								src={selectedImage}
								alt='Enlarged project screenshot'
								fill
								className='object-contain'
							/>
						</div>
					)}
				</DialogContent>
			</Dialog>
		</>
	)
}

export default Carousel
