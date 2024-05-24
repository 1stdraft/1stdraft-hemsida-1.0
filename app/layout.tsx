import Navbar from 'components/Navbar'
import 'tailwindcss/tailwind.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>
        <header>
          <Navbar />
        </header>
        <main className='flex justify-center'>{children}</main>
        </body>
    </html>
  )
}
