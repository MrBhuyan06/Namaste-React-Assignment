import { useState } from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";

const Section = ({ tittle, description, setIsvisible, isvisible }) => {
  console.log(isvisible);
  console.log(setIsvisible);

  return (
    <div className="border border-black p-2 m-2">
      <h2>{tittle}</h2>

      {isvisible ? (
        <>
          <button
            onClick={() => {
              setIsvisible(false);
            }}
            className="cursor-pointer border p-1 m-t"
          >
            Hide
          </button>
          <h3>{description}</h3>
        </>
      ) : (
        <button
          onClick={() => {
            setIsvisible(true);
          }}
          className="cursor-pointer border p-1 m-t"
        >
          Show
        </button>
      )}

      {/* {isvisible && <h3>{description}</h3>} */}
    </div>
  );
};

const InstaMart = () => {
  const { user } = useContext(UserContext);
  const [sectionConfig, setSectionConfig] = useState({
    instamart: false,
    product: false,
    team: false,
  });
  return (
    <div>
      <h3>{user.name}</h3>
      <h3>{user.email}</h3>
      <h1 className="text-2xl font-bold">Instal Mart</h1>
      <Section
        tittle={"Instmart Section"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isvisible={sectionConfig.instamart}
        setIsvisible={() => {
          setSectionConfig({
            instamart: true,
            product: false,
            team: false,
          });
        }}
      />
      <Section
        tittle={"Product Section"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isvisible={sectionConfig.product}
        setIsvisible={() => {
          setSectionConfig({
            instamart: false,
            product: true,
            team: false,
          });
        }}
      />
      <Section
        tittle={"Team Section"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isvisible={sectionConfig.team}
        setIsvisible={() => {
          setSectionConfig({
            instamart: false,
            product: false,
            team: true,
          });
        }}
      />
    </div>
  );
};
export default InstaMart;
