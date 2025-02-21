import { SearchTitle } from "./SearchTitle";
import { Searcher } from './Searcher';


export function SearchSection() {

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(`http://localhost:3000/api/scrape?req=${encodeURIComponent(searchTerm)}`);
      const data = await response.json();
      console.log(data);
    } catch (error){
      console.error("Error fetching data:", error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#B7E2F3]">
      <div className="w-full max-w-2xl px-4">
        <SearchTitle />
        <Searcher onSearchSubmit={handleSearch} /> 
      </div>
    </div>
  );
}
