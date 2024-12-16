import Image from 'next/image'
import { AnimatedElement } from './animated-element'

const clients = [
  { name: 'Empresa A', logo: '/logo-a.png' },
  { name: 'Empresa B', logo: '/logo-b.png' },
  { name: 'Empresa C', logo: '/logo-c.png' },
  { name: 'Empresa D', logo: '/logo-d.png' },
  { name: 'Empresa E', logo: '/logo-e.png' },
]

export default function ClientLogos() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Empresas que confiam no Flowo</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client, index) => (
            <AnimatedElement key={index}>
              <Image
                src={client.logo}
                alt={`Logo ${client.name}`}
                width={120}
                height={60}
                className="opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}

