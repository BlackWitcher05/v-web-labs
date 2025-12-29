import { useMemo } from 'react'
import { useStore } from '../store/store'

export const CartSummary = () => {
  const items = useStore((state) => state.items)

  const { totalProducts, totalPrice, totalDiscount } = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        const itemPrice = item.price * item.quantity
        const itemOldPrice = (item.oldPrice ?? item.price) * item.quantity

        acc.totalPrice += itemPrice
        acc.totalDiscount += itemOldPrice - itemPrice
        acc.totalProducts += item.quantity

        return acc
      },
      { totalProducts: 0, totalPrice: 0, totalDiscount: 0 },
    );
  }, [items])

  return (
    <div className='sticky top-24 rounded-2xl border border-white/10 bg-bg-secondary p-6 backdrop-blur-md'>
      <h2 className='mb-6 text-xl font-bold text-white'>Итог заказа</h2>
      
      <div className='space-y-4'>
        <div className='flex justify-between'>
          <span className='text-zinc-400'>Товары ({totalProducts})</span>
          <span className='font-medium text-white'>{totalPrice + totalDiscount} ₽</span>
        </div>
        
        <div className='flex justify-between'>
          <span className='text-primary-light'>Скидка</span>
          <span className='font-medium text-primary-light'>- {totalDiscount} ₽</span>
        </div>
        
        {/* Прогресс до бесплатной доставки */}
        <div className='rounded-lg bg-tertiary p-3'>
          <div className='mb-2 flex justify-between text-xs'>
            <span className='text-zinc-400'>До бесплатной доставки</span>
            <span className='text-primary'>{5000 - totalPrice} ₽</span>
          </div>
          <div className='h-1 overflow-hidden rounded-full bg-white/5'>
            <div 
              className='h-full rounded-full bg-linear-to-r from-primary to-secondary'
              style={{ width: `${Math.min((totalPrice / 5000) * 100, 100)}%` }}
            />
          </div>
        </div>
      </div>
      
      <hr className='my-6 border-white/10' />
      
      <div className='mb-6 flex justify-between text-lg font-bold'>
        <span className='text-white'>Итого</span>
        <span className='bg-linear-to-r from-primary to-primary-light bg-clip-text text-transparent'>
          {totalPrice} ₽
        </span>
      </div>
      
      <button className='w-full rounded-xl bg-linear-to-r from-primary to-primary-light py-4 font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/25'>
        Перейти к оформлению
      </button>
      
      <p className='mt-4 text-center text-xs text-zinc-500'>
        Нажимая на кнопку, вы соглашаетесь с условиями покупки
      </p>
    </div>
  )
}