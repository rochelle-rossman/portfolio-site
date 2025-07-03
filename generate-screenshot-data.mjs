import fs from 'fs'
import path from 'path'

const screenshotsRoot = './public/screenshots'
const outputFile = './src/lib/screenshot-data.ts'

const getScreenshotObjects = (dir, subdir) => {
	const fullDir = path.join(dir, subdir)
	const files = fs
		.readdirSync(fullDir)
		.filter((file) => /\.(png|jpe?g|webp)$/i.test(file))

	return files.map((file) => {
		const name = file.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')
		return `  {
    src: '/screenshots/${subdir}/${file}',
    alt: '${name}',
  },`
	})
}

const subdirs = fs
	.readdirSync(screenshotsRoot, { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name)

const blocks = subdirs.map((subdir) => {
	const varName =
		subdir.replace(/[^a-zA-Z0-9]/g, '').replace(/^\d/, '_') + 'Screenshots'
	const arrayContent = getScreenshotObjects(screenshotsRoot, subdir).join(
		'\n'
	)

	return {
		varName,
		code: `export const ${varName} = [\n${arrayContent}\n]\n`,
	}
})

const fileHeader = `// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Run \`npm run generate:screenshots\` to update

`

const fullContent = fileHeader + blocks.map((b) => b.code).join('\n') + '\n'

fs.writeFileSync(outputFile, fullContent, 'utf8')
console.log(`✅ Screenshot data written to ${outputFile}`)
