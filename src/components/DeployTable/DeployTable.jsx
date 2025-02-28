export function DeployTable({results}) {
    return (
        <div>
            {results.length > 0 && (
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                        <table className='mt-4 w-full border-collapse'>
                            <thead>
                                <tr>
                                    <th className="py-4 px-4 font-semibold text-stone-700">Título</th>
                                    <th className="py-4 px-4 font-semibold text-stone-700">Autor</th>
                                    <th className="">Formato</th>
                                    <th>Año</th>
                                    <th>Lenguaje</th>

                                </tr>
                            </thead>
                            <tbody>
                                {results.map((result, index) => (
                                    <tr key={index}>
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