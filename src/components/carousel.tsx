import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { useState } from 'react'
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from '@/components/ui/dialog'  

type CarouselImage = {
	src: string
	alt: string
}

type CarouselProps = {
	images: CarouselImage[]
}

const Carousel = ({ images }: CarouselProps) => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null)

	return (
		<>
			<Splide
				options={{
					perPage: 1,
					rewind: true,
					heightRatio: 0.5625,
					gap: '1rem',
					type: 'loop',
					arrows: true,
				}}
				aria-label='Project Sample Screenshots'
				className='w-full mx-auto'
			>
				{images.map((img, idx) => (
					<SplideSlide key={idx}>
						<div
							className='relative w-full aspect-video overflow-hidden bg-accent rounded-lg shadow cursor-zoom-in'
							onClick={() => setSelectedImage(img.src)}
						>
							<Image
								src={img.src}
								alt={img.alt}
								fill
								className='object-contain p-6'
								priority={idx === 0}
							/>
						</div>
					</SplideSlide>
				))}
			</Splide>

			<Dialog
				open={!!selectedImage}
				onOpenChange={() => setSelectedImage(null)}
			>
				<DialogOverlay className='fixed inset-0 z-50 bg-black/80 backdrop-blur-sm' />
				<DialogContent className='max-w-5xl w-full p-0 overflow-hidden bg-transparent border-none'>
					<DialogTitle className='sr-only'>
						Enlarged project screenshot
					</DialogTitle>
					{selectedImage && (
						<Image
							src={selectedImage}
							alt='Enlarged project screenshot'
							width={1200}
							height={675}
							className='w-full h-auto object-contain rounded shadow-lg'
						/>
					)}
				</DialogContent>
			</Dialog>
		</>
	)
}

export default Carousel
