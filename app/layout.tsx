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
      <body>
        <SmoothScroller>
          <header>
            {/* <Navbar /> */}
          </header>
            <main>
            {children}
            </main>
          <footer className='py-5'>
            <p className='text-center align'>© 1stdraft 2024</p>
          </footer>
        </SmoothScroller>
      </body>
    </html>
  )
}
