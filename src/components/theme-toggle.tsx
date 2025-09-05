'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
	const [mount, setMount] = useState(false)
	const { systemTheme, theme, setTheme } = useTheme()
	const currentTheme = theme === 'system' ? systemTheme : theme

	useEffect(() => {
		setMount(true)
	}, [])

	return mount ? (
		<div>
			<Button
				onClick={() =>
					setTheme(currentTheme === 'dark' ? 'light' : 'dark')
				}
				variant='branded'
				className='p-0 gap-0 rounded-full bg-background/50 scale-90 md:scale-100'
				title='Toggle Mode'
			>
				<span className='h-full px-4 inline-flex items-center rounded-full border-2 dark:border-0 ring-border bg-background dark:bg-transparent'>
					<Sun className='opacity-100 dark:opacity-40' />
				</span>
				<span className='h-full px-4 inline-flex items-center rounded-full dark:border-2 border-0 bg-transparent dark:bg-background'>
					<Moon className='opacity-40 dark:opacity-100' />
				</span>
				<span className='sr-only'>
					Toggle {currentTheme === 'dark' ? 'Light' : 'Dark'} Mode
				</span>
			</Button>
		</div>
	) : null
}
