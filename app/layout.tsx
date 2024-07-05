import 'tailwindcss/tailwind.css'

import Navbar from 'components/Navbar'
import SmoothScroller from 'components/SmoothScroller'


import type { Metadata } from 'next'
import { getSettings } from 'sanity-utils';

const settings = await getSettings();
 
export const metadata: Metadata = {
  title: {
    template: '%s | 1stdraft',
    default: '1stdraft'
  },
  description: settings.description,
  metadataBase: new URL('http://1stdraft.eu'),

  openGraph: {
    title: '1stdraft',

  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <header>
          </header>
            <main>
            {children}
            </main>
          <footer className='py-5'>
            <p className='text-center align'>© 1stdraft 2024</p>
          </footer>
      </body>
    </html>
  )
}
