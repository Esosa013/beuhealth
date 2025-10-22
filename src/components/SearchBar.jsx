import { Search, X } from 'lucide-react';

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        {/* Search Icon */}
        <div className="absolute left-4 pointer-events-none">
          <Search className="w-5 h-5 text-blue-400" />
        </div>
        
        {/* Input Field */}
        <input 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search diseases, symptoms..." 
          className="w-full pl-12 pr-12 py-4 text-gray-700 placeholder-gray-400 bg-white rounded-2xl border-2 border-gray-100 shadow-sm transition-all duration-200 ease-out focus:outline-none focus:border-blue-400 focus:shadow-lg focus:shadow-blue-100/50 hover:border-gray-200"
        />
        
        {/* Clear Button */}
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200 rounded-full hover:bg-gray-100"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      
      {/* Subtle bottom accent line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-focus-within:w-full"></div>
    </div>
  );
}