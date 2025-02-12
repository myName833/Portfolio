import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Johnny Hsieh',
  description: 'Created with v0',
  generator: 'v0.dev',
  icons:'logo.svg'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
