import { ArrowLeft, Heart } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-50/30">
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </a>
          
          <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12 shadow-sm">
            <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
              <Heart className="w-8 h-8 text-white" fill="white" />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-800 mb-6">About BeuHealth</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                BeuHealth is a community-focused health app that provides simple health information in English and Nigerian Pidgin.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-blue-50 rounded-xl">
                  <h3 className="font-semibold text-gray-800 mb-2">Our Mission</h3>
                  <p className="text-gray-600 text-sm">Making health information accessible to everyone in their preferred language.</p>
                </div>
                <div className="p-6 bg-blue-50 rounded-xl">
                  <h3 className="font-semibold text-gray-800 mb-2">Our Vision</h3>
                  <p className="text-gray-600 text-sm">A healthier Nigeria through accessible health education.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
