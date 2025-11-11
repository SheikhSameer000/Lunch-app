import { useState } from "react";
import { Rating, RatingButton } from "../ui/shadcn-io/rating";

export const Modal = ({ isOpen, onClose, dish }) => {
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(3);
  const [rating3, setRating3] = useState(5);
  if (!isOpen || !dish) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-6">
      <div className="bg-white rounded-lg p-6 w-full md:w-auto md:h-auto h-auto space-y-4 md:flex z-50">
        <img
          src={dish.image}
          alt={dish.name}
          className="md:w-90 md:h-90 object-cover rounded-2xl"
        />
        <div className="flex flex-col p-5 justify-between">
          <div className="md:space-y-2 ">
            <h1 className="text-xl font-semibold">{dish.name}</h1>
            <p className="text-gray-600">{dish.title}</p>
            <p className="text-gray-600 text-sm md:w-100  text-wrap">
              {dish.description}
            </p>
            <div className="flex justify-between">
              <p className="font-bold text-orange-600">Rs {dish.price}</p>
              <Rating value={rating2} onValueChange={setRating2}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <RatingButton className="text-orange-500" key={index} />
                ))}
              </Rating>
            </div>
          </div>
          <div className="w-full">
            <button
              className=" bg-orange-500 text-white rounded-lg py-2 w-full group text-s hover:bg-[#f58220] transition-all cursor-pointer"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
