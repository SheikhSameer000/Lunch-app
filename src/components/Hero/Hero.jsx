import React from "react";
import "./Hero.css";
import {restaurants} from "../../utils/data";
import SearchBar from "../SearchBar/SearchBar";
import OrderHistory from "../OrderHistory/OrderHistory";
import { toast, ToastContainer } from "react-toastify";
import PopularOrders from "../PopularOrders/PopularOrders";
import AllRestaurants from "../AllRestaurants/AllRestaurants";

const Hero = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="main w-100% h-auto flex flex-col justify-center items-center gap-4 md:gap-8 mb-20">
        <section className="tag-line w-full h-full flex flex-col items-center space-y-2 md:space-y-2 px-4 md:px-0">
          <h1 className="text-3xl md:text-5xl font-bold mt-8 md:mt-12 text-center">
            Welcome to <span className="text-orange-500">TechWards</span>
          </h1>
          <p className="text-md md:text-lg text-center mt-2 md:mt-4 mb-4">
            Your one-stop destination for delicious meals!
          </p>
          <SearchBar />
        </section>
        <OrderHistory history={restaurants.slice(-7)} />
      </div>
      <PopularOrders />
      <AllRestaurants />
    </>
  );
};

export default Hero;
