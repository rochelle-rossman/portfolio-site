'use client'

import { Worker } from '@react-pdf-viewer/core'
import PdfViewer from '@/components/pdf-viewer'

import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import '@react-pdf-viewer/core/lib/styles/index.css'

export default function Home() {
	return (
		<div className='p-6'>
			<Worker workerUrl='https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js'>
				<PdfViewer fileUrl='/RochelleRossmanResume.pdf' />
			</Worker>
		</div>
	)
}
