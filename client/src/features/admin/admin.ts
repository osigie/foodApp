import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";

import { AppDispatch } from "../../app/store";
import axios from "axios";
import { MealType } from "../../pages/admin/dashboard/AddMeal";

import { deleteMeals } from "../meals/meals";
type adminData = {
  name: string;
  email: string;
  password?: string;
  _id?: string;
};

const token = localStorage.getItem("token");
const admin: any = localStorage.getItem("admin");

const initialState = {
  token: token,
  admin: JSON.parse(admin) || null,
  msg: "",
  isLoading: false,
  alertType: "",
  isAlert: false,
};

const authFetch = axios.create({
  baseURL: "",
  headers: { Authorization: `Bearer ${initialState.token}` },
});

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    registerAdmin: (state, action) => {
      state.token = action.payload.token;
      state.admin = action.payload.admin;
      state.isLoading = action.payload.isLoading;
    },
    sendMsg: (state, action) => {
      state.msg = action.payload.msg;
      state.isAlert = action.payload.isAlert;
      state.alertType = action.payload.alertType;
      state.isLoading = action.payload.isLoading;
    },
    setError: (state, action) => {
      state.msg = action.payload.msg;
      state.isAlert = action.payload.isAlert;
      state.alertType = action.payload.alertType;
    },
    clearError: (state) => {
      state.msg = "";
      state.isAlert = false;
      state.alertType = "";
      state.isLoading = false;
    },
  },
});

const actions = adminSlice.actions;

//add token and admin to local storage

const toLacal = (admin: adminData, token: string) => {
  localStorage.setItem("admin", JSON.stringify(admin));
  localStorage.setItem("token", token);
};

//clear alert
export const clearAlert = () => {
  return (dispatch: AppDispatch) => {
    setTimeout(() => {
      dispatch(actions.clearError());
    }, 3000);
  };
};

///action creators

export const login = (data: adminData) => {
  return async (dispatch: AppDispatch) => {
    const sendData = async () => {
      dispatch(
        actions.sendMsg({
          msg: "logging in.....",
          isAlert: true,
          alertType: "success",
        })
      );
      dispatch(clearAlert());
      const response = await axios.post("/admin/login", {
        email: data.email,
        password: data.password,
      });

      const { token, admin } = response.data;
      toLacal(admin, token);
      if (response.status === 200) {
        dispatch(
          actions.sendMsg({
            msg: "successfully logging in",
            isAlert: false,
            alertType: "success",
            isLoading: true,
          })
        );
        dispatch(clearAlert());
        dispatch(actions.registerAdmin({ token, admin }));
        return;
      }
    };

    try {
      await sendData();
    } catch (error: any) {
      dispatch(
        actions.sendMsg({
          msg: error.response.data.message,
          isAlert: true,
          alertType: "danger",
        })
      );
      dispatch(clearAlert());
    }
  };
};

export const register = (data: adminData) => {
  return async (dispatch: AppDispatch) => {
    const sendData = async () => {
      dispatch(
        actions.sendMsg({
          msg: "creating admin.....",
          isAlert: true,
          alertType: "success",
        })
      );
      dispatch(clearAlert());
      const response = await axios.post("/admin/register", {
        email: data.email,
        password: data.password,
        name: data.name,
      });
      console.log(response);
      const { token, admin } = response.data;
      toLacal(admin, token);
      if (response.status === 201) {
        dispatch(
          actions.sendMsg({
            msg: "admin created succesfully",
            isAlert: false,
            alertType: "success",
            isLoading: true,
          })
        );
        dispatch(clearAlert());
        dispatch(actions.registerAdmin({ token, admin }));
        return;
      }
    };

    try {
      await sendData();
    } catch (error: any) {
      dispatch(
        actions.sendMsg({
          msg: error.response.data.message,
          isAlert: true,
          alertType: "danger",
        })
      );
      dispatch(clearAlert());
    }
  };
};

export const createMeal = (data: MealType) => {
  return async (dispatch: AppDispatch) => {
    const postData = async () => {
      dispatch(
        actions.sendMsg({
          msg: "creating meal.....",
          isAlert: true,
          alertType: "success",
        })
      );
      dispatch(clearAlert());
      const response = await authFetch.post("/meals", data);
      if (response.status === 201) {
        dispatch(
          actions.sendMsg({
            msg: "meal created succesfully",
            isAlert: false,
            alertType: "success",
            isLoading: true,
          })
        );
        dispatch(clearAlert());
        return;
      }
    };
    try {
      await postData();
    } catch (error: any) {
      dispatch(
        actions.sendMsg({
          msg: error.response.data.message,
          isAlert: true,
          alertType: "danger",
        })
      );
      dispatch(clearAlert());
    }
  };
};

export const deleteMeal = (id: string) => {
  return async (dispatch: AppDispatch) => {
    const deleteMealFromBack = async () => {
      const response = await authFetch.delete("/meals/" + id);
      if (response.status === 200) {
        dispatch(deleteMeals(id));
      }
    };
    try {
      await deleteMealFromBack();
    } catch (error) {
      console.log(error);
    }
  };
};

type Data = {
  editJobId: string;
  price: string;
  name: string;
  description: string;
};

export const editMealFromBack = (data: Data) => {
  return async (dispatch: AppDispatch) => {
    const getMealFromBack = async () => {
      const response = await authFetch.patch("/meals/" + data.editJobId, {
        name: data.name,
        price: Number(data.price),
        description: data.description,
      });
      if (response.status === 200) {
        //   dispatch(getMeals(id));
      }
    };
    try {
      await getMealFromBack();
    } catch (error) {
      console.log(error);
    }
  };
};

//   export const actualEdit = (id: string) => {
//     return async (dispatch: AppDispatch) => {
//       const getMealFromBack = async () => {
//         const response = await authFetch("/meals/" + id);
//         if (response.status === 200) {
//         //   dispatch(getMeals(id));
//         }
//       };
//       try {
//         await getMealFromBack();
//       } catch (error) {
//         console.log(error);
//       }
//     };
//   };

export const { registerAdmin, setError } = adminSlice.actions;

export default adminSlice.reducer;
