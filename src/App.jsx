import React from "react";
import "./App.css";
import Layout from "./layout/Layout";
import Hero from "./components/Hero/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/component/Cart/Cart";
import Menu from "./pages/component/Menu/Menu";
import OrderSummary from "./pages/component/OrderSummary/OrderSummary";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Hero/>}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/ordersummary" element={<OrderSummary />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
