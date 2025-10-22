'use client'

import { useEffect, useState, use } from 'react'
import Link from 'next/link'
import SearchBar from '@/components/SearchBar'
import { diseaseData, englishDiseaseData } from '@/data/disease'
import { ArrowLeft, FileText, Search as SearchIcon } from 'lucide-react'

export default function DiseasesPage({ searchParams }) {
  const params = use(searchParams)
  const lang = params?.lang || 'english'
  const data = lang === "pidgin" ? diseaseData : englishDiseaseData
  const [query, setQuery] = useState('')

  const items = Object.entries(data || {}).filter(([k, v]) => {
    if (!query) return true
    const q = query.toLowerCase()
    const title = (v && v.title) ? v.title.toLowerCase() : ''
    return k.toLowerCase().includes(q) || title.includes(q)
  })

  return (
    <div className="max-w-4xl mx-auto py-8 px-2 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Back to Home</span>
        </Link>
        
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 capitalize">
              {lang} Diseases
            </h1>
            <p className="text-gray-500 mt-1">
              {items.length} {items.length === 1 ? 'disease' : 'diseases'} available
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <SearchBar query={query} setQuery={setQuery} />
      </div>

      {/* Results */}
      <div className="space-y-3">
        {items.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <SearchIcon className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-500 text-sm">
              Try searching with different keywords
            </p>
          </div>
        ) : (
          items.slice(0, 200).map(([key, val]) => (
            <Link 
              key={key} 
              href={`/disease/${lang}/${encodeURIComponent(key)}`}
              className="block bg-white p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {val.title || key}
                  </h3>
                  {val.comment && (
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {Array.isArray(val.comment) ? val.comment[0] : val.comment}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* Show "Showing X of Y" if results are limited */}
      {items.length > 200 && (
        <div className="mt-6 text-center text-sm text-gray-500">
          Showing 200 of {items.length} results
        </div>
      )}
    </div>
  )
}