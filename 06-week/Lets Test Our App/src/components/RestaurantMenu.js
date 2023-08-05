import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../contants.js";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import useRestraunt from "../hooks/useRestraunt.js";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice.js";

const ResTaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const restaurant = useRestraunt(resId);
  console.log(restaurant);
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItems(item));
  };

  if (restaurant === null) {
    console.log("log shimmer");
    return <Shimmer />;
  }
  console.log("came");
  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwoMessage,
    avgRatingString,
  } = restaurant?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restaurant.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="menu">
      <h1 className="text-slate-600">{name}</h1>
      <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt="" />
      <h3>
        {cuisines.join(",")}-{costForTwoMessage}
      </h3>
      <div></div>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item, i) => {
          return (
            <li key={item.card.info.id}>
              {`${item.card.info.name} ${
                item.card.info.price / 100 || item.card.info.defaultPrice / 100
              }`}

              <button
                onClick={() => handleAddItems(item.card.info)}
                className="bg-green-800 m-4 p-2"
              >
                Add Items
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ResTaurantMenu;
