import Conteiner from "../shared/Container";

export default function Footer(){
    return(
        <footer className="bg-gray-900 text-white py-8 mt-auto border-t border-gray-700">
            <Conteiner>
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-6">
                    <div className="flex-1 min-w-64">
                        <h3 className="text-xl font-semibold mb-4 text-white">
                            О нас
                        </h3>
                        <p className="text-gray-300">
                            Мы - современный интернет-магазин с лучшими товарами по доступным ценам.
                        </p>
                    </div>

                    <div className="flex-1 min-w-64">
                        <h3 className="text-xl font-semibold mb-4 text-white">Контакты</h3>
                        <p className="text-gray-300">📞 +7(123) 456-78-90</p>
                        <p className="text-gray-300">✉️ BlackWitcher@moimagazin.ru</p>
                        <p className="text-gray-300">📍Киров, ул. Примерна, д. 25</p>
                    </div>

                    <div className="flex-1 min-w-64">
                        <h3 className="text-xl font-semibold mb-4 text-white">
                            Полезные ссылки
                        </h3>
                        <a href="#" className="block text-gray-300 hover:text-white mb-2 transition-colors duration-300 hover:translate-x-1">
                            🚚 Доставка и оплата
                        </a>
                        <a href="#" className="block text-gray-300 hover:text-white mb-2 transition-colors duration-300 hover:translate-x-1">
                            🔧 Гарантия
                        </a>
                        <a href="#" className="block text-gray-300 hover:text-white mb-2 transition-colors duration-300 hover:translate-x-1">
                            ↩️ Возврат товара
                        </a>
                        <a href="#" className="block text-gray-300 hover:text-white mb-2 transition-colors duration-300 hover:translate-x-1">
                            🛡️ Политика конфиденциальности
                        </a>
                    </div>
                </div>
                <div className="text-center pt-6 border-t border-gray-700">
                    <p className="text-gray-400 text-sm">
                        &copy; 2025 МойМагазин на React. Все права защищены.
                    </p>
                </div>
            </Conteiner>
        </footer>
    );
}