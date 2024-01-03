import { useContext, useState } from "react";
import resLogo from "../images/resLogo.png";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton, LogoutButton, Profile } from "./Auth";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("Header renders");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  const { isAuthenticated } = useAuth0();

  //Subscribing to store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header flex bg-white justify-between shadow-lg z-10">
      <div className="logo-container ">
        <NavLink to="/">
          <img
            className="hover:scale-105 transition-all duration-200 ease-in w-48 h-24 object-cover"
            src={resLogo}
          />
        </NavLink>
      </div>
      <div className="flex items-center ">
        <ul className="flex justify-between items-center">
          <li className="px-4 font-serif text-lg text-light-gray hover:text-pink-tone ">
            <NavLink to="/">Home</NavLink>{" "}
          </li>
          <li className="px-4 font-serif text-lg text-light-gray hover:text-pink-tone">
            <NavLink to="/aboutUs">About</NavLink>
          </li>
          <li className="px-4 font-serif text-lg text-light-gray hover:text-pink-tone">
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li className="px-4 font-serif text-lg text-light-gray hover:text-pink-tone">
            <NavLink to="/cart">
              <a href="#" role="button" class="relative flex">
                <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                <span class="absolute right-0 top-0 rounded-full bg-pink-tone w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                  {cartItems.length}
                </span>
              </a>
            </NavLink>
          </li>
          {isAuthenticated && (
            <li className="px-4 font-serif text-lg text-light-gray hover:text-pink-tone">
              (
              <>
                <Profile />
              </>
              )
            </li>
          )}
          <li className="px-4 font-serif text-lg text-light-gray">
            {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 font-serif text-lg text-light-gray hover:text-pink-tone">
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
