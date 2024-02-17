import type { Metadata } from 'next'
import { Open_Sans as OpenSans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import Link from 'next/link'
import { Whatsapp } from '@/assets/whatsapp'
import { BackToTop } from '@/components/sidebar-link'
import { Footer } from './components/footer'
import { Toaster } from '@/components/ui/sonner'

const openSans = OpenSans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rodrigo Freitas Psicanalista',
  description: 'Rodrigo Freitas Psicanalista',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={openSans.className}>
        <div className="overflow-x-hidden">
          <Header />
          <div className="fixed bottom-10 right-6 z-50 flex flex-col items-center gap-5 md:left-0 md:mx-auto md:items-end md:pr-4">
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=5513997677528&text=Ola Rodrigo! Tenho interesse em iniciar a psicanálise!"
              className="hover:animate-dance"
            >
              <Whatsapp />
            </Link>

            <BackToTop />
          </div>
          {children}
          <Footer />
        </div>
        <Toaster richColors />
      </body>
    </html>
  )
}
