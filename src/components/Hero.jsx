import React from 'react'

// img
import search from '../img/search.svg'
const Hero = () => {
  return (
    <div className='containerb'>
        <h2 className='text-80 text-center mb-4 text-white font-bold'>Make your interior more minimalistic & modern</h2>
        <p className='text-2xl text-white text-center mb-12'>Turn your room with panto into a lot more minimalist <br /> and modern with ease and speed</p>
        <div className='relative flex justify-center'>
           <input className=' pl-5 w-96 bg-transparent backdrop-blur-sm backdrop-contrast-50 border  bg-none py-4 rounded-3xl ' type="search" placeholder='Search furniture' />
          <img className='absolute right-[435px] top-2' src={search} alt="search" />
        </div>
    </div>
  )
}

export default Hero