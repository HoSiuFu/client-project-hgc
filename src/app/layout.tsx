import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '@/styles/global.scss'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/Footer';

config.autoAddCss= false

const font = Montserrat({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })

export const metadata: Metadata = {
  title: 'Client Project HGC',
  description: 'This is a project done for a client',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
