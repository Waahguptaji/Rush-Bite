import React from "react";
import useRestaurants from "../utils/useRestuarants";
import { useState } from "react";

const SearchBar = () => {
  const allRestaurants = useRestaurants();
  console.log(allRestaurants);
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(allRestaurants);
  const [searchText, setsearchText] = useState();

  const handleSearch = (event) => {
    setsearchText(event.target.value);
  };

  return (
    <div className=" flex items-center justify-center">
      <div className="flex items-center justify-center w-full p-8">
        <input
          type="text"
          className="w-7/12 p-[10px] outline-none border border-solid border-gray-400  "
          placeholder="Search for restaurants and foods"
          value={searchText}
          onChange={handleSearch}
        ></input>
        {/* {listofRestuarants.filter((res) =>
          res.info.name.toLowerCase().includes(searchText.toLowerCase())
        )} */}
      </div>
      {/* <div>
          <button
            className="px-4 py-1 bg-pink-tone m-4 rounded-md  "
            onClick={() => {
              let filterList = listofRestuarants.filter(
                (res) => res.info.avgRating > 4
              );
              setfilterRestuarants(filterList);
            }}
          >
            Top-Rated Restaurant
          </button>
        </div> */}
    </div>
  );
};

export default SearchBar;
