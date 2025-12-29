export const Footer = () => {
   return (
    <footer className='border-t border-white/10 bg-bg-secondary'>
      <div className='container mx-auto p-6'>
        <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
          {/* Лого */}
          <div className='flex items-center gap-3'>
            <div className='rounded-lg bg-linear-to-r from-primary to-secondary p-2'>
              <span className='text-white'>🛍️</span>
            </div>
            <span className='text-xl font-bold'>
              <span className='bg-linear-to-r from-primary to-primary-light bg-clip-text text-transparent'>
                NEO
              </span>
              <span className='text-white'>STORE</span>
            </span>
          </div>
          
          {/* Ссылки */}
          <div className='flex gap-6'>
            <a href='#' className='text-sm text-zinc-400 transition-colors hover:text-white'>
              Политика и Безопасность
            </a>
            <a href='#' className='text-sm text-zinc-400 transition-colors hover:text-white'>
              Cookie
            </a>
            <a href='#' className='text-sm text-zinc-400 transition-colors hover:text-white'>
              Контакты
            </a>
          </div>
        </div>
        
        <div className='mt-6 border-t border-white/10 pt-6 text-center'>
          <span className='text-xs text-zinc-500'>© 2025 NEO STORE. Все права защищены.</span>
        </div>
      </div>
    </footer>
  )
}