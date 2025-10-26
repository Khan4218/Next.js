import Navbar from "./components/Navbar"
import "./global.css"
import Link from 'next/link'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body>
       <header>
        <Navbar />
       </header>
        <main>{children}</main>
      <footer>This is a footer</footer>
      </body>
    </html>
  )
}