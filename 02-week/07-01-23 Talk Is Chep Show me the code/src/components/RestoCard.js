const RestoCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
}) => {
  //   console.log(prop);
  //   const { name, cloudinaryImageId, cuisines, lastMileTravelString } =
  //     restodata.data;

  return (
    <div className="container">
      <div className="resto-card">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
          alt="logo"
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <h3>{`${lastMileTravelString}`}min</h3>
      </div>
    </div>
  );
};

export default RestoCard;

/**
 * By dummay Data By calling prop
 * <h3>{prop.restodata?.cusines.join(",")}</h3>
 *  <div className="resto-card">
        <img src={restodata?.image} alt="" />
        <h2>{restodata?.name}</h2>
        <h3>{restodata?.cusines.join(",")}</h3>
        <h3>{`${restodata?.rating}`}</h3>
      </div>
 * destructure the prop on the fly
 */
