import React from 'react'
import { Link } from 'react-router-dom'
import expriens from '../img/expriens.png'
import next from '../img/next.svg'
const Expriens = () => {
  return (
    <>
    <section className='py-11 flex  justify-between'>
            <img className='mr-36 ' src={expriens} alt="expriens" />
        <div className="containerb">
            <div className='max-w-[556px] flex flex-col'>
                <p className='text-shop text-lg mb-5'>experiences</p>
                <h2 className='text-42 font-bold mb-5'>we provide you the best experience</h2>
                <p className='text-lg mb-6'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
                <Link className='flex space-x-3 items-center'>
                    <p>More Info</p>
                    <img src={next} alt="next" />
                </Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default Expriens