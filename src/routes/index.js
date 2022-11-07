import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../view/dashboard";
import Home from "../view/home";
import Product from "../view/product";
import Purchase from "../view/purchase";
import Sales from "../view/sales";
import User from "../view/user";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/purchase" element={<Purchase />}></Route>
      <Route path="/sales" element={<Sales />}></Route>
      <Route path="/user" element={<User />}></Route>
    </Routes>
  );
};

export default MainRoutes;
