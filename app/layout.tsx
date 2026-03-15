import type { Metadata } from 'next'
import { Inter, Eczar } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadCaptureLightbox from '@/components/LeadCaptureLightbox'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const eczar = Eczar({ subsets: ['latin'], variable: '--font-eczar' })

export const metadata: Metadata = {
    title: 'Trombay Trading | Premium Leather Manufacturing',
    description: 'Trombay Trading is a leading B2B supplier and manufacturer of premium leather goods, committed to quality and sustainability.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${eczar.variable} font-sans bg-brand-50 text-brand-900 min-h-screen flex flex-col`}>
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
                <LeadCaptureLightbox />
            </body>
        </html>
    )
}

