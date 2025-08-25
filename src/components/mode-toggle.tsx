'use client'

import * as React from 'react'
import { Moon, Sun, ComputerIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from './ui/separator'

export function ModeToggle() {
	const { setTheme } = useTheme()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='branded'
					// size='icon'
					className='absolute top-6 right-4 rounded-lg'
					title='Toggle theme'
					aria-label='Toggle theme'
				>
					<Sun className='h-8 w-8 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
					<Moon className='absolute h-8 w-8 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='end'
				className='p-2'
			>
				<DropdownMenuItem
					onClick={() => setTheme('light')}
					className='flex gap-2 p-2 text-md'
				>
					<Sun />
					Light
				</DropdownMenuItem>
				<Separator />
				<DropdownMenuItem
					onClick={() => setTheme('dark')}
					className='flex gap-2 p-2 text-md'
				>
					<Moon />
					Dark
				</DropdownMenuItem>
				<Separator />
				<DropdownMenuItem
					onClick={() => setTheme('system')}
					className='flex gap-2 p-2 text-md'
				>
					<ComputerIcon />
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
