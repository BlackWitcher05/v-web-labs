import { Outlet } from 'react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { MobileNav } from '../services/MobileNav'

export const Layout = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='grow pb-24 md:pb-0'>
        <Outlet />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
};