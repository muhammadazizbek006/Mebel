import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <section className='bg-tab py-12'>
        <div className="containerb">
          <ul className='flex justify-between '>
            {/* 1 */}
            <li className='max-w-[293px]'>
              <h3 className='text-3xl font-bold mb-8'>Panto</h3>
              <p className='text-base '>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
            </li>
            {/* 2 */}
            <li className='flex flex-col'>
              <Link className='text-lg hover:text-shop mb-3'>Services</Link>
              <Link className='text-lg hover:text-shop mb-3'>Email Marketing</Link>
              <Link className='text-lg hover:text-shop mb-3'>Campaigns</Link>
              <Link className='text-lg hover:text-shop mb-3'>Branding</Link>
            </li>
            <li className='flex flex-col'>
              <Link className='text-lg hover:text-shop mb-3'>Furniture</Link>
              <Link className='text-lg hover:text-shop mb-3'>Beds</Link>
              <Link className='text-lg hover:text-shop mb-3'>Chair</Link>
              <Link className='text-lg hover:text-shop mb-3'>All</Link>
            </li>

          </ul>
        </div>
      </section>
    </>
  )
}

export default Footer