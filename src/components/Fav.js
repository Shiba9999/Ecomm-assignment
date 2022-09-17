import React from 'react'
import {  useSelector } from 'react-redux';
const Fav = () => {
  const fav=useSelector ((state)=>state.data.fav);

  console.log(fav);
  return (
    <div className=" justify-center grid grid-cols-4 gap-4">
    {fav.map((eachObj) => (
      <div key={eachObj._id} className="rounded-lg shadow-lg bg-white h-96 ">
          <img
            className="rounded-t-lg  object-scale-down h-[50%]  w-[100%]"
            src={eachObj.avatar} 
            alt=""
          />
        <div className="p-6">
          <h5 className="text-gray-900 text-base font-medium mb-2">{eachObj.name}</h5>
          <p className="text-gray-700 text-base mb-4 overflow-y-auto">
          {`${eachObj.price}Rs`}
          </p>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Fav