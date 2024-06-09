import React, { useEffect } from "react";
import { useState } from "react";
import SearchItemCard from "./SearchItemCard";
import SearchList from "./SearchList";
import { FaSearch } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const SearchBar = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    const getData = setTimeout(() => {
      fetchData();
    }, 500);
    if (!searchText) {
      setSearchResults([]);
    }
    return () => clearTimeout(getData);
  }, [searchText]);

  const fetchData = async () => {
    const SEARCH_SUGGESTIONS = `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/search/suggest?lat=22.6812247&lng=75.8654247&str=${searchText}&trackingId=undefined`;
    const data = await fetch(SEARCH_SUGGESTIONS);
    const json = await data.json();
    setSearchResults(json?.data?.suggestions);
  };

  const handleSearch = (event) => {
    setsearchText(event.target.value);
  };

  return (
    <div className=" flex  items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full p-8">
        <div className="flex items-center justify-center w-full sm:w-7/12">
          <input
            type="text"
            className="w-full p-[10px] outline-none border border-solid border-gray-400  "
            placeholder="Search for restaurants and foods"
            value={searchText}
            onChange={handleSearch}
          />
          {searchText === "" ? (
            <FaSearch className=" text-gray-600 inline text-2xl font-extralight relative right-12 cursor-pointer " />
          ) : (
            <RxCross1
              className=" text-gray-600 inline text-2xl relative right-12 bottom-1 cursor-pointer "
              onClick={() => setsearchText("")}
            />
          )}
        </div>
        <SearchList data={searchResults} />
      </div>
    </div>
  );
};

export default SearchBar;
