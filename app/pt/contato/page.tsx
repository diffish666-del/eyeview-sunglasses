'use client'

import { useState, FormEvent } from 'react'

export default function ContactPagePt() {
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
        setError(result.error || 'Erro ao enviar el mensaje. Por favor, tente novamente.')
      }
    } catch (err) {
      setError('Erro de rede. Por favor, tente novamente o escreva-nos diretamente por email.')
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
              ¡Mensagem Enviado con Éxito!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Obrigado por entrar em contato com a EyeView Sunglasses. 
              Recebemos sua consulta y responderemos em até 24 horas.
            </p>
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-primary-900 mb-2">
                Próximos Passos
              </h2>
              <p className="text-primary-700">
                Nosso equipo revisará tus requisitos y te enviará una cotización detallada 
                con preços, MOQ y cronograma. Si tienes preguntas urgentes, 
                no dudes en contactarnos directamente en jacky@eyeviewsunglasses.com
              </p>
            </div>
            <a href="/pt" className="btn-primary inline-block">
              Volver al Início
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
            Solicita Tu Orçamento Grátis
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para iniciar tu marca de óculos de sol? Entre em Contato hoy. 
            Respondemos em 24 horas con preços competitivos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6">Envíanos un Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="João Silva"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome da Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="Sua Empresa"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="joao@empresa.com"
                      required
                    />
                    
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="+55 11 99999-9999"
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
                    <option value="">Selecione tu interés</option>
                    <option value="oem">Óculos de Sol OEM Personalizadas</option>
                    <option value="wholesale">Produtos no Atacado en Stock</option>
                    <option value="private-label">Marca Própria</option>
                    <option value="sample">Solicitar Amostras</option>
                    <option value="other">Outra Consulta</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantidade Estimada
                  </label>
                  <select
                    name="quantity"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  >
                    <option value="">Selecione rango de cantidad</option>
                    <option value="100-500">100 - 500 peças</option>
                    <option value="500-1000">500 - 1,000 peças</option>
                    <option value="1000-5000">1,000 - 5,000 peças</option>
                    <option value="5000+">5,000+ peças</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Conte-nos sobre seus requisitos: estilos, cantidades, necesidades de personalização, mercado objetivo, etc."
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
                  {submitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>

                <p className="mt-4 text-sm text-gray-500 text-center">
                  Responderemos en 24 horas. Suas informações são mantidas em sigilo.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Información de Contato</h3>
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
              <h3 className="text-xl font-bold mb-4">Tempo de Resposta</h3>
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
                  <span className="text-gray-600">Amostras</span>
                  <span className="font-semibold">3-5 dias</span>
                </div>
              </div>
            </div>

            <div className="card p-6 bg-primary-50">
              <h3 className="text-xl font-bold mb-4 text-primary-900">Dicas para una Cotización Rápida</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Incluye la cantidad estimada para preços precisos
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Mencione o mercado-alvo (EUA, UE, etc.)
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Especifica necesidades de personalização (logo, embalagem)
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Comparte imágenes de referencia o designs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
