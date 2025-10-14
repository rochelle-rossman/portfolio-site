import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	const { token } = await req.json()
	const secret = process.env.RECAPTCHA_SECRET_KEY

	if (!token || !secret) {
		return NextResponse.json({ success: false, error: 'Missing token or secret key.' }, { status: 400 })
	}

	// Verify token with Google
	const verifyUrl = 'https://www.google.com/recaptcha/api/siteverify'
	const params = new URLSearchParams({
		secret,
		response: token,
	})

	const googleRes = await fetch(verifyUrl, {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: params.toString(),
	})
	const data = await googleRes.json()

	// Return score and success
	return NextResponse.json({
		success: data.success,
		score: data.score,
		action: data.action,
		errorCodes: data['error-codes'] || [],
	})
}
