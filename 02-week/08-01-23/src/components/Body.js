import RestoCard from "./RestoCard.js";
import { RestoListDummy, restrautList, fliterData } from "../constants.js";
import { useState } from "react";

const Body = () => {
  // const value = "kfc";
  // we need to create a local state variable in react interm to sync to the ui
  const [seacrhTxt, setSearchTxt] = useState();
  const [resto, setResto] = useState(restrautList);

  return (
    <>
      <div className="search-list">
        <input
          type="text"
          placeholder="search"
          value={seacrhTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            setResto(restrautList);
            const data = fliterData(seacrhTxt, resto);
            seacrhTxt ? setResto(data) : setResto(restrautList);

            console.log(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resto-list">
        {resto.map((res) => {
          return <RestoCard {...res.data} key={res.data.id} />;
        })}
        {/* <RestoCard {...restrautList[0].data} />
      <RestoCard {...restrautList[1].data} />
      <RestoCard {...restrautList[2].data} />
      <RestoCard {...restrautList[3].data} />
      <RestoCard {...restrautList[4].data} />
      <RestoCard {...restrautList[5].data} /> */}

        {/***
         * With Dummy Data and by pass prop
         * restodata={RestoListDummy[0]}
         *
         *  <RestoCard restodata={restrautList[4]} />
         */}
      </div>
    </>
  );
};

export default Body;
