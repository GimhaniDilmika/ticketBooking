import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import AdminSidebar from './AdminSidebar'

const Layout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <AdminNavbar />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <Outlet />  {/* ← child routes render here */}
        </main>
      </div>
    </div>
  )
}

export default Layout