'use client'

import { useState, FormEvent } from 'react'

export default function ContactPageDe() {
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
        setError(result.error || 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.')
      }
    } catch (err) {
      setError('Netzwerkfehler. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt per E-Mail.')
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
              Nachricht erfolgreich gesendet!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Vielen Dank für Ihre Kontaktaufnahme mit EyeView Sunglasses. 
              Wir haben Ihre Anfrage erhalten und werden innerhalb von 24 Stunden antworten.
            </p>
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-primary-900 mb-2">
                Wie geht es weiter?
              </h2>
              <p className="text-primary-700">
                Unser Team wird Ihre Anforderungen prüfen und Ihnen ein detailliertes Angebot 
                mit Preisen, MOQ und Zeitplan zusenden. Bei dringenden Fragen 
                erreichen Sie uns jederzeit unter jacky@eyeviewsunglasses.com
              </p>
            </div>
            <a href="/de" className="btn-primary inline-block">
              Zurück zur Startseite
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
            Fordern Sie Ihr kostenloses Angebot an
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bereit, Ihre Sonnenbrillenmarke zu starten? Kontaktieren Sie uns noch heute. 
            Wir antworten innerhalb von 24 Stunden mit wettbewerbsfähigen Preisen.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6">Senden Sie uns eine Nachricht</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ihr Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="Max Mustermann"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Firmenname
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="Ihre Firma"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail-Adresse *
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="max@firma.de"
                      required
                    />
                    
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="+49 170 1234567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interesse *
                  </label>
                  <select
                    name="interest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    required
                  >
                    <option value="">Wählen Sie Ihr Interesse</option>
                    <option value="oem">Individuelle OEM-Sonnenbrillen</option>
                    <option value="wholesale">Lagerprodukte im Großhandel</option>
                    <option value="private-label">Eigenmarke / Private Label</option>
                    <option value="sample">Muster anfordern</option>
                    <option value="other">Sonstige Anfrage</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Geschätzte Menge
                  </label>
                  <select
                    name="quantity"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  >
                    <option value="">Mengenbereich wählen</option>
                    <option value="100-500">100 – 500 Stück</option>
                    <option value="500-1000">500 – 1.000 Stück</option>
                    <option value="1000-5000">1.000 – 5.000 Stück</option>
                    <option value="5000+">5.000+ Stück</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Erzählen Sie uns von Ihren Anforderungen: Stile, Mengen, Individualisierungswünsche, Zielmarkt usw."
                    required
                  />
                  
                </div>

                {submitting && (
                  <div className="text-center text-gray-600">
                    <span className="inline-block animate-spin mr-2">⏳</span>
                    Wird gesendet...
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
                  {submitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>

                <p className="mt-4 text-sm text-gray-500 text-center">
                  Wir antworten innerhalb von 24 Stunden. Ihre Daten werden vertraulich behandelt.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Kontaktinformationen</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📧</span>
                  <div>
                    <div className="text-sm text-gray-500">E-Mail</div>
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
              <h3 className="text-xl font-bold mb-4">Antwortzeiten</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">E-Mail</span>
                  <span className="font-semibold">Innerhalb von 24 Stunden</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">WhatsApp</span>
                  <span className="font-semibold">Innerhalb von 2 Stunden</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Muster</span>
                  <span className="font-semibold">3–5 Tage</span>
                </div>
              </div>
            </div>

            <div className="card p-6 bg-primary-50">
              <h3 className="text-xl font-bold mb-4 text-primary-900">Tipps für ein schnelles Angebot</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Geschätzte Menge für genaue Preise angeben
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Zielmarkt nennen (EU, USA usw.)
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Individualisierungswünsche spezifizieren (Logo, Verpackung)
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Referenzbilder oder Designs teilen
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
