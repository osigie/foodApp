import {
    createAsyncThunk,
    createSlice,
    PayloadAction,
    current,
  } from "@reduxjs/toolkit";
  
  import {AppDispatch} from "../../app/store"
  
  
  const initialState = {
    id: "",
    name: "",
    description: "",
    price: 0,
  };
  
  const mealSlice = createSlice({
    name: "meals",
    initialState,
    reducers: {
        fetchMeals:(state, action)=>{
  
        }
    },
  });
  
  
  
  
  ///action creators
  
  const fetchData = ()=>{
  return async ( dispatch:AppDispatch)=>{
  
  }
  }
  
  export const {fetchMeals} = mealSlice.actions
  
  export default mealSlice.reducer;
  