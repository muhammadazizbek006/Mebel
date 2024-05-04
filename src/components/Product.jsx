import React from 'react'
import { useState } from 'react';



const Product = () => {
  const data = [
    { id: "1", tabTitle: "Tab 1", tabContent: "Tab Content 1" },
    { id: "2", tabTitle: "Tab 2", tabContent: "Tab Content 2" },
    { id: "3", tabTitle: "Tab 3", tabContent: "Tab Content 3" },
  ];
  
  const [activeTab, setActiveTab] = useState(data[0].id);
  return (
    <>
        <section className='py-12 bg-tab'>
            <div className="containerb">
                <h2 className='text-42 font-bold text-center mb-8'>Best Selling Product</h2>
                {/* tabs */}
      <div>

      <ul className="flex justify-center ">
        {data.map((tab) => {
          return (
            <li
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 cursor-pointer mb-20  ${
                activeTab === tab.id ? "bg-white rounded-full shadow-lg" : "bg-tab"
              }`}
            >
              {tab.tabTitle}
            </li>
          );
        })}
      </ul>

      <div>
        {data.map((tab) => {
          return (
            <li
              key={tab.id}
              className={`p-5 cursor-pointer ${
                activeTab === tab.id ? "bg-green-600 p-5" : "hidden"
              }`}
            >
              {tab.tabContent}
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