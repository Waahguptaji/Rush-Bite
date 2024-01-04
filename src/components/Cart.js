import { Selector, useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearCart, removeItems } from "../utils/redux/cartSlice";
import { IoTrashBin } from "react-icons/io5";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const itemTotal = useSelector((store) => store.cart.totalPrice);

  const dispatch = useDispatch();

  const handleClearItem = () => {
    //dispatching an action
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    //dispatching an action
    dispatch(removeItems(item));
  };

  return (
    <div className="text-center m-4 p-4 bg-mid-pink">
      <h1 className="text-2xl font-bold">Cart</h1>

      <button
        className="p-2 m-2 bg-green-500 text-white rounded-lg"
        onClick={handleClearItem}
      >
        Clear Cart
      </button>

      {cartItems.length === 0 && (
        <h1 className="text-center m-5 text-3xl">Cart is Empty</h1>
      )}

      <div className="w-6/12 bg-white text-sm font-normal">
        {cartItems.map((item) => (
          <div key={item.card.info.id} className="p-2 m-2  text-left flex  ">
            <div className="w-2/12 mr-2">
              <img
                className="w-20"
                src={CDN_URL + item.card.info.imageId}
                alt="dishImg"
              ></img>
            </div>
            <div className="w-9/12 flex items-center justify-between ">
              <div className=" py-2">
                <span>{item?.card?.info?.name}</span>
              </div>
              <div className="flex items-center">
                <div className="mr-8">
                  ₹
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </div>
                <IoTrashBin
                  className="text-xl w-6 h-6 m-1 cursor-pointer hover:scale-110"
                  onClick={() => handleRemoveItem(item)}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="text-left">
          <h1>Bill Details</h1>
          <h2>Item Total ₹{itemTotal / 100} </h2>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Cart;
