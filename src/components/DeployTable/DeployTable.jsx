export function DeployTable({results}) {
    return (
        <div>
            {results.length > 0 && (
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                        <table className='mt-4 w-full border-collapse'>
                            <thead>
                                <tr className="text-left">
                                    <th className="py-4 px-4 font-semibold text-stone-700">Título</th>
                                    <th className="py-4 px-4 font-semibold text-stone-700">Autor</th>
                                    <th className="py-4 px-4 font-semibold text-stone-700">Formato</th>
                                    <th className="py-4 px-4 font-semibold text-stone-700">Ext</th>
                                    <th className="py-4 px-4 font-semibold text-stone-700">Año</th>
                                    <th className="py-4 px-4 font-semibold text-stone-700">Lenguaje</th>

                                </tr>
                            </thead>
                            <tbody>
                                {results.map((result, index) => (
                                    <tr key={index}>
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
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
  }