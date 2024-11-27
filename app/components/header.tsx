import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            HealthPro
          </Link>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

