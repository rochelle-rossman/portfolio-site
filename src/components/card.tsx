interface CardProps {
	children: React.ReactNode
	className?: string
}

export default function Card({
	children,
	className,
}: CardProps) {
	return (
		<div
			className={`w-full border-2 border-navy rounded-xl shadow-xl overflow-hidden ${className}`}
		>
			<div className='p-6 bg-accent h-full flex flex-col justify-center items-center gap-2'>{children}</div>
		</div>
	)
}
