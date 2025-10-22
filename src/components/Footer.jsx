import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" fill="white" />
            </div>
            <span className="font-bold text-gray-800">BeuHealth</span>
          </div>
          <p className="text-sm text-gray-500">
            © 2025–Present BeuHealth. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-400">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}