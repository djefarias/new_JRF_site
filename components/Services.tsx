
export default function Services() {
  const services = [
    {
      title: 'Consultoria em Segurança',
      description: 'Análise e implementação de políticas de segurança da informação',
      icon: '🔒'
    },
    {
      title: 'Auditoria de Sistemas',
      description: 'Avaliação completa de infraestrutura e processos de TI',
      icon: '🔍'
    },
    {
      title: 'Gestão de Riscos',
      description: 'Identificação e mitigação de riscos de segurança',
      icon: '⚠️'
    },
    {
      title: 'Compliance e LGPD',
      description: 'Adequação às normas e regulamentações de proteção de dados',
      icon: '📋'
    },
    {
      title: 'Treinamento',
      description: 'Capacitação de equipes em segurança da informação',
      icon: '🎓'
    },
    {
      title: 'Suporte Técnico',
      description: 'Suporte especializado em infraestrutura e segurança',
      icon: '🛠️'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
