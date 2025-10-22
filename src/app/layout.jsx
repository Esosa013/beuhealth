import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'BeuHealth',
  description: 'Community health education — Pidgin & English',
}

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Navbar />
          <main className="mt-6 bg-blue-50/50">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
