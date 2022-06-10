import React, { useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart"; 
import { Routes, Route} from "react-router-dom"
import StoreComponent from "./pages/StoreComponent"
import Register from "./pages/admin/register/Register"
import SharedPage from "./pages/admin/dashboard/SharedPage/SharedPage"
function App() {

  return (
<Routes>
  <Route path = "/" element = {<StoreComponent/>}/>
    <Route path = "/admin/register" element = {<Register/>}/>
    <Route path= "/admin" element = {<SharedPage/>} ></Route>
</Routes> 
  );
}

export default App;
