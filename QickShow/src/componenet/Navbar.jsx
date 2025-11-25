import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, SearchIcon, XIcon, TicketPlus } from 'lucide-react'
import { useClerk, useUser, UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { user } = useUser()
  const { openSignIn } = useClerk()
  const navigate = useNavigate()

  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 bg-transparent'>
      
      {/* Logo */}
      <Link to='/' className='flex-shrink-0'>
        <img src={assets.logo} alt="logo" className='w-36 h-auto' />
      </Link>

      {/* Desktop Links with gray rounded background */}
      <div className='hidden md:flex items-center gap-8 font-medium text-lg bg-gray-800/60 px-8 py-2 rounded-full text-white'>
        <Link to='/home'>Home</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/theaters'>Theaters</Link>
        <Link to='/'>Releases</Link>
        <Link to='/favorite'>Favorites</Link>
      </div>

      {/* Right Section: Search + Auth Buttons */}
      <div className='flex items-center gap-8'>
        {/* Search Icon (red) */}
        <button className='hidden md:flex w-10 h-10 items-center justify-center bg-red-600 hover:bg-red-700 rounded-full cursor-pointer transition'>
          <SearchIcon className='w-6 h-6 text-white' />
        </button>

        {/* Clerk Authentication */}
        {!user ? (
          <button
            onClick={openSignIn}
            className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer text-white'
          >
            Login
          </button>
        ) : (
          <UserButton afterSignOutUrl='/'>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<TicketPlus width={15} />}
                onClick={() => navigate('/my-bookings')}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}

        {/* Mobile menu toggle */}
        <MenuIcon
          className='md:hidden w-8 h-8 cursor-pointer text-white'
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='fixed top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-lg text-white'>
          <XIcon
            className='absolute top-6 right-6 w-6 h-6 cursor-pointer'
            onClick={() => setMenuOpen(false)}
          />
          <Link to='/home' onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to='/movies' onClick={() => setMenuOpen(false)}>Movies</Link>
          <Link to='/' onClick={() => setMenuOpen(false)}>Theaters</Link>
          <Link to='/' onClick={() => setMenuOpen(false)}>Releases</Link>
          <Link to='/favorite' onClick={() => setMenuOpen(false)}>Favorites</Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
