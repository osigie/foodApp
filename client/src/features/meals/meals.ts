import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";

import { AppDispatch } from "../../app/store";
import axios from "axios";
import { RootState, AppThunk } from "../../app/store";

const initialState = {
  meal: [],
  loading: true,
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

export const { fetchMeals } = mealSlice.actions;

export default mealSlice.reducer;
