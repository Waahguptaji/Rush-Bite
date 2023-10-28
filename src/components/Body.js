import RestuarantCard from "./RestuarantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local State Variable - Super powerful Variable
  const [listofRestuarants, setlistofRestuarants] = useState([]);

  const [filterRestuarants, setfilterRestuarants] = useState([]);

  const [searchText, setsearchText] = useState("");

  //Whenever the state variable updates, react triggers a reconcilation cycle(re-renders the component.
  console.log("body Renders");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6461695&lng=75.8163521&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    setlistofRestuarants(
      //optional Chaining
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setfilterRestuarants(
      //optional Chaining
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional Rendering
  if (listofRestuarants?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              //filter the resturant cards and update the UI
              const filteredRestuarant = listofRestuarants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterRestuarants(filteredRestuarant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filterList = listofRestuarants.filter(
              (res) => res.info.avgRating > 4
            );
            setfilterRestuarants(filterList);
          }}
        >
          Top-Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterRestuarants.map(
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
