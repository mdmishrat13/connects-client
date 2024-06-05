import React from 'react'
import Navbar from '../../components/userComponents/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'

const UserLayout = () => {
  return (
      <>
          <Navbar />
          <Outlet />
      </>
  )
}

export default UserLayout