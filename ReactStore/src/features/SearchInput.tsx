interface SearchInputProps{
    searchTerm: string
    onSearchChange: (value:string) => void
}

export default function SearchInput({searchTerm, onSearchChange}: SearchInputProps){
    return(
        <div className="flex-grow md:max-w-lg md:ml-8">
            <input
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                id="search-input"
                placeholder="Поиск товаров..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
}