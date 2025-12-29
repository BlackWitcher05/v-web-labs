import type { IProduct } from "../types/product.type"

export const smartphones: IProduct[] = [
  { id: 1, name: 'Смартфон с AMOLED-экраном', price: 29999, oldPrice: 34999, image: 'https://via.placeholder.com/300x300.png?text=Smartphone+1' },
  { id: 2, name: 'Бюджетный смартфон', price: 14999, oldPrice: 17999, image: 'https://via.placeholder.com/300x300.png?text=Smartphone+2' },
  { id: 3, name: 'Флагманский смартфон', price: 89999, image: 'https://via.placeholder.com/300x300.png?text=Smartphone+3' },
  { id: 4, name: 'Смартфон с мощной камерой', price: 44999, image: 'https://via.placeholder.com/300x300.png?text=Smartphone+4' },
  { id: 5, name: 'Компактный смартфон', price: 37999, oldPrice: 42999, image: 'https://via.placeholder.com/300x300.png?text=Smartphone+5' },
  { id: 6, name: 'Геймерский смартфон', price: 55999, image: 'https://via.placeholder.com/300x300.png?text=Smartphone+6' },
]

export const headphones: IProduct[] = [
  { id: 7, name: 'Беспроводные наушники', price: 7999, oldPrice: 9999, image: 'https://via.placeholder.com/300x300.png?text=Headphones+1' },
  { id: 8, name: 'Игровые наушники', price: 11999, oldPrice: 14999, image: 'https://via.placeholder.com/300x300.png?text=Headphones+2' },
  { id: 9, name: 'Наушники с шумоподавлением', price: 18999, image: 'https://via.placeholder.com/300x300.png?text=Headphones+3' },
  { id: 10, name: 'Проводные наушники', price: 2999, image: 'https://via.placeholder.com/300x300.png?text=Headphones+4' },
  { id: 11, name: 'Спортивные наушники', price: 8999, oldPrice: 10999, image: 'https://via.placeholder.com/300x300.png?text=Headphones+5' },
  { id: 12, name: 'Студийные наушники', price: 24999, image: 'https://via.placeholder.com/300x300.png?text=Headphones+6' },
]