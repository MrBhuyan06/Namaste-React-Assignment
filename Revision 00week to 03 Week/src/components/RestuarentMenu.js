import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contains.js";
import Shimmer from "./Shimmer.js";

const id = 384024;
const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.281612&lng=85.88029879999999&restaurantId=${id}&submitAction=ENTER`;
console.log(url);

const RestuarentMenu = () => {
  const { id } = useParams();

  const [restuarentMenu, setRestuarentMenu] = useState(null);
  // const [menuList, setMenuList] = useState(null);

  useEffect(() => {
    getResturentMenu();
  }, []);
  async function getResturentMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.281612&lng=85.88029879999999&restaurantId=${id}&submitAction=ENTER`
    );
    const restuarentMenuData = await data.json();
    console.log(restuarentMenuData.data);
    setRestuarentMenu(restuarentMenuData?.data.cards[0].card.card.info);
    //   setMenuList(
    //     restuarentMenuData?.data.cards[2].cardGroupMap.REGULAR.cards[1].card.card
    //       .itemCards
    //   );
    // }
  } // console.log(menuList);

  return !restuarentMenu ? (
    <Shimmer />
  ) : (
    <div className="container w-full mx-auto flex justify-between h-3/5 gap-2 ml- border-solid border-2 border-sky-500">
      <div className="left-side gap-5 flex flex-col item-center w-2/4 border-solid border-2 border-sky-500">
        <img src={IMG_CDN_URL + restuarentMenu.cloudinaryImageId} alt="" />
        <h1>{restuarentMenu.name}</h1>
        <h2>{restuarentMenu.id}</h2>
        <p>
          {restuarentMenu.city},{restuarentMenu.areaName},
          {restuarentMenu.locality}
        </p>
        <p>Discount {restuarentMenu?.aggregatedDiscountInfoV2?.header}</p>
      </div>
      <div className="right-side w-2/4 border-solid border-2 border-sky-500"></div>
    </div>
  );
};
export default RestuarentMenu;
