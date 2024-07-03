import 'tailwindcss/tailwind.css'

import Navbar from 'components/Navbar'
import SmoothScroller from 'components/SmoothScroller'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>
        <SmoothScroller>
          <header>
            <Navbar />
          </header>
            <main className=''>
            {children}
            </main>
          <footer>
            <p className='text-center'>© 1stdraft 2024</p>
          </footer>
        </SmoothScroller>
      </body>
    </html>
  )
}
