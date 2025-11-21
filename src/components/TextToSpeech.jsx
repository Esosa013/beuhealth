'use client'
import { useEffect, useState } from 'react'
import { Volume2, Square } from 'lucide-react'

export default function TextToSpeech({ text }) {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [voice, setVoice] = useState(null)

  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices()

      const preferred = [
        'Google UK English Male',
        'Google UK English Female',
        'English (UK)',
        'en-GB',
      ]

      const found = voices.find(v => preferred.includes(v.name)) ||
                    voices.find(v => v.lang === 'en-GB') ||
                    voices.find(v => v.lang.startsWith('en')) ||
                    voices[0]

      setVoice(found)
    }

    loadVoices()
    window.speechSynthesis.onvoiceschanged = loadVoices
  }, [])

  const handleSpeak = () => {
    if (!text) return
    const utterance = new SpeechSynthesisUtterance(text)

    if (voice) {
      utterance.voice = voice
      utterance.lang = voice.lang
    } else {
      utterance.lang = 'en-GB'
    }

    utterance.rate = 1.0
    utterance.pitch = 1.0

    utterance.onend = () => setIsSpeaking(false)

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
