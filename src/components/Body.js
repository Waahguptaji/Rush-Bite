import RestuarantCard from "./RestuarantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import InfiniteScroll from "react-infinite-scroll-component";
import { CDN_URL } from "../utils/constants";

const Body = () => {
  //Local State Variable - Super powerful Variable
  const [listofRestuarants, setlistofRestuarants] = useState([]);
  const [filterRestuarants, setfilterRestuarants] = useState([]);

  const [searchText, setsearchText] = useState("");
  const [foodItem, setFoodItem] = useState([]);
  const onlineStatus = useOnlineStatus();

  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1); // Initial page

  useEffect(() => {
    fetchData();
  }, []); //when page changes it loads more

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D22.6461695%26lng%3D75.8163521%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const foodItemsInfo =
      json?.data?.cards[0]?.card?.card?.imageGridCards?.info;

    console.log(json?.data);
    const restaurantsData =
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setFoodItem(foodItemsInfo);
    if (!restaurantsData || restaurantsData.length === 0) {
      setHasMore(false); // No more data available
      return;
    }

    setlistofRestuarants([...listofRestuarants, ...restaurantsData]); //it is taking each new array restuarant data on each fetch and combining it into new one array listofResturant
    setfilterRestuarants([...filterRestuarants, ...restaurantsData]);
    setPage(page + 1); // Increment page number
  };

  const fetchMoreData = async () => {
    fetchData();
  };

  if (onlineStatus === false) {
    return <h1>You Are Offline Sorry. Please Check Your Connection!</h1>;
  }

  //Conditional Rendering
  if (listofRestuarants?.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className=" sm:w-9/12 sm:mx-auto ">
        <div className="p-4">
          <div className="mb-4">
            <h2 className="font-extrabold text-2xl ">
              Sahil, What's on your mind?
            </h2>
          </div>
          <div className=" sm:mx-[-16px] overflow-x-scroll overflow-y-hidden no-scrollbar">
            <div className=" grid row-span-2 sm:flex sm:pt-0 ">
              {foodItem.map((item, index) => (
                <div className="pr-6 first:pl-4 w-full">
                  <img
                    className=" w-28 sm:w-[150px] max-w-xl"
                    key={item.id}
                    src={CDN_URL + item.imageId}
                  ></img>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center  ">
        <div className="m-4 p-4">
          <input
            type="text"
            className=" border border-solid border-black rounded-md "
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-1 bg-pink-tone m-4 rounded-lg "
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
        <div>
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
        </div>
      </div> */}
      <hr className="sm:w-9/12 sm:mx-auto" />
      {/* InfiniteScroll using react-component-infinite-scroll */}
      <InfiniteScroll
        dataLength={filterRestuarants.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Shimmer />} // Loader component while fetching data
        endMessage={<p>No more restaurants to show.</p>} // Message when no more data available
      >
        <div className=" sm:w-9/12 sm:mx-auto ">
          <div className="grid grid-cols-4 items-start gap-4 my-4 mx-2 ease-in-out">
            {filterRestuarants.map(
              (
                restaurant //Map function to iterate over the data dynamically
              ) => (
                <Link
                  key={restaurant.info.id}
                  to={"/restuarants/" + restaurant.info.id}
                >
                  <RestuarantCard resData={restaurant} />
                </Link>
              )
            )}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
export default Body;
