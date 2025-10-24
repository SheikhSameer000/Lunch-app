import React from "react";

const Card = ({ name, title, timing, image }) => {
  return (
    <>
      <div className="justify-center items-center gap-15">
        <div className="mb-10 md:mb-0 md:h-120 transition hover:scale-103">
          <img className="w-100 h-90" src={image} alt={name} />
          <h2 className="mt-2 text-2xl text-[#f58220]">{name}</h2>
          <p>{title}</p>
          <p>
            {timing.open} - {timing.close}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
