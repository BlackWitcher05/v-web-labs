import Conteiner from "../shared/Container";
import SearchInput from "../features/SearchInput";

interface HeaderProps{
    searchTerm: string
    onSearchChange: (value:string) => void
}

export default function Header({ searchTerm, onSearchChange }: HeaderProps){
    return(
        <header className="bg-gray-900 shadow-lg sticky top-0 z-50 py-4 border-b border-gray-700">
            <Conteiner>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                   <div className="text-2xl font-bold text-white">
                    МойМагазин на React
                    </div>
                   <SearchInput
                        searchTerm={searchTerm}
                        onSearchChange={onSearchChange} 
                   />
                </div>
            </Conteiner>
        </header>
    );
}