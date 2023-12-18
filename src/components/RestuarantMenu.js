import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import RestuarantCategory from "./RestuarantCategory";
import { useState } from "react";

const RestuarantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestuarantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);
  const dummy = "Dummy Data";

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, location } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="text-center">
      <h2 className="font-bold my-2 text-2xl">{name}</h2>
      <p className=" font-extralight">{cuisines.join(", ")}</p>
      <p>{location}</p>
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
