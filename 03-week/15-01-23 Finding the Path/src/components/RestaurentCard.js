import { CND_URL } from "../utils/constants.js";
const RestaurentCard = (props) => {
  // console.log(props);
  const { cloudinaryImageId, name, cuisines, avgRating, lastMileTravelString } =
    props;
  // console.log(resData);
  // const { cloudinaryImageId, name, cuisines, avgRating, lastMileTravelString } =
  //   resData?.data;

  return (
    <div className="res-card">
      <img src={`${CND_URL}${cloudinaryImageId}`} alt="megnaFood" />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};
export default RestaurentCard;
