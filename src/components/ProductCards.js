import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addDetails, addFav, deleteProduct } from "../toolkit/productSlice";
import Details from "./Details";
import {  useSelector } from 'react-redux';

const ProductCards = () => {
  const dispatch=useDispatch()
  const todo = useSelector((state) => state.data);
  let allProducts=todo.value;
  const navigate=useNavigate ()
    const detailsHandler =(eachObj)=>{
        console.log(eachObj);
        dispatch(addDetails(eachObj))
        navigate(`/details/${eachObj._id}`)
    }
    const deleteHandler=(id)=>{
      dispatch(deleteProduct(id))
    }
    const favHandler =(favObj)=>{
      dispatch(addFav(favObj));
    }
  return (
    <div className=" justify-center grid grid-cols-4 gap-4">
      {allProducts.map((eachObj) => (
        <div key={eachObj._id} className="rounded-lg shadow-lg bg-white h-96 ">
            <img
              className="rounded-t-lg  object-scale-down h-[50%]  w-[100%]"
              src={eachObj.avatar} 
              alt=""
            />
         
          <div className="p-6">
            <h5 className="text-gray-900 text-base font-medium mb-2">{eachObj.name} {eachObj.category}</h5>
            <p className="text-gray-700 text-base mb-4 overflow-y-auto">
            {`${eachObj.price}Rs`}
            </p>
            <div className="flex justify-evenly ">
            <button
              type="button"
              onClick={()=>detailsHandler(eachObj)}
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Details
            </button>
            <button
              type="button"
              onClick={()=>deleteHandler(eachObj._id)}
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-5"
            >
              Delete
            </button>
            <button
              type="button"
              onClick={()=>favHandler(eachObj)}
              className=" inline-block px-6 py-2.5 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out ml-5"
            >
              Add To Favourites
            </button>
            </div>
         
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
