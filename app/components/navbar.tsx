import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className='"h-screen flex items-center justify-center gap-[16px]'>
        <Link href='/' >About</Link>
        |
        <Link href='/projects' >Projects</Link>
        {/* <a href='/projects/copy' >Projects</a> */}
        |
        <Link href='/cv' >CV</Link>
    </nav>
  )
}