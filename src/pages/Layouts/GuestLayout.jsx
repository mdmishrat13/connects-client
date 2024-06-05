import React from 'react'
import Navbar from '../../components/guestComponents/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'

const GuestLayout = () => {
  return (
      <>
          <Navbar />
          <Outlet />
          <Footer/>
      </>
  )
}

export default GuestLayout