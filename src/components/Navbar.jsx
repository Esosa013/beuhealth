import Link from 'next/link'
import { Heart, Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Heart className="w-6 h-6 text-blue-600" strokeWidth={2.5} />
            <span className="font-semibold text-lg text-gray-900">BeuHealth</span>
          </Link>
          
          {/* Nav Links */}
          <div className="flex items-center gap-1">
            <Link 
              href="/about" 
              className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}