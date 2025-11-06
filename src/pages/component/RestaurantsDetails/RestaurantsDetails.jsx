import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";
import { restaurants, restaurantDishes } from "@/utils/data";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const RestaurantsDetails = () => {
  const [restaurant, setRestaurant] = useState();
  const { id } = useParams();
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(3);
  const [rating3, setRating3] = useState(5);
  const notify = () => toast.success("Item Added Successfully");

  useEffect(() => {
    const restaurantDetail = restaurants.find((res) => res.id === parseInt(id));

    console.log(id);

    setRestaurant(restaurantDetail);
  }, [id]);

  const dish = restaurantDishes.find(
    (res) => res.restaurantId === parseInt(id)
  );
  return (
    <section>
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
      <div className="h-auto w-full  flex justify-center items-center flex-col gap-4 my-10 px-30">
        <h1 className="text-[2vw]">{restaurant?.name}</h1>
        <h1 className="text-[1vw]">{restaurant?.title}</h1>

        <div className="flex flex-col items-center gap-2">
          <Rating value={rating2} onValueChange={setRating2}>
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingButton className="text-orange-500" key={index} />
            ))}
          </Rating>
          <div className="text-center">
            <p className="text-xs text-muted-foreground">Rating: {rating2}</p>
          </div>
        </div>
        <div className="text-[2vw] text-start mt-10 mb-4 w-full">
          <h1>DISHES</h1>
        </div>
        <div className="w-full h-auto border rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          {dish?.dishes?.map((d) => (
            <div
              key={d.id}
              className="w-full h-full flex justify-between items-center px-10 py-4 border-b hover:bg-gray-50 hover:cursor-pointer hover:transition-all hover:scale-102 last:border-b-0 "
            >
              <div className="flex justify-center items-center gap-5">
                {" "}
                <img
                  src={d.image}
                  alt=""
                  className="w-30 h-25 object-cover rounded-2xl"
                />
                <div>
                  <h1 className="text-[1.5vw]">{d?.name}</h1>
                  <p>{d?.title}</p>
                </div>
              </div>
              <div>
                <h1 className="text-[1.5vw]">Rs. {d?.price}</h1>
                <button
                  className=" flex  top-100  right-0 items-center justify-center w-32 h-8 bg-orange-500 group text-white text-sm rounded-full hover:bg-[#f58220] transition-all cursor-pointer"
                  onClick={() => {
                    notify();
                  }}
                >
                  <span className="">Add to Cart</span>
                </button>
              </div>
              {console.log(d)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantsDetails;
