import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  const links = [
    { href: '/', label: 'Αρχική', icon: '🏠' },
    { href: '/traps', label: 'Παγίδες', icon: '🪤' },
    { href: '/development', label: 'Φάσεις', icon: '🧬' },
    { href: '/weather', label: 'Καιρός', icon: '🌤' },
    { href: '/auth', label: 'Είσοδος', icon: '🔐' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-green-700 text-white px-6 py-3 shadow flex items-center justify-between">
      <div className="flex gap-6">
        {links.map(link => (
          <Link key={link.href} href={link.href} legacyBehavior>
            <a
              className={`flex items-center gap-2 font-medium hover:text-blue-200 transition ${
                router.pathname === link.href ? 'text-blue-100' : 'text-white'
              }`}
            >
              <span>{link.icon}</span> {link.label}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  )
}