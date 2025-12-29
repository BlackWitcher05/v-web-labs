import type { JSX } from 'react'
import { NavLink } from 'react-router'

const NavItem = ({ to, icon, label }: { to: string; icon: JSX.Element; label: string }) => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex flex-col items-center gap-1 p-2 text-xs transition-colors ${
      isActive ? 'text-white' : 'text-zinc-400'
    }`

  return (
    <NavLink to={to} className={navLinkClasses}>
      {icon}
      <span>{label}</span>
    </NavLink>
  )
}

export const MobileNav = () => {
  return (
    <nav className='fixed bottom-0 left-0 right-0 z-50 border-t border-white/20 bg-zinc-900/80 p-2 backdrop-blur-lg md:hidden'>
      <div className='flex justify-around'>
        <NavItem
          to='/'
          label='Главная'
          icon={
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 16 16'>
              <path d='M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L8.707 1.5z' />
              <path d='m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6z' />
            </svg>
          }
        />
        <NavItem
          to='/favorites'
          label='Избранное'
          icon={
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 16 16'>
              <path d='m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z' />
            </svg>
          }
        />
        <NavItem
          to='/cart'
          label='Корзина'
          icon={
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 16 16'>
              <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
            </svg>
          }
        />
      </div>
    </nav>
  );
};