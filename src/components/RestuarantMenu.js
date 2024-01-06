import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import RestuarantCategory from "./RestuarantCategory";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  setRestuarantId,
  setRestuarantInfo,
} from "../utils/redux/restuarantSlice";
const RestuarantMenu = () => {
  const dispatch = useDispatch();

  const { resId } = useParams();

  const resInfo = useRestuarantMenu(resId);
  console.log(resInfo);

  const [showIndex, setShowIndex] = useState(null);
  const dummy = "Dummy Data";

  dispatch(setRestuarantId(resId));
  dispatch(setRestuarantInfo(resInfo));

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    locality,
    avgRatingString,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.["info"];

  const { message } = resInfo?.cards[0]?.card?.card?.["info"]?.feeDetails;
  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
  // // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div>
      <div className=" flex w-6/12 mx-auto my-4 justify-between">
        <div className="flex flex-col self-start">
          <h2 className="font-semibold mt-5 mb-1 text-2xl">{name}</h2>
          <p className=" mb-1 text-gray-600 text-xs font-extralight">
            {cuisines.join(", ")}
          </p>
          <p className="  text-gray-600 text-xs font-extralight">{locality}</p>
          <p className=" flex items-center my-4 text-gray-600 text-sm font-extralight">
            <span>
              <IoIosBicycle />
            </span>
            <span className="mx-2">{message}</span>
          </p>
        </div>
        <div className="flex flex-col justify-center ">
          <button className="border  rounded-md shadow-sm ">
            <p className="flex items-center justify-center text-green-600">
              <span>
                <FaStar />
              </span>
              <span className="mx-2 my-2"> {avgRatingString} </span>
            </p>
            <hr className="w-1/2 mx-auto " />
            <p className="  text-gray-600 text-xs font-light mx-2 my-2">
              {totalRatingsString}
            </p>
          </button>
        </div>
      </div>
      <hr className=" w-6/12 mx-auto border-dashed" />

      {/* {Categories accordions} */}
      {categories.map((category, index) => (
        //Controlled Component
        <RestuarantCategory
          key={category?.card?.card.name}
          data={category?.card?.card}
          showIndex={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestuarantMenu;
