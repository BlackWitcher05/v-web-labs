import { Link } from 'react-router'
import { Heart } from 'lucide-react'

import { ProductCard } from '../components/ProductCard'
import { useStore } from '../store/store'

export const FavoritesPage = () => {
  const favorites = useStore((state) => state.favorites)
  const allProducts = useStore((state) => state.products)

  const favoriteProducts = allProducts.filter((p) => favorites.includes(p.id))

  return (
    <div className='min-h-screen bg-bg p-4 md:p-8'>
      <div className='container mx-auto'>
        <div className='mb-8'>
          <h1 className='mb-2 text-3xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent'>
            Избранное
          </h1>
          <p className='text-zinc-400'>Ваши сохраненные товары</p>
        </div>
        
        {favoriteProducts.length > 0 ? (
          <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6'>
            {favoriteProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-bg-secondary py-16'>
            <div className='mb-6 rounded-full bg-tertiary p-6'>
              <span className='text-4xl'>
                <Heart />
              </span>
            </div>
            <p className='mb-4 text-xl font-medium text-zinc-300'>У вас нет избранных товаров</p>
            <p className='mb-8 text-center text-zinc-500'>
              Добавляйте товары в избранное, чтобы не потерять
            </p>
            <Link
              to='/'
              className='rounded-xl bg-linear-to-r from-primary to-primary-light px-8 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/25'
            >
              На главную
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}