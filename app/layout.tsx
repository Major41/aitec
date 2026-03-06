import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AITEC - Nurturing Creative Professionals",
  description:
    "African International Technical College, is a premier educational institution dedicated to providing cutting-edge education in technology and engineering fields.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo.jpeg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo.jpeg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
