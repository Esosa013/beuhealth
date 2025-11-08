import Link from 'next/link'
import { Shield, ArrowLeft, Info } from 'lucide-react'

export default function PrivacyPage() {
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
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>
        <p className="text-blue-100 text-lg max-w-2xl">
          Your privacy matters to us. Learn how BeuHealth collects, uses, and protects your information.
        </p>
      </div>

      {/* Content */}
      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide, such as your name, email address, and health-related details when you use our services. 
            We also collect non-personal data like browser type, device information, and site usage statistics to improve user experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and improve our services</li>
            <li>To personalize user experience</li>
            <li>To communicate with you about updates or support</li>
            <li>To ensure the safety and security of our platform</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Data Protection</h2>
          <p>
            We use encryption and secure servers to protect your data from unauthorized access or disclosure. 
            Access to personal data is limited to authorized personnel only.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Your Rights</h2>
          <p>
            You have the right to access, modify, or delete your personal data. 
            Contact us at <span className="text-blue-600 font-medium">support@beuhealth.com</span> for data requests.
          </p>
        </section>

        <section className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 flex items-start gap-3">
          <Info className="w-6 h-6 text-amber-600 mt-1 shrink-0" />
          <p className="text-amber-800">
            This Privacy Policy may be updated periodically. Check this page for the latest version.
          </p>
        </section>
      </div>
    </div>
  )
}
