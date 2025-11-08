import Link from 'next/link'
import { FileText, ArrowLeft, Info } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Back Button */}
      <Link 
        href="/"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 group transition-colors"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Back to Home</span>
      </Link>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 mb-10 shadow-xl text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl font-bold">Terms of Service</h1>
        </div>
        <p className="text-blue-100 text-lg max-w-2xl">
          These terms govern your use of BeuHealth. Please read them carefully before continuing.
        </p>
      </div>

      {/* Content */}
      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using BeuHealth, you agree to these Terms of Service and our Privacy Policy.
            If you disagree, you should discontinue using the platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Use of the Platform</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You must be at least 18 years old or have parental consent.</li>
            <li>Do not misuse our services or provide false information.</li>
            <li>BeuHealth is not responsible for medical outcomes from misuse of content.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Limitation of Liability</h2>
          <p>
            BeuHealth provides health information for educational purposes only. 
            We are not liable for any damages resulting from the use or inability to use our content or services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Updates to Terms</h2>
          <p>
            We may update these Terms occasionally. Continued use of the site constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 flex items-start gap-3">
          <Info className="w-6 h-6 text-amber-600 mt-1 shrink-0" />
          <p className="text-amber-800">
            For any questions regarding these Terms, contact us at <span className="text-blue-600 font-medium">support@beuhealth.com</span>.
          </p>
        </section>
      </div>
    </div>
  )
}
