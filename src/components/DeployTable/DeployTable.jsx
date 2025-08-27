import {useState} from 'react';
import {Send, ChevronLeft, ChevronRight} from 'lucide-react';

export function DeployTable({results, onSendToKindle}) {
    const [currentPage, setCurrentPage] = useState(0);
    const booksPerPage = 4;
    const totalPages = Math.ceil(results.length / booksPerPage);

    const startIndex = currentPage * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const currentBooks = results.slice(startIndex, endIndex);
    
    const goToNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    }   

    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const canGoNext = currentPage <totalPages - 1;
    const canGoPrevious = currentPage > 0;

    return (
        <div>
            {results.length > 0 && (
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                        <table className='mt-4 w-full border-collapse'>
                            <thead>
                                <tr className="text-left">
                                    <th className="py-4 px-4 font-semibold text-stone-700">Portada</th>
                                    <th className="py-4 px-4 font-semibold text-stone-700">Título</th>
                                    <th className="py-4 px-4 font-semibold text-stone-700">Autor</th>
                                    <th className="py-4 px-4 font-semibold text-stone-700">Formato</th>
                                    <th className="py-4 px-4 font-semibold text-stone-700">Año</th>
                                    <th className="py-4 px-4 font-semibold text-stone-700">Lenguaje</th>
                                    <th className="py-4 px-4 font-semibold text-stone-700">Enviar a Kindle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentBooks.map((result, index) => (
                                    <tr key={startIndex + index}>
                                        <td className="py-4 px-4">
                                            <img 
                                            src={result.cover} 
                                            alt={result.title} 
                                            className="w-16 h-20 object-cover rounded shadow-sm"
                                            />
                                        </td>
                                        <td className="py-4 px-4 font-medium text-stone-800">{result.title}</td>
                                        <td className="py-4 px-4 font-medium text-stone-800">{result.author}</td>
                                        <td className="py-4 px-4 font-medium text-stone-800">{result.ext}</td>
                                        <td className="py-4 px-4 font-medium text-stone-800">{result.year}</td>
                                        <td className="py-4 px-4 font-medium text-stone-800">{result.language}</td>
                                        <td className="py-4 px-4">
                                            {result.download ? (
                                              <button
                                                onClick={() => onSendToKindle(result.download, result.title)}
                                                className="text-[#8B8378] hover:text-[#6A5F56] transition-colors"
                                                title="Enviar a Kindle"
                                              >
                                                <Send size={24} />
                                              </button>
                                            ) : (
                                              <span className="text-stone-400">No disponible</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        
                        {/* Navegación de paginación */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-4 py-4 border-t border-gray-200">
                                {canGoPrevious && (
                                    <button
                                        onClick={goToPreviousPage}
                                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                        title="Página anterior"
                                    >
                                        <ChevronLeft size={20} className="text-gray-600" />
                                    </button>
                                )}
                                
                                <span className="text-sm text-gray-600">
                                    Página {currentPage + 1} de {totalPages}
                                </span>
                                
                                {canGoNext && (
                                    <button
                                        onClick={goToNextPage}
                                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                        title="Página siguiente"
                                    >
                                        <ChevronRight size={20} className="text-gray-600" />
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
  }