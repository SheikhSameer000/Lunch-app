import React from "react";
import {restaurants} from "../../utils/data";
import { Link } from "react-router-dom";

const AllRestaurants = () => {
  return (
    <>
      <div className="w-full md:px-30 md:mt-10 md:flex justify-between items-center flex-col md:flex-row ">
        <h1 className="md:text-[2.5vw] text-3xl">All Restaurants</h1>
      </div>
      <section className="w-full h-auto my-8 md:my-20 justify-center ">
        <div className=" grid-cols-1 justify-center items-center gap-15 md:mx-5 mx-10 md:grid md:grid-cols-4 ">
          {restaurants.map((res) => (
            <Link key={res.id} to={`/restaurants/${res.id}`}>
              {" "}
              <div
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
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllRestaurants;
