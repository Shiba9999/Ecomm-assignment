import React from 'react'
import { useSelector } from 'react-redux'
const Details = () => {
    const details=useSelector((state)=>state.data.details)
    console.log(details);
  return (
<section className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={details.avatar}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{details.name}</h2>
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{details.category}</h2>
        
     
        <p className="leading-relaxed">{details.description}</p>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">{`${details.price}Rs`}</span>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Details
