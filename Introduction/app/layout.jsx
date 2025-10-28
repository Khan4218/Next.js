"use client"

import Navbar from "./components/Navbar"
import "./global.css"

export default function RootLayout({ children }) {
  console.log("RootLayout:", `${typeof window === "undefined" ? "Server" : "Client"} component`)
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