import React from 'react'
import { Link } from 'react-router-dom'

export default function ClassTable({ListClass=[]}) {
  return (
    
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    class Name
                </th>

                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {/* {
                ListClass.map((class) => (
                    <>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               {class.name}
                            </th>
                            <td className="px-6 py-4">
                                <Link to={`class/${class.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
                            </td>
                        </tr>
                        
                    </>
                ))
            } */}
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    6eme
                </th>
                <td className="px-6 py-4">
                    <Link to='#' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
                </td>
            </tr>

        </tbody>
    </table>
</div>

  )
}
