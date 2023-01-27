import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9890283&lng=77.5331725&menuId=" +
        id
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h2>Restaurant id: {restaurant?.data?.id}</h2>
        <h1>{restaurant?.data?.name}</h1>
        <img
          src={IMG_CDN_URL + restaurant?.data?.cloudinaryImageId}
          alt="res_img"
        />

        <h2>{restaurant?.data?.area}</h2>
        <h2>{restaurant?.data?.costForTwoMsg}</h2>
        <h2>{restaurant?.data?.avgRating} stars</h2>
      </div>
      <div>
        <h2>Menu :</h2>
        <ul>
          {Object.values(restaurant?.data?.menu?.items).map((item) => {
            return <li key={item?.id}>{item?.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
