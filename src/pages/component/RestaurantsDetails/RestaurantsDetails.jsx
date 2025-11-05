import restaurantsData from "@/utils/data";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantsDetails = () => {
  const [restaurant, setRestaurant] = useState();
  const { id } = useParams();

  useEffect(() => {
    const restaurantDetail = restaurantsData.find(
      (res) => res.id === parseInt(id)
    );
    console.log(id);

    setRestaurant(restaurantDetail);
  }, [id]);

  return <div>{restaurant?.name}</div>;
};

export default RestaurantsDetails;
