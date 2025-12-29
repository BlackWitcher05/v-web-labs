import { Link } from 'react-router'
import { ShoppingCart } from 'lucide-react'

import { CartItem } from '../components/CartItem'
import { CartSummary } from '../components/CartSummary'
import { useStore } from '../store/store'

export const CartPage = () => {
  const items = useStore((state) => state.items)

  return (
    <div className='min-h-screen bg-bg p-4 md:p-8'>
      <div className='container mx-auto'>
        {/* Заголовок */}
        <div className='mb-8'>
          <h1 className='mb-2 text-3xl font-bold bg-linear-to-r from-primary to-primary-light bg-clip-text text-transparent'>
            Корзина
          </h1>
          <p className='text-zinc-400'>Оформление заказа</p>
        </div>

        {items.length > 0 ? (
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            <section className='md:col-span-2'>
              <div className='rounded-2xl border border-white/10 bg-bg-secondary p-6'>
                <h2 className='mb-6 text-xl font-semibold text-white'>Товары в корзине</h2>
                <div className='flex flex-col gap-4'>
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </section>

            <section className='md:col-span-1'>
              <CartSummary />
            </section>
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-bg-secondary py-16'>
            <div className='mb-6 rounded-full bg-tertiary p-6'>
              <span className='text-4xl'>
                <ShoppingCart />
              </span>
            </div>
            <p className='mb-4 text-xl font-medium text-zinc-300'>Ваша корзина пуста</p>
            <p className='mb-8 text-zinc-500'>Добавьте товары из каталога</p>
            <Link
              to='/'
              className='rounded-xl bg-linear-to-r from-primary to-primary-light px-8 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/25'
            >
              Перейти к покупкам
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}