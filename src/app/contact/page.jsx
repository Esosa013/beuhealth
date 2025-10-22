import { ArrowLeft, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-50/30">
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </a>
          
          <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12 shadow-sm">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Get in Touch</h1>
            <p className="text-gray-500 mb-8">We're here to help with any questions you have.</p>
            
    <div className="space-y-4">
      <a 
        href="mailto:beuhealth.help@gmail.com"
        className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors duration-200 group"
      >
        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
          <Mail className="w-5 h-5 text-white" />
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-gray-800 mb-0.5">Email</h3>
          <p className="text-blue-600 text-sm font-medium truncate sm:whitespace-normal">
            beuhealth.help@gmail.com
          </p>
        </div>
      </a>
      
      <a 
        href="tel:+2347071040051"
        className="flex items-center gap-3 p-4 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors duration-200 group"
      >
        <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
          <Phone className="w-5 h-5 text-white" />
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-gray-800 mb-0.5">Phone</h3>
          <p className="text-emerald-600 text-sm font-medium truncate sm:whitespace-normal">
            +234 707 104 0051
          </p>
        </div>
      </a>
    </div>

            
            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-800">Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM (WAT)
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
