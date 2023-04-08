import { IMG_CDN_URL } from "../contains.js";
const RestuarentCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  area,
  avgRating,
  costForTwoString,
}) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
      <a class="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          class="object-cover object-center w-full h-full block"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
      </a>
      <div class="mt-4">
        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
          {area}
        </h3>
        <h2 class="text-gray-900 title-font text-lg font-medium">{name}</h2>
        <h4 class="text-gray-900  text-sm  font-small">{cuisines.join(",")}</h4>
        <p class="mt-1">{costForTwoString}</p>
        <p class="mt-1">{avgRating}start</p>
      </div>
    </div>
  );
};
export default RestuarentCard;
