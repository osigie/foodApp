import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";

import { AppDispatch } from "../../app/store";
import axios from "axios";
import { RootState, AppThunk } from "../../app/store";
import { SingleMealType } from "../../components/SingleMeal";

const initialState = {
  meal: [],
  loading: true,
  name: "",
  price: "", //don't forget to convert to number
  description: "",
  isEdit: false,
  editJobId:""

};

const mealSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
    fetchMeals: (state, action) => {
      state.meal = action.payload;
    },
    deleteMeals: (state, action) => {
      state.meal = state.meal.filter(
        (meal: SingleMealType) => meal._id !== action.payload
      );
    },
    handleChangeOfInput: (state, action) => {
      state = { ...state, [action.payload.name]: action.payload.value };
    },
    getOneMealToState: (state, action) => {
const current:any = state.meal.find((meal:any)=>meal._id===action.payload)
      state.name = current?.name;
      state.price = current?.price;
      state.description = current?.description;
      state.editJobId = current?._id

    },
    clearValues: (state) => {
      state.name = "";
      state.price = "";
      state.description = "";
    },
  },
});

const actions = mealSlice.actions;

///action creators

export const fetchData = () => {
  return async (dispatch: AppDispatch) => {
    const fetching = async () => {
      const response = await axios("/meals");
      if (response.status === 200) {
        dispatch(actions.setLoading({ loading: false }));
        dispatch(actions.fetchMeals(response.data));
        return;
      }
    };

    try {
      await fetching();
    } catch (error) {
      console.log(error);
    }
  };
};

export const { fetchMeals, deleteMeals, handleChangeOfInput, clearValues,getOneMealToState } =
  mealSlice.actions;

export default mealSlice.reducer;
