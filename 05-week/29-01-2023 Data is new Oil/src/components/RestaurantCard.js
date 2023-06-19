import { IMG_CDN_URL } from "../contants";
import UserContext from "../utils/UserContext.js";
import { useContext, useState } from "react";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="card w-[350] hover:border-2 p-4  bg-gray-200">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
      <h4 className="font-bold">{user.name}</h4>
      <h4 className="font-bold">{user.email}</h4>
    </div>
  );
};

export default RestrauntCard;
