import React, { useState } from 'react'
import { Link } from 'react-router'
import { Heart, ShoppingCart } from 'lucide-react'

import { useStore } from '../store/store'
import { SearchResultItem } from './SearchResultItem'


export const Header = () => {
  const items = useStore((state) => state.items)
  const favorites = useStore((state) => state.favorites)
  const searchTerm = useStore((state) => state.searchTerm)
  const setSearchTerm = useStore((state) => state.setSearchTerm)
  const allProducts = useStore((state) => state.products)

  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const cartItemCount = items.reduce((acc, item) => acc + item.quantity, 0)

  const searchResults =
    !searchTerm ? [] : allProducts
      .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .slice(0, 5)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  };
  
  const showResults = isSearchFocused && searchTerm.length > 0 && searchResults.length > 0

  return (
    <header className='sticky top-0 z-50 hidden border-b border-white/10 bg-bg-secondary/90 p-4 backdrop-blur-xl md:flex'>
      <div className='container mx-auto flex items-center justify-between gap-4'>
        
        <Link to='/' className='group flex items-center gap-3'>
          <div className='relative'>
            <div className='absolute inset-0 rounded-lg bg-linear-to-r from-primary to-secondary blur-lg' />
            <div className='relative rounded-lg bg-bg p-2'>
              <span className='text-xl'>🛍️</span>
            </div>
          </div>
          <span className='text-xl font-bold tracking-tighter'>
            <span className='bg-linear-to-r from-primary to-primary-light bg-clip-text text-transparent'>
              NEO
            </span>
            <span className='text-white'>STORE</span>
          </span>
        </Link>
        
        <div className="relative w-full max-w-md">
          <div className='relative'>
            <div className='absolute inset-0 rounded-xl bg-linear-to-r from-primary/30 to-secondary/30 blur-xl opacity-50' />
            <input
              type='text'
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              placeholder='Поиск товаров...'
              className='relative w-full rounded-xl border border-white/10 bg-bg px-4 py-3 text-white placeholder-zinc-500 backdrop-blur-sm transition-all duration-300 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20'
            />
          </div>
          
          {showResults && (
            <div className="absolute top-full mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-bg-secondary backdrop-blur-xl shadow-2xl">
              <div className="flex flex-col">
                {searchResults.map(product => (
                  <SearchResultItem key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>

        <nav className='flex items-center gap-6'>
          <Link to='/favorites' className='relative'>
            <div className={`rounded-full p-2 transition-all ${
              favorites.length > 0 
                ? 'bg-primary/20 text-primary' 
                : 'bg-tertiary text-zinc-400'
            }`}>
              <Heart/>
            </div>
            {favorites.length > 0 && (
              <span className='absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-linear-to-r from-primary to-secondary text-xs font-bold text-white'>
                {favorites.length}
              </span>
            )}
          </Link>
          
          <Link to='/cart' className='relative'>
            <div className={`rounded-full p-2 transition-all ${
              cartItemCount > 0 
                ? 'bg-primary/20 text-primary' 
                : 'bg-tertiary text-zinc-400'
            }`}>
              <ShoppingCart/>
            </div>
            {cartItemCount > 0 && (
              <span className='absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-black'>
                {cartItemCount}
              </span>
            )}
          </Link>
        </nav>

      </div>
    </header>
  )
}