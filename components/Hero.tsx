
export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          JRF Consultoria em Tecnologia e Segurança da Informação
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Soluções especializadas em tecnologia e segurança da informação para proteger e impulsionar seu negócio
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="/contato" 
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Entre em Contato
          </a>
          <a 
            href="/servicos" 
            className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
          >
            Nossos Serviços
          </a>
        </div>
      </div>
    </section>
  )
}
