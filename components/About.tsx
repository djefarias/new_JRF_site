
export default function About() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Sobre a JRF Consultoria</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              A JRF Consultoria em Tecnologia e Segurança da Informação LTDA é uma empresa especializada 
              em fornecer soluções completas para proteção e gestão de ativos digitais.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Com anos de experiência no mercado, nossa equipe de especialistas está preparada para 
              atender empresas de todos os portes, oferecendo consultoria personalizada e soluções 
              sob medida para cada necessidade.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-gray-600">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Projetos Concluídos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
