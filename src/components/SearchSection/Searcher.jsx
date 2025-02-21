import { Search } from 'lucide-react';

export function Searcher({ onSearchSubmit }) {
  const handleSearch = async (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.namedItem('search');
    onSearchSubmit(searchTerm.value);
  };

  return (
    <form className="w-full" onSubmit={handleSearch}>
      <div className='relative '> 
        <input 
          type="text" 
          name="search"
          className="focus:outline-none w-full px-8 py-6 pr-16 text-lg bg-white shadow-xl rounded-2xl  transition-all placeholder:text-[#8B8378]/60 "
          placeholder="Search anything..."
        />
        <button
          type="submit"
          className="absolute right-6 top-1/2 -translate-y-1/2 text-[#8B8378]/60 hover:text-[#8B8378] transition-colors"
        >
          <Search size={28} /> 
        </button>
      </div>
    </form>
  );
}