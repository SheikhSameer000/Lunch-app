import React from "react";

const DishesNav = ({ categories, setCategoryFilter }) => {
  return (
    <div className="w-full py-4 px-2 bg-white rounded-xl shadow-md mb-6 overflow-x-auto">
      <ul className="flex gap-3 min-w-max">
        {/* "All" Button */}
        <li>
          <button
            onClick={() => setCategoryFilter(null)}
            className="px-8 py-2 rounded-full border border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100 transition-all whitespace-nowrap text-md md:text-base"
          >
            All
          </button>
        </li>

        {/* Category Buttons */}
        {categories.map((category, index) => (
          <li key={index}>
            <button
              onClick={() => setCategoryFilter(category)}
              className="px-8 py-2 rounded-full border border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100 transition-all whitespace-nowrap text-md md:text-base"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DishesNav;
