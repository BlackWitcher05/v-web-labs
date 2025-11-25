import { useState } from "react";

export default function AddToCartButton(){
    const [isInCart, setIsIsCart] = useState<boolean>(false);

    const handleCartClick = ():void =>{
        if (!isInCart) {
            setIsIsCart(true);
        }
    };

    return(
        <button
          className={`w-full py-3 px-4 rounded font-medium transition-all duration-300 mt-auto
             ${isInCart 
                ? 'bg-green-700 hover:bg-green-600 text-white shadow-lg'
                : 'bg-blue-700 hover:bg-blue-600 text-white shadow-md hover:shadow-lg'} transform hover:scale-105`}
          onClick={handleCartClick}
          disabled={isInCart}
        >
          {isInCart ? '✅ В корзине' : '🛒 Добавить в корзину'}
        </button>
    );
}