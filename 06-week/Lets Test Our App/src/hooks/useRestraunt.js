import { useState, useEffect } from "react";

const useRestraunt = (resId) => {
  const [restaurant, setRestauraunt] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.952083&lng=77.7079919&restaurantId=" +
        resId
    );
    console.log(data);
    const json = await data.json();
    console.log(json);
    setRestauraunt(json?.data);
  };

  return restaurant;
};
export default useRestraunt;
