import { createBrowserRouter, RouterProvider } from 'react-router'
import { Layout } from './Layout'
import { MainPage } from '../pages/MainPage'
import { CartPage } from '../pages/CartPage'
import { FavoritesPage } from '../pages/FavoritesPage'

import { StoreProvider } from '../store/store'
import { smartphones, headphones } from '../data/product.data'

const allProducts = [...smartphones, ...headphones]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'favorites',
        element: <FavoritesPage />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <StoreProvider products={allProducts}>
      <RouterProvider router={router} />
    </StoreProvider>
  );
};