import React from 'react';
import Navbar from './componenet/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';  // ✅ Added useLocation here
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import SeatLayout from './pages/SeatLayout';
import MyBooking from './pages/MyBooking';
import Favorite from './pages/Favorite';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import Footer from './componenet/Footer';

const App = () => {
  const location = useLocation(); 
  const isAdminRoute = location.pathname.startsWith('/admin'); // ✅ fixed missing '/' before admin

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/movies/:id/:date' element={<SeatLayout />} />
        <Route path='/my-bookings' element={<MyBooking />} />
        <Route path='/favorite' element={<Favorite />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
