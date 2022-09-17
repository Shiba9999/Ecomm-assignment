import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import HomePage from '../categories-components/HomePage';
import { getPosts } from '../toolkit/productSlice';
import Loading from './Loading';
import ProductCards from './ProductCards';

const AllProducts = () => {
  const todo = useSelector((state) => state.data);
  console.log("todo",todo);
  let loadingValue=todo.loading;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
     <div className='mt-24' >
        {loadingValue? <Loading/> : <HomePage/>}  
     </div>
  )
}

export default AllProducts