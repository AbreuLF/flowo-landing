import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // TODO: Implement contact form submission logic (e.g., send email, save to database)
    console.log('Contact form submitted:', { name, email, message })

    return NextResponse.json({ success: true, message: 'Message sent successfully' })
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return NextResponse.json({ success: false, message: 'Error sending message' }, { status: 500 })
  }
}

