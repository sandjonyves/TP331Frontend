import React from 'react';
import { Link } from 'react-router-dom'; // Assurez-vous d'importer Link si vous utilisez React Router

export default function Table({ datas, handleDelete ,route=''}) {
    if (!datas || datas.length === 0) return <p>Aucune donnée à afficher.</p>;

    const headers = Object.keys(datas[0]);

    return (
        <div>
            <table className="w-full mb-0 text-sm text-left rtl:text-right border text-gray-500 dark:text-gray-400">
              
                <thead className="text-xs text-gray-700 border uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="px-6 py-4">
                                {header}
                            </th>
                        ))}
                        <th className="px-6 py-4">Actions</th>
                        <th className="px-6 py-4">Option</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((data, rowIndex) => (
                        <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            {headers.map((header, colIndex) => (
                                <td key={colIndex} className="border px-6 py-4">
                                    {data[header]}
                                </td>
                            ))}
                            <td className="border px-6 py-4">
                                <Link to={`${rowIndex + 1}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    Edit
                                </Link>
                            </td>
                            <td className="border px-6 py-4">
                                <button
                                    onClick={() => handleDelete(rowIndex)}
                                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}