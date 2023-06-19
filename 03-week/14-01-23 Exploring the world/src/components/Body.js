//Config Driven UI
import RestaurentCard from "./RestaurentCard.js";
import { restrautList } from "../utils/mockdata.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";

///fliterRestaurent
function filterRestaurent(search, listOfRestaurent) {
  const fliterRes = listOfRestaurent.filter((res) => {
    return res?.data?.name?.toLowerCase()?.includes(search.toLowerCase());
  });
  return fliterRes;
}

const Body = () => {
  //State Variable Super Powerful Variable
  const [listofRestaurents, setListOfRestaurent] = useState([]);
  const [listofFilterRestaurents, setListOfFilterRestaurent] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  console.log("Render");
  useEffect(() => {
    getRestaurent();
  }, []);
  async function getRestaurent() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.281612&lng=85.88029879999999&page_type=DESKTOP_WEB_LISTING"
    );
    const jsondata = await data.json();
    setListOfRestaurent(jsondata?.data?.cards[2]?.data?.data?.cards);
    setListOfFilterRestaurent(jsondata?.data?.cards[2]?.data?.data?.cards);
  }
  return listofRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search ">
        <input
          type="text"
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          onClick={() => {
            //fliter Method Call
            const data = filterRestaurent(searchTxt, listofRestaurents);
            console.log("fliterRes", data);
            setListOfFilterRestaurent(data);
          }}
        >
          Search
        </button>
        <button
          onDoubleClick={() => {
            setListOfRestaurent(restrautList);
          }}
          className="filter-btn"
          onClick={() => {
            console.log("btn click");
            // Filter logic here
            const filetrAvg = listofRestaurents.filter((res) => {
              return res.data.avgRating > 4;
            });
            // console.log(listOfRestaurents);
            setListOfRestaurent(filetrAvg);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container">
        {listofFilterRestaurents.length === 0 ? (
          <h1>No Restaurent Found</h1>
        ) : (
          listofFilterRestaurents.map((res, index) => {
            return <RestaurentCard {...res.data} key={res.data.id} />;
          })
        )}
        {/* <RestaurentCard resData={restrautList[0]} />
          <RestaurentCard resData={restrautList[1]} />
          <RestaurentCard resData={restrautList[2]} />
          <RestaurentCard resData={restrautList[3]} />
          <RestaurentCard resData={restrautList[4]} />
          <RestaurentCard resData={restrautList[5]} /> */}
        {/* <RestaurentCard resData={restrautList[6]} /> */}
        {/* <RestaurentCard resData={restrautList[7]} /> */}
      </div>
    </div>
  );
};
export default Body;
