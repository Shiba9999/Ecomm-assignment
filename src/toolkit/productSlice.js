import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  loading: true,
  value: [],
  error: "",
  fav:[],
  details:{},
  clothing:[],
  Electronics:[],
  Furniture:[],
  Hobby:[],
  categories:""
};
let token =process.env.REACT_APP_TOKEN


export const getPosts = createAsyncThunk("product/getPosts", async () => {
  let res = await axios.get("https://upayments-studycase-api.herokuapp.com/api/products", { headers: {"Authorization" : `Bearer ${token}`} });
  let data = await res.data;
  return data;
});


export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addDetails: (state, action) => {
      state.details=action.payload
    },
    deleteProduct:(state,action)=>{
      console.log("slice",state.value);
      state.value=state.value.filter((obj)=>obj._id !== action.payload)

    },
    addFav:(state,action)=>{
      state.fav=[...state.fav,action.payload]
    },
    addCategories:(state,action)=>{
      state.categories=action.payload

    },
    ClothingR:(state,action)=>{
      state.clothing=state.value.filter((obj)=>obj.category==="Clothing")
    },
    ElectronicsR:(state,action)=>{
      state.Electronics=state.value.filter((obj)=>obj.category==="Electronics")
    },
    FurnitureR:(state,action)=>{
      state.Furniture=state.value.filter((obj)=>obj.category==="Furniture")
    },
    HobbyR:(state,action)=>{
      state.Hobby=state.value.filter((obj)=>obj.category==="Hobby")
    },


  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.value = action.payload.products;
      state.error = "";
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.loading = false;
      state.value = [];
      state.error = action.error.message;
    });
  },
});

// Action creators are generated for each case reducer function
export const { addDetails,deleteProduct,addFav,addCategories,ClothingR,ElectronicsR,FurnitureR,HobbyR } = productSlice.actions;

export default productSlice.reducer;
