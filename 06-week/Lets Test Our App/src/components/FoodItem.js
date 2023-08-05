import { IMG_CDN_URL } from "../contants";

const FoodItem = ({ name, price, category, description }) => {
  return (
    <div className="flex gap-2 ">
      <div className="card w-[350] h-[250] hover:border-2 p-4  bg-gray-200">
        <h2>{name}</h2>
        <h3>{category}</h3>
        <h3>{price / 100}</h3>
        <h4>{description} </h4>
      </div>
    </div>
  );
};

export default FoodItem;
