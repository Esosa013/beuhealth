'use client'
import { useState } from 'react'
import { Volume2, Square } from 'lucide-react'

export default function TextToSpeech({ text }) {
  const [isSpeaking, setIsSpeaking] = useState(false)

  const handleSpeak = () => {
    if (!text) return
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'en-US' // you can change dynamically if needed
    utterance.rate = 1.0
    utterance.pitch = 1.0

    utterance.onend = () => setIsSpeaking(false)

    // stop any current speech before starting a new one
    window.speechSynthesis.cancel()
    setIsSpeaking(true)
    window.speechSynthesis.speak(utterance)
  }

  const stopSpeaking = () => {
    window.speechSynthesis.cancel()
    setIsSpeaking(false)
  }

  return (
    <button
      onClick={isSpeaking ? stopSpeaking : handleSpeak}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-colors
        ${isSpeaking ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
    >
      {isSpeaking ? <Square className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      {isSpeaking ? 'Stop' : 'Listen'}
    </button>
  )
}
