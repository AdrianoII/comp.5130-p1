"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const pathname = usePathname()
  return (
    <nav className="mt-4 text-accent flex items-center justify-center">
      <div role="tablist" className="tabs tabs-lift tabs-xl">
        <Link href="/" role="tab" className={`tab ${pathname === "/" ? "tab-active" : ""}`}>About</Link>
        <Link href="/projects" role="tab" className={`tab ${pathname.startsWith("/projects") ? "tab-active" : ""}`}>Projects</Link>
        <Link href="/cv" role="tab" className={`tab ${pathname === "/cv" ? "tab-active" : ""}`}>CV</Link>
      </div>
    </nav>
  )
}