import Navbar from 'components/Navbar'
import 'tailwindcss/tailwind.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='max-w-3xl mx-auto'>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        </body>
    </html>
  )
}
