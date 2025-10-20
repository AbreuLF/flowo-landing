import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Book, Video } from 'lucide-react'

const resourceTypes = [
  { name: 'Guias', icon: Book, href: '/recursos/guias', description: 'Aprenda as melhores práticas para sua barbearia' },
  { name: 'Vídeos', icon: Video, href: '/recursos/videos', description: 'Tutoriais e demonstrações em vídeo' },
  // TODO: Implement these resources in the future
  // { name: 'Templates', icon: FileText, href: '/recursos/templates', description: 'Modelos prontos para usar' },
  // { name: 'Comunidade', icon: Users, href: '/recursos/comunidade', description: 'Conecte-se e aprenda com outros barbeiros' },
  // { name: 'API', icon: Code, href: '/recursos/api', description: 'Documentação e recursos para desenvolvedores' },
  // { name: 'Relatórios', icon: BarChart, href: '/recursos/relatorios', description: 'Análises e insights de negócios' },
]

export function ResourceNavigation() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Nossos Recursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourceTypes.map((type) => (
            <Link key={type.name} href={type.href} className="group">
              <div className="bg-gray-50 rounded-lg p-6 transition-all duration-300 group-hover:bg-primary-50 group-hover:shadow-md">
                <div className="flex items-center mb-4">
                  <type.icon className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">{type.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <Button variant="link" className="p-0 group-hover:text-primary">
                  Explorar {type.name}
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

