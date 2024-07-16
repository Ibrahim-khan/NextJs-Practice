"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        {
          pathname !== "/userList" ?
          <ul className="Navbar">
          <li><Link href="/" className={'${pathname === "/" ? "active" : ""}'}>Home</Link></li>
          <li><Link href = "/about" className={'${pathname === "/about" ? "active" : ""}'}>About</Link></li>
          <li><Link href="/userList">userList</Link></li>
          <li><Link href="/registration">Contact</Link></li>
        </ul> : <Link href='/'>Go Home</Link>
        }
      </body>
    </html>
  );
}
