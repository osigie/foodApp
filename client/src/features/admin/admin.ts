import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";

import { AppDispatch } from "../../app/store";
import axios from "axios";
type adminData = {
  name: string;
  email: string;
  password: string;
};

const token = localStorage.getItem("token");
const admin: any = localStorage.getItem("admin");

const initialState = {
  token: token,
  admin: JSON.parse(admin) || null,
  msg: "",
};

// Axios Default
axios.defaults.headers.common["Authorization"] = `Bearer ${initialState.token}`;

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    registerAdmin: (state, action) => {
      state.token = action.payload.token;
      state.admin = action.payload.admin;
    },
    sendMsg: (state, action) => {
      state.msg = action.payload;
    },
  },
});

const actions = adminSlice.actions;

//add token and admin to local storage

const toLacal = (admin: any, token: string) => {
  localStorage.setItem("admin", admin);
  localStorage.setItem("token", token);
};

///action creators

export const login = (data: adminData) => {
  return async (dispatch: AppDispatch) => {
    const sendData = async () => {
      dispatch(actions.sendMsg("logging in....."));
      const response = await axios.post("/admin/login", {
        email: data.email,
        password: data.password,
      });
      console.log(response.data);
      if (response.status === 200) {
        dispatch(actions.sendMsg("successfully logging in"));
        dispatch(actions.registerAdmin({ token, admin }));
        return;
      }
    };

    try {
      await sendData();
    } catch (error: any) {
      dispatch(actions.sendMsg(error.response.data.message));
    }
  };
};

export const register = (data: adminData) => {
  return async (dispatch: AppDispatch) => {
    const sendData = async () => {
      dispatch(actions.sendMsg("creating admin....."));
      const response = await axios.post("/admin/register", {
        email: data.email,
        password: data.password,
        name: data.name,
      });
      console.log(response);
      const { token, admin } = response.data;
      toLacal(admin, token);
      if (response.status === 201) {
        dispatch(actions.sendMsg("admin created succesfully"));
        dispatch(actions.registerAdmin({ token, admin }));
        return;
      }
    };

    try {
      await sendData();
    } catch (error: any) {
      dispatch(actions.sendMsg(error.response.data.message));
    }
  };
};

export const { registerAdmin } = adminSlice.actions;

export default adminSlice.reducer;
