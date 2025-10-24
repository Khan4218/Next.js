export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body>
       <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>add</li>
          </ul>
        </nav>
       </header>
        {children}
      <footer>This is a footer</footer>
      </body>
    </html>
  )
}