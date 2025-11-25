import AddToCartButton from "../features/AddToCartButton";
import { Product } from "../entities/Products";

interface ProductCardProps{
  product: Product
}

export default function ProductCard({product}: ProductCardProps){

  return (
    <article className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col border border-gray-700 h-full">
      <div className="h-45 min-h-45 bg-gray-700 flex items-center justify-center text-8xl p-4">
        {product.emoji}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 flex-grow text-white">
          {product.name}
        </h3>
        <p className="text-2xl font-bold text-green-400 mb-4">
          {product.price.toLocaleString()} ₽
        </p>
        <AddToCartButton />
      </div>
    </article>
  );
}