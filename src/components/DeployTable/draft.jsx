import React from 'react';

const DeployTable = ({ results}) => {
    return (
        <div>
            {results.length > 0 && (
                <table className='mt-4'>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Autor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result, index) => (
                            <tr key={index}>
                                <td>{result.title}</td>
                                <td>{result.author}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default DeployTable;