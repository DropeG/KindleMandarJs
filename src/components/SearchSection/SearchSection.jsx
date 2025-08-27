import { SearchTitle } from "./SearchTitle";
import { Searcher } from './Searcher';
import { DeployTable} from '../DeployTable/DeployTable'
import { useState} from 'react';

export function SearchSection({isLogged}) {
  const [results, setResults] = useState([]);
  const [warning, setWarning] = useState('');

  const handleSearch = async (searchTerm) => {
    if(!isLogged) {
      setWarning("Debes ingresar tu mail para poder buscar libros");
      setResults([]);
      return;
    }

    setWarning('');
    try {
      const response = await fetch('http://localhost:3000/scrape', {
        method: 'POST', // Método POST
        headers: {
            'Content-Type': 'application/json', // Indica que se envía JSON
        },
        body: JSON.stringify({ url: searchTerm }), // Envía el término de búsqueda en el cuerpo
    });
      const data = await response.json();    
      console.log("DATAAAA", data);
      setResults(data)
      
    } catch (error){
      console.error("Error fetching data:", error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="mt-[25%]">
        {/* Buscador centrado en el viewport */}
        <div className="flex flex-col items-center w-full max-w-2xl">
          <SearchTitle />
          <Searcher onSearchSubmit={handleSearch} />
        </div>
      </div>
      {warning &&(
        <div className="mt-4 text-red-500 font-medium">
          {warning}
        </div>
      )}
      {results.length > 0 && (
          <div className="w-full max-w-12xl mt-4">
            <DeployTable results={results} />
          </div>
      )}
    </div>
  );
}
