export interface Product{
    id: number;
    name: string;
    price: number;
    emoji: string
}

export const products: Product[] = [
            { id: 1, name: "Смартфон", price: 29999, emoji: "📱" },
            { id: 2, name: "Ноутбук", price: 74999, emoji: "💻" },
            { id: 3, name: "Наушники", price: 5999, emoji: "🎧" },
            { id: 4, name: "Часы", price: 15999, emoji: "⌚" },
            { id: 5, name: "Планшет", price: 22999, emoji: "📟" },
            { id: 6, name: "Фотокамера", price: 45999, emoji: "📷" }
        ];