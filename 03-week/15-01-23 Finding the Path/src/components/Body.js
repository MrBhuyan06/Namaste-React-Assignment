//Config Driven UI
import RestaurentCard from "./RestaurentCard.js";
import { restrautList } from "../utils/mockdata.js";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LIST_RES } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";

function SerchRestaurent(search, listofRes) {
  const searchRes = listofRes.filter((res) => {
    return res.data.name.toLowerCase().includes(search.toLowerCase());
  });
  return searchRes;
}

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const { resId } = useParams();
  const [listofRestaurents, setListOfRestaurent] = useState([]);
  const [filerlistofRestaurents, setFilterListOfRestaurent] = useState([]);
  // const [fileravglistofRestaurents, setFilterAvgListOfRestaurent] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.952083&lng=77.7079919&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurent(json?.data.cards[2]?.data?.data?.cards);
    setFilterListOfRestaurent(json?.data.cards[2]?.data?.data?.cards);
  }
  return listofRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search ">
        <input
          type="text"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const searchResData = SerchRestaurent(searchTxt, listofRestaurents);
            setFilterListOfRestaurent(searchResData);
          }}
        >
          search
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
              return res.data.avgRating > 4.5;
            });
            // console.log(listOfRestaurents);
            setFilterListOfRestaurent(filetrAvg);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container">
        {filerlistofRestaurents.length === 0 ? (
          <p>OOPS No Restaurent Found</p>
        ) : (
          filerlistofRestaurents.map((res, index) => {
            return (
              <Link key={res.data.id} to={`/restaurant/${res.data.id}`}>
                <RestaurentCard {...res.data} />
              </Link>
            );
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
