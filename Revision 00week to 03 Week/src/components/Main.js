import { useEffect, useState } from "react";
import RestuarentCard from "./RestuarentCard.js";
import Shimmer from "./Shimmer.js";
import { IMG_CDN_URL } from "../contains.js";

function getSearchRestuarent(searchText, listofResturent) {
  const filterSearchData = listofResturent.filter((restuarent) => {
    return restuarent?.data?.name
      ?.toLowerCase()
      ?.includes(searchText.toLowerCase());
  });
  console.log(filterSearchData);
  return filterSearchData;
}

const Main = () => {
  const [search, setSearch] = useState("");
  const [allRestuarent, setAllRestuarent] = useState([]);
  const [fillterRestuarent, setfillterRestuarent] = useState([]);

  // Api call to get all the data
  useEffect(() => {
    getRestuarent();
  }, []);

  async function getRestuarent() {
    const data = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    // console.log(data);
    const restuarentData = await data.json();
    // console.log(restuarentData);
    setAllRestuarent(restuarentData?.data?.cards[2]?.data?.data?.cards);
    setfillterRestuarent(restuarentData?.data?.cards[2]?.data?.data?.cards);
  }
  // console.log("render");

  // if (fillterRestuarent.length === 0) {
  //   return null;
  // }

  return allRestuarent.length == 0 ? (
    <Shimmer />
  ) : (
    <section className="text-gray-600 bg-red-100 body-font">
      <div className="container  px-5 py-24 mx-auto">
        <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
          <input
            onChange={(e) => {
              console.log(e.target.value);
              setSearch(e.target.value);
            }}
            // type="text"
            id="footer-field"
            name="footer-field"
            class="w-5/5 lg:w-1/5 mb-5 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <button
            type="button"
            class="cursor-pointer ... text-lg bg-blue-400 px-5 rounded py-2 ml-2"
            onClick={() => {
              const data = getSearchRestuarent(search, allRestuarent);
              console.log("hellldata", data);
              setfillterRestuarent(data);
            }}
          >
            search
          </button>
        </div>
        <div className="flex w-full flex-wrap  ">
          {fillterRestuarent.length === 0 ? (
            <h1 className="text-lg color-red-700">No resturent Found</h1>
          ) : (
            fillterRestuarent.map((rest) => {
              return <RestuarentCard {...rest.data} key={rest.data.id} />;
            })
          )}
        </div>
      </div>
    </section>
  );
};
export default Main;
