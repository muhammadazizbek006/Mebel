import React from 'react'
import { useState } from 'react';

import {tabs} from '../data'
import { labels } from '../data';
import shopadd from '../img/shopadd.svg'

const Product = () => {
  // const data = [
  //   { id: "1", tabTitle: "Tab 1", tabContent: "Tab Content 1" },
  //   { id: "2", tabTitle: "Tab 2", tabContent: "Tab Content 2" },
  //   { id: "3", tabTitle: "Tab 3", tabContent: "Tab Content 3" },
  // ];
  
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  return (
    <>
        <section className='py-12 bg-tab'>
            <div className="containerb">
                <h2 className='text-42 font-bold text-center mb-8'>Best Selling Product</h2>
                {/* tabs */}
      <div>

      <ul className="flex justify-center ">
        {labels.map((e) => {
          return (
            <li
              key={e}
              onClick={() => setActiveTab(e)}
              className={`px-8 py-3 cursor-pointer mb-20  ${
                activeTab === e ? "bg-white rounded-full shadow-lg" : "bg-tab"
              }`}
            >
              {e}
            </li>
          );
        })}
      </ul>

      <div className='grid  grid-cols-4 gap-y-8  gap-x-5 '>
        {tabs.map((e) => {
          return (
            <li
              key={e.id}
              className={` cursor-pointer flex flex-col ${
                activeTab === e.label ? " bg-white rounded-2xl shadow-xl" : "hidden"
              }`}
            >
              <img className='h-64 mb-5 object-cover pt-3' src={e.img} alt={e.title} />
              <div className='px-5 h-full'>
                <p className='text-brend text-lg mb-3'>{e.label}</p>
                <h3 className='text-2xl font-semibold mb-10'>{e.title}</h3>
                <div className='flex pb-5  items-center justify-between'>
                  <b className='text-xl font-semibold'><sup>$</sup>{e.narxi}</b>
                    <img src={shopadd} alt="shopadd" />
                </div>
              </div>
            </li>
          );
        })}
      </div>
    </div>

            </div>
        </section>
    </>
  )
}

export default Product