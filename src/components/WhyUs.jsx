import React from 'react'
import { whyUs } from '../data'
const WhyUs = () => {
  return (
    <>
        <section className='py-28'>
            <div className="containerb flex justify-between">
                <div>
                    <h2 className='text-42 font-bold'>Why <br />Choosing Us</h2>
                </div>

                {/* info */}
                <ul className='grid grid-cols-3 gap-x-7'>
                    {
                        whyUs.map((e)=>{
                            return(
                                <li className='max-w-[284px]' key={e.id}>
                                    <h3 className='text-2xl font-semibold mb-5'>{e.title}</h3>
                                    <p className='text-base mb-4'>{e.sharx}</p>
                                    
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    </>
  )
}

export default WhyUs