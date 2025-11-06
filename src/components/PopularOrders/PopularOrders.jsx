import React from "react";
import {restaurants} from "../../utils/data";
import { toast, ToastContainer } from "react-toastify";

const PopularOrders = () => {
  const notify = () => toast.success("Item Added Successfully");

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
      <div className="w-full md:px-30 md:mt-10 md:flex justify-between items-center flex-col md:flex-row ">
        <h1 className="md:text-[2.5vw] text-3xl">Popular Orders</h1>
      </div>
      <section className="w-full h-auto my-8 md:my-20 justify-center ">
        <div className=" grid-cols-1 justify-center items-center gap-15 md:mx-5 mx-10 md:grid md:grid-cols-4 ">
          {restaurants.slice(0,4).map((res, i) => (
            <div
              key={i}
              className="restaurant-card mb-10 md:mb-0 h-120 md:h-130 w-full transition hover:scale-103 relative"
            >
              <div className="relative">
                <img
                  className="w-full h-70 md:h-80 md:w-100"
                  src={res.image}
                  alt={res.name}
                />
              </div>
              <h2 className="mt-2 text-2xl">{res.name}</h2>
              <p>{res.title}</p>
              <p>
                {res.timing.open} - {res.timing.close}
              </p>
              <button
                className=" flex absolute top-100  right-0 items-center justify-center w-8 h-8 bg-orange-500 group text-white text-sm rounded-full hover:w-32 hover:bg-[#f58220] transition-all cursor-pointer"
                onClick={() => {
                  notify();
                }}
              >
                <span className="group-hover:hidden text-[20px]">+</span>
                <span className="hidden group-hover:block">Add to Cart</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularOrders;
