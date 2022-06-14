import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import StoreComponent from "./pages/StoreComponent";
import Register from "./pages/admin/register/Register";
import SharedPage from "./pages/admin/dashboard/SharedPage";
import AddProduct from "./pages/admin/dashboard/AddMeal";
import DeleteProduct from "./pages/admin/dashboard/DeleteMeal";
import Profile from "./pages/admin/dashboard/Profile";
import NotFound from "./components/notFound/NotFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<StoreComponent />} />
      <Route path="/admin/register" element={<Register />} />
      <Route path="/admin" element={<SharedPage />}>
        <Route path="/admin/add-meal" element={<AddProduct />} />
        <Route path="/admin/delete-meal" element={<DeleteProduct />} />
        <Route index element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
