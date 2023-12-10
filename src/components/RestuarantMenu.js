import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";

const RestuarantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestuarantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h2>{name}</h2>
      <h2>Menu</h2>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestuarantMenu;
