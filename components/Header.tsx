
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-primary text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            JRF Consultoria
          </Link>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-secondary transition">Início</Link></li>
            <li><Link href="/servicos" className="hover:text-secondary transition">Serviços</Link></li>
            <li><Link href="/sobre" className="hover:text-secondary transition">Sobre</Link></li>
            <li><Link href="/blog" className="hover:text-secondary transition">Blog</Link></li>
            <li><Link href="/contato" className="hover:text-secondary transition">Contato</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
