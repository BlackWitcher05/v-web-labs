import { ProductCard } from '../components/ProductCard'
import { useStore } from '../store/store'

export const MainPage = () => {
  const searchTerm = useStore((state) => state.searchTerm)
  const allProducts = useStore((state) => state.products)
  
  const filteredProducts =
    !searchTerm ? allProducts : allProducts.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))

  
  const filteredHoodies = filteredProducts.filter(p => p.name.toLowerCase().includes('смартфон'))
  const filteredShorts = filteredProducts.filter(p => p.name.toLowerCase().includes('наушники'))

  return (
    <div className='min-h-screen bg-bg p-4 md:p-8'>
      <div className='container mx-auto'>

        <section className='mb-12'>
          <div className='mb-6 flex items-center gap-4'>
            <div className='h-0.5 w-16 bg-linear-to-r from-primary to-primary-light'></div>
            <h2 className='text-3xl font-bold bg-linear-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent'>
              Смартфон
            </h2>
          </div>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6'>
            {filteredHoodies.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section>
          <div className='mb-6 flex items-center gap-4'>
            <div className='h-0.5 w-16 bg-linear-to-r from-secondary to-primary'></div>
            <h2 className='text-3xl font-bold bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent'>
              Наушники
            </h2>
          </div>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6'>
            {filteredShorts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};