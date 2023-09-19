import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPages/Login";
import Register from "./Pages/RegisterPages/Register";
import Root from "./Pages/RootPages/Root";
import Products from "./Pages/ProductsPage/Products";
import Single from "./Pages/SinglePage/Single";
import Search from "./Pages/SearchPage/Search";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route index element={<Login />} />
      <Route path="/registratsiya" element={<Register />} />
      <Route path="/" element={<App />}>
        <Route path="/app" element={<Root />} />
        <Route path="/allproducts" element={<Products />} />
        <Route path="/singleproduct/:id" element={<Single />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path=""/>
      </Route>
    </Routes>
  </BrowserRouter>
);
