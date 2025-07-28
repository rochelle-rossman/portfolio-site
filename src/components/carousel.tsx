import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import type { Splide as SplideInstance } from '@splidejs/splide'
import { Button } from './ui/button'
import '@splidejs/react-splide/css'
import { useState, useEffect, useCallback, useRef } from 'react'
import {
	Dialog,
	DialogContent,
	DialogOverlay,
	DialogTitle,
} from '@/components/ui/dialog'

type CarouselImage = {
	src: string
	alt: string
	caption?: string
}

type CarouselProps = {
	images: CarouselImage[]
}

const Carousel = ({ images }: CarouselProps) => {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
	const splideRef = useRef<SplideInstance | null>(null)

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
			<div className='relative w-full mx-auto'>
				<Splide
					onMounted={(splide: SplideInstance) => {
						splideRef.current = splide
					}}
					options={{
						perPage: 1,
						rewind: true,
						gap: '1rem',
						type: 'loop',
						arrows: false,
						pagination: false,
					}}
					aria-label='Project Sample Screenshots'
				>
					{images.map((img: CarouselImage, idx: number) => (
						<SplideSlide
							key={idx}
							className='relative aspect-video overflow-hidden bg-accent/70 rounded-lg cursor-zoom-in outline-none'
							tabIndex={0}
							role='button'
							aria-label={`View image ${idx + 1}`}
							onClick={() => setSelectedIndex(idx)}
							onKeyDown={(
								e: React.KeyboardEvent<HTMLDivElement>
							) => {
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
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								className='object-contain p-6'
								priority={idx === 0}
							/>
							{img.caption && (
								<figcaption className='text-xs absolute w-full bottom-0 text-center bg-muted/80 p-2 rounded'>
									{img.caption}
								</figcaption>
							)}
						</SplideSlide>
					))}
				</Splide>

				{/* Custom Arrow Buttons */}
				<Button
					type='button'
					onClick={() => splideRef.current?.go('<')}
					aria-label='Previous slide'
					className='absolute top-1/2 -left-4 z-10 -translate-y-1/2 p-2 w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] rounded-full hover:scale-105 cursor-pointer'
				>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src='/arrow.svg'
						alt='Previous'
						className='rotate-180'
					/>
				</Button>

				<Button
					type='button'
					onClick={() => splideRef.current?.go('>')}
					aria-label='Next slide'
					className='absolute top-1/2 -right-4 z-10 -translate-y-1/2 p-2 w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] hover:scale-105 rounded-full cursor-pointer'
				>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src='/arrow.svg'
						alt='Previous'
					/>
				</Button>
			</div>

			{/* Lightbox */}
			<Dialog
				open={selectedIndex !== null}
				onOpenChange={closeLightbox}
			>
				<DialogOverlay className='bg-black/50 backdrop-blur-sm' />
				<DialogContent className='min-h-[80vh] min-w-[70vw]'>
					<DialogTitle className='sr-only'>
						Enlarged project screenshot
					</DialogTitle>
					{selectedImage && (
						<div className='relative'>
							<Image
								src={selectedImage}
								alt={`Enlarged project screenshot: ${
									images[selectedIndex!].alt
								}`}
								fill
								className='object-contain'
							/>
							{images[selectedIndex!].caption && (
								<figcaption className='text-xs text-muted-foreground absolute w-full bottom-2 text-center bg-muted/70 p-2 rounded'>
									{images[selectedIndex!].caption}
								</figcaption>
							)}
						</div>
					)}
				</DialogContent>
			</Dialog>
		</>
	)
}

export default Carousel
