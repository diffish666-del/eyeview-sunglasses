'use client'

import { useState, FormEvent } from 'react'

export default function ContactPageEs() {
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
        setError(result.error || 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.')
      }
    } catch (err) {
      setError('Error de red. Por favor, inténtalo de nuevo o escríbenos directamente por email.')
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
              ¡Mensaje Enviado con Éxito!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Gracias por contactar a EyeView Sunglasses. 
              Hemos recibido tu consulta y responderemos en un plazo de 24 horas.
            </p>
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-primary-900 mb-2">
                ¿Qué Sigue?
              </h2>
              <p className="text-primary-700">
                Nuestro equipo revisará tus requisitos y te enviará una cotización detallada 
                con precios, MOQ y cronograma. Si tienes preguntas urgentes, 
                no dudes en contactarnos directamente en jacky@eyeviewsunglasses.com
              </p>
            </div>
            <a href="/es" className="btn-primary inline-block">
              Volver al Inicio
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
            Solicita Tu Cotización Gratis
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Listo para iniciar tu marca de gafas de sol? Contáctanos hoy. 
            Respondemos en 24 horas con precios competitivos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tu Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="Juan García"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre de Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="Tu Empresa"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="juan@empresa.com"
                      required
                    />
                    
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="+34 612 345 678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interés *
                  </label>
                  <select
                    name="interest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    required
                  >
                    <option value="">Selecciona tu interés</option>
                    <option value="oem">Gafas de Sol OEM Personalizadas</option>
                    <option value="wholesale">Productos al Por Mayor en Stock</option>
                    <option value="private-label">Marca Blanca</option>
                    <option value="sample">Solicitar Muestras</option>
                    <option value="other">Otra Consulta</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cantidad Estimada
                  </label>
                  <select
                    name="quantity"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  >
                    <option value="">Selecciona rango de cantidad</option>
                    <option value="100-500">100 - 500 piezas</option>
                    <option value="500-1000">500 - 1,000 piezas</option>
                    <option value="1000-5000">1,000 - 5,000 piezas</option>
                    <option value="5000+">5,000+ piezas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Cuéntanos sobre tus requisitos: estilos, cantidades, necesidades de personalización, mercado objetivo, etc."
                    required
                  />
                  
                </div>

                {submitting && (
                  <div className="text-center text-gray-600">
                    <span className="inline-block animate-spin mr-2">⏳</span>
                    Enviando...
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
                  {submitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>

                <p className="mt-4 text-sm text-gray-500 text-center">
                  Responderemos en 24 horas. Tu información se mantiene confidencial.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Información de Contacto</h3>
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
              <h3 className="text-xl font-bold mb-4">Tiempo de Respuesta</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Email</span>
                  <span className="font-semibold">Dentro de 24 horas</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">WhatsApp</span>
                  <span className="font-semibold">Dentro de 2 horas</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Muestras</span>
                  <span className="font-semibold">3-5 días</span>
                </div>
              </div>
            </div>

            <div className="card p-6 bg-primary-50">
              <h3 className="text-xl font-bold mb-4 text-primary-900">Consejos para una Cotización Rápida</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Incluye la cantidad estimada para precios precisos
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Menciona el mercado objetivo (EE.UU., UE, etc.)
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Especifica necesidades de personalización (logo, empaque)
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Comparte imágenes de referencia o diseños
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
