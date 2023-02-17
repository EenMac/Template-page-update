import './globals.css'
import NavBar from '@/components/navBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <NavBar/>
      <body>{children}</body>
    </html>
  )
}
