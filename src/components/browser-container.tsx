interface BrowserBrowserContainerProps {
	children: React.ReactNode;
	className?: string;
	id?: string;
}

export default function BrowserBrowserContainer({ children, className, id }: BrowserBrowserContainerProps) {
	return (
		<div id={id} className={`w-full border-2 border-navy rounded-xl shadow-xl overflow-hidden ${className}`}>
			<div className='bg-gold dark:bg-indigo border-b-2 border-navy px-3 py-2 flex'>
				<span className='block w-4 h-4 border-2 border-navy bg-red-400 rounded-full' />
				<span className='block w-4 h-4 border-2 border-navy bg-yellow-300 rounded-full mx-1' />
				<span className='block w-4 h-4 border-2 border-navy bg-green-400 rounded-full' />
			</div>
			<div className='p-6 lg:p-8 bg-background h-full'>
				{children}
			</div>
		</div>
	)
}
	