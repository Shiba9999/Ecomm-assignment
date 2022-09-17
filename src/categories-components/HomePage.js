import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import ProductCards from '../components/ProductCards';

import Electronics from './Electronics';
import Hobby from './Hobby';
import  Clothing from "./Clothing"
import Furniture from "./Furniture"
const HomePage = () => {
  const dispatch=useDispatch()
  const cateGories=useSelector((state)=>state.data.categories)
  console.log(cateGories);

  return (
    <div>
     {(()=>{
      switch(cateGories){
        case "Clothing" :
          return <Clothing/>
        case "Electronics" :
          return <Electronics/>  
        case "Furniture" :
          return <Furniture/>
        case "Hobby" :
          return <Hobby/>
        case "All" :
            return <ProductCards/>    
        default :
            return <ProductCards/>
      }

     })()}

    </div>
  )
}

export default HomePage