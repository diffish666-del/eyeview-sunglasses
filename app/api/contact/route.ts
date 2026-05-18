import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Create submissions directory
    const submissionsDir = path.join(process.cwd(), 'submissions')
    if (!fs.existsSync(submissionsDir)) {
      fs.mkdirSync(submissionsDir, { recursive: true })
    }
    
    // Save submission to file
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const filename = `submission-${timestamp}-${data.email.replace(/[@.]/g, '-')}.json`
    const filepath = path.join(submissionsDir, filename)
    
    const submissionData = {
      ...data,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip')
    }
    
    fs.writeFileSync(filepath, JSON.stringify(submissionData, null, 2))
    
    // Also log to console for immediate visibility
    console.log('New contact form submission:', submissionData)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully! We will respond within 24 hours.' 
    })
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
