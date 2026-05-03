'use client'

import { useState, FormEvent } from 'react'

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false)
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
      company: (form.elements.namedItem('company') as HTMLInputElement)?.value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value,
      interest: (form.elements.namedItem('interest') as HTMLSelectElement)?.value,
      quantity: (form.elements.namedItem('quantity') as HTMLSelectElement)?.value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value,
    }

    try {
      const res = await fetch('http://101.201.234.194:9100/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (res.ok && result.success) {
        setSucceeded(true)
      } else {
        setError(result.error || 'Failed to send message. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (succeeded) {
    return (
      <main className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card p-12">
            <div className="text-6xl mb-6">✅</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Message Sent Successfully!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for contacting EyeView Sunglasses. 
              We have received your inquiry and will respond within 24 hours.
            </p>
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-primary-900 mb-2">
                What's Next?
              </h2>
              <p className="text-primary-700">
                Our team will review your requirements and send you a detailed quote 
                with pricing, MOQ, and timeline. If you have urgent questions, 
                feel free to contact us directly at  jacky@eyeviewsunglasses.com
              </p>
            </div>
            <a href="/" className="btn-primary inline-block">
              Back to Homepage
            </a>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Your Free Quote
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your sunglasses brand? Contact us today. 
            We respond within 24 hours with competitive pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="john@company.com"
                      required
                    />
                    
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interest *
                  </label>
                  <select
                    name="interest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    required
                  >
                    <option value="">Select your interest</option>
                    <option value="oem">OEM Custom Sunglasses</option>
                    <option value="wholesale">Wholesale Stock Products</option>
                    <option value="private-label">Private Label</option>
                    <option value="sample">Request Samples</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Quantity
                  </label>
                  <select
                    name="quantity"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  >
                    <option value="">Select quantity range</option>
                    <option value="100-500">100 - 500 pieces</option>
                    <option value="500-1000">500 - 1,000 pieces</option>
                    <option value="1000-5000">1,000 - 5,000 pieces</option>
                    <option value="5000+">5,000+ pieces</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Tell us about your requirements: styles, quantities, customization needs, target market, etc."
                    required
                  />
                  
                </div>

                {submitting && (
                  <div className="text-center text-gray-600">
                    <span className="inline-block animate-spin mr-2">⏳</span>
                    Sending...
                  </div>
                )}

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>

                <p className="mt-4 text-sm text-gray-500 text-center">
                  We'll respond within 24 hours. Your information is kept confidential.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📧</span>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <a href="mailto:jacky@eyeviewsunglasses.com" className="font-medium text-primary-600 hover:underline">
                      jacky@eyeviewsunglasses.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📱</span>
                  <div>
                    <div className="text-sm text-gray-500">WhatsApp</div>
                    <a href="https://wa.me/8618850281211" target="_blank" rel="noopener noreferrer" className="font-medium text-primary-600 hover:underline">
                      +86-18850281211
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Response Time</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Email</span>
                  <span className="font-semibold">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">WhatsApp</span>
                  <span className="font-semibold">Within 2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Samples</span>
                  <span className="font-semibold">3-5 days</span>
                </div>
              </div>
            </div>

            <div className="card p-6 bg-primary-50">
              <h3 className="text-xl font-bold mb-4 text-primary-900">Quick Quote Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Include estimated quantity for accurate pricing
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Mention target market (USA, EU, etc.)
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Specify customization needs (logo, packaging)
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Share any reference images or designs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
