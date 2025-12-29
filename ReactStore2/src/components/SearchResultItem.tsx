import React from 'react'
import type { IProduct } from '../types/product.type'
import { useStore } from '../store/store'
import { Check, Heart, ShoppingCart } from 'lucide-react'

interface Props {
  product: IProduct
}

export const SearchResultItem: React.FC<Props> = ({ product }) => {
  const addToCart = useStore((state) => state.addToCart)
  const toggleFavorite = useStore((state) => state.toggleFavorite)
  const favorites = useStore((state) => state.favorites)
  const items = useStore((state) => state.items)

  const isFavorite = favorites.includes(product.id)
  const isInCart = items.some((item) => item.id === product.id)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    if (!isInCart) {
      addToCart(product)
    }
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    toggleFavorite(product.id)
  };

  return (
    <div className='flex items-center justify-between p-3 transition-colors hover:bg-tertiary'>
      <div className='flex items-center gap-3'>
        <img 
          src={product.image} 
          alt={product.name}
          className='h-10 w-10 rounded-lg object-cover'
        />
        <span className='text-sm text-white'>{product.name}</span>
      </div>
      
      <div className='flex items-center gap-2'>
        <span className='font-semibold text-white'>{product.price} ₽</span>
        
        <button
          onClick={handleToggleFavorite}
          className={`rounded p-1.5 ${
            isFavorite 
              ? 'bg-primary/20 text-primary' 
              : 'bg-tertiary text-zinc-400'
          }`}
        >
          <Heart/>
        </button>
        
        <button
          onClick={handleAddToCart}
          disabled={isInCart}
          className={`rounded p-1.5 ${
            isInCart
              ? 'cursor-not-allowed bg-tertiary text-zinc-400'
              : 'bg-primary/20 text-primary hover:bg-primary/30'
          }`}
        >
          {isInCart ? <Check/> : <ShoppingCart/>}
        </button>
      </div>
    </div>
  )
}