import React from "react";
import restaurants from "../../utils/data"

const Card = () => {
  return (
    <>
      <div className=" grid-cols-1 justify-center items-center gap-15 md:mx-5 mx-10 md:grid md:grid-cols-4 ">
        {restaurants.map((res, i) => (
          <div key={i} className="restaurant-card mb-10 md:mb-0 md:h-120 transition hover:scale-103">
            <img className="w-100 h-100" src={res.image} alt={res.name} />
            <h2 className="mt-2 text-2xl">{res.name}</h2>
            <p>{res.title}</p>
            <p>
              {res.timing.open} - {res.timing.close}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
