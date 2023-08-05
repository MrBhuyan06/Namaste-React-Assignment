import { restaurantList } from "../contants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";
import useOnline from "../hooks/useOnline.js";
import UserContext from "../utils/UserContext.js";
import { useContext } from "react";
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);
  // console.log({ ...user });

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  const offline = useOnline();
  console.log(offline);
  if (!offline) {
    return <h1>OOpps u are offline</h1>;
  }

  // not render component (Early return)
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="w-1/4 mx-auto  mt-3 rounded space-x-3">
        <input
          type="text"
          className="search-input bg-gray-200 "
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,

              // email: "gudu",
            });
          }}
          value={user.name}
        ></input>
        <input
          type="text"
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,

              // email: "gudu",
            });
          }}
          value={user.email}
        ></input>
        <button
          className="search-btn bg-gray-300 rounded-md p-1 "
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list container flex gap-4 flex-wrap mt-6 justify-center mx-auto border-2">
        {/* You have to write logic for NO restraunt fount here */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
