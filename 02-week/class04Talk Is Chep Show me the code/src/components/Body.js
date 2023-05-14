import RestoCard from "./RestoCard.js";
import { RestoListDummy, restrautList } from "../constants.js";

const Body = () => {
  return (
    <div className="resto-list">
      {restrautList.map((resto) => {
        return <RestoCard {...resto.data} />;
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
  );
};

export default Body;
