import { useParams } from "react-router-dom";

const RestuarentMenu = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <div>
        <h1>ResturentId:{id}</h1>
        <h2>Go Foodition</h2>
      </div>
    </div>
  );
};
export default RestuarentMenu;
