import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AA Renta a Car',
  description: ' buy a ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=" relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
