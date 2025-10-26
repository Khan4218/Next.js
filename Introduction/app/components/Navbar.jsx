"use client"
import Link from "next/link"
import  {usePathname} from "next/navigation"


export default function Navbar() {
 const pathName = usePathname()
 console.log(pathName);
 
    return(
        <nav>
          <ul>
            <li><Link href="/" className={pathName === "/" ? "is-active" : null}>Home</Link></li>
            <li> <Link href="/about" className={pathName === "/about" ? "is-active" : null}>About</Link></li>
            <li> <Link href="/products" className={pathName === "/products" ? "is-active" : null}>Products</Link></li>
            <li><Link href="/posts" className={pathName === "/posts" ? "is-active" : null}>Posts</Link></li>
          </ul>
        </nav>
    )
}