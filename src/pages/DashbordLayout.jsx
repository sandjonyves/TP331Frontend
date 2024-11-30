import React from 'react'
import { SideBar } from '../components'
import { Outlet } from 'react-router-dom'

export default function DashbordLayout() {
  return (
    <main>

      
        <SideBar/>

        <div className="p-4 sm:ml-64">
   <div className="p-4 mt-20 border-2 border-gray-200 rounded-lg dark:border-gray-700">
   <Outlet />

   </div>
</div>
    </main>
  )
}
