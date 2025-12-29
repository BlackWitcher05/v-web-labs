import React from 'react'
import { Heart, Trash2,  } from 'lucide-react'

import { useStore, type ICartItem } from '../store/store'

interface ICartItemProps {
  item: ICartItem;
}

export const CartItem: React.FC<ICartItemProps> = ({ item }) => {
  const increaseQuantity = useStore((state) => state.increaseQuantity)
  const decreaseQuantity = useStore((state) => state.decreaseQuantity)
  const removeFromCart = useStore((state) => state.removeFromCart)
  const toggleFavorite = useStore((state) => state.toggleFavorite)
  const favorites = useStore((state) => state.favorites)

  const isFavorite = favorites.includes(item.id)

  return (
    <article className='flex items-center gap-4 rounded-xl border border-white/10 bg-bg p-4 transition-colors hover:border-primary/30'>
      {/* Изображение */}
      <div className='relative overflow-hidden rounded-lg'>
        <img 
          src={item.image} 
          alt={item.name} 
          className='h-24 w-24 object-cover'
        />
        {/* Градиентный оверлей */}
        <div className='absolute inset-0 bg-linear-to-t from-black/30 to-transparent' />
      </div>

      {/* Информация */}
      <div className='grow'>
        <h3 className='font-semibold text-white'>{item.name}</h3>
        <p className='mt-1 text-sm text-zinc-400'>
          {item.price} ₽
          {item.oldPrice && (
            <del className='ml-2 text-zinc-600'>{item.oldPrice} ₽</del>
          )}
        </p>
        
        {/* Счетчик */}
        <div className='mt-3 flex items-center gap-3'>
          <button 
            onClick={() => decreaseQuantity(item.id)}
            className='rounded-lg border border-white/10 bg-bg-secondary px-3 py-1 text-lg transition-colors hover:bg-white/5'
          >
            −
          </button>
          <span className='min-w-[2ch] text-center font-bold text-white'>
            {item.quantity}
          </span>
          <button 
            onClick={() => increaseQuantity(item.id)}
            className='rounded-lg border border-white/10 bg-bg-secondary px-3 py-1 text-lg transition-colors hover:bg-white/5'
          >
            +
          </button>
        </div>
      </div>

      {/* Действия */}
      <div className='flex flex-col gap-2'>
        <button
          onClick={() => toggleFavorite(item.id)}
          className={`rounded-lg p-2 ${
            isFavorite 
              ? 'bg-primary/20 text-primary' 
              : 'bg-tertiary text-zinc-400'
          }`}
        >
          <Heart />
        </button>
        <button 
          onClick={() => removeFromCart(item.id)}
          className='rounded-lg bg-tertiary p-2 text-zinc-400 transition-colors hover:bg-red-500/20 hover:text-red-400'
        >
          <Trash2 />
        </button>
      </div>
    </article>
  )
}