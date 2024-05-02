import React from 'react'
import { Link } from 'react-router-dom'
// img
import shop from '../img/shop.svg'
const Header = () => {
  return (
   <section className='py-10'>
    <div className="containerb text-white flex justify-between items-center">
      {/* logo */}
      <Link className='text-3xl font-bold'>Panto</Link>
      {/* Links */}
      <ul className='flex text-lg font-medium space-x-16'>
        
        <li>
          <Link>Furniture</Link>
        </li>
        
        <li>
          <Link>Shop</Link>
        </li>
        <li>
          <Link>About Us</Link>
        </li>
        
        <li>
          <Link>Contact</Link>
        </li>
      </ul>
      {/* shop */}
      <Link className='relative'>
        <img src={shop} alt="shop" />
        <span className='absolute bg-shop px-2   top-0 -right-2 rounded-full'>0</span>
      </Link>
    </div>
   </section>
  )
}

export default Header