"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Router from "next/router";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <ul className="Navbar">
          <li><Link href="/" className={'${router.pathname === "/" ? "active" : ""}'}>Home</Link></li>
          <li><Link href = "/about" className={'${router.pathname === "/about" ? "active" : ""}'}>About</Link></li>
          <li><Link href="/userList">userList</Link></li>
          <li><Link href="/registration">Contact</Link></li>
        </ul>
      </body>
    </html>
  );
}
