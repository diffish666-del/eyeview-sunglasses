import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { BreadcrumbListSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Coleção de Óculos de Sol no Atacado | Todos los Estilos y Categorías',
  description: 'Explora nossa coleção completa de óculos de sol no atacado: Aviador, Wayfarer, Olho de Gato, Esportivos, Redondos, Crianças, Polarizados, Luz Azul, Ecológicos, Acetato y TR90. Personalização OEM disponível. MOQ 50 peças.',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt/produtos/',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/',
      'pt': 'https://eyeviewsunglasses.com/pt/produtos/',
    },
  },
  openGraph: {
    title: 'Coleção de Óculos de Sol no Atacado | Todos los Estilos',
    description: 'Explora nossa coleção completa de óculos de sol no atacado. Personalização OEM y ODM disponível para todos los estilos.',
    url: 'https://eyeviewsunglasses.com/pt/produtos/',
    locale: 'pt_BR',
  },
};

const products = [
  {
    name: 'Óculos de Sol Aviador',
    href: '/pt/produtos/aviador/',
    emoji: '✈️',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
    keywords: 'óculos de sol aviador no atacado',
    description: 'El design aviador atemporal con armações clásicos de metal en forma de gota. Originalmente diseñados para pilotos, ahora un ícono de moda global. Disponívels en armações dorado, plateado, gunmetal y oro rosa con una amplia selección de colores de lentes incluindo degradado, espejado y polarizado. Perfectos para colecciones no atacado masculinas y unisex.',
    moq: 'MOQ: 50 pares',
    price: 'A partir de $2.50/par',
  },
  {
    name: 'Óculos de Sol Wayfarer',
    href: '/pt/produtos/wayfarer/',
    emoji: '🎸',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop',
    keywords: 'óculos de sol wayfarer no atacado',
    description: 'La icónica silueta wayfarer fabricada en acetato premium. Este estilo universalmente favorecedor ha sido un best-seller durante décadas. Disponível en colores sólidos, patrones carey y armações transparentes. Ideal para tiendas retail, marcas online y regalos promocionales.',
    moq: 'MOQ: 50 pares',
    price: 'A partir de $2.00/par',
  },
  {
    name: 'Óculos de Sol Olho de Gato',
    href: '/pt/produtos/olho-de-gato/',
    emoji: '😺',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&h=300&fit=crop',
    keywords: 'óculos de sol olho de gato no atacado',
    description: 'Armações olho de gato audaces y femeinfantil que dominan el mercado de óculos de moda femenina. Disponívels en variaciones oversized, clásicas y sutiles con opciones de adorno incluindo cristales, acentos metálicos y acabados degradados. Imprescindibles para cualquier marca de accesorios femeinfantil.',
    moq: 'MOQ: 50 pares',
    price: 'A partir de $2.30/par',
  },
  {
    name: 'Óculos de Sol Esportivos',
    href: '/pt/produtos/esportivo/',
    emoji: '🚴',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=400&h=300&fit=crop',
    keywords: 'óculos de sol esportivos no atacado',
    description: 'Óculos esportivos envolventes de alto rendimiento diseñadas para estilos de vida activos. Fabricadas con armações resistentes a impactos de TR90 y policarbonato, almofadas nasales de goma y puntas de haste antideslizantes. Ideales para marcas de ciclismo, running, pesca, golf y recreación al aire libre.',
    moq: 'MOQ: 100 pares',
    price: 'A partir de $3.00/par',
  },
  {
    name: 'Óculos de Sol Redondos',
    href: '/pt/produtos/redondo/',
    emoji: '🔵',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop',
    keywords: 'óculos de sol redondos no atacado',
    description: 'Armações redondos de inspiración vintage con una estética retro atemporal. Disponívels en construcciones de metal y acetato con opciones que van a partir de círculos pequeños estilo John Lennon hasta armações redondos oversized. Populares en marcas de moda vanguardista y merchandising de festivales.',
    moq: 'MOQ: 50 pares',
    price: 'A partir de $2.00/par',
  },
  {
    name: 'Óculos de Sol para Crianças',
    href: '/pt/produtos/infantil/',
    emoji: '👶',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=400&h=300&fit=crop',
    keywords: 'óculos de sol para crianças no atacado',
    description: 'Óculos seguras, duraderas y coloridas diseñadas específicamente para crianças de 3 a 12 anos. Fabricadas con materiales flexibles y libres de BPA que resisten el uso brusco. Proteção UV400 con lentes irrompibles. Disponívels en colores divertidos, temas de personajes y designs apropiados para cada edad.',
    moq: 'MOQ: 100 pares',
    price: 'A partir de $1.50/par',
  },
  {
    name: 'Óculos de Sol Polarizados',
    href: '/pt/produtos/polarizado/',
    emoji: '🌊',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
    keywords: 'óculos de sol polarizados no atacado',
    description: 'Óculos polarizados premium con lentes TAC que eliminan el resplandor del agua, nieve y superficies de carretera. Disponívels en todos los estilos de armação incluindo aviador, wayfarer, esportivo y envolvente. Esenciales para marcas de actividades al aire libre, pesca y conducción.',
    moq: 'MOQ: 100 pares',
    price: 'A partir de $3.50/par',
  },
  {
    name: 'Óculos con Filtro de Luz Azul',
    href: '/pt/produtos/luz-azul/',
    emoji: '💻',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop',
    keywords: 'óculos de luz azul no atacado',
    description: 'Óculos de proteção ocular digital con tecnología avanzada de filtrado de luz azul. Bloquean 30-50% de la luz azul dañina de pantallas de computadora, smartphones e iluminación LED. Disponívels en armações con y sin prescripción. Demanda creciente de marcas corporativas, gaming y bienestar.',
    moq: 'MOQ: 50 pares',
    price: 'A partir de $2.50/par',
  },
  {
    name: 'Óculos de Sol Ecológicos',
    href: '/pt/produtos/ecologico/',
    emoji: '🌱',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=400&h=300&fit=crop',
    keywords: 'fabricante de óculos de sol sostenibles',
    description: 'Óculos sostenibles fabricadas con plástico oceánico reciclado (rPET), bambú, bio-acetato y aluminio reciclado. Perfectas para marcas dirigidas a consumidores eco-conscientes. Posicionamiento retail premium creciente del 30-50%.',
    moq: 'MOQ: 100 pares',
    price: 'A partir de $3.00/par',
  },
  {
    name: 'Óculos de Sol de Acetato',
    href: '/pt/produtos/acetato/',
    emoji: '🎨',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop',
    keywords: 'fabricante de óculos de acetato',
    description: 'Armações de acetato artesanales en carey, cristal, mármol y patrones personalizados. Acetato premium italiano Mazzucchelli y acetato chino de alta qualidade disponívels. Corte CNC y pulido a mano para un acabado de lujo.',
    moq: 'MOQ: 100 pares',
    price: 'A partir de $4.00/par',
  },
  {
    name: 'Óculos de Sol TR90',
    href: '/pt/produtos/tr90/',
    emoji: '🏋️',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop',
    keywords: 'fabricante de óculos TR90',
    description: 'Armações ultraligeros de nylon TR90 (15-20g) con flexibilidad de memoria y propiedades hipoalergénicas. Fabricados con Grilamid de EMS-Grivory suizo. Ideales para líneas esportivos, infantiles y de uso diario.',
    moq: 'MOQ: 100 pares',
    price: 'A partir de $2.50/par',
  },
];

export default function ProductsPagePt() {
  return (
    <>
      <BreadcrumbListSchema items={[
        { name: 'Início', url: 'https://eyeviewsunglasses.com/pt' },
        { name: 'Produtos', url: 'https://eyeviewsunglasses.com/pt/produtos' },
      ]} />

      <Breadcrumb items={[
        { name: 'Início', href: '/pt/' },
        { name: 'Produtos' },
      ]} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Coleção de Óculos de Sol no Atacado</h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Explora nossa gama completa de estilos de óculos de sol no atacado. Como fabricante profesional de óculos, ofrecemos personalização completa OEM y ODM para cada categoría. Todos los armações están disponívels con branding personalizado, opciones de lentes y embalagem a la medida de tu marca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 border group flex gap-6"
              >
                {product.image ? (
                  <img src={product.image} alt={`${product.name} no Atacado - EyeView`} loading="lazy" className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
                ) : (
                  <span className="text-6xl flex-shrink-0">{product.emoji}</span>
                )}
                <div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">{product.name}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{product.description}</p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-primary-600 font-semibold">{product.moq}</span>
                    <span className="text-green-600 font-semibold">{product.price}</span>
                  </div>
                  <span className="inline-block mt-3 text-primary-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Ver Detalhes →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Precisa de Óculos de Sol Personalizadas no Atacado?"
        description="Cuéntanos tus requisitos y te proporcionaremos una cotización detallada en 24 horas. Todos los estilos son totalmente personalizables con tu marca."
        primaryText="Orçamento Grátis"
        primaryHref="/pt/contato"
        secondaryText="Ver Produtos"
        secondaryHref="/pt/produtos"
      />
    </>
  );
}
