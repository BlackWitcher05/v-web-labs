import React from 'react'
import { Heart } from 'lucide-react'

import type { IProduct } from '../types/product.type'
import { useStore } from '../store/store'


interface Props {
  product: IProduct
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const addToCart = useStore((state) => state.addToCart)
  const toggleFavorite = useStore((state) => state.toggleFavorite)
  const items = useStore((state) => state.items)
  const favorites = useStore((state) => state.favorites)

  const isInCart = items.some((item) => item.id === product.id)
  const isFavorite = favorites.includes(product.id)

  return (
    <article className='group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-bg-secondary backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10'>
      {/* Акцентный угол */}
      <div className='absolute -right-8 -top-8 h-16 w-16 rotate-45 bg-linear-to-br from-primary/20 to-transparent' />
      
      <div className='relative overflow-hidden'>
        <img
          src={product.image}
          alt={product.name}
          className='aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105'
        />
        <button
          onClick={() => toggleFavorite(product.id)}
          className={`absolute right-3 top-3 rounded-full p-2 backdrop-blur-md transition-all ${
            isFavorite 
              ? 'bg-primary/20 text-primary' 
              : 'bg-black/40 text-white/60 hover:bg-black/60'
          }`}
        >
          <Heart/>
        </button>
        
        {/* Бейдж скидки */}
        {product.oldPrice && (
          <div className='absolute left-3 top-3 rounded-full bg-linear-to-br from-primary to-secondary px-3 py-1 text-xs font-bold text-white'>
            -{Math.round((1 - product.price / product.oldPrice) * 100)}%
          </div>
        )}
      </div>

      <div className='flex grow flex-col p-4'>
        <h3 className='mb-2 line-clamp-2 text-sm font-medium text-white'>
          {product.name}
        </h3>
        
        <div className='mt-auto'>
          <div className='mb-3 flex items-center gap-2'>
            <span className='text-lg font-bold text-white'>{product.price} ₽</span>
            {product.oldPrice && (
              <del className='text-sm text-zinc-500'>{product.oldPrice} ₽</del>
            )}
          </div>
          
          <button
            onClick={() => addToCart(product)}
            disabled={isInCart}
            className={`w-full rounded-xl py-3 font-semibold transition-all ${
              isInCart
                ? 'cursor-not-allowed bg-tertiary text-zinc-400'
                : 'bg-linear-to-br from-primary to-primary-light text-white hover:shadow-lg hover:shadow-primary/25'
            }`}
          >
            {isInCart ? '✓ В корзине' : 'В корзину'}
          </button>
        </div>
      </div>
    </article>
  )
}