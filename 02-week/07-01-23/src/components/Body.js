import RestoCard from "./RestoCard.js";
import { RestoListDummy } from "../constants.js";

const Body = () => {
  return (
    <div className="resto-list">
      <RestoCard restodata={RestoListDummy[0]} />
      <RestoCard restodata={RestoListDummy[1]} />
      <RestoCard restodata={RestoListDummy[2]} />
      <RestoCard restodata={RestoListDummy[3]} />
      <RestoCard restodata={RestoListDummy[4]} />

      {/***
       * With Dummy Data and by pass prop
       * restodata={RestoListDummy[0]}
       */}
    </div>
  );
};

export default Body;
