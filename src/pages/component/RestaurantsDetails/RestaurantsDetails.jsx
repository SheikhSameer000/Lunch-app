import DishesNav from "@/components/DishesNav/DishesNav";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";
import { restaurants, allRestaurantDishes } from "@/utils/data";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Modal } from "@/components/Modal/Modal";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";

const RestaurantsDetails = () => {
  const [restaurant, setRestaurant] = useState();
  const [categoryFilter, setCategoryFilter] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const { id } = useParams();
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(3);
  const [rating3, setRating3] = useState(5);
  const notify = () => toast.success("Item Added Successfully");

  useEffect(() => {
    const restaurantDetail = restaurants.find((res) => res.id === parseInt(id));

    // console.log(id);

    setRestaurant(restaurantDetail);
  }, [id]);

  const restaurantDishes = allRestaurantDishes.find(
    (dish) => dish.restaurantId === parseInt(id)
  );

  const categories = Array.from(
    new Set(restaurantDishes.dishes.map((dish) => dish.category))
  );

  const displayedDishes = categoryFilter
    ? restaurantDishes.dishes.filter((dish) => dish.category === categoryFilter)
    : restaurantDishes.dishes;

  const modalHandler = (dish) => {
    setSelectedDish(dish);
    setModalOpen(true);
  };
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
      <div className="h-auto w-full  flex justify-center items-center flex-col gap-4 my-10 md:px-30">
        {modalOpen && (
          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            dish={selectedDish}
          />
        )}
        <h1 className="text-5xl md:text-[2vw]">{restaurant?.name}</h1>
        <h1 className="text-1xl text-center w-full md:text-[1vw]">
          {restaurant?.title}
        </h1>

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
        <h1 className="text-4xl md:text-[2vw] mt-10 w-full text-center md:text-start">
          Dishes
        </h1>
        <div className=" text-start mt-10 mb-4 w-full flex items-center justify-between">
          <DishesNav
            setCategoryFilter={setCategoryFilter}
            categories={categories}
          />
        </div>
        <div className="w-full h-auto border rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] md:bg-white bg-gray-50">
          {displayedDishes?.map((d) => (
            <div
              onClick={() => modalHandler(d)}
              key={d.id}
              className="w-full h-full gap-5 flex-col md:flex-row flex justify-between items-center px-10 py-4 border-b rounded-t-2xl rounded-b-2xl  bg-gray-100 md:bg-white  md:hover:bg-gray-100 hover:cursor-pointer hover:transition-all hover:scale-102 last:border-b-0 "
            >
              <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <img
                  src={d.image}
                  alt={d.name}
                  className="md:w-30 md:h-25  object-cover rounded-2xl"
                />
                <div className="gap-5">
                  <h1 className="text-lg text-center md:text-[1.5vw]">
                    {d?.name}
                  </h1>
                  <p className="text-center md:text-start text-sm">
                    {d?.title}
                  </p>
                </div>
              </div>
              <div className="">
                <h1 className="text-1xl text-center md:text-[1.5vw] ">
                  Rs. {d?.price}
                </h1>
                <button
                  className=" flex   top-100  right-0 items-center justify-center w-32 h-8 bg-orange-500 group text-white text-sm rounded-full hover:bg-[#f58220] transition-all cursor-pointer"
                  onClick={() => {
                    notify();
                  }}
                >
                  <span>Add to Cart</span>
                </button>
              </div>
              {/* {console.log(d)} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantsDetails;
