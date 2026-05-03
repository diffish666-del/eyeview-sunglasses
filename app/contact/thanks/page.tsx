export default function ThanksPage() {
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
              feel free to contact us directly at jackyzhang8508@gmail.com
            </p>
          </div>
          <a
            href="/"
            className="btn-primary inline-block"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </main>
  )
}
