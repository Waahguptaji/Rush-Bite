import { Selector, useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearCart, removeItems } from "../utils/redux/cartSlice";
import { IoTrashBin } from "react-icons/io5";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const itemTotal = useSelector((store) => store.cart.totalPrice);
  const resInfo = useSelector((store) => store.restuarant.restuarantInfo);
  // console.log(resInfo);

  const platformFee = 5;
  const deliveryFees = resInfo?.cards[0]?.card?.card?.info?.feeDetails?.fees
    ? resInfo?.cards[0]?.card?.card?.info?.feeDetails?.fees[0]?.fee / 100
    : 11;
  const gst = ((itemTotal / 100) * 5) / 100;
  const totalToPay = itemTotal / 100 + deliveryFees + platformFee + gst;

  const handleClearItem = () => {
    //dispatching an action
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    //dispatching an action
    dispatch(removeItems(item));
  };

  return (
    <div className="text-center bg-mid-pink  px-4 py-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-orange-600 mb-4">My Cart</h1>
      <div className="mb-3">
        <button
          className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleClearItem}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 ? (
        <h1 className="text-center m-5 text-3xl">Cart is Empty</h1>
      ) : (
        <div className="flex flex-col w-1/2 mx-auto bg-white text-sm font-normal">
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
                  {/* {console.log(item)} */}
                  <IoTrashBin
                    className="text-xl w-6 h-6 m-1 cursor-pointer hover:scale-110"
                    onClick={() => handleRemoveItem(item)}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="text-left flex flex-col font-light text-gray-500 m-4 border-t border-gray-200 p-4 ">
            <h1 className="text-xl font-medium text-gray-900 mb-2">
              Bill Details
            </h1>
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-500">Item Total</p>
              <span>₹{itemTotal / 100}</span>
            </div>
            <p className="flex justify-between">
              Delivery Fees
              <span>₹{deliveryFees}</span>{" "}
            </p>
            <hr />
            <p className="flex justify-between">
              Platform fee <span class="line-through">₹{platformFee}</span>
            </p>
            <p className="flex justify-between">
              GST and Restaurant Charges <span>₹{gst.toFixed(2)}</span>
            </p>
            <hr className="" />
            <h2 className="flex justify-between font-bold text-black text-xl mb-4">
              To Pay <span>₹{totalToPay.toFixed(2)}</span>
            </h2>
          </div>
          <div className="mb-4">
            <button className=" bg-green-500 hover:bg-green-700 hover:shadow-2xl text-white font-bold py-2 px-4 rounded-sm shadow-md ">
              Proceed to Pay
            </button>
          </div>
        </div>
      )}

      <div></div>
    </div>
  );
};

export default Cart;
