import React from 'react'
import Time from '../Time/Tiime'
import './index.css'

const Khulna = () => {

    const Times = Time.map(
        (el) => {
            return (
                <>
                    
                    <tr className="bg-black bg-opacity-20">
                        <td className="px-3 py-3">{el.id}</td>
                        <td className="px-3 py-3">{el.date}</td>
                        <td className="px-3 py-3">{el.day}</td>
                        <td className="px-3 py-3">{el.sehriHour} : {el.sehriMinutes + 6} {el.sehriTime}</td>
                        <td className="px-3 py-3">{el.iftarHour} : {el.iftarMinutes + 2} {el.iftarTime}</td>
                    </tr>
                    {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{el.id}</td>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{el.date}</td>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{el.day}</td>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{el.sehriTime}</td>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{el.fazarTime}</td>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{el.iftarTime}</td>
                    </tr> */}
                </>
            )
        }
    )

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-sm text-gray-400">
            <thead className="bg-gray-800 text-xs uppercase font-medium">
                <tr>
                    <th scope="col" className="px-3 py-3 text-left tracking-wider">Ramadan</th>
                    <th scope="col" className="px-3 py-3 text-left tracking-wider">Date</th>
                    <th scope="col" className="px-3 py-3 text-left tracking-wider">Day</th>
                    <th scope="col" className="px-3 py-3 text-left tracking-wider">Sehri Last Time</th>
                    {/* <th scope="col" className="px-3 py-3 text-left tracking-wider">Fazar Waqt Start</th> */}
                    <th scope="col" className="px-3 py-3 text-left tracking-wider">Iftar Time</th>
                </tr>
            </thead>
            <tbody className='bg-gray-800'>
                { Times }
            </tbody>
        </table>
    </div>
  )
}

export default Khulna