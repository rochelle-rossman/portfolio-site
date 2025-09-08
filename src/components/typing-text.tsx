'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

interface TypingTextProps {
	text: string | string[]
	className?: string
	cursorCharacter?: string
}

const TypingText = ({
	text,
	className = '',
	cursorCharacter = '|',
}: TypingTextProps) => {
	const [displayedText, setDisplayedText] = useState('')
	const [charIndex, setCharIndex] = useState(0)
	const [textIndex, setTextIndex] = useState(0)
	const [isDeleting, setIsDeleting] = useState(false)
	const [isReducedMotion, setIsReducedMotion] = useState(false)
	const cursorRef = useRef<HTMLSpanElement>(null)

	// motion preference
	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
		setIsReducedMotion(mediaQuery.matches)

		const handler = () => setIsReducedMotion(mediaQuery.matches)
		mediaQuery.addEventListener('change', handler)
		return () => mediaQuery.removeEventListener('change', handler)
	}, [])

	// cursor blink
	useEffect(() => {
		if (cursorRef.current) {
			gsap.set(cursorRef.current, { opacity: 1 })
			gsap.to(cursorRef.current, {
				opacity: 0,
				duration: 0.5,
				repeat: -1,
				yoyo: true,
				ease: 'power2.inOut',
			})
		}
	}, [])

	// typing + deleting
	useEffect(() => {
		const textArray = Array.isArray(text) ? text : [text]
		const currentText = textArray[textIndex]
		let timeout: NodeJS.Timeout

		if (isReducedMotion) {
			setDisplayedText(currentText)
			return
		}

		if (!isDeleting && charIndex < currentText.length) {
			// typing forward
			timeout = setTimeout(() => {
				setDisplayedText((prev) => prev + currentText[charIndex])
				setCharIndex((i) => i + 1)
			}, 60)
		} else if (!isDeleting && charIndex === currentText.length) {
			// pause before deleting
			timeout = setTimeout(() => {
				setIsDeleting(true)
			}, 2000)
		} else if (isDeleting && charIndex > 0) {
			// deleting backward
			timeout = setTimeout(() => {
				setDisplayedText((prev) => prev.slice(0, -1))
				setCharIndex((i) => i - 1)
			}, 40)
		} else if (isDeleting && charIndex === 0) {
			// move to next text
			setIsDeleting(false)
			setTextIndex((i) => (i + 1) % textArray.length)
		}

		return () => clearTimeout(timeout)
	}, [charIndex, textIndex, isDeleting, text, isReducedMotion])

	return (
		<div className={`inline-block whitespace-pre-wrap ${className}`} >
			{displayedText}

			{!isReducedMotion && (
				<span
					ref={cursorRef}
					className='inline-block'
				>
					{cursorCharacter}
				</span>
			)}
		</div>
	)
}

export default TypingText
