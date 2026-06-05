import { LayoutDashboardIcon, ListCollapseIcon, ListIcon, PlusSquareIcon } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import adminProfile from '../../assets/admin_p.png'

const AdminSidebar = () => {

  const user = {
    firstName: 'Admin',
    lastName: 'User',
    imageUrl: adminProfile,
  }

  const adminNavlinks = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboardIcon },
    { name: 'Add Shows', path: '/admin/add-shows', icon: PlusSquareIcon },
    { name: 'List Shows', path: '/admin/list-shows', icon: ListIcon },
    { name: 'List Bookings', path: '/admin/list-booking', icon: ListCollapseIcon }, // ← fixed
  ]

  return (
    <div className='h-[calc(100vh-64px)] flex flex-col items-center pt-8
    max-w-[52px] md:max-w-60 w-full border-r border-gray-300/20 text-sm'>

      <img
        className='h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto object-cover'
        src={user.imageUrl}
        alt="Admin"
      />

      <p className='mt-2 text-base hidden md:block text-white'>
        {user.firstName} {user.lastName}
      </p>

      <div className='w-full mt-6'>
        {adminNavlinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            end={link.path === '/admin'}
            className={({ isActive }) =>
              `relative flex items-center justify-center md:justify-start gap-2 w-full py-2.5
              md:pl-10 transition-all duration-200
              ${isActive
                ? 'text-[#e44b4b] bg-[#e44b4b]/10'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <link.icon className="w-5 h-5 shrink-0" />
                <p className="hidden md:block font-medium">{link.name}</p>
                <span className={`w-1.5 h-full rounded-l right-0 absolute top-0
                  transition-all duration-200
                  ${isActive ? 'bg-[#e44b4b]' : 'bg-transparent'}`}
                />
              </>
            )}
          </NavLink>
        ))}
      </div>

    </div>
  )
}

export default AdminSidebar