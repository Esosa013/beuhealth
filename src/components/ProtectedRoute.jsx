'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ProtectedRoute({ children }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const user = localStorage.getItem('beuhealthUser')

    if (!user) {
      router.push('/login') // redirect to login if no user
    } else {
      setLoading(false)
    }
  }, [router])

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-blue-600">
        Checking session...
      </div>
    )
  }

  return <>{children}</>
}
