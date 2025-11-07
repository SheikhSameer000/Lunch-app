import React, { useState } from "react";

const DishesNav = ({ categories, setCategoryFilter }) => {
  return (
    <div className="w-full h-10 ">
      <ul className="">
        {/* {console.log(dish.dishes[0].category)} */}
        <li>
          <button onClick={() => setCategoryFilter()} className="mx-3 px-7 py-3 rounded-full border border-gray-300 hover:bg-gray-200 transition-all justify-end">
            All
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              className="mx-3 px-7 py-3 rounded-full border border-gray-300 hover:bg-gray-200 transition-all"
              onClick={() => setCategoryFilter(category)}
            >
              {category}
            </button>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default DishesNav;
