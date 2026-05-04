'use client'

import { useState, FormEvent } from 'react'

export default function ContactPageIt() {
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
        setError(result.error || 'Invio del messaggio fallito. Riprova.')
      }
    } catch (err) {
      setError('Errore di rete. Riprova o scrivici direttamente via email.')
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
              Messaggio Inviato con Successo!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Grazie per aver contattato EyeView Sunglasses. 
              Abbiamo ricevuto la tua richiesta e risponderemo entro 24 ore.
            </p>
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-primary-900 mb-2">
                Cosa Succede Ora?
              </h2>
              <p className="text-primary-700">
                Il nostro team esaminerà le tue esigenze e ti invierà un preventivo dettagliato 
                con prezzi, MOQ e tempistiche. Per domande urgenti, 
                contattaci direttamente a jacky@eyeviewsunglasses.com
              </p>
            </div>
            <a href="/it" className="btn-primary inline-block">
              Torna alla Homepage
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
            Richiedi il Tuo Preventivo Gratuito
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto a lanciare il tuo brand di occhiali da sole? Contattaci oggi. 
            Rispondiamo entro 24 ore con prezzi competitivi.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6">Inviaci un Messaggio</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Il Tuo Nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="Mario Rossi"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Azienda
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="La Tua Azienda"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Indirizzo Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="mario@azienda.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Numero di Telefono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="+39 123 456 7890"
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
                    <option value="">Seleziona il tuo interesse</option>
                    <option value="oem">Occhiali da Sole OEM Personalizzati</option>
                    <option value="wholesale">Prodotti all'Ingrosso a Stock</option>
                    <option value="private-label">Private Label</option>
                    <option value="sample">Richiesta Campioni</option>
                    <option value="other">Altra Richiesta</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantità Stimata
                  </label>
                  <select
                    name="quantity"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  >
                    <option value="">Seleziona il range di quantità</option>
                    <option value="100-500">100 - 500 pezzi</option>
                    <option value="500-1000">500 - 1.000 pezzi</option>
                    <option value="1000-5000">1.000 - 5.000 pezzi</option>
                    <option value="5000+">5.000+ pezzi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Parlaci delle tue esigenze: stili, quantità, personalizzazioni, mercato di riferimento, ecc."
                    required
                  />
                </div>

                {submitting && (
                  <div className="text-center text-gray-600">
                    <span className="inline-block animate-spin mr-2">⏳</span>
                    Invio in corso...
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
                  {submitting ? 'Invio in corso...' : 'Invia Messaggio'}
                </button>

                <p className="mt-4 text-sm text-gray-500 text-center">
                  Risponderemo entro 24 ore. Le tue informazioni sono mantenute riservate.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Informazioni di Contatto</h3>
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
              <h3 className="text-xl font-bold mb-4">Tempi di Risposta</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Email</span>
                  <span className="font-semibold">Entro 24 ore</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">WhatsApp</span>
                  <span className="font-semibold">Entro 2 ore</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Campioni</span>
                  <span className="font-semibold">3-5 giorni</span>
                </div>
              </div>
            </div>

            <div className="card p-6 bg-primary-50">
              <h3 className="text-xl font-bold mb-4 text-primary-900">Consigli per un Preventivo Rapido</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Includi la quantità stimata per un prezzo accurato
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Indica il mercato di destinazione (Italia, UE, ecc.)
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Specifica le personalizzazioni (logo, packaging)
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Condividi immagini o design di riferimento
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
