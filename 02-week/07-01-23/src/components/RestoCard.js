const RestoCard = ({ restodata }) => {
  //   console.log(prop);
  return (
    <div className="container">
      <div className="resto-card">
        <img src={restodata?.image} alt="" />
        <h2>{restodata?.name}</h2>
        <h3>{restodata?.cusines.join(",")}</h3>
        <h3>{`${restodata?.rating}`}</h3>
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
