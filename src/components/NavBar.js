import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addCategories } from "../toolkit/productSlice";

const NavBar = () => {
  const navigate=useNavigate ()
  const dispatch=useDispatch()
  // const [value, setValue] = useState("");
  const cateGories=useSelector((state)=>state.data.categories)
  console.log(cateGories);
  const handleChange = (event) => {
    // setValue(event.target.value);
    dispatch(addCategories(event.target.value))
  };

  const handleAdd=()=>{
    navigate("/add")

  }
  const handlerForFav=()=>{
    navigate("/fav")
  }
  return (
    <div className="flex justify-evenly h-40 w-5/5 items-center bg-neutral-600  ">
      <button  onClick={handlerForFav} className=" bg-pink-500 h-12 w-32 rounded-full font-mono text-base hover:bg-pink-900 text-white">
        Favourites
      </button>
      <button  onClick={handleAdd} className="bg-blue-500 h-12 w-32 rounded-full font-mono text-base hover:bg-blue-900  text-white">
        Add Item
      </button>
      <div>
      <FormControl variant="standard" sx={{ m: 1, width: "140px" }}>
        <InputLabel id="demo-simple-select-standard-label" sx={{fontFamily:"monospace",fontSize:"20px",lineHeight:"24px"}} >Categories</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={cateGories}
          onChange={handleChange}
          label="Age"
          placeholder="All"
        >
          <MenuItem sx={{fontFamily:"monospace",fontSize:"10px",lineHeight:"10px"}} value="All" selected>All</MenuItem>
          <MenuItem sx={{fontFamily:"monospace",fontSize:"10px",lineHeight:"10px"}} value="Clothing">Clothing</MenuItem>
          <MenuItem sx={{fontFamily:"monospace",fontSize:"10px",lineHeight:"10px"}} value="Electronics">Electronics</MenuItem>
          <MenuItem sx={{fontFamily:"monospace",fontSize:"10px",lineHeight:"10px"}} value="Furniture">Furniture</MenuItem>
          <MenuItem sx={{fontFamily:"monospace",fontSize:"10px",lineHeight:"10px"}} value="Hobby">Hobby</MenuItem>
        </Select>
      </FormControl>
 
    </div>
    </div>
  );
};

export default NavBar;
