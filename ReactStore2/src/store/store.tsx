import { type ReactNode, createContext, useContext, useState } from 'react'
import { type StoreApi, createStore, useStore as useZustandStore } from 'zustand'

import type { IProduct } from '../types/product.type'

export interface ICartItem extends IProduct {
  quantity: number
}

interface IStoreState {
  products: IProduct[]
  items: ICartItem[]
  favorites: number[]
  searchTerm: string
}

interface IStoreActions {
  addToCart: (product: IProduct) => void
  removeFromCart: (productId: number) => void
  increaseQuantity: (productId: number) => void
  decreaseQuantity: (productId: number) => void
  toggleFavorite: (productId: number) => void
  setSearchTerm: (term: string) => void
}

type TStore = IStoreState & IStoreActions

const populateStore = (
  initialState: Pick<IStoreState, 'products'>,
): StoreApi<TStore> => {
  return createStore<TStore>((set) => ({
    ...initialState,
    items: [],
    favorites: [],
    searchTerm: '',
    
    addToCart: (product) =>
      set((state) => {
        const existingItem = state.items.find((item) => item.id === product.id);
        if (existingItem) {
          const updatedItems = state.items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
          );
          return { items: updatedItems };
        } else {
          return { items: [...state.items, { ...product, quantity: 1 }] };
        }
      }),

    removeFromCart: (productId) =>
      set((state) => ({
        items: state.items.filter((item) => item.id !== productId),
      })),

    increaseQuantity: (productId) =>
      set((state) => ({
        items: state.items.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      })),

    decreaseQuantity: (productId) =>
      set((state) => ({
        items: state.items
          .map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
          )
          .filter((item) => item.quantity > 0),
      })),

    toggleFavorite: (productId) =>
      set((state) => {
        const isFavorite = state.favorites.includes(productId);
        if (isFavorite) {
          return { favorites: state.favorites.filter((id) => id !== productId) };
        } else {
          return { favorites: [...state.favorites, productId] };
        }
      }),

    setSearchTerm: (term) => set({ searchTerm: term }),
  }));
};

const StoreContext = createContext<StoreApi<TStore> | null>(null)

export const StoreProvider = ({
  children,
  ...props
}: { children: ReactNode } & Pick<IStoreState, 'products'>) => {
  const [store] = useState(() => populateStore(props));
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

export const useStore = <S,>(selector: (state: TStore) => S): S => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider')
  }
  return useZustandStore(store, selector)
};