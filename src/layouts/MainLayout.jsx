import React from 'react'
import { Outlet } from 'react-router-dom'

// components
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <>
    <div className='bg-header-hero bg-no-repeat  bg-cover  h-screen'>
      <Header/>
      <Hero/>
    </div>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default MainLayout