import resList from "../utils/resData";
import RestuarantCard from "./RestuarantCard";
import { useState } from "react";

const Body = () => {
  //Local State Variable - Super powerful Variable
  const [listofRestuarants, setlistofRestuarants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filterList = listofRestuarants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistofRestuarants(filterList);
          }}
        >
          Top-Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listofRestuarants.map(
          (
            restaurant //Map function to iterate over the data dynamically
          ) => (
            <RestuarantCard resData={restaurant} />
          )
        )}
      </div>
    </div>
  );
};
export default Body;
