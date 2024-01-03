import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/redux/cartSlice";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatching an action
    dispatch(addItems(item));
    console.log("Got Clicked");
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between "
        >
          <div className="w-9/12 ">
            <div className=" py-2">
              <span>{item?.card?.info?.name}</span>
              <br></br>
              <span>
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs m-3">{item?.card?.info?.description}</p>
          </div>

          <div className="w-3/12">
            <div className="absolute ">
              <button
                className="p-2 bg-white mx-14 my-[85px] rounded-lg text-green-500 shadow-lg m-auto"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} alt="dishImg"></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
