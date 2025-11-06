
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">JRF Consultoria</h3>
            <p className="text-gray-300">
              Tecnologia e Segurança da Informação LTDA
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/servicos" className="text-gray-300 hover:text-white">Serviços</a></li>
              <li><a href="/sobre" className="text-gray-300 hover:text-white">Sobre</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="/contato" className="text-gray-300 hover:text-white">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="text-gray-300">
              Email: contato@jrfconsultoria.com.br<br />
              Telefone: (11) 9999-9999
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} JRF Consultoria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
