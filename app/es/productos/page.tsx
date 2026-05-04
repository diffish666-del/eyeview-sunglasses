import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { BreadcrumbListSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Colección de Gafas de Sol al Por Mayor | Todos los Estilos y Categorías',
  description: 'Explora nuestra colección completa de gafas de sol al por mayor: Aviador, Wayfarer, Ojo de Gato, Deportivas, Redondas, Niños, Polarizadas, Luz Azul, Ecológicas, Acetato y TR90. Personalización OEM disponible. MOQ 50 piezas.',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/es/productos/',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/',
      'es': 'https://eyeviewsunglasses.com/es/productos/',
    },
  },
  openGraph: {
    title: 'Colección de Gafas de Sol al Por Mayor | Todos los Estilos',
    description: 'Explora nuestra colección completa de gafas de sol al por mayor. Personalización OEM y ODM disponible para todos los estilos.',
    url: 'https://eyeviewsunglasses.com/es/productos/',
    locale: 'es_ES',
  },
};

const products = [
  {
    name: 'Gafas de Sol Aviador',
    href: '/es/productos/aviador/',
    emoji: '✈️',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
    keywords: 'gafas de sol aviador al por mayor',
    description: 'El diseño aviador atemporal con armazones clásicos de metal en forma de gota. Originalmente diseñados para pilotos, ahora un ícono de moda global. Disponibles en armazones dorado, plateado, gunmetal y oro rosa con una amplia selección de colores de lentes incluyendo degradado, espejado y polarizado. Perfectos para colecciones al por mayor masculinas y unisex.',
    moq: 'MOQ: 50 pares',
    price: 'Desde $2.50/par',
  },
  {
    name: 'Gafas de Sol Wayfarer',
    href: '/es/productos/wayfarer/',
    emoji: '🎸',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop',
    keywords: 'gafas de sol wayfarer al por mayor',
    description: 'La icónica silueta wayfarer fabricada en acetato premium. Este estilo universalmente favorecedor ha sido un best-seller durante décadas. Disponible en colores sólidos, patrones carey y armazones transparentes. Ideal para tiendas retail, marcas online y regalos promocionales.',
    moq: 'MOQ: 50 pares',
    price: 'Desde $2.00/par',
  },
  {
    name: 'Gafas de Sol Ojo de Gato',
    href: '/es/productos/ojo-de-gato/',
    emoji: '😺',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&h=300&fit=crop',
    keywords: 'gafas de sol ojo de gato al por mayor',
    description: 'Armazones ojo de gato audaces y femeninos que dominan el mercado de gafas de moda femenina. Disponibles en variaciones oversized, clásicas y sutiles con opciones de adorno incluyendo cristales, acentos metálicos y acabados degradados. Imprescindibles para cualquier marca de accesorios femeninos.',
    moq: 'MOQ: 50 pares',
    price: 'Desde $2.30/par',
  },
  {
    name: 'Gafas de Sol Deportivas',
    href: '/es/productos/deportivo/',
    emoji: '🚴',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=400&h=300&fit=crop',
    keywords: 'gafas de sol deportivas al por mayor',
    description: 'Gafas deportivas envolventes de alto rendimiento diseñadas para estilos de vida activos. Fabricadas con armazones resistentes a impactos de TR90 y policarbonato, almohadillas nasales de goma y puntas de patilla antideslizantes. Ideales para marcas de ciclismo, running, pesca, golf y recreación al aire libre.',
    moq: 'MOQ: 100 pares',
    price: 'Desde $3.00/par',
  },
  {
    name: 'Gafas de Sol Redondas',
    href: '/es/productos/redondo/',
    emoji: '🔵',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop',
    keywords: 'gafas de sol redondas al por mayor',
    description: 'Armazones redondos de inspiración vintage con una estética retro atemporal. Disponibles en construcciones de metal y acetato con opciones que van desde círculos pequeños estilo John Lennon hasta armazones redondos oversized. Populares en marcas de moda vanguardista y merchandising de festivales.',
    moq: 'MOQ: 50 pares',
    price: 'Desde $2.00/par',
  },
  {
    name: 'Gafas de Sol para Niños',
    href: '/es/productos/ninos/',
    emoji: '👶',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=400&h=300&fit=crop',
    keywords: 'gafas de sol para niños al por mayor',
    description: 'Gafas seguras, duraderas y coloridas diseñadas específicamente para niños de 3 a 12 años. Fabricadas con materiales flexibles y libres de BPA que resisten el uso brusco. Protección UV400 con lentes irrompibles. Disponibles en colores divertidos, temas de personajes y diseños apropiados para cada edad.',
    moq: 'MOQ: 100 pares',
    price: 'Desde $1.50/par',
  },
  {
    name: 'Gafas de Sol Polarizadas',
    href: '/es/productos/polarizado/',
    emoji: '🌊',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
    keywords: 'gafas de sol polarizadas al por mayor',
    description: 'Gafas polarizadas premium con lentes TAC que eliminan el resplandor del agua, nieve y superficies de carretera. Disponibles en todos los estilos de armazón incluyendo aviador, wayfarer, deportivo y envolvente. Esenciales para marcas de actividades al aire libre, pesca y conducción.',
    moq: 'MOQ: 100 pares',
    price: 'Desde $3.50/par',
  },
  {
    name: 'Gafas con Filtro de Luz Azul',
    href: '/es/productos/luz-azul/',
    emoji: '💻',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop',
    keywords: 'gafas de luz azul al por mayor',
    description: 'Gafas de protección ocular digital con tecnología avanzada de filtrado de luz azul. Bloquean 30-50% de la luz azul dañina de pantallas de computadora, smartphones e iluminación LED. Disponibles en armazones con y sin prescripción. Demanda creciente de marcas corporativas, gaming y bienestar.',
    moq: 'MOQ: 50 pares',
    price: 'Desde $2.50/par',
  },
  {
    name: 'Gafas de Sol Ecológicas',
    href: '/es/productos/ecologico/',
    emoji: '🌱',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=400&h=300&fit=crop',
    keywords: 'fabricante de gafas de sol sostenibles',
    description: 'Gafas sostenibles fabricadas con plástico oceánico reciclado (rPET), bambú, bio-acetato y aluminio reciclado. Perfectas para marcas dirigidas a consumidores eco-conscientes. Posicionamiento retail premium creciente del 30-50%.',
    moq: 'MOQ: 100 pares',
    price: 'Desde $3.00/par',
  },
  {
    name: 'Gafas de Sol de Acetato',
    href: '/es/productos/acetato/',
    emoji: '🎨',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop',
    keywords: 'fabricante de gafas de acetato',
    description: 'Armazones de acetato artesanales en carey, cristal, mármol y patrones personalizados. Acetato premium italiano Mazzucchelli y acetato chino de alta calidad disponibles. Corte CNC y pulido a mano para un acabado de lujo.',
    moq: 'MOQ: 100 pares',
    price: 'Desde $4.00/par',
  },
  {
    name: 'Gafas de Sol TR90',
    href: '/es/productos/tr90/',
    emoji: '🏋️',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop',
    keywords: 'fabricante de gafas TR90',
    description: 'Armazones ultraligeros de nylon TR90 (15-20g) con flexibilidad de memoria y propiedades hipoalergénicas. Fabricados con Grilamid de EMS-Grivory suizo. Ideales para líneas deportivas, infantiles y de uso diario.',
    moq: 'MOQ: 100 pares',
    price: 'Desde $2.50/par',
  },
];

export default function ProductsPageEs() {
  return (
    <>
      <BreadcrumbListSchema items={[
        { name: 'Inicio', url: 'https://eyeviewsunglasses.com/es' },
        { name: 'Productos', url: 'https://eyeviewsunglasses.com/es/productos' },
      ]} />

      <Breadcrumb items={[
        { name: 'Inicio', href: '/es/' },
        { name: 'Productos' },
      ]} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Colección de Gafas de Sol al Por Mayor</h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Explora nuestra gama completa de estilos de gafas de sol al por mayor. Como fabricante profesional de gafas, ofrecemos personalización completa OEM y ODM para cada categoría. Todos los armazones están disponibles con branding personalizado, opciones de lentes y empaque a la medida de tu marca.
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
                  <img src={product.image} alt={`${product.name} al Por Mayor - EyeView`} loading="lazy" className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
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
                    Ver Detalles →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Necesitas Gafas de Sol Personalizadas al Por Mayor?"
        description="Cuéntanos tus requisitos y te proporcionaremos una cotización detallada en 24 horas. Todos los estilos son totalmente personalizables con tu marca."
        primaryText="Cotización Gratis"
        primaryHref="/es/contacto"
        secondaryText="Ver Productos"
        secondaryHref="/es/productos"
      />
    </>
  );
}
